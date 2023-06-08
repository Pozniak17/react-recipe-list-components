import { Recipe } from 'components/Recipe/Recipe';
import { Container } from './RecipeList.styled';
import PropTypes from 'prop-types';

export const RecipeList = ({ recipesData }) => {
  //   console.log(recipesData);
  return (
    <Container>
      {recipesData.map(recipesItem => {
        return <Recipe key={recipesItem.id} recipesItem={recipesItem} />;
      })}
    </Container>
  );
};

RecipeList.propTypes = {
  recipesData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
