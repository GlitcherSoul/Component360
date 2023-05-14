import { useEffect, useState } from "react";
import { React360Viewer } from "react-360-product-viewer";

const UseViewer = ({folderName}) => {
    const [numImages, setNumImages] = useState(0);

    useEffect(() => {
        fetch(`./images360/${folderName}`)
          .then((response) => response.json())
          .then((data) => setNumImages(data.length))
          .catch((error) => console.log(error));
      }, [folderName]);
      useEffect()
      console.log(numImages)
  
  return (
    <div>
        {useEffect}
        <React360Viewer
            imagesBaseUrl={`./images360/${folderName}`}
            imageFilenamePrefix=''
            imagesCount={84}
            imagesFiletype="jpg"
            mouseDragSpeed={50}
            width={700}
            height={500}
        />
    </div>
  )
};

export default UseViewer;