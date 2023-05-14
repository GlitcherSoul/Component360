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
      useEffect()                       //y esto es lo q me pedite que agregara pero hizo q dejarad e funcionar...
      console.log(numImages)
  
  return (
    <div>
        {useEffect}
        <React360Viewer
            imagesBaseUrl={`./images360/${folderName}`}
            imageFilenamePrefix=''
            imagesCount={84}      //Aqui debe ir el numImages, pero en cunato lo cambio hay error
            imagesFiletype="jpg"
            mouseDragSpeed={50}
            width={700}
            height={500}
        />
    </div>
  )
};

export default UseViewer;
