import { useState } from "react";
import Modal from "./Modal";


const UseModal = (props) => {
    const [modalOpen, setModalOpen] = useState(false)

  return (
    <div>
        <button className="btn btn-dark border-0"
            onClick={()=>{
                setModalOpen(true);
            }}>{props.nombreBoton}
        </button>
        {modalOpen && (
            <Modal setopenModal={setModalOpen}>
                <div>{props.children}</div>
            </Modal>
        )}
    </div>
  )
};

export default UseModal;