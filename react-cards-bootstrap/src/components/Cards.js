import React from 'react';
import Card from './Card';
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
const cards = [
    {
        id : 0,
        title: 'Web App',
        image: image1,
        url: 'https://github.com/triusdeil'
    },
    {
        id : 1,
        title: 'Web site',
        image: image2,
        url: 'https://github.com/triusdeil'
    },
    {
        id : 2,
        title: 'Web',
        image: image3,
        url: 'https://github.com/triusdeil'

    }
]

function Cards() {
    return (
        <div className='container justify-content-center align-items-center h-100 d-flex'>
            <div className='row'>
                {
                    cards.map(card => (
                        <div className='col-md-4' key={card.id}>
                             <Card title={card.title} imgSource={card.image} text={card.text} url={card.url}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Cards
