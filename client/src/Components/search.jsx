import React from 'react';

class Search extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
    input: ""
   }
 }

 searchInput(e){
  this.setState({
   input: e.target.value
  });
 }

 submit(){
  this.props.search(this.state.input)
 }

 render(){
  return (
  <div className="Search">
   <div className="switch">
     <div className="Watched">Watched</div>
     <div className="ToWatch">To Watch</div>
   </div>
   <div className="searchBar">
    <input placeholder="Search..." onChange={this.searchInput.bind(this)}></input>
    <button onClick={this.submit.bind(this)}>Go!</button>
   </div>
  </div>
  )
 }
}

export default Search