import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{marginTop: '1%', overflowY: 'scroll' , borderTop: '3px solid black', height: '800px'}}>
      {props.children}
    </div>
  );
}

export default Scroll;