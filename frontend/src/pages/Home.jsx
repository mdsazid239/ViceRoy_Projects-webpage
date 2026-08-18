import Header from "../components/Header";
import Hero from "../components/Hero";
import Overview from "../components/Overview";
import Gallery from "../components/Gallery";
import Location from "../components/Location";
import Footer from "../components/Footer";
import ResidenceConfiguration from "../components/ResidenceConfiguration";
import Expectations from "../components/Expectations";
function Home() {
  return (
    <div className="min-h-screen bg-[#ffffff]">
      <Header />

      <main>
        <section id="home" className="scroll-mt-20 bg-[#ffffff]">
          <Hero />
        </section>

        <section id="about" className="scroll-mt-20 bg-[#ffffff]">
          <Expectations />
        </section>
        {/* <section
          id="project"
          className="scroll-mt-20 bg-[#ffffff]"
        >
          <ResidenceConfiguration />
        </section> */}

        <section
  id="project"
  className="scroll-mt-20 bg-[#ffffff] pt-16"
>
  <ResidenceConfiguration />
</section>

        <section id="gallery" className="scroll-mt-20 bg-[#ffffff]">
          <Gallery />
        </section>
        <section className="scroll-mt-20 bg-[#ffffff]">
          <Overview />
        </section>
        {/* <section
          id="project"
          className="scroll-mt-20 bg-[#ffffff]"
        >
          <ResidenceConfiguration />
        </section> */}
        {/* <section
          id="ResidenceConfiguration"
          className="scroll-mt-20 bg-[#ffffff]"
        >
          <ResidenceConfiguration />
        </section> */}

        <section id="location" className="scroll-mt-20 bg-[#ffffff]">
          <Location />
        </section>

        {/* <section id="gallery" className="scroll-mt-20 bg-[#ffffff]">
          <Gallery />
        </section> */}
      </main>

      <Footer />
    </div>
  );
}

export default Home;
