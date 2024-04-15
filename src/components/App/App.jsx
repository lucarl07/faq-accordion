// Components and stylesheets:
import ModalContainer from '../ModalContainer/ModalContainer';
import Container from '../Container/Container';
import PageTitle from '../PageTitle/PageTitle';
import './App.css'

// Images:
import iconStar from '../../assets/images/icon-star.svg'

const App = () => {
    const answers = [
        "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS and JavaScript. It's suitable for all levels and ideal for portfolio building.",
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque et unde pariatur voluptates odio! Et provident quo placeat inventore veniam odit nemo veritatis maxime similique! Impedit blanditiis delectus non qui.",
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi possimus, voluptate autem cum perferendis nostrum temporibus minima recusandae quaerat, molestias excepturi cumque sequi veritatis obcaecati quia cupiditate harum pariatur eius.",
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat eligendi accusantium quos dolorum corrupti eum quae laudantium delectus adipisci. Repudiandae ipsum obcaecati tempore hic natus repellat sapiente libero voluptatem labore?"
    ]

    return (
        <Container>
            <PageTitle title={'FAQs'} src={iconStar} alt={'Sparkling star'} />
            <div className='question-list'>
                <ModalContainer question={`What is Frontend Mentor, and how will it help me?`} answer={answers[0]}/>
                <ModalContainer question={`Is Frontend Mentor free?`} answer={answers[1]}/>
                <ModalContainer question={`Can i use Frontend Mentor projects in my portfolio?`} answer={answers[2]}/>
                <ModalContainer question={`How can I get help if I'm stuck on a challenge? `} answer={answers[3]}/>
            </div>
        </Container>
    );
}

export default App;