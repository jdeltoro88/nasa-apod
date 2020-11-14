import  {useState, useEffect } from 'react'
import React from 'react'

export default function NasaPhoto() {
    const [photoData, setPhotoData] = useState(null);

    useEffect(() => {
        fetchPhoto()


        async function fetchPhoto() {
            const res = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=GDX60bOVbUgY7yc9RjbNZMBIQHNBbqQunbPAyLVW`
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
        alt={photoData.title}

        />
</div>
    


    
    

)
}