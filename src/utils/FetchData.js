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

