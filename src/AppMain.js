import React, {useState} from 'react';
import CountriesTable from "./CountriesTable";
import './appMain.css';

class AppMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countriesData: [],
            filteredCountries: [],
        };
    }
    componentDidMount() {
        fetch("https://restcountries.eu/rest/v2/all")
            .then(res => res.json())
            .then(response => {
                this.setState({ countriesData: response, filteredCountries: response })
            })
    }

    onInputChange = (text) => {
        const { countriesData } = this.state;
        if (!text.target.value) {
            this.setState({ filteredCountries: [] });
        }

        const filteredCountries = countriesData.filter(country => {
            return country.name.toLowerCase().includes(text.target.value.toLowerCase())
                || country.capital.toLowerCase().includes(text.target.value.toLowerCase())
        });
        this.setState({ filteredCountries: filteredCountries });
    }

    render() {
        return (
            <div className="appMain">
                <div className="inputWrapper">
                    <span>Search</span>
                    <input onChange={this.onInputChange}/>
                </div>
                <CountriesTable data={this.state.filteredCountries}/>
            </div>
        );
    }


}

export default AppMain;