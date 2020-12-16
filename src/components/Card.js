import React from 'react';

const Card = ({ name, email, id, position, speciality, nickname, hours, phone }) => {
  return (
    <a href={`mailto:${email}`} className='hide-child'>

    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 cover'>
      <div className='info' style={{ backgroundImage: `url(https://robohash.org/${id}?200x200)` }}>
        <div className='h-100 w-100 child bg-black-70 br3'>
          <h4><span>Position:</span> {position}</h4>
          <h4><span>Speciality:</span> {speciality}</h4>
          <h4><span>Nickname:</span> {nickname}</h4>
          <h4><span>Hours:</span> {hours}</h4>
          <h4><span>Phone:</span> {phone}</h4>
        </div>
      </div>
      <div>
        <h2>{name}</h2>
        {email}
      </div>
      
    </div>
    </a>
  );
}

export default Card;