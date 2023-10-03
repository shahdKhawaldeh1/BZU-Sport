import React from 'react'

 export const exerciseOptions=  {
    method: 'GET',
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
