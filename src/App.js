import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import DetailsPage from './components/DetailsPage';
import { Provider } from 'react-redux';
import store from './Store';

function App() {
  return (
    <>
      <header>
        <h1>Emoji Application</h1>
        <h2>Main categories of Emojis</h2>
      </header>
      <main>
        <Provider store={store}>
          <Router>
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route path="/details/:categoryId" element={<DetailsPage />} />
            </Routes>
          </Router>
        </Provider>
      </main>
    </>
  );
}

export default App;
