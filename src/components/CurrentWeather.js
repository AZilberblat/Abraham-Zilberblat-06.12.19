import React, { useState, useEffect } from 'react';
import { Card } from 'antd';

export default class CurrentWeatherLocation extends React.Component{

    render(){
       const {name,temperture,title} = this.props;


        return (
            <div>
                <h1>{name}</h1>
                <h3>{temperture}</h3>
                <h3>{title}</h3>
            </div>

        )
    }
}