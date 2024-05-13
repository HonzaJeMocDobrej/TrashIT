/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

function Card(props) {

    const {icon, title} = props
    const navigate = useNavigate()

    const handleClick = () => {
      console.log('Banger')
      navigate('/products')
    }

  return (
    <>
        <div onClick={handleClick} className="cell ">
        <div className="box is-clickable is-unselectable pb-6 pt-7">
          <div className="block">
            <div className="title is-4 has-text-centered">{title}</div>
          </div>
          <div className="block is-flex is-justify-content-center ">
            <span className="icon is-large">
              <span className="material-symbols-outlined">
                {icon}
              </span>
            </span>
          </div>
          </div>
      </div>
    </>
  )
}

export default Card