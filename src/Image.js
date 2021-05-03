// consider using TypeScript for checking all these props!
const Image = ({ fileName, sizes, ...imageProps }) => (
  <picture>
    <source
      type="image/webp"
      srcset={`/img/${fileName}-600.webp 600w, /img/${fileName}-1000.webp 1000w, /img/${fileName}-1400.webp 1400w`}
      sizes={sizes}
    />
    <source
      type="image/jpeg"
      srcset={`/img/${fileName}-600.jpeg 600w, /img/${fileName}-1000.jpeg 1000w, /img/${fileName}-1400.jpeg 1400w`}
      sizes={sizes}
    />
    <img src={`/img/${fileName}-300.jpeg`} {...imageProps} />
  </picture>
)

export default Image
