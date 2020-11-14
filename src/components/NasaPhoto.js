import  {useState, useEffect } from 'react'
import React from 'react'

export default function NasaPhoto() {
    const [photoData, setPhotoData] = useState(null);

    useEffect(() => {
        fetchPhoto()


        async function fetchPhoto() {
            const res = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=F2mJpauIJG1YfVbW4NMkOE1VmBTf5UUkT0VctRjl`
            );

            const data = await res.json();
            setPhotoData(data);
            console.log(data)
        }
    
}, []);


if (!photoData) return <div/>

return (
    <div>

        <img 


        src={photoData.url}
        alt={photoData.title}/>

        
<div>
<h1> {photoData.title}</h1>
<p>{photoData.date}</p>
<p>{photoData.explanation}</p>

</div>
    
    </div>

)
}