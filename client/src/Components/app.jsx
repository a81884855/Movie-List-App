import React from 'react';
import MovieList from './movieList.jsx';
import Search from './search.jsx';
import AddMovie from './addMovie.jsx'

const defaultVideoList = [
 {title: 'Mean Girls'},
 {title: 'Hackers'},
 {title: 'The Grey'},
 {title: 'Sunshine'},
 {title: 'Ex Machina'}
];

const newMovie = [];

class App extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
    videos: defaultVideoList,
    currentVideos: defaultVideoList
   }
 }

 add(input){
   newMovie.push(input)
   this.setState({

   })
 }

 search(input){
  let searchResult = this.state.currentVideos.filter(x=> x.title.toLowerCase().includes(input.toLowerCase()))
  this.setState({
   videos: searchResult.length > 0 ? searchResult : [{title: "no movie by that name found"}]
  })
 }

 render(){
  return (
   <div>
     <AddMovie/>
     <Search search={this.search.bind(this)}/>
     <MovieList videos={this.state.videos}/>
   </div>
  )
 }
}

export default App