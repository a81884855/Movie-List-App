import React from 'react';
import ToWatchMovieList from './movieList.jsx';
import Search from './search.jsx';
import AddMovie from './addMovie.jsx'
import WachtedMovieList from './watchedList.jsx';

const defaultVideoList = [
 {title: 'Mean Girls'},
 {title: 'Hackers'},
 {title: 'The Grey'},
 {title: 'Sunshine'},
 {title: 'Ex Machina'}
];

const newMovie = [];
const toWatchList = [];
const watchedList = [];

class App extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
    videos: defaultVideoList,
    currentVideos: defaultVideoList,
    watchedList: []
   }
 }

 add(input){
   newMovie.push(input)
   this.setState({
    videos: newMovie,
    currentVideos: newMovie
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
     <AddMovie add={this.add.bind(this)}/>
     <Search search={this.search.bind(this)}/>
     <WachtedMovieList videos={this.state.watchedList}/>
     <ToWatchMovieList videos={this.state.videos}/>
   </div>
  )
 }
}

export default App