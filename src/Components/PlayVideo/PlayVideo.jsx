import React, { useEffect, useState } from 'react'
import moment from 'moment'
import './PlayVideo.css'
import { API_KEY, value_converter } from '../../data'

import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'

export const PlayVideo = ({ videoId }) => {
  const [apiData, setApiData] = useState()
  const [channelData, setChannalData] = useState()
  const [commetsData, setCommetsData] = useState([])
  const [isExpanded, setIsExpanded] = useState(false)
  const fetchVideoData = async () => {
    const videoDatalsUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
    await fetch(videoDatalsUrl)
      .then((res) => res.json())
      .then((data) => setApiData(data.items[0]))
  }
  useEffect(() => {
    fetchVideoData()
  }, [videoId])

  /////////////////////////////////////////
  const fetchChannelData = async () => {
    if (!apiData) return
    const channelDataUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`
    await fetch(channelDataUrl)
      .then((res) => res.json())
      .then((data) => setChannalData(data.items[0]))
    ////////////
    const commetsDataUrl = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`
    await fetch(commetsDataUrl)
      .then((res) => res.json())
      .then((data) => setCommetsData(data.items))
  }
  useEffect(() => {
    fetchChannelData()
  }, [apiData])

  //////////////////////////
  //////description//////
  ////////////////////////
  // Проверяем: если данные еще не приехали, пишем "Загрузка..."
  let displayText = 'Загрузка...'

  if (apiData) {
    if (isExpanded) {
      // Если нажали "еще", текст будет полным
      displayText = apiData.snippet.description
    } else {
      // Если не нажали, берем кусочек и добавляем точки
      displayText = apiData.snippet.description.slice(0, 150) + '...'
    }
  }
  //////////////////////////
  return (
    <div className="play-video">
      <iframe
        width="1020"
        height="574"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen></iframe>
      <h3>{apiData ? apiData.snippet.title : 'here title'}</h3>
      <div className="play-video-info">
        <p>
          {value_converter(apiData?.statistics?.viewCount || 0)} Views &bull;
          {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ''}
        </p>
        <div>
          <span>
            <img src={like} alt="" />
            {apiData ? value_converter(apiData.statistics.likeCount) : 'loading...'}
          </span>
          <span>
            <img src={dislike} alt="" />
            15
          </span>
          <span>
            <img src={share} alt="" />
            35
          </span>
          <span>
            <img src={save} alt="" />
            115
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={channelData ? channelData.snippet.thumbnails.medium.url : 'loading...'} alt="" />
        <div>
          <p>{apiData ? value_converter(apiData.snippet.channelTitle) : 'loading'}</p>
          <span>{channelData ? value_converter(channelData.statistics.subscriberCount) : 'loading...'} subscribe</span>
        </div>

        <button>Subscribe</button>
      </div>
      <div className="video-desc">
        {/* Просто показываем текст, который подготовили выше */}
        <p>{displayText}</p>

        {/* Кнопка: если данные есть, показываем надпись */}
        {apiData && (
          <b onClick={() => setIsExpanded(!isExpanded)} style={{ cursor: 'pointer' }}>
            {isExpanded ? ' Show less' : ' Show more'}
          </b>
        )}

        <hr />
        <h4>{apiData ? value_converter(apiData.statistics.commentCount) : 'loading...'} Comments</h4>
        {commetsData
          ? commetsData.map((item, index) => {
              return <CommentItem key={index} item={item} />
            })
          : 'loading...'}
      </div>
    </div>
  )
}

const CommentItem = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const comment = item.snippet.topLevelComment.snippet

  // Логика обрезки текста
  const text = comment.textDisplay
  const isLong = text.length > 200 // Проверяем, длинный ли текст
  const displayText = isExpanded || !isLong ? text : text.slice(0, 200) + '...'

  return (
    <div className="comment">
      <img src={comment.authorProfileImageUrl} alt="" />
      <div>
        <h3>
          {comment.authorDisplayName} <span> {moment(comment.publishedAt).fromNow()}</span>
        </h3>

        {/* Выводим обрезанный или полный текст */}
        <p dangerouslySetInnerHTML={{ __html: displayText }}></p>

        {/* Показываем кнопку "еще", только если текст реально длинный */}
        {isLong && (
          <b
            onClick={() => setIsExpanded(!isExpanded)}
            style={{ cursor: 'pointer', fontSize: '12px', color: '#5a5a5a' }}>
            {isExpanded ? ' Show less' : ' Show more'}
          </b>
        )}

        <div className="comment-actions">
          <img src={like} alt="" />
          <span>{value_converter(comment.likeCount)}</span>
          <img src={dislike} alt="" />
        </div>
      </div>
    </div>
  )
}
