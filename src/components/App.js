import { lazy, Suspense } from "react";

import FooterSection from "./FooterSection";
import Logo from "./Logo";
import Main from "./Main";
import Nav from "./Nav";
import NavFixed from "./NavFixed";
import NavPicture from "./NavPicture";
import Parallex from "./Parallex";
import Loader from "./Loader";

const HeroSection = lazy(() => import("./HeroSection"));
const SkillSection = lazy(() => import("./SkillSection"));
const ProjectSection = lazy(() => import("./ProjectSection"));
const ContactSection = lazy(() => import("./ContactSection"));
// import SkillSection from "./SkillSection";
// import ProjectSection from "./ProjectSection";
// import ContactSection from "./ContactSection";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Nav>
        <Logo />
        <NavPicture
          pieSize="44"
          imgSize="38"
          colour1="#ffb545"
          colour2="#7fbd58"
          colour3="#00c46a"
          colourbg="#efe0f7"
        />
      </Nav>
      <Main>
        <HeroSection />
        <SkillSection />
        <Parallex title="Completed Projects" />
        <ProjectSection />
        <Parallex title="Let's Talk" />
        <ContactSection />
        <FooterSection />
      </Main>
      <NavFixed />
    </Suspense>
  );
}

export default App;
