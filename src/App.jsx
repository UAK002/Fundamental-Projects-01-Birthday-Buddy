import { useState } from 'react';
import data from './data';

const App = () => {
  const [people, setPeople] = useState(data);
  console.log(people);
  return <h2>Birthday Reminder - Starter</h2>;
  // console.log('test');
};
export default App;
