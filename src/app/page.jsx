import Cards from "../components/Cards.tsx";
import CardsXL from "../components/CardsXL.tsx";
import Hero from "../components/Hero.tsx";
import Title from "../components/Titles.tsx";
import Tripack from "../components/Tripack.tsx";
import TripackIMG from "../components/TripackIMG.tsx";
import BrandShop from '../components/BrandShop.tsx'
import TwoBlock from '../components/TwoBlock.tsx'
import Stag from '../components/Stag.tsx'
import CTA from "../components/CTA.tsx";
import Footer from "../components/Footer.tsx";
import Gallery from "../components/Gallery.tsx";

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
      <BrandShop />
      <Title H5="Spring" title="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?" />
      <Cards numGRID={4} S='Style0'/>
      <TwoBlock TBH="1.- Lorem Ipsum" TBText={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore verita"} />
      <TwoBlock OL="md:order-last" TBH="2.- Lorem Ipsum" TBText={"Omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore verita"}/>
      <CTA />
      <Stag />
      <Gallery/>
      <Footer/>
    </main>

  );
}
