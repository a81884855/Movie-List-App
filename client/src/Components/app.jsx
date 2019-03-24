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
const toWatchList = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'}
];
const watchedList = [];

class App extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
    currentVideos: defaultVideoList,
    toWatchList: defaultVideoList,
    watchedList: [],
   }
 }

 add(input){
   newMovie.push(input);
   toWatchList.push(input);
   this.setState({
    currentVideos: newMovie,
    toWatchList: toWatchList
   })
 }

 search(input){
  let searchResult = this.state.currentVideos.filter(x=> x.title.toLowerCase().includes(input.toLowerCase()))
  this.setState({
    toWatchList: searchResult.length > 0 ? searchResult : [{title: "no movie by that name found"}]
  })
 }

 switch(input){
    this.setState({
      watchedList: input==="Watched" ? watchedList: [],
      toWatchList: input!=="Watched"? toWatchList: []
    })
 }

 //Push movie title to watchedList if not exist in watchedList
 //Remove it if it already exist in watchedList 
  watched(input){
  let watched = false
  watchedList.forEach(x => x.title===input ? watched=true : null)
    !watched ? watchedList.push({title: input}) &
               toWatchList.forEach(x => x.title === input 
               ? toWatchList.splice(toWatchList.indexOf(x),1) : null)
      : watchedList.forEach(x => x.title === input 
        ? watchedList.splice(watchedList.indexOf(x),1) : null) &
          toWatchList.push({title: input})

    this.setState({
      watchedList: watchedList,
      toWatchList: toWatchList
    })
  }

 render(){
  //  displayStyle = {
  //  }
  return (
   <div>
     <AddMovie add={this.add.bind(this)}/>
     <Search search={this.search.bind(this)} switch={this.switch.bind(this)}/>
     <WachtedMovieList videos={this.state.watchedList} watched={this.watched.bind(this)}/>
     <ToWatchMovieList videos={this.state.toWatchList} watched={this.watched.bind(this)}/>
   </div>
  )
 }
}

export default App