// import { Link } from "react-router-dom";
// import { getUploads } from "../../models/uploads";
// import { useState, useEffect } from "react";
// import Article from "../../components/Article/Article";

// export default function Home() {
//   const [uploads, setUploads] = useState();
//   const [isLoaded, setLoaded] = useState(false);

//   const load = async () => {
//     const data = await getUploads();
//     if(data.status === 200){
//       setUploads(data.payload);
//       return setLoaded(true);
//     }
//     setLoaded(null);
//   };

//   useEffect(() => {
//     load();
//   }, []);

//   if(isLoaded === null){
//     return (
//       <>
//       <div className="main-div">
//           <h1>No nic, je to over</h1>
//           <Link to={"/upload"}>
//               <button>přidat inzerát</button>
//           </Link>
//       </div>
//       </>
//     )
//   }

//   return (
//     <>
//     <div className="main-div">
//         <h1>Home page</h1>
//       {
//         isLoaded ? (
//           uploads.map((upload, index) => <Article key = {index} {...upload}/>)
//         ) : (
//           <p>načítám inzeráty</p>
//         )
//       }
//         <Link to={"/upload"}>
//             <button>přidat inzerát</button>
//         </Link>
//     </div>
//     </>
//   )
// }
import Card from "../../components/Card/Card"
import StickyButtonMenu from "../../components/StickyButtonMenu/StickyButtonMenu"

function Home() {
  return (
    <>
    <StickyButtonMenu />
    <div className="grid is-col-min-11" style={{paddingTop: '3.5rem'}}>
      <Card
        icon={'desktop_windows'}
        title={'Desktop'}
      />
      <Card
        icon={'laptop'}
        title={'Laptop'}
      />
      <Card
        icon={'mouse'}
        title={'Mouse'}
      />
      <Card
        icon={'keyboard'}
        title={'Keyboard'}
      />
      <Card
        icon={'headphones'}
        title={'Headphones'}
      />
      <Card
        icon={'screenshot_monitor'}
        title={'Screen'}
      />
        <Card
          icon={'camera'}
          title={'Graphic Card'}
        />
        <Card
          icon={'memory'}
          title={'CPU'}
        />
        <Card
          icon={'hard_drive_2'}
          title={'Storage'}
        />
        <Card
          icon={'tune'}
          title={'Motherboard'}
        />
        <Card
          icon={'crop_16_9'}
          title={'RAM'}
        />
      <Card
        icon={'router'}
        title={'Networking'}
      />
  
    </div>
    </>
  )
}

export default Home