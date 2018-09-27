import React from 'react';
import { Component } from 'react';
import MoreInfo from './MoreInfo';
import {connect} from 'react-redux';
import {openMoreInfo, closeMoreInfo} from '../actions/more-info';
import '../component-css/WelcomePage.css'



export class WelcomePage extends Component{

    render(){

        if(this.props.moreInfo===true){
        return(
            <div className="welcome-page">
                    <div className="welcome-header">
                        <h1>Welcome to YMTTW!</h1>
                        <div className="circle">
                                <h3>YMTTW stands for something incredible:</h3>
                                <h2>You Matter To This World</h2>
                                <button 
                                    type="submit" 
                                    className="more-info-button"
                                    onClick={()=>{
                                        this.props.dispatch(closeMoreInfo());
                                }}
                                >
                                    <h3>x Coming Winter 2018!</h3>
                                </button>                       
                            </div>
                    </div>
                    <MoreInfo/>
            </div>
        );
        }
        else{
            return(
                <div className="welcome-page" id="top">
                        <div className="welcome-header">
                            <h1 className="title">Welcome to YMTTW!</h1>
                            <div className="circle">
                                <h3>YMTTW stands for something incredible:</h3>
                                <h2>You Matter To This World</h2>
                                <button 
                                    type="submit" 
                                    className="more-info-button"
                                    onClick={()=>{
                                        this.props.dispatch(openMoreInfo());
                                }}
                                >
                                    <a href="#more-info">
                                        <h3>Click For More Info</h3>
                                    </a>
                                </button>
                            </div>
                    </div>
                </div>
            )
        }
    }
}   

const mapStateToProps = state => {
    return {
        moreInfo: state.moreInfo.moreInfo
    };
};

export default connect(mapStateToProps)(WelcomePage);