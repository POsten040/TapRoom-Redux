import React from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import SplashPage from './SplashPage';
import KegList from './KegList';
import AddKeg from './AddKeg';
import EditKeg from './EditKeg';
import KegDetail from './KegDetail';
import { Button } from 'reactstrap';
import { Animate } from 'react-simple-animate';
import nicebar from '../assets/nicebar.jpg';
import nicebar2 from '../assets/nicebar2.jpg';
import nicebar3 from '../assets/nicebar3.jpg';
import nicebar4 from '../assets/nicebar4.jpg';
import nicebar5 from '../assets/nicebar5.jpg';
import nicebar6 from '../assets/nicebar6.jpg';
import * as a from '../actions/actions';

class KegControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      splashPageVisible: true,
      kegFormVisible: false,
      kegListVisible: false,
      selectedKeg: null,
      editing: false
    }
  }
  hideSplashPage = () => {
    this.setState({
      splashPageVisible: false,
      kegFormVisible: true,
      selectedKeg: null,
      editing: false
    });
  }
  hideKegForm = ()=>{
    if(this.props.masterKegList.length == 0){
      alert("No Kegs Yet!");
    } else{
      this.setState(({
        kegFormVisible: false,
        kegListVisible: true
      }));
    }
  }
  toggleEditing = () => {
    this.setState(prevState => ({
      editing: !prevState.editing
    }))
  }
  showKegList = () => {
    this.setState({
      kegListVisible: true,
      kegFormVisible: false,
      selectedKeg:null
    })
  }
  handleClick = () => {
    if(this.props.splashPageVisible){
      this.hideSplashPage();
    } else if(this.state.kegFormVisible){
      this.hideKegForm();
    } else if(this.state.editing){
      this.toggleEditing();
    } else if(this.state.kegListVisible && this.state.selectedKeg === null){
      this.viewKegList();
    } else if (this.state.selectedKeg != null){
      this.showKegList();
    }
  }
  viewKegList= () => {
    if(this.props.masterKegList.length == 0){
      alert("No Kegs Yet!");
    } else {
      this.setState({
        kegListVisible: false,
        kegFormVisible: true,
        selectedKeg: null
      })
    }
  }
  handleEditClick = () => {
    this.setState({editing: true});
  }
  handleEditingKegInList = (kegToEdit)=> {
    const {dispatch} = this.props;
    let action = a.addKeg(kegToEdit);
    dispatch(action);
    this.setState({
      editing: false,
      selectedKeg: null
    });
  }
  handleDeleteClick = (kegId) => {
    const {dispatch} = this.props;
    let action = a.deleteKeg(kegId);
    dispatch(action);
    this.setState({ 
      selectedKeg: null
    });
  }
  handleAddingNewKegToList = (newKeg) =>{
    const {dispatch} = this.props;
    const action = a.addKeg(newKeg);
    dispatch(action);
    this.setState({
      kegFormVisible: false,
      kegListVisible: true
    })
  }
  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.props.masterKegList[id];
    this.setState({
      selectedKeg: selectedKeg,
      productFormVisible: true 
    });
  }
  handleSellClick = (id) => {
    let kegToSell = this.props.masterKegList[id]
      if(kegToSell.pintsLeft <= 0){
        alert("All Sold Out Boss");
      } else {
      kegToSell.pintsLeft = kegToSell.pintsLeft -1;
      this.setState({
        selectedKeg: kegToSell
      })
    }
  }
  handleStockClick = (id) => {
    let kegToStock = this.props.masterKegList[id]
      if(kegToStock.pintsLeft >= 120){
        alert("This Keg Is Full Boss");
      } else {
      kegToStock.pintsLeft = kegToStock.pintsLeft +1;
      this.setState({
        selectedKeg: kegToStock
      })
    }
  }
  randomNumber(){
    return Math.floor(Math.random() * 5);
  }  
  render() {
    const yellowButton = {
      backgroundColor: "#33c4cc",
    }
    const blueButton = {
      backgroundColor: "#2ebad1",
    }
    const greyButton = {
      backgroundColor: '#79867f',
    }
    let backgroundImageArray = [
      {
        backgroundImage: `url(${nicebar})`,
        height: "800px",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      },
      {
        backgroundImage: `url(${nicebar2})`,
        height: "800px",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      },
      {
        backgroundImage: `url(${nicebar3})`,
        height: "800px",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      },
      {
        backgroundImage: `url(${nicebar4})`,
        height: "800px",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      },
      {
        backgroundImage: `url(${nicebar5})`,
        height: "800px",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      },
      {
        backgroundImage: `url(${nicebar6})`,
        height: "800px",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }
    ]
    let backgroundImage = null;
    let buttonStyle = null;
    let currentState = null;
    let buttonText = null;
    if(this.state.splashPageVisible){
      currentState = <SplashPage buttonStyle={buttonStyle}/>
      buttonText = "Get Started";
      buttonStyle=yellowButton;
    } else if (this.state.editing === true){
      currentState = <EditKeg keg = {this.state.selectedKeg} buttonStyle={buttonStyle} onClickingEdit = {this.handleEditingKegInList} />
      buttonText = "Go Back";
      buttonStyle= greyButton;
      backgroundImage = backgroundImageArray[this.randomNumber()];
    } else if(this.state.selectedKeg != null) {
    
      
      currentState = <KegDetail keg = {this.state.selectedKeg}  onClickingStock={this.handleStockClick} onClickingSell={this.handleSellClick} onClickingDelete = {this.handleDeleteClick} onClickingEdit = {this.handleEditClick} />
      buttonText= "View Keg List";
      buttonStyle=blueButton;
      backgroundImage = backgroundImageArray[this.randomNumber()];
    } else if(this.state.kegFormVisible){
      
      currentState = <AddKeg onNewKegCreation={this.handleAddingNewKegToList} buttonStyle={buttonStyle}/> 
      buttonText = "View Keg List";
      buttonStyle=blueButton;
      backgroundImage = backgroundImageArray[this.randomNumber()];
    } else if(this.state.kegListVisible){
      
      currentState = <KegList kegList={this.props.masterKegList}  onKegSelection={this.handleChangingSelectedKeg}/>
      buttonText = "Add Another Keg";
      buttonStyle = blueButton;
      backgroundImage = backgroundImageArray[this.randomNumber()];
    } else {
      
      currentState = <KegList kegList={this.props.masterKegList}  onKegSelection={this.handleChangingSelectedKeg}/>
      buttonText = "Add Another Keg";
      buttonStyle = blueButton;
      backgroundImage = backgroundImageArray[this.randomNumber()];
    }
    return (
      <>
      <Animate
        play={true}
        duration={2}
        delay={.3}
        start={{filter: 'hue-rotate(90deg)'}}
        end={{filter: 'hue-rotate(0deg)'}}>
        <div id="initialBackground">
          <div style={backgroundImage}>
            <div id="focus">
              <div className="centered">
                {currentState}
                <Animate
                  play={true}
                  duration={.6}
                  delay={1.5}
                  start={{transform: 'scale(0)'}}
                  end={{transform: 'scale(1)'}}
                  >
                  <Button style={buttonStyle} className="btn" onClick={this.handleClick}>{buttonText}</Button>
                </Animate>
              </div>
            </div>
          </div>
        </div>
      </Animate>
      </>
    )
  }
}

KegControl.propTypes = {
  masterKegList: PropTypes.object,
}

const mapStateToProps = state => {
  return {
    masterKegList: state
  }
}

KegControl = connect(mapStateToProps)(KegControl);
export default KegControl;