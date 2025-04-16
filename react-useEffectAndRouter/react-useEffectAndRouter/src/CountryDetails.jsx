import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';





const CountryDetails = () => {
  const { code } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
        const data = await res.json();
        setCountry(data[0]);
      } catch (err) {
        console.error('Error fetching country details:', err);
      } finally {
        setLoading(false);
      }
    };


    fetchCountry();
  }, [code]);

  if(country === "nigera"){
    
  }

  if (loading) return <p>Loading country details...</p>;

  if (!country) return <p>Country not found.</p>;

  return (
    <div>
      <h2>{country.name.common}</h2>
      <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} width="150" />
      <p><strong>Capital:</strong> {country.capital?.[0]}</p>
      <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
      <p><strong>Region:</strong> {country.region}</p>
      <p><strong>Subregion:</strong> {country.subregion}</p>
      <p><strong>Official Language:</strong> {Object.values(country.languages || {}).join(", ")}</p>
      <p><strong>Currency:</strong> {
        Object.values(country.currencies || {}).map(cur => `${cur.name} (${cur.symbol})`).join(", ")
      }</p>
    </div>
  );
};

export default CountryDetails;