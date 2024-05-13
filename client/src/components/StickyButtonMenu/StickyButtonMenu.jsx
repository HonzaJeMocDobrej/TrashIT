import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

function StickyButtonMenu() {

let navigate = useNavigate()

  return (
    <>
      <div
        className="columns is-flex is-justify-content-center is-align-items-center"
        style={{
          position: "fixed",
          zIndex: 1,
          width: "100%",
        }}
      >
        <span className="material-symbols-outlined" onClick={() => navigate(-1)} style={{fontSize: '2rem', position: 'absolute', left: '2rem', cursor: 'pointer', userSelect: 'none'}}>keyboard_return</span>
        <div className="column is-one-fifth">
          <div className="field is-flex is-justify-content-center">
            <Button />
          </div>
        </div>
      </div>
    </>
  );
}

export default StickyButtonMenu;
