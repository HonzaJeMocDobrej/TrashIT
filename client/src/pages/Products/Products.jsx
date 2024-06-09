import { useEffect, useState } from "react";
import { getUploads } from "../../models/uploads";
import ProductCard from "../../components/ProductCard/ProductCard";
import StickySearchMenu from "../../components/StickySearchMenu/StickySearchMenu";
import { useParams } from "react-router-dom";
import { getSearchedUploads } from "../../models/uploads";

function Products() {
  const { category } = useParams();
  const [uploads, setUploads] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const [query, setQuery] = useState("");
  const [searchedUploads, setSearchedUploads] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const load = async () => {
    const data = await getUploads();
    if(data.status === 200){
    const filteredData = data.payload.filter(upload => upload.category === category);
      setUploads(filteredData);
      return setLoaded(true);
    }
    setLoaded(null);
  };

  const search = async () => {
    setIsSearching(true);
    const data = await getSearchedUploads(category, query);
    if(data.status === 200){
      setSearchedUploads(data.payload);
    }
    else setLoaded(null);
  };

  useEffect(() => {
    load();
    console.log(uploads)
  }, []);

  useEffect(() => {
    console.log(query)
    if(query) search();
    else setIsSearching(false);
  }, [query]);

  const displayUploads = isSearching ? searchedUploads : uploads;

/*
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

  if(!uploads){
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
  */

  return (
    <>
    <StickySearchMenu query={query} setQuery={setQuery}/>
      <div className="fixed-grid has-1-cols">
        <div className="grid" style={{marginTop: '3.5rem', paddingBottom: '1rem'}}>
          {/* <ProductCard
            name='Lenovo LOQ 15IRX9 83DV006PCK'
            description='Tady bude maly popisek Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Quas harum, similique aut
            totam ab expedita nobis praesentium voluptatibus quod
            provident nemo exercitationem accusamus debitis temporibus
            sint atque corrupti odit vel.'
            imagePath='https://i.ibb.co/5RRH8yL/75de1c2d3f5fefb7a8526bf4347bdb7d-mmf400x400-removebg-preview.png'
            price='20 000'
          /> */}
          {
        
        isLoaded  ? (
          displayUploads.map((upload, index) => <ProductCard key={index} {...upload} />)
        ) : (
          <p style={{ marginTop: '3.5rem', textAlign: "center", fontSize: "30px" }}>Loading...</p>
        )
      }
        </div>
      </div>
    </>
  );
}

export default Products;
