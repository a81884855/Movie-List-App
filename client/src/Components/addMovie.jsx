import React from 'react';

class AddMovie extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
    input: ""
   }
 }

 addMovie(e){
  this.setState({
   input: e.target.value
  });
 }

 submit(){
  this.props.search(this.state.input)
 }

 render(){
  return (
   <div className="addBar">
    <input placeholder="Add movie list here" onChange={this.addMovie.bind(this)}></input>
    <button onClick={this.submit.bind(this)}>Add</button>

   </div>
  )
 }
}

export default AddMovie