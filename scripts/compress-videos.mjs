import { execFileSync } from 'node:child_process'
import { existsSync, mkdirSync, renameSync, statSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import ffmpeg from '@ffmpeg-installer/ffmpeg'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const sourceDir = join(root, 'media-source', 'videos')
const outputDir = join(root, 'public', 'media', 'videos')

mkdirSync(sourceDir, { recursive: true })
mkdirSync(outputDir, { recursive: true })

const jobs = [
  { input: 'message.mp4', output: 'message.web.mp4', crf: '28' },
  { input: 'practice.mp4', output: 'practice.web.mp4', crf: '28' },
  { input: 'students.mp4', output: 'students.web.mp4', crf: '28' },
]

function mb(bytes) {
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`
}

function resolveInput(name) {
  const inPublic = join(outputDir, name)
  const inSource = join(sourceDir, name)
  if (existsSync(inPublic)) return inPublic
  if (existsSync(inSource)) return inSource
  return null
}

for (const job of jobs) {
  const inputPath = resolveInput(job.input)
  const outputPath = join(outputDir, job.output)

  if (!inputPath) {
    console.log(`Skip ${job.input} (not found in public/ or media-source/)`)
    continue
  }

  console.log(`Compressing ${job.input} -> ${job.output} ...`)

  execFileSync(
    ffmpeg.path,
    [
      '-y',
      '-i',
      inputPath,
      '-c:v',
      'libx264',
      '-crf',
      job.crf,
      '-preset',
      'medium',
      '-vf',
      "scale='min(1280,iw)':-2",
      '-c:a',
      'aac',
      '-b:a',
      '96k',
      '-movflags',
      '+faststart',
      outputPath,
    ],
    { stdio: 'inherit' },
  )

  const inputSize = statSync(inputPath).size
  const outputSize = statSync(outputPath).size
  console.log(`${job.output}: ${mb(inputSize)} -> ${mb(outputSize)}`)

  if (inputPath.startsWith(outputDir)) {
    const archivePath = join(sourceDir, job.input)
    renameSync(inputPath, archivePath)
    console.log(`Archived original -> media-source/videos/${job.input}\n`)
  } else {
    console.log('')
  }
}
