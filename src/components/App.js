import HeroSection from "./HeroSection";
import Logo from "./Logo";
import Main from "./Main";
import Nav from "./Nav";
import NavPicture from "./NavPicture";
import SkillSection from "./SkillSection";

function App() {
  return (
    <>
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
      </Main>
    </>
  );
}

export default App;
