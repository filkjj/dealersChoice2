import React from "react"
import axios from 'axios'


export default class App extends React.Component {
	constructor(){
		super()
		this.state = {
			champId : '',
			champList : [],
			urlList : []
		}
		this.populateChampionsURLs = this.populateChampionsURLs.bind(this)
	}

	async componentDidMount(){
		const champList = (await axios.get('/api/champions')).data;
		this.setState({ champList });
		const loadChampion = async()=> {
		  const champId = window.location.hash.slice(1) * 1;
		  this.setState({ champId });
		};
		window.addEventListener('hashchange', async()=> {
			loadChampion();
		});
		if(window.location.hash.slice(1)){
			loadChampion();
		}
		else {
		  this.setState({ champId: champList[0].id });
		}
	}

	async populateChampionsURLs(champ_id){
		const urlList = (await axios.get(`/api/championInfo/${champ_id}`)).data[0].splashUrls
		this.setState({urlList})
	}


	render(){
		return(
			<>
				<div className='leftCol'>
					{this.state.champList.map(champ => (<a href={`#${champ.id}`} className='champList' onClick={()=>{this.populateChampionsURLs(champ.id)}}> {champ.name} </a>))}
				</div>	
				<div className='centerBox'>
					<div className='urlViewer'>
						{/* get the url that's chosen */}
					</div>
					<div id='imgContainer'>
						{/* get current champ chosen and display urls */}
						{this.state.urlList.map(champUrl => 
						<div classname='urlImage'> 
							<img src={champUrl}></img>
						</div>)}
					</div>
				</div> 
			</>
		)
	}

}

