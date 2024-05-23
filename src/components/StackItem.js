import styled from "styled-components";
// import Figure from "./Figure";

function StackItem({ children, stackimgsrc }) {
  return (
    <ItemWrapper stackimgsrc={stackimgsrc}>
      <img src={stackimgsrc} width="24" height="24" alt="StackImage" />
      <ItemDescription>
        {children}
        <SpanDesc>
          <img
            src={`${process.env.PUBLIC_URL}/images/doneIcon.gif`}
            width="14"
            height="14"
            alt="doneIcon"
          />
        </SpanDesc>
      </ItemDescription>
    </ItemWrapper>
  );
}

export default StackItem;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;
const ItemDescription = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
const SpanDesc = styled.span`
  ${
    "" /* img {
    background: transparent;
  } */
  }
`;
