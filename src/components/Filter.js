// src/components/Filter.js
import React from 'react';

const Filter = ({ filter, setFilter }) => {
  return (
    <input
      type="text"
      placeholder="Buscar por nombre"
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
    />
  );
};

export default Filter;
