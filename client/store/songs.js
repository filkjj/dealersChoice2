import axios from 'axios'

const SET_SONGS = 'SET_SONGS'

const setSongs = (songs) =>{
    return {
        type: SET_SONGS,
        songs
    }
}

export const fetchSongs = () => {
    return async (dispatch) =>{
        try{
            const {data} = await axios.get('/api/')
            dispatch(setSongs(data))
        }catch(err){
            console.log(err)
        }
    }
}

const intialState = []
//where is action coming from?
//how does action pass our objects?
export default (state=intialState, action) =>{
    switch (action.type){
        case SET_SONGS:
            const songs = action.songs
            return songs
        default:
            return state
    }
}
