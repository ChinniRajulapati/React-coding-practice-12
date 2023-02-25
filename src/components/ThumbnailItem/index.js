import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, isActive, setActiveThumbnailId} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails
  const btnClassName = isActive ? `thumbnail active` : `thumbnail`

  const onClickButton = () => {
    setActiveThumbnailId(id)
  }

  return (
    <li className="list-container">
      <button type="button" className="thumbnail-button">
        <img
          className={btnClassName}
          src={thumbnailUrl}
          alt={thumbnailAltText}
          onClick={onClickButton}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
