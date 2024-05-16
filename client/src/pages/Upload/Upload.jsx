import { Link, useNavigate } from "react-router-dom";
import { postUpload } from "../../models/uploads";
import { useEffect, useState } from "react";
import Dropdown from "../../components/Dropdown/Dropdown";
import Button from "../../components/Button/Button";

export default function Upload() {
  const [formData, setFormData] = useState();
  const [dropdownDisplay, setDropdownDisplay] = useState('Select a category')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const postForm = async () => {
    const upload = await postUpload(formData);
    if (upload.status === 201) {
      navigate("/");
    } else {
      setInfo(upload.msg);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const handlePost = (e) => {
    e.preventDefault();
    // postForm();
    //console.log(formData)
  }

  const handleImageChange = (e) => {
    setFormData({ ...formData, imageFile: e.target.files[0] });
  };

  const submit = async (e) => {
    e.preventDefault();
    if(!formData)  {
      return setInfo('Something is missing')
    }
    const formDataToSend = new FormData();
    for (const [key, value] of Object.entries(formData)) {
        formDataToSend.append(key, value);
    }
    console.log(formDataToSend);
    const upload = await postUpload(formDataToSend);
    if(upload.status === 400 || upload.status === 500) return setInfo(upload.msg)
    if (upload.status === 201) return navigate("/");
    setInfo(upload.msg);
  };


const handleDropdownItemClick = (e) => {
   console.log(e.target.name)
   setDropdownDisplay(e.target.name)
   setFormData(prev => {
    return {
      ...prev,
      'category': e.target.name
    }
   })
   setIsDropdownOpen(false)
}

useEffect(() => {
  const timeout = setTimeout(() => {
    setInfo("")
  }, 5000)
  return () => {
    clearTimeout(timeout);
  };
  }, [info]);

useEffect(()=>{
  setInfo("");
},[formData]);

  return (
    <>
      <div
        className="columns is-flex is-justify-content-center is-align-items-center"
        style={{
          position: "fixed",
          zIndex: 1,
          width: "100%",
          height: "4rem",
        }}
      >
        <span
          className="material-symbols-outlined"
          onClick={() => navigate(-1)}
          style={{
            fontSize: "2rem",
            position: "absolute",
            left: "2rem",
            cursor: "pointer",
            userSelect: "none",
          }}
        >
          keyboard_return
        </span>
      </div>

      <form
        encType="multipart/form-data"
        style={{ padding: "0 10%", paddingTop: "3.5rem" }}
      >
        <Dropdown
          handleDropdownItemClick={handleDropdownItemClick}
          dropdownDisplay={dropdownDisplay}
          isDropdownOpen={isDropdownOpen}
          setIsDropdownOpen={setIsDropdownOpen}
        />
        <div className="imageCont is-flex is-justify-content-left is-align-items-center" style={{gap: '5%', marginTop: '2rem'}}>
          <p className="control has-icons-left formInput">
          <input placeholder="Product" name="name" type="text" className="input" onChange={(e) => handleChange(e)}/>
            <span
              className="material-symbols-outlined icon is-left is-flex is-justify-content-center is-align-items-center"
              style={{
                fontSize: "1.25rem",
                height: "40px",
                width: "3rem",
                color: "#a31bf1",
              }}
            >
              inventory
            </span>
          </p>
          <div className="file">
            <label className="file-label">
              <input className="file-input" type="file" name="imageFile" onChange={(e) => handleImageChange(e)}/>
              <span className="file-cta is-flex is-align-items-center is-justify-content-center" style={{gap: '.5rem'}}>
              <span
              className="material-symbols-outlined icon is-left is-flex is-justify-content-center is-align-items-center"
              style={{
                fontSize: "1.25rem",
                width: "1rem",
                color: "#a31bf1",
              }}
            >
              inventory
            </span>
                <span className="file-label"> Image </span>
              </span>
            </label>
          </div>
        </div>
        <p className="control has-icons-left formInput">
          <input placeholder="Price" name="price" type="number" className="input" onChange={(e) => handleChange(e)}/>
          <span
            className="material-symbols-outlined icon is-left is-flex is-justify-content-center is-align-items-center"
            style={{
              fontSize: "1.25rem",
              height: "40px",
              width: "3rem",
              color: "#a31bf1",
            }}
          >
            payments
          </span>
        </p>
        <p className="control has-icons-left formInput">
          <input placeholder="Username" name="nameOfSeller" type="text" className="input" onChange={(e) => handleChange(e)}/>
          <span
            className="material-symbols-outlined icon is-left is-flex is-justify-content-center is-align-items-center"
            style={{
              fontSize: "1.25rem",
              height: "40px",
              width: "3rem",
              color: "#a31bf1",
            }}
          >
            account_circle
          </span>
        </p>
        <p className="control has-icons-left formInput">
          <input placeholder="Contact" name="contact" type="number" className="input" onChange={(e) => handleChange(e)}/>
          <span
            className="material-symbols-outlined icon is-left is-flex is-justify-content-center is-align-items-center"
            style={{
              fontSize: "1.25rem",
              height: "40px",
              width: "3rem",
              color: "#a31bf1",
            }}
          >
            call
          </span>
        </p>
        <p className="control has-icons-left formInput">
          <input placeholder="Location" name="location" type="text" className="input" onChange={(e) => handleChange(e)}/>
          <span
            className="material-symbols-outlined icon is-left is-flex is-justify-content-center is-align-items-center"
            style={{
              fontSize: "1.25rem",
              height: "40px",
              width: "3rem",
              color: "#a31bf1",
            }}
          >
            location_on
          </span>
        </p>
        <button
          style={{ color: "#a31bf1", marginTop: "3rem", marginBottom: '3rem' }}
          className="button"
          onClick={submit}
        >
          Submit
        </button>
      </form>
      <p className="is-flex is-align-items-center is-justify-content-center" style={{color: 'red'}}>{info}</p>
      
    </>
  );
}
