var sharp = require('sharp')

strpath = '/Users/TimLiu/Desktop/Screen Shot 2014-12-11 at 11.00.08 PM.png'

sharp(strpath)
  .rotate(180)
  .resize(300)
  .flatten()
  .background('#ff6600')
  .sharpen()
  .withMetadata()
  .quality(90)
  .webp()
  .toBuffer()
  .then(function(outputBuffer) {
    // outputBuffer contains upside down, 300px wide, alpha channel flattened
    // onto orange background, sharpened, with metadata, 90% quality WebP image
    // data
  });