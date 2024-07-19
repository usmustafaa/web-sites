import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <header className='bg-black opacity-75 px-7 flex justify-between items-center h-12 rounded-b-lg'>
                    <div className='text-3xl font-bold text-white opacity-80 hover:opacity-100 transition-all duration-100 cursor-pointer'>KAYEstore</div>
                    
                    <div className='flex space-x-10'>
                        <button className='text-white text-lg font-semibold opacity-80 hover:opacity-100 transition-all duration-100'>Component</button>
                        <button className='text-white text-lg font-semibold opacity-80 hover:opacity-100 transition-all duration-100'>GitHup</button>
                        <button className='text-white text-lg font-semibold opacity-80 hover:opacity-100 transition-all duration-100'><i class="fa-solid fa-basket-shopping"></i></button>
                    </div>
                </header>
            </div>
        );
    }
}

export default Header;