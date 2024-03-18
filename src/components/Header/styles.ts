import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.colors.secondary};
  padding: 1em 0;
`;
export const Contacts = styled.div`
  display: flex;
  gap: 2em;
`;

export const ContactsText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2em;
  align-items: center;
  justify-content: space-evenly;
`;
