import StickySearchMenu from "../../components/StickySearchMenu/StickySearchMenu";

function Product() {
  return (
    <>
    <StickySearchMenu />
      <div className="container is-flex is-justify-content-center" style={{paddingTop: '3.5rem'}}>
        <div className="box is-flex is-justify-content-center is-align-items-start">
          <img src="https://www.reliancedigital.in/medias/Asus-Strix-G-HN083W-493838344-i-2-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w1OTc1MXxpbWFnZS9qcGVnfGltYWdlcy9oODAvaDFlLzEwMDU2ODI5OTYwMjIyLmpwZ3w4NDY4Mjk3Njg0OWQ5ZWQyOWM2OGRjYmUwMGEwNDZlYzIxOTMwM2JkNjZjN2EwYmYyYjQxOWJhY2U3N2RiY2Vl" alt="" style={{height: '40rem', maxWidth: '50rem', padding: '2rem', borderRadius: '3rem'}} />
        </div>
        <div className="block mt-4 ml-6" style={{width: '50rem'}}>
          <p className="title is-3 ">Lenovo LOQ 15IRX9 83DV006PCK</p>
          <p className="subtitle is-4 mt-5" style={{color: '#a31bf1', fontWeight: 700}}>20 000 CZK</p>
          <p className="subtitle is-5" style={{marginTop: '5rem'}}>Name: </p>
          <p className="subtitle is-5">Contact: </p>
          <p className="subtitle is-5">Location: </p>
        </div>
      </div>
    </>
  );
}

export default Product;
