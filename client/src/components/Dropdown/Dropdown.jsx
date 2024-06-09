import { useRef, useState } from "react";

/* eslint-disable react/prop-types */
function Dropdown(props) {

    const {handleDropdownItemClick, dropdownDisplay, isDropdownOpen, setIsDropdownOpen} = props


    const handleDropdownButtonClick = (e) => {
         setIsDropdownOpen(prev => !prev)
         e.preventDefault()
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
            <a onClick={handleDropdownItemClick} name="Phone" className="dropdown-item">
              {" "}
              Phone{" "}
            </a>
            <a onClick={handleDropdownItemClick} name="Microphone" className="dropdown-item">
              {" "}
              Microphone{" "}
            </a>
            <a onClick={handleDropdownItemClick} name="Games" className="dropdown-item">
              {" "}
              Games{" "}
            </a>
            <a onClick={handleDropdownItemClick} name="PowerSupply" className="dropdown-item">
              {" "}
              PowerSupply{" "}
            </a>
            <a onClick={handleDropdownItemClick} name="Printer" className="dropdown-item">
              {" "}
              Printer{" "}
            </a>
            <a onClick={handleDropdownItemClick} name="Cooling" className="dropdown-item">
              {" "}
              Cooling{" "}
            </a>
            <a onClick={handleDropdownItemClick} name="Cable" className="dropdown-item">
              {" "}
              Cable{" "}
            </a>
            <a onClick={handleDropdownItemClick} name="Camera" className="dropdown-item">
              {" "}
              Camera{" "}
            </a>
            <a onClick={handleDropdownItemClick} name="Appliances" className="dropdown-item">
              {" "}
              Appliances{" "}
            </a>
            <a onClick={handleDropdownItemClick} name="Tv" className="dropdown-item">
              {" "}
              Tv{" "}
            </a>
            <a onClick={handleDropdownItemClick} name="Music" className="dropdown-item">
              {" "}
              Music{" "}
            </a>
            <a onClick={handleDropdownItemClick} name="Extras" className="dropdown-item">
              {" "}
              Extras{" "}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dropdown;
