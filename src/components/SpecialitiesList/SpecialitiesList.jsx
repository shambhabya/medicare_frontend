// SpecialitiesList.js
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import SpecialitiesItem from '../SpecialitiesItem/SpecialitiesItem';
import "./specialitiesList.scss"

const SpecialitiesList = () => {
  const [specialities, setSpecialities] = useState([]);



  useEffect(() => {
    axios.get("https://medicarebackend-qiax.onrender.com/api/specialities")
      .then(response => {
        setSpecialities(response.data);
      })
      .catch(error => {
        console.error('Error fetching specialities:', error);
      });
  }, []);


  return (
    <div>
      <h1>Book an appointment for an in-clinic consultation</h1>
      <h2>Find experience doctors across all specialities</h2>
      <div className="wrapper">
          {specialities.map((speciality, index) => (
          <SpecialitiesItem speciality={speciality} key={index}/>
        ))}
         

        </div>
    </div>
  );
};

export default SpecialitiesList;
