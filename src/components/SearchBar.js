import React, { useState, useEffect } from "react"
import { Icon, Button, Input, AutoComplete, Select } from "antd";
import "./weather.css"

const api = "5QdG89dKykTEr5xjK0rnYXxZN9xy5D5r"
const AUTO_COMPLETE_URL =`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${api}&q=`
const completeDummy = [{"Version":1,"Key":"328328","Type":"City","Rank":10,"LocalizedName":"London","Country":{"ID":"GB","LocalizedName":"United Kingdom"},"AdministrativeArea":{"ID":"LND","LocalizedName":"London"}},{"Version":1,"Key":"264120","Type":"City","Rank":10,"LocalizedName":"Lima","Country":{"ID":"PE","LocalizedName":"Peru"},"AdministrativeArea":{"ID":"LMA","LocalizedName":"Lima"}},{"Version":1,"Key":"102246","Type":"City","Rank":11,"LocalizedName":"Lanzhou","Country":{"ID":"CN","LocalizedName":"China"},"AdministrativeArea":{"ID":"GS","LocalizedName":"Gansu"}},{"Version":1,"Key":"260622","Type":"City","Rank":11,"LocalizedName":"Lahore","Country":{"ID":"PK","LocalizedName":"Pakistan"},"AdministrativeArea":{"ID":"PB","LocalizedName":"Punjab"}},{"Version":1,"Key":"58668","Type":"City","Rank":13,"LocalizedName":"Langfang","Country":{"ID":"CN","LocalizedName":"China"},"AdministrativeArea":{"ID":"HE","LocalizedName":"Hebei"}},{"Version":1,"Key":"59411","Type":"City","Rank":13,"LocalizedName":"Loudi","Country":{"ID":"CN","LocalizedName":"China"},"AdministrativeArea":{"ID":"HN","LocalizedName":"Hunan"}},{"Version":1,"Key":"60972","Type":"City","Rank":13,"LocalizedName":"Leshan","Country":{"ID":"CN","LocalizedName":"China"},"AdministrativeArea":{"ID":"SC","LocalizedName":"Sichuan"}},{"Version":1,"Key":"60636","Type":"City","Rank":13,"LocalizedName":"Liaocheng","Country":{"ID":"CN","LocalizedName":"China"},"AdministrativeArea":{"ID":"SD","LocalizedName":"Shandong"}},{"Version":1,"Key":"60637","Type":"City","Rank":13,"LocalizedName":"Linyi","Country":{"ID":"CN","LocalizedName":"China"},"AdministrativeArea":{"ID":"SD","LocalizedName":"Shandong"}},{"Version":1,"Key":"60838","Type":"City","Rank":13,"LocalizedName":"Linfen","Country":{"ID":"CN","LocalizedName":"China"},"AdministrativeArea":{"ID":"SX","LocalizedName":"Shanxi"}}]
export default class SearchBar extends React.Component{



    constructor(props){
        super(props);
        this.state={
            dataSource: []
        }
        this.onSearch=props.onSearch;
    }


    handleSearch(value){
      if(value===""){return}
      
        // fetch(AUTO_COMPLETE_URL+value).then(
        //     (response)=>response.json()
        // ).then(
        //     (body)=>{
            this.setState({
                //body.map completeDummy
                dataSource: completeDummy//.map(this.renderOption.bind(this))
            })
            // }
        // )
       
        

    }

    renderOption(item) {
        return (
          <Select.Option key={item.Key} text={item.LocalizedName}>
            <div className="global-search-item">
              <span className="global-search-item-desc">
                 {item.LocalizedName} 
              </span>
            </div>
          </Select.Option>
        );
      }

    onSelect(value){
        console.log(value);
        console.log(this.state.dataSource);
        
        const selectedCity=this.state.dataSource.filter((item)=>item.Key==value)
        console.log(selectedCity);
        
        this.onSearch(value,selectedCity[0].LocalizedName);

    }


    render() {
        const { dataSource } = this.state;
        return (
          <div className="global-search-wrapper" style={{ width: 300 }}>
            <AutoComplete
              className="global-search"
              size="large"
              style={{ width: '100%' }}
              dataSource={this.state.dataSource.map(this.renderOption.bind(this))}
              onSelect={this.onSelect.bind(this)}
              onSearch={this.handleSearch.bind(this)}
              placeholder="input here"
              optionLabelProp="text"
            >
              <Input
                suffix={
                  <Button
                    className="search-btn"
                    style={{ marginRight: -12 }}
                    size="large"
                    type="primary"
                  >
                    <Icon type="search" />
                  </Button>
                }
              />
            </AutoComplete>
          </div>
        );
      }

}