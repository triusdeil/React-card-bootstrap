import React from 'react'
import PropTypes from 'prop-types'
import './cards.css'

function Card({title, imgSource,url, text}) {
    return (
        <div className='card text-center bg-dark text-light'>
            <div className='overflow'>
                <img src={imgSource} className='card-img-top'/>
            </div>
                <h4 className='card-title'>{title}</h4>
                <p className='card-text text-secondary'>
                    {
                        text ? text : 
                        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book" 
                    }</p>
                <a href={url} className='btn btn-outline-secondary rounded-0' target="_blank">
                    Go to this web site
                </a>
            </div>
    )
}

Card.propTypes = {
    title : PropTypes.string.isRequired,
    url : PropTypes.string,
    imgSource : PropTypes.string,
    text : PropTypes.string
}

export default Card
