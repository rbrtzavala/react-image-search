import ImageShow from "./ImageShow.js";

function ImageList({ images }) {
  const renderedImages = images.map((image) => {
    return <ImageShow image={image} key={image.id} />
  })

  return (
    <div>
      <h2>ImageList</h2>
      {renderedImages}
    </div>
  )
}

export default ImageList;