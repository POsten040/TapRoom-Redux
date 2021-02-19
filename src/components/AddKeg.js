import React from 'react';
import { v4 } from "uuid";
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function AddKeg(props) {
  function handleNewKegFormSubmission(e) {
    e.preventDefault();
    props.onNewKegCreation({
      name: e.target.name.value,
      brand: e.target.brand.value,
      price: e.target.price.value,
      flavor: e.target.flavor.value,
      pintsLeft: e.target.pintsLeft.value,
      id: v4()
    })
  }
  return (
    <>
    <ReusableForm
      formSubmissionHandler={handleNewKegFormSubmission}
      buttonText="Add this Keg"
      buttonStyle={props.buttonStyle}/>
    </>
  );
}

AddKeg.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default AddKeg;