import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setCategories, setError } from '../Store/Slices/slice';

function DetailsPage() {
  const { categoryId } = useParams();
  const dispatch = useDispatch();
  const category = useSelector((state) =>
    state.categories.categories.find((cat) => cat.id === categoryId)
  );

  useEffect(() => {
    fetch('https://emojihub.yurace.pro/api/all')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch.');
        }
        return response.json();
      })
      .then((data) => {
        dispatch(setCategories(data));
      })
      .catch((error) => {
        dispatch(setError(error.message));
      });
  }, [dispatch]);

  if (!category) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="details-container">
      <h2 className="category-name">{category.name}</h2>
      <p className="category-details">{category.details}</p>
      <Link className="back-link" to="/">Back</Link>
    </div>
  );
}

export default DetailsPage;
