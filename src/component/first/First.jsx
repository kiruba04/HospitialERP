import React from 'react';
import "./first.css";
import Button from 'react-bootstrap/Button';
const First = () => {
  return (
    <div className='text background'>

      <div className='respon'>
      <div className='animated-text'>
      Leading,
      </div>
      <div className='animated-text-2 text-success'> 
       healthcare
      </div>
      <div className='animated-text-3'>
      with compassion and innovation.
      </div>
      <div className='animated-text-par'>
      "Take the first step towards a healthier you—schedule your appointment today!"

      </div>
        <div className='animated-text-but'> 
        <Button variant="outline-success" >Appointment</Button>
        </div>
    </div>
    </div>
  );
}

export default First;
