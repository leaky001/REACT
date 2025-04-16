import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';






const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const delayBounce = setTimeout(() => {
      const fetchCountries = async () => {
        if (query.trim() === "") {
          setCountries([]);
          setLoading(false);
          return;
        }

        setLoading(true);
        try {
          const response = await fetch(`https://restcountries.com/v3.1/name/${query}`);
          if (!response.ok) {
            setCountries([]);
          } else {
            const data = await response.json();
            setCountries(data);
          }
        } catch (error) {
          console.error("Error fetching countries:", error);
          setCountries([]);
        } finally {
          setLoading(false);
        }
      };

      fetchCountries();
    }, 500);

    return () => clearTimeout(delayBounce);
  }, [query]);

  return (
    <div>
      <h1>Search for a country</h1>
      <input
        type="text"
        placeholder="Enter country name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {loading ? (
        <p>Loading...</p>
      ) : countries.length > 0 ? (
        <ul>
          {countries.map((country) => (
            <li key={country.cca3}>
              {country.name.common}
              {" "}
              <Link to={`/country/${country.cca3}`}>
                <button className='bg-blue-600 text-white px-4 py-2 rounded'>View Details</button>
              </Link>
            </li>
          ))}
        </ul>
      ) : query ? (
        <p>No countries found</p>
      ) : null}
    </div>
  );
};

export default Countries;