import { Button } from '@mui/material';
import styled from 'styled-components';

export const PageWrapper = styled.div`
  padding: 32px;
  max-width: 900px;
`;

export const CardsWrapper = styled.div`
  display: grid;
  flex-wrap: wrap;
  margin: 20px 0;
  grid-gap: 14px;
  ${({ theme }) =>
    theme.mq({
      justifyItems: 'center',
      gap: ['10px', '10px', '14px', '14px'],
      gridTemplateColumns: [
        'repeat(auto-fill, minmax(220px, 1fr))',
        'repeat(auto-fill, minmax(220px, 1fr))',
        'repeat(auto-fill, minmax(240px, 1fr))',
        'repeat(auto-fill, minmax(240px, 1fr))',
      ],
    })};
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 8px;
`;

export const SubmitButton = styled(Button)`
  position: fixed !important;
  bottom: 20px;
  && {
    ${({ theme }) =>
      theme.mq({
        right: ['16px', '16px', '50px', '50px'],
        fontSize: ['16px', '16px', '20px', '20px'],
      })};
  }
`;

export const LinkWrapper = styled.a`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 5px;
`;

export const Poster = styled.div<{ $url: string }>`
  background-image: url(${({ $url }) => $url});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  ${({ theme }) =>
    theme.mq({
      height: ['400px', '400px', '400px', '450px'],
    })};
`;
