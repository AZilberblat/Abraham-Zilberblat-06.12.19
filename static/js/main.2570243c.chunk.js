(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{135:function(e,t,a){e.exports=a(219)},209:function(e,t,a){},219:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(3),c=a.n(i),o=a(16),l=a(17),s=a(19),u=a(18),m=a(20),h=a(90),d=a(230),y=a(130),v=a(95),f=a(13),p=(a(72),"http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=".concat("5QdG89dKykTEr5xjK0rnYXxZN9xy5D5r","&q="),[{Version:1,Key:"328328",Type:"City",Rank:10,LocalizedName:"London",Country:{ID:"GB",LocalizedName:"United Kingdom"},AdministrativeArea:{ID:"LND",LocalizedName:"London"}},{Version:1,Key:"264120",Type:"City",Rank:10,LocalizedName:"Lima",Country:{ID:"PE",LocalizedName:"Peru"},AdministrativeArea:{ID:"LMA",LocalizedName:"Lima"}},{Version:1,Key:"102246",Type:"City",Rank:11,LocalizedName:"Lanzhou",Country:{ID:"CN",LocalizedName:"China"},AdministrativeArea:{ID:"GS",LocalizedName:"Gansu"}},{Version:1,Key:"260622",Type:"City",Rank:11,LocalizedName:"Lahore",Country:{ID:"PK",LocalizedName:"Pakistan"},AdministrativeArea:{ID:"PB",LocalizedName:"Punjab"}},{Version:1,Key:"58668",Type:"City",Rank:13,LocalizedName:"Langfang",Country:{ID:"CN",LocalizedName:"China"},AdministrativeArea:{ID:"HE",LocalizedName:"Hebei"}},{Version:1,Key:"59411",Type:"City",Rank:13,LocalizedName:"Loudi",Country:{ID:"CN",LocalizedName:"China"},AdministrativeArea:{ID:"HN",LocalizedName:"Hunan"}},{Version:1,Key:"60972",Type:"City",Rank:13,LocalizedName:"Leshan",Country:{ID:"CN",LocalizedName:"China"},AdministrativeArea:{ID:"SC",LocalizedName:"Sichuan"}},{Version:1,Key:"60636",Type:"City",Rank:13,LocalizedName:"Liaocheng",Country:{ID:"CN",LocalizedName:"China"},AdministrativeArea:{ID:"SD",LocalizedName:"Shandong"}},{Version:1,Key:"60637",Type:"City",Rank:13,LocalizedName:"Linyi",Country:{ID:"CN",LocalizedName:"China"},AdministrativeArea:{ID:"SD",LocalizedName:"Shandong"}},{Version:1,Key:"60838",Type:"City",Rank:13,LocalizedName:"Linfen",Country:{ID:"CN",LocalizedName:"China"},AdministrativeArea:{ID:"SX",LocalizedName:"Shanxi"}}]),N=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={dataSource:[]},a.onSearch=e.onSearch,a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"handleSearch",value:function(e){""!==e&&this.setState({dataSource:p})}},{key:"renderOption",value:function(e){return r.a.createElement(h.a.Option,{key:e.Key,text:e.LocalizedName},r.a.createElement("div",{className:"global-search-item"},r.a.createElement("span",{className:"global-search-item-desc"},e.LocalizedName)))}},{key:"onSelect",value:function(e){console.log(e),console.log(this.state.dataSource);var t=this.state.dataSource.filter((function(t){return t.Key==e}));console.log(t),this.onSearch(e,t[0].LocalizedName)}},{key:"render",value:function(){this.state.dataSource;return r.a.createElement("div",{className:"global-search-wrapper",style:{width:300}},r.a.createElement(d.a,{className:"global-search",size:"large",style:{width:"100%"},dataSource:this.state.dataSource.map(this.renderOption.bind(this)),onSelect:this.onSelect.bind(this),onSearch:this.handleSearch.bind(this),placeholder:"input here",optionLabelProp:"text"},r.a.createElement(y.a,{suffix:r.a.createElement(v.a,{className:"search-btn",style:{marginRight:-12},size:"large",type:"primary"},r.a.createElement(f.a,{type:"search"}))})))}}]),t}(r.a.Component),b=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.daily,a=e.temperture;return r.a.createElement("div",null,r.a.createElement("h1",null,t),r.a.createElement("h3",null,a))}}]),t}(r.a.Component),E=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.temperture,n=e.title;return r.a.createElement("div",null,r.a.createElement("h1",null,t),r.a.createElement("h3",null,a),r.a.createElement("h3",null,n))}}]),t}(r.a.Component),k=a(220),C=a(221),L=a(127),O=a.n(L),S="1kcUIzdd1iAg2buP9AueA3PRqDSZdO2Y",D="?apikey=".concat(S,"&metric=true"),j="https://dataservice.accuweather.com/currentconditions/v1/",z=function(e){function t(e){var a;Object(o.a)(this,t);return(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={forecast:[],dayforcast:null,cityName:"Tel-Aviv",cityKey:"215854",favoritesDisabled:a.initDisableFavorite("215854")},a.refreshWeather("215854","Tel-Aviv"),a.checkFavorites("215854"),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"initDisableFavorite",value:function(e){var t=JSON.parse(localStorage.getItem("favorites"));return!!t&&!!t[e]}},{key:"checkFavorites",value:function(e){var t=JSON.parse(localStorage.getItem("favorites"));if(t){var a=!!t[e];this.setState({favoritesDisabled:a})}else this.setState({favoritesDisabled:!1})}},{key:"refreshWeather",value:function(e,t){var a=this;this.checkFavorites(e),this.onSearchDaily(e),fetch("https://dataservice.accuweather.com/forecasts/v1/daily/5day/"+e+D).then((function(e){return e.json()})).then((function(n){a.setState({forecast:n.DailyForecasts,cityName:t,cityKey:e})}))}},{key:"onSearchDaily",value:function(e){var t=this;fetch(j+e+"?apikey=".concat(S)).then((function(e){return e.json()})).then((function(e){t.setState({dayforcast:e})}))}},{key:"addToFavorites",value:function(){var e=JSON.parse(localStorage.getItem("favorites"));e||(e={}),e[this.state.cityKey]={city:this.state.cityName},localStorage.setItem("favorites",JSON.stringify(e)),this.setState({favoritesDisabled:!0})}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return console.log(this.state.dayforcast),null!=this.state.dayforcast?r.a.createElement("div",{className:"CurrentWeather"},r.a.createElement("header",{className:"App-header"},r.a.createElement(N,{onSearch:this.refreshWeather.bind(this)})),r.a.createElement("div",{className:"squareContainer"},r.a.createElement("div",{className:"dailyForecast"},this.state.dayforcast&&r.a.createElement(E,{className:"currentWeather",name:this.state.cityName,temperture:this.state.dayforcast[0].Temperature.Metric.Value,title:this.state.dayforcast[0].WeatherText}),r.a.createElement(k.a,{type:"primary",disabled:this.state.favoritesDisabled,onClick:this.addToFavorites.bind(this)},"Add to favorites")),r.a.createElement("table",{className:"fiveDayGrid"},r.a.createElement("tr",null,this.state.forecast.map((function(e,t){return r.a.createElement("td",{className:"component1"},"  ",r.a.createElement(b,{daily:O()(new Date(e.Date),"dddd").substring(0,3),temperture:e.Temperature.Maximum.Value,key:t})," ")})))))):r.a.createElement(C.a,{size:"large",className:"spin"})}}]),t}(r.a.Component),g=a(222),A=a(223),I=a(224),T=a(229),K=a(225),V=a(226),x=a(227),w=a(228),F=a(89),R=a(38),P=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.city,a=e.temperture,n=e.title;return r.a.createElement("div",{className:"component1"},r.a.createElement("h1",null,t),r.a.createElement("h3",null,a),r.a.createElement("h3",null,n))}}]),t}(r.a.Component),J=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={favorites:e.loadFavorites(),favoritesDetails:[]},e.componentDidMount(),e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"loadFavorites",value:function(){var e=JSON.parse(localStorage.getItem("favorites"));if(!e)return[];for(var t in e)e[t].loaded=!1;return e}},{key:"componentDidMount",value:function(){var e=this,t=this.state.favorites,a=function(a){fetch(j+a+"?apikey=".concat(S)).then((function(e){return e.json()})).then((function(n){var r=n[0];console.log(r),r.city=t[a].city,r.loaded=!0;var i=e.state.favorites;i[a]=r,e.setState({favorites:i})}))};for(var n in t)a(n)}},{key:"toCityView",value:function(e,t){if(console.log("favorite is: "+JSON.stringify(e)),e.loaded)return r.a.createElement("td",null,r.a.createElement(P,{city:e.city,title:e.WeatherText,temperture:e.Temperature.Metric.Value}))}},{key:"render",value:function(){var e=this,t=this.state.favorites;return r.a.createElement("div",null,r.a.createElement("h1",null,"Favorites"),r.a.createElement("table",null,r.a.createElement("tr",null,Object.keys(t).map((function(a,n){return e.toCityView(t[a],n)})))))}}]),t}(r.a.Component),W=function(){return r.a.createElement(R.c,null,r.a.createElement(R.a,{exact:!0,path:"/",component:z}),r.a.createElement(R.a,{exact:!0,path:"/favorites",component:J}))},M=(a(209),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"navBar",value:function(){return r.a.createElement(g.a,{color:"light",light:!0,expand:"md"},r.a.createElement(A.a,{href:"/"},"Home"),r.a.createElement(I.a,{onClick:function(){}}),r.a.createElement(T.a,{isOpen:!0,navbar:!0},r.a.createElement(K.a,{className:"mr-auto",navbar:!0},r.a.createElement(V.a,null,r.a.createElement(x.a,{href:"/favorites/"},"Favorites"))),r.a.createElement(w.a,null,"Herolo Weather Task")))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(F.a,{basename:"/Abraham-Zilberblat-06.12.1"},r.a.createElement("header",{className:"App-header"},this.navBar()),r.a.createElement("div",{className:"container"},r.a.createElement(W,null))))}}]),t}(r.a.Component));a(217),a(218);c.a.render(r.a.createElement(M,null),document.getElementById("root"))},72:function(e,t,a){}},[[135,1,2]]]);
//# sourceMappingURL=main.2570243c.chunk.js.map