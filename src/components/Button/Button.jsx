import './Button.css'

const Button = ({setModal, modal, text}) => {
    return (
        <button className='btn' onClick={() => setModal(!modal)}>
            {text}
        </button>
    );
}
Button.propTypes = {
    setModal: Function.isRequired,
    modal: Boolean.isRequired,
    text: String.isRequired
}

export default Button;