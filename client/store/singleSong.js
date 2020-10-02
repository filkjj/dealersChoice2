import axios from 'axios'

const SET_SINGLE_SONG = 'SET_SINGLE_SONG'

const setSingleSong = (singleSong) =>{
    return{
        type: SET_SINGLE_SONG,
        singleSong
    }
}

export const fetchSingleSong = id =>{
    return async(dispatch) =>{
        try{
            const {data} = await axios.get(`/api/${id}`)
            dispatch(setSingleSong(data))
        }catch(err){
            console.log(err)
        }
    }
}

const initialState = {}

export default (state=initialState, action) =>{
    switch (action.type){
        case SET_SINGLE_SONG:
            const singleSong = action.singleSong
            return singleSong
        default:
            return state
    }
}