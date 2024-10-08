import { Dialog, Select, dialogClasses, selectClasses } from '@mui/material';
import styled from 'styled-components';

export const DialogContainer = styled(Dialog)`
  .${dialogClasses.paper} {
    ${({ theme }) =>
      theme.mq({
        padding: ['16px', '16px', '16px', '30px'],
      })}
    ${({ theme }) =>
      theme.mq({
        gap: ['16px', '16px', '16px', '28px'],
      })}
    border-radius: 12px;
  }
`;

export const DialogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Paragraph = styled.span`
  font-family: ${({ theme }) => theme.font.family.montserrat};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
`;

export const SubParagraph = styled.span`
  font-family: ${({ theme }) => theme.font.family.montserrat};
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  color: gray;
`;

export const Title = styled.span`
  font-family: ${({ theme }) => theme.font.family.montserrat};
  font-style: normal;
  font-weight: 600;
  ${({ theme }) =>
    theme.mq({
      fontSize: ['17px', '17px', '17px', '21px'],
    })}
  text-align: center;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px;
`;

export const ColorText = styled.span`
  color: blue;
`;

export const ErrorText = styled.span`
  font-family: ${({ theme }) => theme.font.family.montserrat};
  font-style: normal;
  font-size: 16px;
  color: red;
  margin-bottom: 0.3rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: center;
`;

export const DubControlWrapper = styled.div`
  display: flex;
  ${({ theme }) =>
    theme.mq({
      flexDirection: ['column', 'column', 'row', 'row'],
    })};
  align-items: center;
  gap: 10px;
`;

export const DubSelect = styled(Select)`
  .${selectClasses.select} {
    padding: 0 10px;
  }
`;

export const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 16px;
`;

export const PlusMinusWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`;

export const FieldContainer = styled.div`
  display: flex;
  ${({ theme }) =>
    theme.mq({
      flexDirection: ['column', 'column', 'row', 'row'],
      alignItems: ['flex-start', 'flex-start', 'center', 'center'],
    })};
  gap: 16px;
  align-items: center;
  margin: 10px 0;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`;
