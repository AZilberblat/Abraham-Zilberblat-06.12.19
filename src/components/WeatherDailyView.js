import React, { useState, useEffect } from 'react';
import { Card } from 'antd';

export default class WeatherDailyView extends React.Component{

    render(){
       const {daily,temperture} = this.props;


        return (
            <div>
                <h1>{daily}</h1>
                <h3>{temperture}</h3>
            </div>

        )
    }
}