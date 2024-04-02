import React, { Component } from 'react';

class Filter extends Component {
  render() {
    const { filter, setFilter } = this.props;
    return (
      <input
        type="text"
        placeholder="Buscar por nombre"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
    );
  }
}

export default Filter;
