import React from 'react'
import PropTypes from 'prop-types';
import './GifGridItem.css'
const GifItemImage = ({url}) =>  { 
    return (
        <div className="container-img">
            <img src={url} alt="gift" width="100%" height="100%"></img>
        </div>
    )
}

GifItemImage.propTypes = {
    url:PropTypes.string.isRequired
}

export default GifItemImage;