import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./commom/Header";
import PageNotFound from "./PageNotFound";
import CoursesPages from "./courses/CoursesPages";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursesPages} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
};

export default App;
