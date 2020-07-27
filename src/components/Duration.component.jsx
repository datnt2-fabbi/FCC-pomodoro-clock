import React, { Component } from 'react';
import './Duration.styles.css';
class Duration extends Component {
    state = {  }
    render() { 
        return ( 
            <div className=''>
                <h4 id="session-label"> Session Length </h4>

                <div className='row'>
                    <div className='col d-none d-md-block'></div>
                    <div className='col'>
                        <button 
                            className='btn btn-outline-primary ' id='session-increment'
                            onClick={this.props.increaseTime}
                        > 
                            + 
                        </button>
                    </div>
                    
                    <div className='col'>
                        <h4 id='session-length'> {this.props.defaultTime} </h4>
                    </div>

                    <div className='col'>
                        <button 
                            className='btn btn-outline-primary ' id='session-decrement'
                            onClick={this.props.decreaseTime}
                        > 
                            - 
                        </button>
                    </div> 
                    <div className='col d-none d-md-block'></div>
                    
                </div>

                <h4 id='break-label'> Break Length</h4>

                <div className='row'>
                    <div className='col d-none d-md-block'></div>
                    <div className='col'>
                        <button 
                            className='btn btn-outline-primary plus_minus' id=''
                            onClick={this.props.increaseBreakTime}
                        > 
                            + 
                        </button>
                    </div>
                    
                    <div className='col'>
                        <h4 id='break-length'>{this.props.breakTime}</h4>
                    </div>
                    <div className='col'>
                        <button 
                            className='btn btn-outline-primary plus_minus' id='break-decrement'
                            onClick={this.props.decreaseBreakTime}
                        >
                            - 
                        </button>
                    </div>
                    <div className='col d-none d-md-block'></div>
                </div>
            </div>
         );
    }
}
 
export default Duration;