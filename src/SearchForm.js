import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const SearchForm = ({ setCity }) => {
  const [inputCity, setInputCity] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setCity(inputCity);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Enter city"
          value={inputCity}
          onChange={(e) => setInputCity(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Search
      </Button>
    </Form>
  );
};

export default SearchForm;
