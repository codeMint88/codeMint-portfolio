import styled from "styled-components";
import FooterIcon from "./FooterIcon";

function FooterSection() {
  return (
    <FooterWrapper>
      <FooterIconsWrapper>
        <FooterIcon
          iconSrc="/images/githubIcon.png"
          href="https://github.com/codeMint88"
        />
        <FooterIcon
          iconSrc="/images/linkedInIcon.png"
          href="https://www.linkedin.com/in/thankgod-enemuo-514870b9/"
        />
      </FooterIconsWrapper>
      <CopyrightMessage>
        &copy; codeMint ({new Date().getFullYear()})
      </CopyrightMessage>
    </FooterWrapper>
  );
}

export default FooterSection;

const FooterWrapper = styled.div`
  text-align: center;
  height: 15rem;
  background: var(--gradient-primary);
  padding-top: 2.5rem;
`;

const FooterIconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.2rem;
`;

const CopyrightMessage = styled.p`
  margin-top: 1rem;
`;
