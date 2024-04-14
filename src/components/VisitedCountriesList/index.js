import './index.css'

const VisitedCountriesList = props => {
  const {visitedCountryDetails, onClickRemoveBtn} = props
  const {id, imageUrl, name} = visitedCountryDetails

  const onClickButton = () => {
    onClickRemoveBtn(id)
  }

  return (
    <li className="visited-list">
      <img src={imageUrl} alt="thumbnail" className="image" />
      <div className="country-container">
        <p className="country-name">{name}</p>
        <button className="remove-btn" onClick={onClickButton} type="button">
          Remove
        </button>
      </div>
    </li>
  )
}
export default VisitedCountriesList
