import React,  {useState, useEffect } from 'react'
import NavBar from './NavBar'



const apiKey = process.env.REACT_APP_NASA_KEY

export default function RoverPhoto() {
    const [photoData, setPhotoData] = useState();

    useEffect(() => {
        fetchPhoto();


        async function fetchPhoto() {
            const res = await fetch(
                //`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`
                //`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
                //`https://api.nasa.gov/planetary/apod?date=2021-4-15&api_key=DEMO_KEY`
                `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=DEMO_KEY`
            );

            const data = await res.json();
            setPhotoData(data);
            console.log(data);
           
        }
    
}, []);


if (!photoData) return <div/>

return (
    <>
    <NavBar/>
    
    <div className='rover-photo'>
        {photoData.media_type === 'image' ? (
        <img src={photoData.url} alt={photoData.title} className='photo'/>
        ) : (
            <iframe 
            title="space-video"
            src={photoData.url}
            frameBorder='0'
            gesture='media'
            allow='encrypted-media'
            allowFullScreen
            className='photo'
            />
        )}
    <div>
        <h1> {photoData.title}</h1>
        <p className= 'date'>{photoData.date}</p>
        <p className= 'explanation'>{photoData.explanation}</p>

<p>{}</p>
</div>
</div>
</>

)
}