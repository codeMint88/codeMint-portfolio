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
        {srcSet && (
          <Source srcSet={`${process.env.PUBLIC_URL}/${srcSet}`} type={type} />
        )}
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
const Picture = styled.picture`
  height: 100%;
`;
const Source = styled.source``;
const Image = styled.img`
  width: 400px;
  height: 100%;

  object-fit: cover;
  object-position: top;
  ${"" /* aspect-ratio: 3/4; */}
  border-radius: 10px;
`;

const FigCaption = styled.figcaption``;
