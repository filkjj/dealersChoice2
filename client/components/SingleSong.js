import React from 'react'
import {connect} from 'react-redux'
import {fetchSingleSong} from '../store/singleSong'

class SingleSong extends React.Component{
    componentDidMount(){
        this.props.loadSingleSong(this.props.match.params.songId)
    }

    render(){
        console.log(`in singleSong, this is the props currently:`)
        console.log(this.props);
        return(
            <div>
                Song name: {this.props.singleSong.name} 
                <br/>
                Song Url: {this.props.singleSong.songURL}
                <br/>
                <button onClick={()=>console.log('to delete')}>Delete</button>
            </div>
        )
    }

}

const mapStateToProps = (state) =>{
    return {
        singleSong: state.singleSong
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        loadSingleSong: (id) => dispatch(fetchSingleSong(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SingleSong)