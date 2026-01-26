import React, { useEffect, useState } from 'react'
import './Recommended.css'
import { Link } from 'react-router-dom'
import { API_KEY, value_converter } from '../../data'
export const Recommended = ({ categoryId }) => {
  const [apiData, setApiData] = useState([])
  const fetchData = async () => {
    const apiDataUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&videoCategoryId=${categoryId}&key=${API_KEY}`
    await fetch(apiDataUrl)
      .then((res) => res.json())
      .then((data) => setApiData(data.items))
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="recommended">
      {apiData.map((item, index) => {
        return (
          <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-video-list">
            <img src={item ? item.snippet.thumbnails.medium.url : 'loading...'} alt="" />
            <div className="vid-info">
              <h4>{item ? item.snippet.title.slice(0, 50) + '...' : 'loading...'}</h4>
              <p>{item ? item.snippet.channelTitle : 'loading...'}</p>
              <p>{item ? value_converter(item.statistics.viewCount) : 'loading'} views</p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
