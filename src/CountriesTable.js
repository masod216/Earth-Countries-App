import React from 'react';
import './countriesTable.css';

const CountriesTable = ({ data }) => {
    return (
        <table>
            <tr className="titles">
                <th>Name</th>
                <th>Native Name</th>
                <th>Capital</th>
                <th>Population</th>
                <th>Flag</th>
            </tr>
            {data.map((country, index) => (
                    <tr className={index % 2 ? 'greenRow' : 'redRow'}>
                        <td>{country.name}</td>
                        <td>{country.nativeName}</td>
                        <td>{country.capital}</td>
                        <td>{country.population}</td>
                        <td><img src={country.flag}/></td>
                    </tr>
                ))}
        </table>

    )
}


export default CountriesTable;