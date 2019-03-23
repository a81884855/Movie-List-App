import React from 'react';

class Search extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
    input: "",
    click: "",
   }
 }

 switchClick(e){
   this.setState({
    click: e.target.className
   }, ()=> this.props.switch(this.state.click))
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
     <div className="Watched" onClick={this.switchClick.bind(this)}>Watched</div>
     <div className="ToWatch" onClick={this.switchClick.bind(this)}>To Watch</div>
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