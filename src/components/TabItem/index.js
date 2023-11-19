import './index.css'

const TabItem = props => {
  const {details, changeState, isActive} = props
  const {id, buttonText} = details
  const classEl = isActive ? 'activeEl' : 'notActive'

  const onClicked = () => {
    changeState(id)
  }

  return (
    <li className="button-list">
      <button type="button" className={classEl} onClick={onClicked}>
        {buttonText}
      </button>
    </li>
  )
}

export default TabItem
