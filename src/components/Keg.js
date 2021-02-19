import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return (
    <>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <h4>{props.name}</h4>
          <div className="hover">
            <p>{props.brand}</p>
            <p>{props.price}</p>
            <p>{props.flavor}</p>
            <p>{props.pintsLeft}</p>
          </div>
          <hr/>
      </div>
    </>
  );
}
Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  flavor: PropTypes.string.isRequired,
  pintsLeft: PropTypes.number.isRequired
};

export default Keg;