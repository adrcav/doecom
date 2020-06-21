import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { margins } from './components/theme';

import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/Loading';
// import { errorMessage } from './services/errors';

import Main from './containers/Main';

const Router = () => {
  let loading = false;

  if (loading) return (<Loading />);

  return (
    <BrowserRouter>
      <Header />
      <div style={{ marginTop: margins.header }}>
        <Switch>
          <Route path="/" component={Main} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
