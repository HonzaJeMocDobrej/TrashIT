/* eslint-disable react/prop-types */

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import notFoundImg from '../../../public/imgNotFound.png'
import { imgChecker } from "../../functions/imgChecker"

function ProductCard(props) {

    const {name, description, imagePath, price, _id} = props
    const navigate = useNavigate()
    const [rightImg, setRightImg] = useState()

    const handleClickNav = () => {
      navigate(`/products/${_id}`)
    }

    useEffect(() => {
      console.log(_id)
      imgChecker(imagePath, notFoundImg, setRightImg)
    }, [])


    //zmenit imgChecker
  return (
    <>
        <div className="cell">
            <div className="box is-clickable" onClick={handleClickNav}>
              <div className="block is-flex is-align-items-center pl-5" style={{gap: '3rem'}}>
                <div className="block is-flex" style={{margin: 0, flex: 6, gap: '3rem'}}>
                  <figure className="image">
                    <img
                      src={imagePath}
                      alt=""
                    />
                  </figure>
                  <div className="block is-flex is-flex-direction-column is-justify-content-center" style={{margin: 0}}>
                    <p className="title is-5">{name}</p>
                    <p>
                      {description}
                    </p>
                  </div>
                </div>
                  <p className="title is-6" style={{flex: 1}}>{price} kč</p>
              </div>
            </div>
          </div>
    </>
  )
}

export default ProductCard