import React from "react";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";

const ModalContainer = ({question, answer}) => {
    const [modal, setModal] = React.useState(false);

    return (
        <div className='question'>
            <Button setModal={setModal} modal={modal} text={question}/>
            <Modal modal={modal} text={answer}/>
        </div>
    );
}
ModalContainer.propTypes = {
    question: String.isRequired,
    answer: String.isRequired
}

export default ModalContainer;