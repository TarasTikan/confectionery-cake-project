import styled from 'styled-components';

export const LoaderWrap = styled.div`
  min-height: 200px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;

  background: linear-gradient(
    180deg,
    rgba(248, 240, 255, 0.6),
    rgba(255, 255, 255, 0.6)
  );

  border-radius: 24px;
`;

export const LoaderText = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: #7a6f99;
`;