import styled from "styled-components";
import { Header } from "../Header";

const HEADER_HEIGHT = 50;
const HEADER_HEIGHT_MOBILE = 200;

const ContentWrapper = styled.div`
  padding-top: ${HEADER_HEIGHT}px; /* espaço reservado para o header fixo */
  @media (max-width: 800px) {
    padding-top: ${HEADER_HEIGHT_MOBILE}px;
  }
`;

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <Header />
      <ContentWrapper>{children}</ContentWrapper>
    </>
  );
};
