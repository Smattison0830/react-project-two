import React from 'react'

export default function Card( props ) {
    return (
        <div className='card'>
            <img className='card--image' src={props.imageUrl} alt=''></img>
            <div className='card--contentine'>
                <img className='card--arrow' src='../images/card-arrow.png' alt=''></img>
                <span className='card--location'>{props.location}</span>
                <a className='' href={props.googleMapsUrl}>View on Google Maps</a> 
                <h1 className='card--title'>{props.title}</h1>    
                <h4 className='card--dates'>{props.startDate} - {props.endDate}</h4>
            <   p className='card--description'>{props.description}</p>
            </div>
        </div>
        )
}

// {
//     title: "Mount Fuji",
//     location: "Japan",
//     googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
//     startDate: "12 Jan, 2021",
//     endDate: "24 Jan, 2021",
//     description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
//     imageUrl: "https://unsplash.com/photos/WLxQvbMyfas"
// },