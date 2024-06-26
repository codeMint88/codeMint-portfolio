import { lazy, Suspense } from "react";

import FooterSection from "./FooterSection";
import Logo from "./Logo";
import Main from "./Main";
import Nav from "./Nav";
import NavFixed from "./NavFixed";
import NavPicture from "./NavPicture";
import Parallex from "./Parallex";
import Loader from "./Loader";
import { ProjectProvider } from "../contexts/ProjectsContexts";

const HeroSection = lazy(() => import("./HeroSection"));
const SkillSection = lazy(() => import("./SkillSection"));
const ProjectSection = lazy(() => import("./ProjectSection"));
const ContactSection = lazy(() => import("./ContactSection"));

function App() {
  return (
    <ProjectProvider>
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
    </ProjectProvider>
  );
}

export default App;
