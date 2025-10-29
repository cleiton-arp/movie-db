import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

export const ActionButtons = styled.div`
  margin-top: 2rem;

  button {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    border: none;
    border-radius: 8px;
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      opacity: 0.9;
    }
  }
`;

export const float = keyframes`
  0% { transform: translateY(0px) }
  50% { transform: translateY(-6px) }
  100% { transform: translateY(0px) }
`;

export const Page = styled.main`
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px 20px;
  background: linear-gradient(180deg, #0f1720 0%, #12151a 100%);
  color: #f3f4f6;
`;

export const Card = styled.section`
  max-width: 920px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 420px;
  gap: 32px;
  align-items: center;
  background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
  border: 1px solid rgba(255,255,255,0.04);
  padding: 28px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(2,6,23,0.6);

  @media (max-width: 880px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const Left = styled.div`
  padding: 8px 12px;
`;

export const Subtitle = styled.p`
  margin: 0 0 18px 0;
  color: #d1d5db;
  line-height: 1.45;
`;

export const SuggestionList = styled.ul`
  margin: 16px 0 0 0;
  padding-left: 18px;
  color: #cbd5e1;

  li {
    margin: 8px 0;
  }
`;

export const Actions = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 12px;

  @media (max-width: 880px) {
    justify-content: center;
  }
`;

export const PrimaryButton = styled.button`
  background: linear-gradient(90deg, #ff7a18, #ffcc00);
  color: #081018;
  border: none;
  padding: 10px 16px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 6px 18px rgba(255,124,24,0.14);
  transition: transform 160ms ease, box-shadow 160ms ease;

  &:hover { transform: translateY(-3px); }
  &:active { transform: translateY(0); }
`;

export const SecondaryButton = styled.button`
  background: transparent;
  color: #e6eef8;
  border: 1px solid rgba(255,255,255,0.06);
  padding: 10px 14px;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background: rgba(255,255,255,0.02);
  }
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${float} 3s ease-in-out infinite;
`;

export const SvgWrapper = styled.div`
  width: 320px;
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: auto;
    filter: drop-shadow(0 8px 30px rgba(0,0,0,0.6));
  }
`;
