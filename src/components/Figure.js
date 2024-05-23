import styled from "styled-components";

function Figure({
  caption,
  alt,
  width,
  height,
  srcSet,
  src,
  type = "image/avif",
}) {
  return (
    <FigureWrapper>
      <Picture>
        <Source srcSet={`${process.env.PUBLIC_URL}/${srcSet}`} type={type} />
        <Image
          src={`${process.env.PUBLIC_URL}/${src}`}
          alt={alt}
          width={width}
          height={height}
        />
      </Picture>
      <FigCaption className="sr-only">{caption}</FigCaption>
    </FigureWrapper>
  );
}

export default Figure;

const FigureWrapper = styled.figure`
  height: 100%;
`;
const Picture = styled.picture``;
const Source = styled.source``;
const Image = styled.img`
  object-fit: cover;
  object-position: top;
  width: 100%;
  height: 100%;
  ${"" /* aspect-ratio: 3/2; */}
  ${
    "" /* ${StackItem} & {
    aspect-ratio: auto;
    border: 2px solid blue;
  } */
  };
`;
const FigCaption = styled.figcaption``;
