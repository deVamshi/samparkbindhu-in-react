import Banner from "./components/Banner";
import Who from "./components/Who";
// import What from "./components/What";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div>
      <Banner />
      <Who />
      {/* <What /> */}
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}
