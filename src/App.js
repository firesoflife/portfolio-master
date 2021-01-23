import React, { Fragment } from 'react';
import './main.scss';
import Header from './pages/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import MobileNav from './Components/mobileMenu/MobileNav';
import Specialties from './pages/Specialties/Specialties';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';

// Data File -- Projects
import data from './data.json';

import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Fragment>
      <Navbar />
      <MobileNav />
      <Switch>
        <Route path="/home" component={Header}>
          <Header />
        </Route>
        <Route exact path="/" component={Header}>
          <Header />
        </Route>
        <Route path="/specialties" component={Specialties}>
          <Specialties />
        </Route>
        <Route path="/projects" component={Projects}>
          <Projects data={data.slides} leadingText={data.leadingText} />
        </Route>
        <Route path="/contact" component={Contact}>
          <Contact />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
