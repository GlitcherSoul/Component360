import { useEffect, useState } from "react";
import { React360Viewer } from "react-360-product-viewer";

const UseViewer = ({folderName}) => {
  const [imagesCount, setImagesCount] = useState(0);

  useEffect(() => {
    async function fetchImagesCount() {
      const response = await fetch(`./images360/${folderName}`);
      const data = await response.json();
      const jpgFiles = data.files.filter(file => file.endsWith(".jpg"));
      setImagesCount(jpgFiles.length);
    }
    fetchImagesCount();
  }, [folderName]);

  return (
    <div>
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
