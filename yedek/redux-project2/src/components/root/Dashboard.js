import React, { Component } from 'react';
import CategoryList from '../category/CategoryList';
import ProductList from '../products/ProductList';

class Dashboard extends Component {
    render() {
        return (
            <div className='flex mt-10'>
                <div className='w-1/3'>
                <CategoryList></CategoryList>
                </div>
                <div className='w-2/3'>
                    <ProductList></ProductList>
                </div>
            </div>
        );
    }
}
 
export default Dashboard;