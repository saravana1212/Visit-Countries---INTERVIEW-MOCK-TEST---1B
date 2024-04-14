import './index.css'

const CountriesList = props => {
  const {countryDetails, onClickVisitBtn} = props
  const {id, name, isVisited} = countryDetails

  const onClickBtn = () => {
    onClickVisitBtn(id)
  }

  return (
    <li className="list-item">
      <p className="country-name">{name}</p>
      {isVisited ? (
        <p className="visited">Visited</p>
      ) : (
        <button className="visit-button" type="button" onClick={onClickBtn}>
          Visit
        </button>
      )}
    </li>
  )
}

export default CountriesList
