import './PageTitle.css'

const PageTitle = ({src, alt, title}) => {
    return (
        <div className='title'>
            <img src={src} alt={alt} />
            <h1>{title}</h1>
        </div>
    );
}
PageTitle.propTypes = {
    src: String.isRequired,
    alt: String.isRequired,
    title: String.isRequired
}

export default PageTitle;