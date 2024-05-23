import StickySearchMenu from "../../components/StickySearchMenu/StickySearchMenu";
import { useEffect, useState } from "react";
import { getUpload } from "../../models/uploads";
import { Link, useParams } from "react-router-dom";
import notFoundImg from '../../../public/imgNotFound.png'
import { imgChecker } from "../../functions/imgChecker";

function Product() {
  const {id} = useParams();
  const [uploads, setUploads] = useState();
  const [rightImg, setRightImg] = useState();
  const [isLoaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getUpload(id);
    if(data.status === 200){
      setUploads(data.payload);
      imgChecker(data.payload.imagePath, notFoundImg, setRightImg)
      return setLoaded(true);
    }
    setLoaded(null);
  };

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
          </div>
        </div>
      </>
    );
  }

}

export default Product;
