import React from 'react'
import home_icon from '../../assets/home.png'
import game_icon from '../../assets/game_icon.png'
import automobiles from '../../assets/automobiles.png'
import sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import jack from '../../assets/jack.png'
import simon from '../../assets/simon.png'
import tom from '../../assets/tom.png'
import megan from '../../assets/megan.png'

import './Sidebar.css'

// ИСПРАВЛЕНО: Убрана лишняя фигурная скобка перед props
const Sidebar = ({ sidebar, category, setCategory, setSidebar }) => {
  // Функция для смены категории и закрытия меню на мобилках
  const handleCategoryClick = (id) => {
    setCategory(id)
    // Проверяем ширину экрана: если мобилка, закрываем сайдбар
    if (window.innerWidth <= 900) {
      setSidebar(false)
    }
  }

  return (
    <div className={`sidebar ${sidebar ? '' : 'sidebar-small'} ${sidebar ? 'active-mobile' : ''}`}>
      <div className="sorcut-links">
        {/* ВЕЗДЕ НИЖЕ ИСПОЛЬЗУЕМ handleCategoryClick вместо прямого setCategory */}
        <div className={`side-link ${category === 0 ? 'active' : ''}`} onClick={() => handleCategoryClick(0)}>
          <img src={home_icon} alt="" />
          <p>Home</p>
        </div>
        <div className={`side-link ${category === 20 ? 'active' : ''}`} onClick={() => handleCategoryClick(20)}>
          <img src={game_icon} alt="" />
          <p>Gaming</p>
        </div>
        <div className={`side-link ${category === 2 ? 'active' : ''}`} onClick={() => handleCategoryClick(2)}>
          <img src={automobiles} alt="" />
          <p>Automobiles</p>
        </div>
        <div className={`side-link ${category === 17 ? 'active' : ''}`} onClick={() => handleCategoryClick(17)}>
          <img src={sports} alt="" />
          <p>Sports</p>
        </div>
        <div className={`side-link ${category === 24 ? 'active' : ''}`} onClick={() => handleCategoryClick(24)}>
          <img src={entertainment} alt="" />
          <p>Entertainment</p>
        </div>
        <div className={`side-link ${category === 28 ? 'active' : ''}`} onClick={() => handleCategoryClick(28)}>
          <img src={tech} alt="" />
          <p>Technology</p>
        </div>
        <div className={`side-link ${category === 10 ? 'active' : ''}`} onClick={() => handleCategoryClick(10)}>
          <img src={music} alt="" />
          <p>Music</p>
        </div>
        <div className={`side-link ${category === 22 ? 'active' : ''}`} onClick={() => handleCategoryClick(22)}>
          <img src={blogs} alt="" />
          <p>Blogs</p>
        </div>
        <div className={`side-link ${category === 25 ? 'active' : ''}`} onClick={() => handleCategoryClick(25)}>
          <img src={news} alt="" />
          <p>News</p>
        </div>
        <hr style={{ width: '100%' }} />
      </div>
      <div className="subscribed-list">
        <h3>Subscribed</h3>
        <div className="side-link">
          <img src={jack} alt="" />
          <p>Jack</p>
        </div>
        <div className="side-link">
          <img src={simon} alt="" />
          <p>Simon</p>
        </div>
        <div className="side-link">
          <img src={megan} alt="" />
          <p>Megan</p>
        </div>
        <div className="side-link">
          <img src={tom} alt="" />
          <p>Tom</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
