import StickySearchMenu from "../../components/StickySearchMenu/StickySearchMenu";
import { useEffect, useState } from "react";
import { getUpload } from "../../models/uploads";
import { Link, useParams, useNavigate } from "react-router-dom";
import notFoundImg from '../../../public/imgNotFound.png'
import { imgChecker } from "../../functions/imgChecker";
import { deleteUpload } from "../../models/uploads";

function Product() {
  const {id} = useParams();
  const [uploads, setUploads] = useState();
  const [rightImg, setRightImg] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const [formData, setFormData] = useState();
  const navigate = useNavigate()
  const salt = 10;

  const load = async () => {
    const data = await getUpload(id);
    if(data.status === 200){
      setUploads(data.payload);
      imgChecker(data.payload.imagePath, notFoundImg, setRightImg)
      return setLoaded(true);
    }
    setLoaded(null);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData)
  };

  //dodelat pls
  const deletePost = async () => {
    try {
      const data = await getUpload(id);
      if (data.payload.password === formData) {
        await deleteUpload(id);
        navigate('/');
      } else {
        console.error('Incorrect password');
      }
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  }

  useEffect(() => {
    console.log(id);
    load();
    console.log(uploads)
  }, [])

  if(isLoaded === null){
    return (
      <>
      <StickySearchMenu />
      <div className="main-div">
          <h1>No nic, je to over</h1>
          <Link to={"/upload"}>
              <button>přidat inzerát</button>
          </Link>
      </div>
      </>
    )
  }

  if (uploads) {
    return (
      <>
      <StickySearchMenu />
        <div className="container is-flex is-justify-content-center" style={{paddingTop: '3.5rem'}}>
          <div className="box is-flex is-justify-content-center is-align-items-start">
            <img src={rightImg} alt="" style={{height: '40rem', maxWidth: '50rem', padding: '2rem', borderRadius: '3rem'}} />
          </div>
          <div className="block mt-4 ml-6" style={{width: '50rem'}}>
            <p className="title is-3 ">{uploads.name}</p>
            <p className="subtitle is-4 mt-5" style={{color: '#a31bf1', fontWeight: 700}}>{uploads.price} CZK</p>
            <p className="subtitle is-5" style={{marginTop: '5rem'}}><span style={{fontWeight: '700'}}>Name:</span> {uploads.nameOfSeller}</p>
            <p className="subtitle is-5"><span style={{fontWeight: '700'}}>Contact:</span> {uploads.contact}</p>
            <p className="subtitle is-5"><span style={{fontWeight: '700'}}>Location:</span> {uploads.location}</p>
            <p className="subtitle is-5" style={{marginTop: '5rem'}}>{uploads.description}</p>
            <div className="imageCont is-flex is-justify-content-left is-align-items-center" style={{gap: '2%', marginTop: '2rem'}}>
              <p className="control has-icons-left formInput">
                <input placeholder="Enter password for deleting this post" name="description" type="text" className="input" onChange={(e) => handleChange(e)}/>
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
          onClick={deletePost}
          
        >
          Submit
        </button>
          </div>
          </div>
        </div>
      </>
    );
  }

}

export default Product;
