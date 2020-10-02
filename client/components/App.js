import React from "react"
import {connect} from 'react-redux'
import { fetchSongs } from '../store/songs'
import { HashRouter as Router, Route } from 'react-router-dom'
import SongsList from './SongsList'
import SingleSong from './SingleSong'

class App extends React.Component {

	componentDidMount() {
		this.props.loadSongs()
	}
	
	render(){
		return(
			<Router>
				<div id='main'>
					<a href='/'> HahaMain</a>
				</div>
				<Route exact path='/' component={SongsList} />
				<Route exact path='/songList' component={SongsList} />
				<Route path = '/songList/:songId' component={SingleSong} />
			</Router>
		)
	}

}


const mapDispatchToProps = (dispatch) => {
	return {
	  loadSongs: () => dispatch(fetchSongs())
	}
  }


export default connect(null,mapDispatchToProps)(App)

