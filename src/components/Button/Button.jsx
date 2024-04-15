// Components and stylesheets:
import React from 'react';
import './Button.css'

// Images:
import iconMinus from '../../assets/images/icon-minus.svg';
import iconPlus from '../../assets/images/icon-plus.svg';

const Icon = ({modal}) => {
    const image = modal === true? iconMinus : iconPlus

    return (
        <img src={image} alt="Click to enable or disable" />
    );
}

const Button = ({setModal, modal, text}) => {
    return (
        <button className='btn' onClick={() => setModal(!modal)}>
            <span>{text}</span>
            <Icon modal={modal} />
        </button>
    );
}
Button.propTypes = {
    setModal: Function.isRequired,
    modal: Boolean.isRequired,
    text: String.isRequired
}

export default Button;