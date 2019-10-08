import React from 'react';
import AddToCalendar from './components/AddToCalendar';

const App: React.FC = () => {
  return (
    <div className="App">
      <p className="save-the-date">Danny and Alyssa's wedding<br />August 15, 2020</p>
      <AddToCalendar />
      <p className="details">Check back later for more details</p>
    </div>
  );
}

export default App;
