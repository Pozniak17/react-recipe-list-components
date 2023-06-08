import PropTypes from 'prop-types';
import {
  Wrapper,
  Title,
  InformWrapper,
  InformText,
  ChipTitle,
  ChipWrapper,
  Chip,
} from './Recipe.styled';
import { BsAlarm } from 'react-icons/bs';
import { HiOutlineChartPie, HiOutlineChartBar } from 'react-icons/hi';

export const Recipe = ({
  recipesItem: { id, name, image, time, servings, calories, difficulty },
}) => {
  //   console.log(recipesItem);
  return (
    <Wrapper key={id}>
      <Title>{name}</Title>
      <img src={image} width={300} alt={name} />
      <InformWrapper>
        <InformText>
          <BsAlarm /> {time} min
        </InformText>

        <InformText>
          <HiOutlineChartPie /> {servings} servings
        </InformText>

        <InformText>
          <HiOutlineChartBar /> {calories} calories
        </InformText>
      </InformWrapper>
      <ChipTitle>Difficulty</ChipTitle>
      <ChipWrapper>
        <Chip variant="easy" isActive={difficulty === 'easy'}>
          Easy
        </Chip>
        <Chip variant="medium" isActive={difficulty === 'medium'}>
          Medium
        </Chip>
        <Chip variant="hard" isActive={difficulty === 'hard'}>
          Hard
        </Chip>
      </ChipWrapper>
    </Wrapper>
  );
};

Recipe.propTypes = {
  recipesItem: PropTypes.exact({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    servings: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']),
  }).isRequired,
};
