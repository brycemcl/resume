import PDFMerger from 'pdf-merger-js'

export const mergePDFs = async (pages: Buffer[]) => {
  const merger = new PDFMerger()
  for (const page of pages) {
    merger.add(page)
  }
  return merger.saveAsBuffer()
}
