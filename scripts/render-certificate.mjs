import { writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { pdf } from 'pdf-to-img'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const pdfPath = join(root, 'public', 'media', 'certificate-sample.pdf')
const pngPath = join(root, 'public', 'media', 'certificate-sample.png')

const document = await pdf(pdfPath, { scale: 2 })

for await (const page of document) {
  writeFileSync(pngPath, page)
  console.log(`Saved ${pngPath}`)
  break
}
