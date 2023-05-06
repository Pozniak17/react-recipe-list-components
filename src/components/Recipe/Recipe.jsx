import PropTypes from 'prop-types';
import { BsAlarm } from 'react-icons/bs';
import { HiOutlineChartPie, HiOutlineChartBar } from 'react-icons/hi';

export const Recipe = ({
  recipesItem: { id, name, image, time, servings, calories },
}) => {
  //   console.log(recipesItem);
  return (
    <div key={id}>
      <h2>{name}</h2>
      <img src={image} width={240} alt={name} />
      <div>
        <p>
          <BsAlarm /> {time} min
        </p>

        <p>
          <HiOutlineChartPie /> {servings} servings
        </p>

        <p>
          <HiOutlineChartBar /> {calories} calories
        </p>
      </div>
      <h3>Difficulty</h3>
      <div>
        <span>Easy</span>
        <span>Medium</span>
        <span>Hard</span>
      </div>
    </div>
  );
};

Recipe.propTypes = {
  recipesItem: PropTypes.exact({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    servings: PropTypes.string.isRequired,
    calories: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    difficulty: PropTypes.oneOf('easy', 'medium', 'hard'),
  }).isRequired,
};
