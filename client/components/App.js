import React from "react"
import axios from 'axios'


export default class App extends React.Component {
	constructor(){
		super()
		this.state = {
			champId : '',
			champList : [],
			chosenChamp : {}
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
		  this.setState({ champId: 1 });
		}
		this.populateChampionsURLs(this.state.champId)
		this.populatBottomImages()
	}

	async populateChampionsURLs(champ_id){
		const chosenChamp = (await axios.get(`/api/championInfo/${champ_id}`)).data[0]
		this.setState({chosenChamp})
	}

	populatBottomImages(){
		if(Object.keys(this.state.chosenChamp).length){
			return (this.state.chosenChamp.splashUrls.map(splashUrl =>
				<div className='bottomHolder'><img classname='bottomImg' src={splashUrl}></img></div>
			))
		}else{
			return (<div></div> )
		}
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
						<div className='middleCols'>asdasd</div>
						<div className='middleCols'>champ name</div>
						<div className='middleCols'>champ abilities</div>
					</div>
					<div id='imgContainer'>
						{/* get current champ chosen and display urls */}
						{this.populatBottomImages()}
					</div>
				</div> 
			</>
		)
	}

}

