import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {decreaseCounter} from '../redux/actions/counterActions'
import { connect } from 'react-redux';

class DecreaseCounter extends Component {
    render() {
        return (
            <div>
                  <button onClick={e=>{this.props.dispatch(decreaseCounter())}}>Eksilt</button>
            </div>
        );
    }
}

function mapDispatchProps(dispatch){
    return {actions:bindActionCreators(decreaseCounter,dispatch)}
}

export default connect(mapDispatchProps)(DecreaseCounter)

