import StickySearchMenu from "../../components/StickySearchMenu/StickySearchMenu";
import StickyButtonMenu from "../../components/StickyButtonMenu/StickyButtonMenu";
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
  const [info, setInfo] = useState('');
  const navigate = useNavigate()

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
    console.log(formData, id)
  };

  //dodelat pls
  const deletePost = async () => {
    try {
        const deleted = await deleteUpload(id, formData)
        .catch(err => setInfo(err.response.data.msg))
        if (deleted.status == 200) return navigate(-1)
        
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  }

  useEffect(() => {
    console.log(id);
    load();
    console.log(uploads)
  }, [])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setInfo("")
    }, 5000)
    return () => {
      clearTimeout(timeout);
    };
    }, [info]);
  
  // useEffect(()=>{
  //   setInfo("");
  // },[formData]);

  if(isLoaded === null){
    return (
      <>
      <StickySearchMenu />
      <div className="main-div">
          <h1 className="title is-3" style={{textAlign: 'center', paddingTop: '8rem'}}>Product doesnt exist</h1>
      </div>
      </>
    )
  }

  if (uploads) {
    return (
      <>
      <StickyButtonMenu />
        <div className="container is-flex is-justify-content-center" style={{paddingTop: '4.5rem'}}>
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
                <input placeholder="Enter password for deleting this post" name="password" type="password" className="input" onChange={(e) => handleChange(e)}/>
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
        <p className="is-flex is-align-items-center is-justify-content-center" style={{color: 'red', marginBottom: '2rem'}}>{info}</p>
          </div>
        </div>
      </>
    );
  }

}

export default Product;
