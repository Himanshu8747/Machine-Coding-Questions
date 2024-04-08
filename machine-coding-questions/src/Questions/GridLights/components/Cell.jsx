/* eslint-disable react/prop-types */
const Cell = ({filled,onClick,isDisabled,lable}) => {
  return (
    <button type="button" disabled={isDisabled} onClick={onClick} className={filled ? "cell cell-activated":"cell"}>
        {lable}
    </button>
  )
}

export default Cell