import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #f4efd2;
  border-radius: ${props => props.theme.radii.normal};
  border: ${props => `1px solid ${props.theme.colors.black}`};
  padding-bottom: ${props => props.theme.spacing(4)}; //16
  box-shadow: ${props => props.theme.shadows.standart};
`;

export const Title = styled.h2`
  font-size: ${props => props.theme.fontSizes.m};
  text-align: center;
`;
export const InformWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const InformText = styled.p`
  font-size: ${props => props.theme.fontSizes.s};
`;

export const ChipTitle = styled.h3`
  margin-left: ${props => props.theme.space[4]}px; //16
`;

export const ChipWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const Chip = styled.p`
  padding: 6px;
  border: ${props => `1px solid ${props.theme.colors.black}`};
  border-radius: ${props => props.theme.radii.normal};

  background-color: ${({ variant, isActive, theme }) => {
    console.log(theme);
    switch (variant) {
      case 'easy':
        return isActive && theme.colors.green;

      case 'medium':
        return isActive && theme.colors.orange;

      case 'hard':
        return isActive && 'red';

      default:
        break;
    }
  }};

  ${props => console.log(props)}
`;
