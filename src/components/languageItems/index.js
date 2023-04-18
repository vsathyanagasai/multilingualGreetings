import './index.css'

const LanguageItem = props => {
  const {languageList} = props
  const {imageUrl, imageAltText} = languageList

  return (
    <>
      <li className="list">
        <img className="image" src={imageUrl} alt={imageAltText} />
      </li>
      <li />
      <li />
    </>
  )
}
export default LanguageItem
