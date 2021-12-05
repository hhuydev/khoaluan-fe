import moment from "moment";


export const formatDateTime = (dataTime)=>{
    return  moment.utc(dataTime).format('MM/DD/YYYY'); 
}