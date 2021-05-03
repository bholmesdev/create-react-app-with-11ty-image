const Image = require('@11ty/eleventy-img')
const { watch, existsSync } = require('fs')
const { readdir } = require('fs/promises')
const { parse } = require('path')

const imageDir = './public/'
// all the image formats we're willing to optimize
const imageFormats = ['.jpg', '.png', '.jpeg']

async function optimizeImage(file) {
  const stats = await Image(imageDir + file, {
    widths: [600, 1000, 1400], // edit to your heart's content
    outputDir: imageDir + 'img',
    filenameFormat: (id, src, width, format) => {
      // make the filename something we can recognize.
      // in this case, it's just:
      // [original file name] - [image width] . [file format]
      return `${parse(file).name}-${width}.${format}`
    },
  })
  console.log(stats) // remove this if you don't want the logs
}

;(async () => {
  const files = await readdir(imageDir)
  for (const file of files) {
    const fileExtension = parse(file).ext.toLowerCase()
    if (imageFormats.includes(fileExtension)) {
      await optimizeImage(file)
    }
  }
})()

// in development, let's watch for any new image files in our assets directory
if (process.env.ENV === 'dev') {
  watch(imageDir, async (event, file) => {
    const fileExtension = parse(file).ext.toLowerCase()
    // the watcher fires for file deletion events too. We need to filter those out
    const fileWasNotDeleted = existsSync(imageDir + file)
    if (imageFormats.includes(fileExtension) && fileWasNotDeleted) {
      await optimizeImage(file)
    }
  })
}
