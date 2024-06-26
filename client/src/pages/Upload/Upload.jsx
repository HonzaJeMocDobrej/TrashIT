import { Link, useNavigate } from "react-router-dom";
import { postUpload } from "../../models/uploads";
import { useEffect, useRef, useState } from "react";
import Dropdown from "../../components/Dropdown/Dropdown";
import Button from "../../components/Button/Button";

export default function Upload() {
  const [formData, setFormData] = useState();
  const [imgData, setImgData] = useState([])
  const [dropdownDisplay, setDropdownDisplay] = useState('Select a category')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [imagePath, setImagePath] = useState('')
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const imgInputRef = useRef()

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
  };

  const handlePost = (e) => {
    e.preventDefault();
    // postForm();
    //console.log(formData)
  }

  const handleImageChange =  (e) => {
    console.log(e.target.files);
    const name = e.target.files[0].name
    const nameArr = name.split('.')
    console.log(nameArr)
    if(nameArr[1] =="png" || nameArr[1] =="jpg" || nameArr[1] =="jpeg" || nameArr[1] =="webm" 
      || nameArr[1] =="gif" || nameArr[1] =="svg" || nameArr[1] =="webp" || nameArr[1] =="PNG"){
        setImgData(prev => {
          return [
            ...prev,
            e.target.files[0]
          ]
        })
      }
    else return setInfo("Wrong file format");
    //dodelat checkovani spravnych koncovek
    // :3
  };

  const submit = async (e) => {
    e.preventDefault();
    if(!formData)  {
      return setInfo('Something is missing')
    }
    const formDataToSend = new FormData();

    for (const [key, value] of Object.entries(formData)) {
        if(key === "category"){
          formDataToSend.append(key, value.toLowerCase());
        }
        else formDataToSend.append(key, value);
    }
    formDataToSend.append('imageFile', imgInputRef.current.files[0])

    const upload = await postUpload(formDataToSend);
    if(upload.status === 400 || upload.status === 500) return setInfo(upload.msg)
    if (upload.status === 201){
      return navigate("/");
    } 
    setInfo(upload.msg);
  };


const handleDropdownItemClick = (e) => {
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

useEffect(()=>{
  const rightImgPathArr = imgData.map(item => {
    return URL.createObjectURL(item)
  })
  console.log(rightImgPathArr)
  setImagePath(rightImgPathArr)
},[imgData]);

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
        {imagePath ? 
        <div className="uploadImageCont">
           {/* <img src={imagePath}></img> */}
           {
            imagePath.map(element => {
              return <img src={element} alt="" key={element} />
            })
          }
        </div> : 
        null}
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
              <input ref={imgInputRef} className="file-input" type="file" name="imageFile" onChange={(e) => handleImageChange(e)}/>
              <span className="file-cta is-flex is-align-items-center is-justify-content-center" style={{gap: '.5rem'}}>
              <span
              className="material-symbols-outlined icon is-left is-flex is-justify-content-center is-align-items-center"
              style={{
                fontSize: "1.25rem",
                width: "1rem",
                color: "#a31bf1",
              }}
            >
              image
            </span>
                <span className="file-label"> Image </span>
              </span>
            </label>
          </div>
        </div>
        <p className="control has-icons-left formInput">
          <input placeholder="Description" name="description" type="text" className="input" onChange={(e) => handleChange(e)}/>
            <span
              className="material-symbols-outlined icon is-left is-flex is-justify-content-center is-align-items-center"
              style={{
                fontSize: "1.25rem",
                height: "40px",
                width: "3rem",
                color: "#a31bf1",
              }}
            >
              book
            </span>
          </p>
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
        <p className="control has-icons-left formInput">
          <input placeholder="Password" name="password" type="password" className="input" onChange={(e) => handleChange(e)}/>
          <span
            className="material-symbols-outlined icon is-left is-flex is-justify-content-center is-align-items-center"
            style={{
              fontSize: "1.25rem",
              height: "40px",
              width: "3rem",
              color: "#a31bf1",
            }}
          >
            key
          </span>
        </p>
        <p className="control has-icons-left formInput">
          <input placeholder="Confirm password" name="passwordAuth" type="password" className="input" onChange={(e) => handleChange(e)}/>
          <span
            className="material-symbols-outlined icon is-left is-flex is-justify-content-center is-align-items-center"
            style={{
              fontSize: "1.25rem",
              height: "40px",
              width: "3rem",
              color: "#a31bf1",
            }}
          >
            key
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
      <p className="is-flex is-align-items-center is-justify-content-center" style={{color: 'red', marginBottom: '2rem'}}>{info}</p>
      
    </>
  );
}
