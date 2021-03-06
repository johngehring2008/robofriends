import React from 'react';
import Card from './Card';

const Cardlist = ({ robots }) => {
  return (
    <div>
      {
        robots.map((user, i) => {
          return (
            <Card
              key={i}
              id={robots[i].id}
              firstname={robots[i].firstname}
              lastname={robots[i].lastname}
              email={robots[i].email}
              position={robots[i].position}
              speciality={robots[i].speciality}
              nickname={robots[i].nickname}
              hours={robots[i].hours}
              phone={robots[i].phone}
            />
          );
        })
      }
    </div>
  )
}

export default Cardlist