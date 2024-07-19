import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {increaseCounter} from '../redux/actions/counterActions'
import { connect } from 'react-redux';

class IncreaseCounter extends Component {
    render() {
        return (
            <div>
                <button onClick={e=>{this.props.dispatch(increaseCounter())}}>Arttır</button>
            </div>
        );
    }
}

function mapDispatchProps(dispatch){
    return {actions:bindActionCreators(increaseCounter,dispatch)}
}

export default connect(mapDispatchProps)(IncreaseCounter)

