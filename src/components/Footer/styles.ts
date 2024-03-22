import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  justify-items: center;
  border-top: 1px solid ${({ theme: { colors } }) => colors.secondary};
  padding: 2em 0;

  @media ${({ theme: { deviceQueries } }) => deviceQueries.md} {
    grid-template-areas:
      "1column 2column 3column"
      "data data data";
    gap: 1em;
    padding: 1em 0;
  }
  @media ${({ theme: { deviceQueries } }) => deviceQueries.xs} {
    grid-template-areas:
      "1column data"
      "2column 3column";
  }
`;
export const CompanyData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  grid-area: data;
`;
export const CompanyInfo = styled.div`
  @media ${({ theme: { deviceQueries } }) => deviceQueries.md} {
    display: none;
  }
`;
export const List = styled.ul<{ $index: number }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media ${({ theme: { deviceQueries } }) => deviceQueries.md} {
    grid-area: ${({ $index }) => $index}column;
  }
`;
export const IconsWrapper = styled.span`
  @media ${({ theme: { deviceQueries } }) => deviceQueries.md} {
    display: none;
  }
`;
