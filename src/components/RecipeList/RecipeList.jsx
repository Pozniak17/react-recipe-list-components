import { Recipe } from 'components/Recipe/Recipe';
import PropTypes from 'prop-types';

export const RecipeList = ({ recipesData }) => {
  //   console.log(recipesData);
  return (
    <div style={{ display: 'flex', gap: 16 }}>
      {recipesData.map(recipesItem => {
        return <Recipe key={recipesItem.id} recipesItem={recipesItem} />;
      })}
    </div>
  );
};

RecipeList.propTypes = {
  recipesData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
