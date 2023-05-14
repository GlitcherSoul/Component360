import "../Styles/Modal.css";

const Modal = ({setopenModal, children}) => {
  return (
    <div className="modal-overlay">
        <div className="modal-contenedor">
            {children}
            <button className="btn btn-outline-dark btn-outline border-0 position-absolute top-0 end-0"
                onClick={()=>{
                    setopenModal(false);
                }}>X</button>
        </div>
    </div>
  )
};

export default Modal;