import Button from '../Button/Button';
import Container from '../Container/Container';
import Modal from '../Modal/Modal';
import './App.css'

const App = () => {
    return (
        <Container>
            <Button nome={"Clique aqui"}/>
            <Modal texto={"Esse é o texto do meu modal"}/>
        </Container>
    );
}

export default App;