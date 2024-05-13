import { useRef, useState } from "react";

/* eslint-disable react/prop-types */
function Dropdown() {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [dropdownDisplay, setDropdownDisplay] = useState('Select a category')

    const handleDropdownButtonClick = (e) => {
         setIsDropdownOpen(prev => !prev)
         e.preventDefault()
    }

    const handleDropdownItemClick = (e) => {
        console.log(e.target.name)
        setDropdownDisplay(e.target.name)
        setIsDropdownOpen(false)
    }

  return (
    <>
      <div className="dropdown">
        <div className="dropdown-trigger">
          <button
            className="button"
            aria-haspopup="true"
            aria-controls="dropdown-menu3"
            onClick={handleDropdownButtonClick}
          >
            <span>{dropdownDisplay}</span>
            <span
                className="material-symbols-outlined icon is-left is-flex is-justify-content-center is-align-items-center"
                style={{
                  fontSize: "1.25rem",
                  color: "#a31bf1",
                }}
              >
                expand_more
              </span>
          </button>
        </div>
        <div style={{display: isDropdownOpen ? 'block' : 'none'}} className="dropdown-menu" id="dropdown-menu3" role="menu">
          <div className="dropdown-content">
            <a onClick={handleDropdownItemClick} name="Desktop" className="dropdown-item">
              {" "}
              Desktop{" "}
            </a>
            <a onClick={handleDropdownItemClick} name="Laptop" className="dropdown-item">
              {" "}
              Laptop{" "}
            </a>
            <a onClick={handleDropdownItemClick} name="Mouse" className="dropdown-item">
              {" "}
              Mouse{" "}
            </a>
            <a onClick={handleDropdownItemClick} name="Keyboard" className="dropdown-item">
              {" "}
              Keyboard{" "}
            </a>
            <a onClick={handleDropdownItemClick} name="Headphones" className="dropdown-item">
              {" "}
              Headphones{" "}
            </a>
            <a onClick={handleDropdownItemClick} name="Screen" className="dropdown-item">
              {" "}
              Screen{" "}
            </a>
            <a onClick={handleDropdownItemClick} name="Graphic Card" className="dropdown-item">
              {" "}
              Graphic Card{" "}
            </a>
            <a onClick={handleDropdownItemClick} name="CPU" className="dropdown-item">
              {" "}
              CPU{" "}
            </a>
            <a onClick={handleDropdownItemClick} name="Storage" className="dropdown-item">
              {" "}
              Storage{" "}
            </a>
            <a onClick={handleDropdownItemClick} name="Motherboard" className="dropdown-item">
              {" "}
              Motherboard{" "}
            </a> <a onClick={handleDropdownItemClick} name="RAM" className="dropdown-item">
              {" "}
              RAM{" "}
            </a> <a onClick={handleDropdownItemClick} name="Networking" className="dropdown-item">
              {" "}
              Networking{" "}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dropdown;
