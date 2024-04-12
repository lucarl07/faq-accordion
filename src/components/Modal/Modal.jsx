import './Modal.css'

const Modal = ({texto}) => {
    return (
        <p>{texto}</p>
    )
}
Modal.propTypes = {
    texto: String.isRequired
}

export default Modal