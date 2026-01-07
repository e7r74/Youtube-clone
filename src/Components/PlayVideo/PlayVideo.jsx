import React from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import userProfile from '../../assets/user_profile.jpg'
export const PlayVideo = () => {
  return (
    <div className="play-video">
      <video src={video1} controls autoPlay muted></video>
      <h3>Just best trevel</h3>
      <div className="play-video-info">
        <p>435 views &bull; 8 hours ago</p>
        <div>
          <span>
            <img src={like} alt="" />
            85
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
        <img src={jack} alt="" />
        <div>
          <p>GGG</p>
          <span>358 subscribe</span>
        </div>

        <button>Subscribe</button>
      </div>
      <div className="video-desc">
        <p>asda sff fsfs sdad rgf asda</p>
        <p>sdada d adsda dfs. xasas</p>
        <hr />
        <h4>543 Comments</h4>

        <div className="comment">
          <img src={userProfile} alt="" />
          <div>
            <h3>
              Jack DDD <span> 2 hours ago</span>
            </h3>
            <p>sdffddsfsdfsf fwefef fwsadfsdffgewfqwds. sdsadadasd f sdf ewf fs. sdfe wfsd</p>
            <div className="comment-actions">
              <img src={like} alt="" /> <span>23</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={userProfile} alt="" />
          <div>
            <h3>
              Jack DDD <span> 2 hours ago</span>
            </h3>
            <p>sdffddsfsdfsf fwefef fwsadfsdffgewfqwds. sdsadadasd f sdf ewf fs. sdfe wfsd</p>
            <div className="comment-actions">
              <img src={like} alt="" /> <span>23</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={userProfile} alt="" />
          <div>
            <h3>
              Jack DDD <span> 2 hours ago</span>
            </h3>
            <p>sdffddsfsdfsf fwefef fwsadfsdffgewfqwds. sdsadadasd f sdf ewf fs. sdfe wfsd</p>
            <div className="comment-actions">
              <img src={like} alt="" /> <span>23</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
