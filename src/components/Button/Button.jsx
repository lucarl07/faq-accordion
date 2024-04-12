import './Button.css'

const Button = ({nome}) => {
    return (
        <button>{nome}</button>
    );
}
Button.propTypes = {
    nome: String.isRequired
}

export default Button;