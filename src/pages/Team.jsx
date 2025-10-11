import React from 'react';
import { Card } from 'react-bootstrap';

const Team = () => {
  return (
    <div>
      <h1>Doctoral Students</h1> {/* Updated heading */}
      <div className="grid">
        {/* Removed Nathaniel Gordon and Matteo Calabrese Card blocks */}
        {/* <Card>Nathaniel Gordon</Card> */}
        {/* <Card>Matteo Calabrese</Card> */}
      </div>
      <h1>Undergraduate Students</h1>
      <div className="grid">
        {/* Removed Joshua Caplan and Matthew Chekhlov Card blocks */}
        {/* <Card>Joshua Caplan</Card> */}
        {/* <Card>Matthew Chekhlov</Card> */}
      </div>
    </div>
  );
};

export default Team;
