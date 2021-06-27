import styled from 'styled-components';

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0a1931;
  color: #f1f1f1;
  padding: 2rem;
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <h4>Made with 💗 by Harish </h4>
    </FooterContainer>
  );
};
