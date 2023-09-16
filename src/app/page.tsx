import Cards from "../components/Cards.tsx";
import Hero from "../components/Hero.tsx";
import Title from "../components/Titles.tsx";

export default function Home() {
  return (
    <main className="w-full min-h-screen p-5">
      <Hero />
      <Title title="Coleccion de Productos de primera calidad" />
      <Cards />
    </main>
  );
}
