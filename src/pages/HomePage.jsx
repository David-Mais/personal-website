import Navbar from "../components/Navbar";
import Personal from "../components/Personal";

function HomePage() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar scrollToSection={scrollToSection} />
      <Personal />
    </>
  );
}

export default HomePage;
