import Header from "../components/Header";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import Location from "../components/Location";
import Overview from "../components/overview";
import Footer from "../components/footer";
function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Gallery />
         <Location /> 
         <Overview/> 
         <Footer/>
      </main>
    </>
  );
}
export default Home;