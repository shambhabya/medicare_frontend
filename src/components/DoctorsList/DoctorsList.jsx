// DoctorsList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "./doctorsList.scss";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const DoctorsList = () => {
  const [doctors, setDoctors] = useState([]);
  const { speciality }= useParams();
 

  useEffect(() => {
    axios.get(`https://medicarebackend-qiax.onrender.com/api/doctors/${speciality}`)

      .then(response => {
        setDoctors(response.data);
      })
      .catch(error => {
        console.error('Error fetching doctors:', error);
      });
  }, [speciality]);

  return (
    <div>
      <h1>Doctors</h1>
      <div className='container'>
        {doctors.map((doctor, index) => (

          <div key={index} className='item'>

          <img src={`https://medicarebackend-qiax.onrender.com/images/${index+1}.jpg`} alt="Doctor" /> 
          
          

          <div className='content'>

            <div className='name'>{doctor.name}</div>
            <div className='speciality'>{speciality}</div>
            <div className='experience'>{doctor.experience} years experience overall</div>
            <div className='location'>Clinic Location: {doctor.clinicLocation}</div>
            <div className='fee'>{doctor.fee} $ consultation fee at clinic</div>
            <button><ThumbUpIcon/> 100%</button>

          </div>

          <div className='right'>

            <div className='available'>
            <CalendarMonthIcon  className='icon'/>
            Available Today</div>
            <button>
              <div>Book Appointment</div>
              <div>No booking fee</div>
            </button>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorsList;
