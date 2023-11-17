// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SpecialitiesList from './components/SpecialitiesList/SpecialitiesList';
import DoctorsList from './components/DoctorsList/DoctorsList';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<SpecialitiesList />} />
        <Route path="/:speciality" element={<DoctorsList/>} />
      </Routes>
    </Router>
  );
};

export default App;
