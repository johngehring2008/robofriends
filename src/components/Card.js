import React from 'react';

const Card = ({ name, email, id }) => {
  return (
    <a href={`mailto:${email}`}>
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img src={`https://robohash.org/${id}?200x200`} alt="robots"/>
      <div>
        <h2>{name}</h2>
        {email}
      </div>
    </div>
    </a>
  );
}

export default Card;