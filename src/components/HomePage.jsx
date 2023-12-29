import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCategories, updateError } from '../Store/Slices/slice';

import { Link } from 'react-router-dom';

function HomePage() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);

  useEffect(() => {
    fetch('https://emojihub.yurace.pro/api/all')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch.');
        }
        return response.json();
      })
      .then((data) => {
        dispatch(updateCategories(data));
      })
      .catch((error) => {
        dispatch(updateError(error.message));
      });
  }, [dispatch]);

  return (
    <div className="home-container">
      <h1>Emoji Metrics</h1>
      {categories.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul className="category-list">
          {categories.map((category) => (
            <li key={category.id} className="category-item">
              <Link to={`/details/${category.id}`} className="category-link">
                <div>
                  <h3>{category.name}</h3>
                  <p>{category.metric}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default HomePage;
