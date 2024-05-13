import { useNavigate } from "react-router-dom";

function Button() {

    let navigate = useNavigate()

  return (
    <>
      <button className="button" style={{ height: "2.5rem", color: "#a31bf1" }} onClick={() => navigate('/upload')}>
        Upload
      </button>
    </>
  );
}

export default Button;
