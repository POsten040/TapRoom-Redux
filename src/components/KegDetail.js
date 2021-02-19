
import React from 'react';
import PropTypes from 'prop-types';
import { Animate } from "react-simple-animate";
import { Button, Card, CardHeader, CardBody, CardFooter, Container, Row, Col } from 'reactstrap';

function KegDetail(props){
  const { keg, onClickingDelete, onClickingEdit, onClickingSell, onClickingStock } = props;
  const styleBody = {
    backgroundColor: "#999b64",
    borderRadius: 10,
    padding: 10
  }
  const styleHead = {
    backgroundColor: "#6ab16f",
    borderRadius: 10,
    padding: 10
  }
  const yellowButton = {
    backgroundColor: "#ec9f13",
  }
  const blueButton = {
    backgroundColor: "#88b035",
  }
  return (
    <>
      <Animate
        play={true}
        duration={.5}
        delay={.1}
        start={{opacity: 0}}
        end={{opacity: 100}}
        >
      <Container>
        <div>
          <CardHeader style={styleHead}>Product Detail</CardHeader>
          <CardBody style={styleBody}>
            <p className="detailsText">Name: <span className="detailsTextValue">{keg.name}</span></p>
            <p className="detailsText">Brand: <span className="detailsTextValue">{keg.brand}</span></p>
            <p className="detailsText">Price: <span className="detailsTextValue">${keg.price}</span></p>
            <p className="detailsText">Flavour: <span className="detailsTextValue">{keg.flavor}</span></p>
            <p className="detailsText">Pints Left: <span className="detailsTextValue">{keg.pintsLeft}</span></p>
              <Row>
                <Col>
                  <Button style={yellowButton} onClick={()=> onClickingDelete(keg.id)}>Delete This keg</Button>
                  <Button style={blueButton} onClick={()=> onClickingEdit(keg.id)}>Edit This Keg</Button>
                </Col>
                <Col>
                  <Button style={yellowButton} onClick={()=> onClickingSell(keg.id)}>Sell One Pint</Button>
                  <Button style={blueButton} onClick={()=> onClickingStock(keg.id)}>Stock One Pint</Button>
                </Col>
              </Row>
          </CardBody>
        </div>
      </Container>
    </Animate>
    </>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}

export default KegDetail;