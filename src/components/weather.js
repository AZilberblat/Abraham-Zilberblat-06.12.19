import React, { useState, useEffect } from 'react';
import SearchBar from "./SearchBar"
import WeatherDailyView from "./WeatherDailyView"
import "./weather.css"
import CurrentWeatherLocation from "./CurrentWeather"
import { Button } from 'reactstrap';
import { Spin } from 'antd';
import dateformat from 'dateformat'

export const API ="rRN6dTLDIhr3Dl8sJX9PtuLR8cuvDAPt"
//"5QdG89dKykTEr5xjK0rnYXxZN9xy5D5r" first api key
//"rRN6dTLDIhr3Dl8sJX9PtuLR8cuvDAPt"; 
const POST_FIX=`?apikey=${API}&metric=true`
const FORECAST_5DAY_URL=`http://dataservice.accuweather.com/forecasts/v1/daily/5day/`
export const FORECAST_ONE_DAY=`http://dataservice.accuweather.com/currentconditions/v1/`

  
   export default class CurrentWeather extends React.Component {

    constructor(props){
        super(props);
        const defaultKey="215854"
        const defaultCity="Tel-Aviv"
        this.state={
            forecast:[],
            dayforcast:null, //onedaydummy
            cityName:defaultCity,
            cityKey:defaultKey,
            favoritesDisabled:this.initDisableFavorite(defaultKey)
            
        }

        this.refreshWeather(defaultKey,defaultCity)
        this.checkFavorites(defaultKey)

    }

    initDisableFavorite(value){
      let favorites = JSON.parse(localStorage.getItem("favorites"))
      if(favorites){
       const isFavorite = !!favorites[value]
       return isFavorite
      }
      return false
    }

    checkFavorites(value){
      let favorites = JSON.parse(localStorage.getItem("favorites"))
      if(favorites){
       const isFavorite = !!favorites[value]
       this.setState({
         favoritesDisabled:isFavorite
       })
      }
      else{
        this.setState({
          favoritesDisabled:false
        })
      }

    }

    refreshWeather(value, localizedName){
      this.checkFavorites(value);
       this.onSearchDaily(value);
        fetch(FORECAST_5DAY_URL+value+POST_FIX).then(
            (response)=>response.json()
        ).then(
            (body)=>{
                //console.log("Refreash five day"+JSON.stringify(body))
            this.setState({
               forecast: body.DailyForecasts,
               //forecast:fiveDayDummy,
               cityName: localizedName,
               cityKey: value
                
                
                
            })
            
                
             })
    }

    onSearchDaily(value){
      
      fetch(FORECAST_ONE_DAY+value+`?apikey=${API}`).then(
        (response)=>response.json()
    ).then(
        (body)=>{
    //         console.log("Rfresh one day"+JSON.stringify(body))
        this.setState({
          //body
            dayforcast:body,
            
            
            
        })
        
            
         })
     

    }

    addToFavorites(){
      let favorites = JSON.parse(localStorage.getItem("favorites"))
      if(!favorites){
        favorites={}
      }
     
      favorites[this.state.cityKey]={"city":this.state.cityName}
      localStorage.setItem("favorites",JSON.stringify(favorites))
      this.setState({
        favoritesDisabled:true
      })
      
      

    }

    componentDidMount(){
      
    }

    render(){

     console.log(this.state.dayforcast);
     


    return (

      this.state.dayforcast!=null ? (
        
      <div className="CurrentWeather">
        <header className="App-header">
           <SearchBar onSearch={this.refreshWeather.bind(this)}  />
        </header>
        <div className="squareContainer">
        <div className="dailyForecast">
         {this.state.dayforcast && <CurrentWeatherLocation className="currentWeather" name={this.state.cityName} temperture={this.state.dayforcast[0].Temperature.Metric.Value} title={this.state.dayforcast[0].WeatherText}/>}
         <Button type="primary" disabled={this.state.favoritesDisabled} onClick={this.addToFavorites.bind(this)}>Add to favorites</Button>
        </div>
        <table className="fiveDayGrid">
            <tr>  
        {this.state.forecast.map((dayInfo,index)=>
          <td className="component1">  <WeatherDailyView daily={dateformat(new Date(dayInfo.Date),"dddd").substring(0,3)} temperture={dayInfo.Temperature.Maximum.Value} key={index} /> </td>
        
            
        )}
        </tr>  
        </table> 
        </div>
      </div>
      ) : (<Spin size="large" className="spin"/>)
    );
  }
    }


    
  