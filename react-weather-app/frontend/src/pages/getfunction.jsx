import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Get = () => {
  const { city } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (city) {
      console.log(`Fetching data from ${city}`)
      axios.get (`/api/predict/${city}`)
        .then((res) => {
          console.log('Response data:', res.data)
          setData(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log('Error:', err);	
          setError(err);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [city]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return null;

  return (
    <div>
      <h1>Weatherprediction for biking in {city}</h1>
      <ul>
        {Object.entries(data.data).map(([date, canBike]) => (
          <li key={date}>
            {date}: {canBike ? "Yes" : "No"}
          </li>
        ))}
      </ul>
      <a href="/weatherinput" className = "link-style">Go to weatherinput</a>
    </div>
  );
};

export default Get;