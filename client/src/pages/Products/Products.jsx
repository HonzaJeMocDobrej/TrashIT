import ProductCard from "../../components/ProductCard/ProductCard";
import StickySearchMenu from "../../components/StickySearchMenu/StickySearchMenu";

function Products() {
  return (
    <>
    <StickySearchMenu />
      <div className="fixed-grid has-1-cols">
        <div className="grid" style={{marginTop: '3.5rem', paddingBottom: '1rem'}}>
          <ProductCard
            name='Lenovo LOQ 15IRX9 83DV006PCK'
            description='Tady bude maly popisek Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Quas harum, similique aut
            totam ab expedita nobis praesentium voluptatibus quod
            provident nemo exercitationem accusamus debitis temporibus
            sint atque corrupti odit vel.'
            imagePath='https://i.ibb.co/5RRH8yL/75de1c2d3f5fefb7a8526bf4347bdb7d-mmf400x400-removebg-preview.png'
            price='20 000'
          />
          <ProductCard
            name='Lenovo LOQ 15IRX9 83DV006PCK'
            description='Tady bude maly popisek Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Quas harum, similique aut
            totam ab expedita nobis praesentium voluptatibus quod
            provident nemo exercitationem accusamus debitis temporibus
            sint atque corrupti odit vel.'
            imagePath='https://i.ibb.co/5RRH8yL/75de1c2d3f5fefb7a8526bf4347bdb7d-mmf400x400-removebg-preview.png'
            price='20 000'
          />
          <ProductCard
            name='Lenovo LOQ 15IRX9 83DV006PCK'
            description='Tady bude maly popisek Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Quas harum, similique aut
            totam ab expedita nobis praesentium voluptatibus quod
            provident nemo exercitationem accusamus debitis temporibus
            sint atque corrupti odit vel.'
            imagePath='https://i.ibb.co/5RRH8yL/75de1c2d3f5fefb7a8526bf4347bdb7d-mmf400x400-removebg-preview.png'
            price='20 000'
          />
          <ProductCard
            name='Lenovo LOQ 15IRX9 83DV006PCK'
            description='Tady bude maly popisek Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Quas harum, similique aut
            totam ab expedita nobis praesentium voluptatibus quod
            provident nemo exercitationem accusamus debitis temporibus
            sint atque corrupti odit vel.'
            imagePath='https://i.ibb.co/5RRH8yL/75de1c2d3f5fefb7a8526bf4347bdb7d-mmf400x400-removebg-preview.png'
            price='20 000'
          />
        </div>
      </div>
    </>
  );
}

export default Products;
