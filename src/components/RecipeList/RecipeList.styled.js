import styled from 'styled-components';

export const Container = styled.div`
  margin-top: ${props => props.theme.spacing(5)}; //20
  display: flex;
  justify-content: center;
  gap: ${props => props.theme.spacing(4)}; //16
`;
