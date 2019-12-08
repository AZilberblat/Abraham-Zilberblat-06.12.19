import React from "react"
import FavoriteCity from "./favoriteCity"
import {API as A,FORECAST_ONE_DAY} from "./weather"


const API = "rRN6dTLDIhr3Dl8sJX9PtuLR8cuvDAPt"
export default class Favorites extends React.Component{


    constructor(){
        super();
        this.state={
            favorites: this.loadFavorites(),
            favoritesDetails:[]
        }
        this.componentDidMount()
    }


    loadFavorites(){
        let favorites = JSON.parse(localStorage.getItem("favorites"))
        if(!favorites){
            return []

        }
        for(let key in favorites){
            favorites[key]["loaded"]=false
        }
        return favorites

    }

    componentDidMount(){
        const favorites = this.state.favorites
        for (let cityKey in favorites){
            fetch(FORECAST_ONE_DAY+cityKey+`?apikey=${API}`).then(
                (response)=> response.json()
            ).then(
                (body)=>{
                    let bodyWithName = body[0];
                    console.log(bodyWithName);
                    
                    bodyWithName["city"] = favorites[cityKey].city
                    bodyWithName["loaded"] = true
                    let prevFavorites = this.state.favorites
                    prevFavorites[cityKey] = bodyWithName
                    this.setState({
                        favorites:prevFavorites
                            
                        
                    })
                }
                )

        }

    }

    toCityView(favorite, index){
        console.log("favorite is: "+ JSON.stringify(favorite));
        if(favorite.loaded){
        return(
            <td>
            <FavoriteCity city={favorite.city} title={favorite.WeatherText} temperture={favorite.Temperature.Metric.Value}  />
            </td>
        )
        }

    }

    render(){
        const favorites = this.state.favorites
        return(
            <div>
                <h1>
                    Favorites
                </h1>
                <table>
                    <tr>
                {Object.keys(favorites).map((key,index) =>
                    this.toCityView(favorites[key], index)
                )}
                </tr>
                </table>






            </div>
        )
    }
}