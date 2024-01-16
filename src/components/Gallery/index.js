import React from 'react';
import useFetch from '../../hooks';
import { useState, useEffect } from 'react';
import Image from '../Image';
import './galleryStyle.css';




const Gallery = ({onCloseAlbum, albumId}) => {
    const { data: photos, loading: photoLoading, error: photoError} = useFetch('https://jsonplaceholder.typicode.com/photos?albumId=' + albumId);
    

    return (
        <>
        <button onClick={onCloseAlbum}>Close album</button>
        <div className='image'>
        {photos && photos.map(photo => (
            <div className='album-img' key={photo.id}>
                <Image photo={photo} />
            </div>
    ))}
        </div>
        </>
    )
}

export default Gallery

