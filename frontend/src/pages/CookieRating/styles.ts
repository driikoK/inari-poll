import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 32px;
`;

export const Title = styled.span`
  font-family: var(--font-head);
  color: var(--text);
  font-weight: 700;
  font-size: 22px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 8px;
`;

export const RatingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
`;

export const RatingBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 50%;
`;

export const SelectWrapper = styled.div`
  display: flex;
`;
