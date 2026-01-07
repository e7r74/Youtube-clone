import React, { useEffect, useState } from 'react'
import './Feed.css'
import { Link } from 'react-router-dom' // Убрал лишний импорт data
import { API_KEY } from '../../data'

// ДОБАВИЛИ ФИГУРНЫЕ СКОБКИ ВОКРУГ category
const Feed = ({ category }) => {
  const [data, setData] = useState([])

  const fetchData = async () => {
    // Теперь здесь будет ID (например, 0 или 20), а не объект
    const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=80&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`

    await fetch(videoList_url)
      .then((response) => response.json())
      .then((result) => setData(result.items)) // Переименовал в result для ясности
      .catch((err) => console.log('Ошибка загрузки:', err))
  }

  useEffect(() => {
    fetchData()
  }, [category])

  return (
    <div className="feed">
      {/* ДОБАВИЛИ ЗНАК ВОПРОСА ДЛЯ БЕЗОПАСНОСТИ */}
      {data?.map((item, index) => {
        return (
          <Link key={index} to={`video/${item.snippet.categoryId}/${item.id}`} className="card">
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <h2>{item.snippet.title}</h2>
            <h3>{item.snippet.channelTitle}</h3>
            <p>{item.statistics.viewCount} views &bull; 8 hours</p>
          </Link>
        )
      })}
    </div>
  )
}

export default Feed
