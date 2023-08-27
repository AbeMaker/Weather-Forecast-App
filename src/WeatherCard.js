import React from 'react';
import { Card } from 'react-bootstrap';

const WeatherCard = ({ weatherData }) => {
  const weatherList = weatherData.list.slice(0, 5);

  return (
    <div>
      {weatherList.map((item, index) => (
        <Card key={index}>
          <Card.Body>
            <Card.Title>{item.dt_txt}</Card.Title>
            <Card.Text>Temperature: {item.main.temp}</Card.Text>
            <Card.Text>Humidity: {item.main.humidity}</Card.Text>
            <Card.Text>{item.weather[0].description}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default WeatherCard;
