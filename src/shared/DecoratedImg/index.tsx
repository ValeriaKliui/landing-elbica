import { FC, useEffect, useRef, useState } from "react";

import { DecoratedImgProps } from "./interfaces";
import { Border, Container, Image } from "./styles";

export const DecoratedImg: FC<DecoratedImgProps> = ({
  src,
  isCascade = false,
}) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [imgHeight, setImgHeight] = useState(0);
  const [imgWidth, setImgWidth] = useState(0);

  const imgTop = imgHeight / 7;
  const imgLeft = imgWidth / 8;

  useEffect(() => {
    const rect = imgRef && imgRef.current;
    if (rect) {
      setImgHeight(rect.getBoundingClientRect().height);
      setImgWidth(rect.getBoundingClientRect().width);
    }
  }, [imgRef]);

  return (
    <Container>
      <Border
        $top={imgTop}
        $imgHeight={imgHeight}
        $isCascade={isCascade}
        $left={imgLeft}
      />
      <Image
        src={src}
        ref={imgRef}
        $top={imgTop}
        $left={imgLeft}
        $isCascade={isCascade}
      />
    </Container>
  );
};
