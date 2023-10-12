import React from 'react'

export const options = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back',
  params: {limit: '10'},
  headers: {
    'X-RapidAPI-Key': '9dd7e5135bmsh2c5e79a6f780504p1dfab0jsn256ce6463361',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};
export const FetchData= async(url , options)=> {
 
   const response= await fetch(url , options );
   const data = await response.json();
 
    return data;
}

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': '9dd7e5135bmsh2c5e79a6f780504p1dfab0jsn256ce6463361',
  },
};
