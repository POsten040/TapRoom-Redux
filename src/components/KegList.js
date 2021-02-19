import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types'

function KegList(props){
  const formStyle= {
    backgroundColor: "#33c4cc",
    borderRadius: 10,
    width: 600,
    padding: 10
  }
  const kegStyle= {
    backgroundColor: "#bcc7c8",
    borderRadius: 10,
    width: 'auto',
    padding: 10
  }
  return (
    <React.Fragment>
      <div style={formStyle}>
        <h1>Keg List</h1>
        {Object.values(props.kegList).map((keg) =>
        <div key={keg.id} className="hover" style={kegStyle}>
          <Keg
            whenKegClicked = { props.onKegSelection}
            name={keg.name}
            id={keg.id}
          />
        </div>
        )}
      </div>
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.object,
  onKegSelection: PropTypes.func
};

export default KegList;