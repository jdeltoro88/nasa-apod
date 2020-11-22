import React,  {useState, useEffect } from 'react'


export default function NasaPhoto() {
    const [photoData, setPhotoData] = useState();

    useEffect(() => {
        fetchPhoto();


        async function fetchPhoto() {
            const res = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`
            );

            const data = await res.json();
            setPhotoData(data);
            console.log(data);
        }
    
}, []);


if (!photoData) return <div/>

return (
    <div>
        <img src={photoData.url} alt={photoData.title} />
    <div>
        <h1> {photoData.title}</h1>
        <p>{photoData.date}</p>

<p>{}</p>
</div>
</div>

)
}