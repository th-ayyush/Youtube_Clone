import React from 'react'
import './Videos.css'
import Playvideo from '../../Components/Playvideo/Playvideo'
import Recommended from '../../Components/Recommended/Recommended'
import { useParams } from 'react-router-dom'


const Videos = () => {
  const {videoId,categoryId}=useParams();
  return (
    <div className='play-container'>
      <Playvideo videoId={videoId}/>
      <Recommended categoryId={categoryId}/>
    </div>
  )
}


export default Videos
