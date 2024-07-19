import React, { Component } from 'react';

class Data extends Component {
    render() {
        return (
            <div className=''>
               <div className='fixed bottom-0 right-0 h-12 text-white font-bold text-lg w-16 bg-red-600 flex justify-center items-center'>{this.props.currentCategory}</div>
            </div>
        );
    }
}

export default Data;