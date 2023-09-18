import Cards from "../components/Cards.tsx";
import CardsXL from "../components/CardsXL.tsx";
import Hero from "../components/Hero.tsx";
import Title from "../components/Titles.tsx";
import Tripack from "../components/Tripack.tsx";
import TripackIMG from "../components/TripackIMG.tsx";
import BrandShop from '../components/BrandShop.tsx'
export default function Home() {
  return (
    <main className="w-full min-h-screen p-5">
      <Hero />
      <Title H5="CCTV" title="Coleccion de Productos de primera calidad" />
      <Cards numGRID={4} S='Style0'/>
      <Title H5="Clothes"
        title="lorem ipsum dolor sit amet ipsum lorem ipsum dolor sit amet ipsum lorem ipsum dolor sit amet ipsum lorem ipsum dolor sit amet ipsum Leggings synth blue bottle venmo meh typewriter, biodiesel kickstarter church-key vinyl normcore scenester dreamcatcher banh mi. Roof party literally live-edge subway tile single-origin coffee man bun unicorn. Gluten-free ethical flexitarian meggings authentic kogi readymade pok pok quinoa taxidermy street art asymmetrical. Plaid subway tile banh mi activated charcoal tumeric selfies pinterest la croix chillwave vice stumptown humblebrag godard mlkshk. Lomo disrupt woke distillery."
      />
      <CardsXL numGRID={3} S='Style1' />
      <Tripack />
      <Title H5="Why US"/>
      <TripackIMG />
      <Title H5="TODO" title="https://headless.builders/" />
      <BrandShop/>
    </main>
  );
}
