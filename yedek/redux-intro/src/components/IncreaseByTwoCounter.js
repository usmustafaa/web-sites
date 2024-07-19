import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {increaseByTwoCounter} from '../redux/actions/counterActions'
import { connect } from 'react-redux';

class IncreaseByTwoCounter extends Component {
    render() {
        return (
            <div>
                  <button onClick={e=>{this.props.dispatch(increaseByTwoCounter())}}>Çift arttır</button>
                
            </div>
        );
    }
}

function mapDispatchProps(dispatch){
    return {actions:bindActionCreators(increaseByTwoCounter,dispatch)}
}

export default connect(mapDispatchProps)(IncreaseByTwoCounter)