import { useState, useEffect } from 'react'
import useFetch from '../../hooks'

const Album = ({ onOpenAlbums }) => {
    const { data: album, loading: albumLoading, error: albumError} = useFetch('https://jsonplaceholder.typicode.com/albums');

    return (
        <div className='album'>
            <ul className='album-list'>
                {album && album.map(album => (
                    <li key={album.id} className='album-item'>
                        <span className='album-title'>{album.title}</span>
                        <button className='album-btn' onClick={onOpenAlbums.bind(this, album.id)}>Open album</button>
                    </li>
            ))}
            </ul>
        </div>    
    )
}

export default Album