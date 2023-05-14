import './App.css';
import UseModal from './Components/UseModal';
import UseViewer from './Components/UseViewer';

function App() {
  return (
    <div>
      <UseModal nombreBoton="Modal view">
        <UseViewer folderName='b'/>
      </UseModal>

    </div>
  );
}

export default App;
