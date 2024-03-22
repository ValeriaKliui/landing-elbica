import CheckMark from "@assets/icons/check-mark.svg?react";
import styled from "styled-components";

export const Container = styled.div`
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
  gap: 1.8em;
`;
export const ItemContainer = styled.div`
  display: flex;
  gap: 10px;
`;
export const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;
export const Icon = styled(CheckMark)<{ $fill: string }>`
  margin-top: 0.3em;
  width: 100%;
  max-width: 10px;
  path {
    fill: ${({ $fill }) => $fill};
  }
`;
export const ButtonWrapper = styled.div`
  align-self: center;
`;
