import Table from "./Table";
import React, { Component } from 'react';
import Data from "./Data";

class App extends Component {
  state={
     currentCategory: ''
  }
  changeCategory = category =>{
    this.setState({currentCategory: category.id})
} 

  render() {
  return (
    <div className="App">
     <Table changeCategory={this.changeCategory}></Table>
     <Data currentCategory={this.state.currentCategory}></Data>
    </div>
  );
}
}

export default App;
