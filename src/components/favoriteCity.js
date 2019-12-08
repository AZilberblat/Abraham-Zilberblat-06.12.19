import React, { useState, useEffect } from 'react';
import { Card } from 'antd';
import "./weather.css"

export default class FavoriteCity extends React.Component{

    render(){
       const {city,temperture,title} = this.props;


        return (
            <div className="component1">
                <h1>{city}</h1>
                <h3>{temperture}</h3>
                <h3>{title}</h3>
            </div>

        )
    }
}