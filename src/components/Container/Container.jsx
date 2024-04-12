import './Container.css'

const Container = ({children}) => {
    return (
        <section className="container">
            {children}
        </section>
    );
}
Container.propTypes = {
    children: HTMLElement.isRequired
}

export default Container;