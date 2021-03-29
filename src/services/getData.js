import axios from 'axios';

 const apiKey =  `lk3F8o4F0fGAiP7rbVScYroGxThDwTku`;
const baseUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json`

async function getData(search,news_desk,section,type,fromDate,toDate){
    console.log(`${baseUrl}?q=${search}&fq=news_desk:${news_desk}&section_name:${section}&type_of_material:${type}&begin_date=${fromDate}&end_date=${toDate}&api-key=${apiKey}`);
    let videos = await  axios.get(`${baseUrl}?q=${search}&fq=news_desk:${news_desk}&section_name:${section}&type_of_material:${type}&begin_date=${fromDate}&end_date=${toDate}&api-key=${apiKey}`)
   
    return videos.data
}

async function getDataById(id){
    console.log(id);
    console.log(`${baseUrl}?fq=_id:${id}&api-key=${apiKey}`);
    let article = await  axios.get(`${baseUrl}?fq=_id:("${id}")&api-key=${apiKey}`)
    return article.data
}

export {
    getData,
    getDataById
}