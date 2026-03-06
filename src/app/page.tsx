import Divider from "./components/divider";
import AboutMe from "./components/home/about-me";
import Education from "./components/home/education";
import Experience from "./components/home/experience";
import FeaturedWork from "./components/home/featured-work";
import HeroSection from "./components/home/hero-section";
import ProjectOverview from "./components/home/project-overview";
import TableOfContents from "./components/home/table-of-contents";

const page = () => {
  return (
    <main>
      <TableOfContents />
      <section id="hero">
        <HeroSection />
      </section>
      <Divider />
      <section id="about">
        <AboutMe />
      </section>
      <Divider />
      <section id="featured-work">
        <FeaturedWork />
      </section>
      <Divider />
      <section id="experience">
        <Experience />
      </section>
      <Divider />
      <section id="education">
        <Education />
      </section>
      <Divider />
      <section id="projects">
        <ProjectOverview />
      </section>
      <Divider />
    </main>
  );
};

export default page;
