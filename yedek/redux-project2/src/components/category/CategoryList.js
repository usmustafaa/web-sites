import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as categoryActions from '../../redux/actions/cetegoryActions';

class CategoryList extends Component{
    componentDidMount() {
        this.props.actions.getCategories();
    }

    render() {
        return (
            <div className='space-y-1'>
                    <h5 className='h-14 flex items-center font-medium text-4xl justify-center  p-5'>Kategoriler</h5>
                    {this.props.categories.map(category => (
                        <h3 key={category.id} className='h-14 flex items-center text-xl font-medium border-2 border-black p-5 cursor-pointer'>
                            {category.categoryName}
                        </h3>
                    ))}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentCategory: state.changeCategoryReducer,
        categories: state.categoryListReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getCategories: bindActionCreators(categoryActions.getCategories, dispatch)
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
