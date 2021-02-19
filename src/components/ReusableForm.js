import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

function ReusableForm(props) {
  const formStyle= {
    backgroundColor: "#999b64",
    borderRadius: 10,
    width: 600,
    padding: 10
  }
  const greenButton = {
    backgroundColor: '#2fd05a',
  }
  return (
    <>
      <form style={formStyle} onSubmit={props.formSubmissionHandler}>
        <label>Keg Name</label>
        <input type="text" name="name" placeholder="Name"></input>
        <br />
        <select defaultValue={"DEFAULT"} name="brand">
          <option value="DEFAULT" disabled> -- choose brand --</option>
          <option value="BrewMaster">BrewMaster</option>
          <option value="MasterBrew">MasterBrew</option>
          <option value="Sixteen Chickens in an Overcoat">Sixteen Chickens in an Overcoat</option>
        </select>
        <br />
        <label>Price</label>
        <input type="number" name="price" placeholder="Price"></input>
        <br />
        <label>Price</label>
        <input type="string" name="flavor" placeholder="Flavor"></input>
        <br />
        <label>Stock(in pints)</label>
        <input type="number" name="pintsLeft" defaultValue="120"></input>
        <br />
        <Button style={greenButton} id="formSubmitButton" className="btn" type="submit">{props.buttonText}</Button>
      </form>
    </>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func
};

export default ReusableForm;