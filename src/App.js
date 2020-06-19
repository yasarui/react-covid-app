import React from 'react';
import styles from './App.module.css';
import { Cards,Chart,CountryPicker } from './Components';
import { fetchData,fetchCountries } from './api';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data:{},
            country:"",
        }
    }
    async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({data:fetchedData})
    }
    async handleCountryChange(country){
       const data = await fetchData(country);
       this.setState({
           data,
           country
       })
    }
    render(){
       const  { data,country } = this.state;
       return(
          <div className={styles.container} >
             <Cards data={data} />
             <CountryPicker handleCountryChange={(country)=>this.handleCountryChange(country)} />
             <Chart data={data} country={country} />
          </div>

       ) 
    }
}

export default App;