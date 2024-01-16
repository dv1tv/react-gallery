

const Image = ({photo}) => {
    return (
        <div>
            <img src={photo.url} alt={photo.title} />
        </div>
    )
}

export default Image;