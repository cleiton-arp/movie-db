import styled from "styled-components";

export const CarouselContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 16px;
  padding: 16px;

  /* esconder scrollbar no Chrome/Safari/Edge */
  &::-webkit-scrollbar {
    display: none;
  }

  /* esconder scrollbar no Firefox */
  scrollbar-width: none;
`;

export const NavButton = styled.button`
  background-color: rgba(0,0,0,0.5);
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
`;

