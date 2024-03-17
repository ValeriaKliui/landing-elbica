import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 4em 0;
  width: 500px;
  height: 400px;
`;
export const Border = styled.div`
  border: 1px solid #c1a875;
  position: relative;
  z-index: 2;
  width: 500px;
  height: 400px;
`;
export const Image = styled.img`
  position: absolute;
  box-shadow: 60px -5em #aad6d3;
  top: 3em;
  left: 3em;
  z-index: 0;
  width: 100%;
`;
