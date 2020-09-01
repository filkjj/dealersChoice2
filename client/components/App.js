import React from "react"
import axios from 'axios'
import MiddleCols from './MiddleCols'

export default class App extends React.Component {
	constructor(){
		super()
		this.state = {
			champId : '',
			champList : [],
			chosenChamp : {},
			chosenDisplay : '',
			thingToDisplay: ''
		}
		this.populateChampionsURLs = this.populateChampionsURLs.bind(this)
		this.selectDisplay = this.selectDisplay.bind(this)
		this.selectThingToDisplay = this.selectThingToDisplay.bind(this)
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
		this.populateBottomImages()
	}

	async populateChampionsURLs(champ_id){
		const chosenChamp = (await axios.get(`/api/championInfo/${champ_id}`)).data[0]
		this.setState({chosenChamp,chosenDisplay : '',thingToDisplay: ''})
	}

	selectDisplay(chosenDisplay){
		this.setState({chosenDisplay})
	}

	selectThingToDisplay(urlToDisplay){
		this.setState({thingToDisplay:urlToDisplay})
	}

	//this is so janky and im so sorry you have to read this LOL, there is a lot of refactoring I would do to this but I ran out of time
	populateBottomImages(){
		if(this.state.chosenDisplay==='abilities'){
			return(
				// i couldnt figure out why the switching of the video wasn't working properly so you have to reload the list of abilities everytime you go into it :/
				<>
				<div className='bottomHolder'><div classname='bottomAbility' onClick={()=>this.selectThingToDisplay(this.state.chosenChamp.champAbilities[0])}>Q</div></div>
				<div className='bottomHolder'><div classname='bottomAbility' onClick={()=>this.selectThingToDisplay(this.state.chosenChamp.champAbilities[1])}>W</div></div>
				<div className='bottomHolder'><div classname='bottomAbility' onClick={()=>this.selectThingToDisplay(this.state.chosenChamp.champAbilities[2])}>E</div></div>
				<div className='bottomHolder'><div classname='bottomAbility' onClick={()=>this.selectThingToDisplay(this.state.chosenChamp.champAbilities[3])}>R</div></div>
				</>
			)
		}else if(this.state.chosenDisplay==='splashes'){
			return (this.state.chosenChamp.splashUrls.map(splashUrl =>
				<div className='bottomHolder'><img classname='bottomImg' src={splashUrl} onClick={()=>this.selectThingToDisplay(splashUrl)}></img></div>
			))
		}else{
			return (<div></div> )
		}
	}

	renderURLViewer(){
		if(this.state.chosenDisplay==='abilities'){
		console.log(this.state)
		return this.state.thingToDisplay==='' ? (<div>click on something below!</div>) : (<video autoPlay={false} controls><source src={this.state.thingToDisplay} type="video/webm" /> </video>)
		}else if(this.state.chosenDisplay==='splashes'){
			return this.state.thingToDisplay==='' ? (<div>click on something below!</div>) : <img src={this.state.thingToDisplay} />
		}else{
			return (<MiddleCols champName={this.state.chosenChamp.name} selectDisplay={this.selectDisplay} />)			
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
						{this.renderURLViewer()}
						
					</div>
					<div id='imgContainer'>
						{/* get current champ chosen and display urls */}
						{this.populateBottomImages()}
					</div>
				</div> 
			</>
		)
	}

}

