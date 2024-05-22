import StickySearchMenu from "../../components/StickySearchMenu/StickySearchMenu";
import { useEffect, useState } from "react";
import { getUpload } from "../../models/uploads";
import { Link, useParams } from "react-router-dom";

function Product() {
  const {id} = useParams();
  const [uploads, setUploads] = useState();
  const [isLoaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getUpload(id);
    if(data.status === 200){
      setUploads(data.payload);
      return setLoaded(true);
    }
    setLoaded(null);
  };

  useEffect(() => {
    console.log(id);
    load();
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

  return (
    <>
    <StickySearchMenu />
      <div className="container is-flex is-justify-content-center" style={{paddingTop: '3.5rem'}}>
        <div className="box is-flex is-justify-content-center is-align-items-start">
          <img src={uploads.imagePath} alt="" style={{height: '40rem', maxWidth: '50rem', padding: '2rem', borderRadius: '3rem'}} />
        </div>
        <div className="block mt-4 ml-6" style={{width: '50rem'}}>
          <p className="title is-3 ">{uploads.name}</p>
          <p className="subtitle is-4 mt-5" style={{color: '#a31bf1', fontWeight: 700}}>{uploads.price} CZK</p>
          <p className="subtitle is-5" style={{marginTop: '5rem'}}>Name: {uploads.nameOfSeller}</p>
          <p className="subtitle is-5">Contact: {uploads.contact}</p>
          <p className="subtitle is-5">Location: {uploads.location}</p>
        </div>
      </div>
    </>
  );
}

export default Product;
