import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  ${({ theme }) =>
    theme.mq({
      flexDirection: ['column', 'column', 'row', 'row'],
    })};
  align-items: center;
  justify-content: center;
  padding: 32px;
  gap: 20px;
  flex-wrap: wrap;
`;

export const ElementImage = styled.div<{ $url: string }>`
  background-image: url(${({ $url }) => $url});
  background-size: cover;
  background-position: center;
  height: 180px;
  width: 100%;
  border-radius: 14px 14px 0 0;
  transition: transform 0.3s;
`;

export const ElementContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--surface);
  width: 250px;
  border-radius: 18px;
  overflow: hidden;
  gap: 0;
  cursor: pointer;
  border: 1px solid var(--border);
  transition: all 0.2s;

  &:hover {
    border-color: var(--accent-border);
    transform: translateY(-4px);
    box-shadow: 0 12px 40px var(--accent-glow);

    ${ElementImage} {
      transform: scale(1.04);
    }
  }
`;

export const ElementContent = styled.div`
  padding: 16px 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const ElementTitle = styled.div`
  font-family: var(--font-head);
  font-weight: 700;
  font-size: 15px;
  color: var(--text);
  transition: color 0.2s;

  ${ElementContainer}:hover & {
    color: var(--accent);
  }
`;
