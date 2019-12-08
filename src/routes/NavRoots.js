import React from "react";
import { Route, Switch } from "react-router-dom";
import CurrentWeather from "../components/weather";
import Favorites from "../components/favorites";

export default () =>
    <Switch>
        <Route exact path="/" component={CurrentWeather} />
        <Route exact path="/favorites" component={Favorites} />
    </Switch>;