import './Container.css'

const Container = ({children}) => {
    return (
        <section className="container">{children}</section>
    );
}
Container.propTypes = {
    children: String.isRequired
}

export default Container;