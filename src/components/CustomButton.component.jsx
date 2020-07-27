import React, { Component } from 'react';
import './CustomButton.styles.css';
class CustomButton extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='row'>
                <div className='col'>
                    <button 
                        className="btn btn-primary"
                        onClick={this.props.handleStart}
                    >
                         Start 
                    </button>
                    <button 
                        className="btn btn-primary buttons"
                        onClick={this.props.pausedBtn}
                    > 
                        {this.props.condition} 
                    </button>
                    <button className="btn btn-primary"> Reset </button>
                </div>
            </div>
         );
    }
}
 
export default CustomButton;