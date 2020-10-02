import React from 'react'
import {connect} from 'react-redux'

const SongsList = (props) =>{
    console.log(`this is props: `)
    console.log(props);
    return (
        <div>
            {props.songs.map(song =>{
              return(
                <div>
                  <a href={`/#/songList/${song.id}`}> Song name is: {song.name} </a>
                </div>
              )
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
	return {
	  songs: state.songs
	}
  }

export default connect(mapStateToProps)(SongsList)

