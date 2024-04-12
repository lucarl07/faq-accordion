import './Modal.css'

const Modal = ({text, modal}) => {
    if (modal === true) {
        return (
            <p className='answer'>{text}</p>
        );
    }

    return null;
}
Modal.propTypes = {
    text: String.isRequired,
    modal: Boolean.isRequired
}

export default Modal