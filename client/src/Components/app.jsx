import React from 'react';
import ToWatchMovieList from './towatchmovieList.jsx';
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
    toWatchList: defaultVideoList,
    watchedList: [],
   }
 }

 add(input){
   newMovie.push(input);
   toWatchList.push(input);
   this.setState({
    videos: newMovie,
    currentVideos: newMovie,
    toWatchList: toWatchList
   })
 }

 search(input){
  let searchResult = this.state.currentVideos.filter(x=> x.title.toLowerCase().includes(input.toLowerCase()))
  this.setState({
   videos: searchResult.length > 0 ? searchResult : [{title: "no movie by that name found"}]
  })
 }

 switch(input){
    this.setState({
      videos: input==="Watched" ? this.state.watchedList: this.state.toWatchList
    })
    console.log()
 }

 watched(input){
  var watched = false
  watchedList.forEach(x => x.title===input ? watched=true : null)
    !watched ? watchedList.push({title: input}) 
      : watchedList.forEach(x => x.title === input 
        ? watchedList.splice(watchedList.indexOf(x),1) : null)
    this.setState({
      watchedList: watchedList
    })
 }

  watched(input){
  var watched = false
  watchedList.forEach(x => x.title===input ? watched=true : null)
    !watched ? watchedList.push({title: input}) 
      : watchedList.forEach(x => x.title === input 
        ? watchedList.splice(watchedList.indexOf(x),1) : null)
    this.setState({
      watchedList: watchedList
    })
  }

 render(){
  return (
   <div>
     <AddMovie add={this.add.bind(this)}/>
     <Search search={this.search.bind(this)} switch={this.switch.bind(this)}/>
     <WachtedMovieList videos={this.state.watchedList} watched={this.watched.bind(this)}/>
     <ToWatchMovieList videos={this.state.videos} watched={this.watched.bind(this)}/>
   </div>
  )
 }
}

export default App