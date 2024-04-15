import React from "react";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import './ModalContainer.css';

const ModalContainer = ({question, answer}) => {
    const [modal, setModal] = React.useState(false);

    return (
        <div className='question'>
            <Button setModal={setModal} modal={modal} text={question} />
            <Modal modal={modal} text={answer}/>
            <hr/>
        </div>
    );
}
ModalContainer.propTypes = {
    question: String.isRequired,
    answer: String.isRequired
}

export default ModalContainer;