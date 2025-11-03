import styled from "styled-components";
import { Header } from "../Header";

const HEADER_HEIGHT = 50;

const ContentWrapper = styled.div`
  padding-top: ${HEADER_HEIGHT}px;
  @media (max-width: 800px) {
    padding-top: 0;
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
