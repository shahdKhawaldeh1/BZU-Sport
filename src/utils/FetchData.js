import React from 'react'

 export const options = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back',
  params: { limit: '10' },
  headers: {
    'X-RapidAPI-Key': '428e068bb6msh9faa0d997a68eeap16ed98jsn5315f7d293bf',
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
    'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
  },
};
