import styled from "styled-components";

function FooterIcon({ iconSrc, href }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <FooterIconContainer>
        <img
          src={`${process.env.PUBLIC_URL}${iconSrc}`}
          alt=""
          width="96"
          height="96"
        ></img>
      </FooterIconContainer>
    </a>
  );
}

export default FooterIcon;

const FooterIconContainer = styled.div`
  display: grid;
  place-content: center;
  background: var(--footer-Icon);
  width: 50px;
  height: 50px;
  ${"" /* padding: 10px; */}
  border-radius: 10px;

  @media (width <= 600) {
    width: 40px;
    height: 40px;
  }

  img {
    width: 30px;
    height: 30px;
  }
`;
