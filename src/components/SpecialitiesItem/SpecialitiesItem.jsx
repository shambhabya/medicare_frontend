import React from 'react'
import { Link } from 'react-router-dom';
import "./specialitiesItem.scss"

function SpecialitiesItem({speciality}) {
  return (
    <div key={speciality.name} className='spec'>
            <Link to={`/${speciality.name}`}>
              <img src={`http://localhost:3000/images/${speciality.image}`} alt="" />
              <div className='name'>{speciality.name} </div>
              <div className='desc'>{speciality.description}</div>
            </Link>
          </div>
  )
}

export default SpecialitiesItem