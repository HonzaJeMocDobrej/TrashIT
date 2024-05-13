import { Link, useNavigate } from "react-router-dom";
import { postUpload } from "../../models/uploads";
import { useState } from "react";
import Dropdown from "../../components/Dropdown/Dropdown";
import Button from "../../components/Button/Button";

export default function Upload() {
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, imageFile: e.target.files[0] });
  };

  const submit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    for (const [key, value] of Object.entries(formData)) {
      formDataToSend.append(key, value);
    }
    const upload = await postUpload(formDataToSend);
    if (upload.status === 201) return navigate("/");
    setInfo(upload.msg);
  };

  return (
    <>
    <div
        className="columns is-flex is-justify-content-center is-align-items-center"
        style={{
          position: "fixed",
          zIndex: 1,
          width: "100%",
          height: '4rem'
        }}
      >
        <span className="material-symbols-outlined" onClick={() => navigate(-1)} style={{fontSize: '2rem', position: 'absolute', left: '2rem', cursor: 'pointer', userSelect: 'none'}}>keyboard_return</span>
      </div>

      <form encType="multipart/form-data" style={{ padding: "0 10%", paddingTop: '3.5rem' }}>
        <Dropdown />
        <p className="control has-icons-left formInput">
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
            inventory
          </span>
        </p>
        <p className="control has-icons-left formInput">
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
            payments
          </span>
        </p>
        <p className="control has-icons-left formInput">
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
            account_circle
          </span>
        </p>
        <p className="control has-icons-left formInput">
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
            call
          </span>
        </p>
        <p className="control has-icons-left formInput">
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
            location_on
          </span>
        </p>
      <button style={{color: '#a31bf1', marginTop: '3rem'}} className="button">
        Submit
      </button>
      </form>
      <p>{info}</p>
    </>
  );
}
