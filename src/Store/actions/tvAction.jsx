export {removeTv} from "../reducers/TvSlice"
import axios from "../../utils/Axios"
import { loadTv } from "../reducers/TvSlice"


export const asyncloadtv = (id) => async (dispatch, getState) =>{
    try{
        const detail = await axios.get(`/tv/${id}`);
        const external_ids = await axios.get(`/tv/${id}/external_ids`);
        const recommendations = await axios.get(`/tv/${id}/recommendations`);
        const similar = await axios.get(`/tv/${id}/similar`);
        const translations = await axios.get(`/tv/${id}/translations`);
        const videos = await axios.get(`/tv/${id}/videos`);
        const watch = await axios.get(`/tv/${id}/watch/providers`);
        let theultimatedetails = {
            detail: detail.data,
            external_ids: external_ids.data,
            recommendations: recommendations.data.results,
            similar: similar.data.results,
            translations: translations.data.translations.map(t => t.english_name),
            videos: videos.data.results.find(m => m.type === "Trailer"),
            watch: watch.data.results.IN,
        }
        dispatch(loadTv(theultimatedetails));
        console.log(theultimatedetails);
        
    }catch(error){
        console.log(error)
    }

} 
