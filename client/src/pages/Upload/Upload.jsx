import { Link, useNavigate } from "react-router-dom";
import { postUpload } from "../../models/uploads";
import { useState } from "react";
import Dropdown from "../../components/Dropdown/Dropdown";

export default function Upload() {
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

const handleChange = (e) => {
  setFormData({...formData, [e.target.name]: e.target.value});
}

const handleImageChange = (e) => {
  setFormData({...formData, imageFile: e.target.files[0]});
}

const submit = async (e) => {
  e.preventDefault();
  const formDataToSend = new FormData();
  for (const [key, value] of Object.entries(formData)) {
    formDataToSend.append(key, value);
  }
  const upload = await postUpload(formDataToSend);
  if (upload.status === 201) return navigate("/");
  setInfo(upload.msg);
}

  return (
    <>
        <h1>Upload form</h1>
        <form encType="multipart/form-data" style={{padding: '0 10%'}}>
          <Dropdown />
        <p className="control has-icons-left">
              <input type="text" className="input" />
              <span
                className="material-symbols-outlined icon is-left is-flex is-justify-content-center is-align-items-center"
                style={{
                  fontSize: "1.25rem",
                  height: "40px",
                  width: "3rem",
                  color: "#a31bf1",
                }}
              >
                search
              </span>
            </p>
        </form>
        <p>{info}</p>
        
        <Link to={"/"}>
            <button>back</button>
        </Link>
    </>
  )
}
