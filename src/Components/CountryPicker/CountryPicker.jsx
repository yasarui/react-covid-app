import React,{useState,useEffect} from 'react';
import { fetchCountries } from '../../api/';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css';

const CountryPicker = (props) => {
   const [countries,setCountries] = useState([]);
   useEffect(()=>{
      const fetchOptions = async () => {
            setCountries(await fetchCountries());
      }
      fetchOptions();
   },[]);
   return(
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue="" onChange={(e)=>props.handleCountryChange(e.target.value)} > 
        <option value="">Global</option>
        {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
   )
}

export default CountryPicker;