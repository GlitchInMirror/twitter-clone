import React from 'react'
import "./Feeds.css"
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import InsertPhotoOutlinedIcon from '@material-ui/icons/InsertPhotoOutlined'
import GifOutlinedIcon from '@material-ui/icons/GifOutlined';
import { IconButton } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import TweetContainer from"./TweetContainer";


function Feeds() {
  return (


      <div className="main__container">
        <div className="left__container">
          
        <img className="app__logo" src="/assets/images/logo.png" alt="" />

          <div className="icons__list">

          <div className="icon__name">
            <img src="/assets/images/home.svg" alt="" />

            <h4>Home</h4>
            
          </div>


          <div className="icon__name">
            <img src="/assets/images/explore.svg" alt="" />

            <h4>Explore</h4>
          </div>


          <div className="icon__name">
            <img src="/assets/images/notifications.svg" alt="" />

            <h4>Notifications</h4>
          </div>

          <div className="icon__name">
          
            <img src="/assets/images/messages.svg" alt="" />

            <h4>Messages</h4>
          </div>


          <div className="icon__name">
            <img src="/assets/images/lists.svg" alt="" />

            <h4>Lists</h4>
          </div>

          <div className="icon__name">
            <img src="/assets/images/bookmarks.svg" alt="" />

            <h4>Bookmarks</h4>
          </div>


          <div className="icon__name">

            <img src="/assets/images/profile.svg" alt="" />

            <h4>Profile</h4>
          </div>

          <div className="icon__name">

            <img src="/assets/images/more.svg" alt="" />

            <h4>More</h4>
          </div>

          <button className="btn__tweet">Tweet</button>

          
         
          
         
          
          
         

          
          
          
         
          </div>
          
        

        </div>


        <div className="middle__container">
            <h3>Home</h3>
            <div className="post__tweet">

                <Avatar className="user__pic" alt="" src="/static/images/ava1.png" />
                <textarea cols="45" className="post__area" placeholder="What's happening?" />
            </div>
          <div className="share__icons">
                
                <IconButton><InsertPhotoOutlinedIcon /></IconButton>
                <IconButton><GifOutlinedIcon /></IconButton>
                <IconButton><InsertChartIcon /></IconButton>
                <IconButton><InsertEmoticonIcon /></IconButton>
                <button className="btn__post">Tweet</button>
          </div>


          <TweetContainer/>

        <TweetContainer />


        <TweetContainer />


        
         

            

        </div>


        <div className="right__container">
          <div className="header__search">
            <SearchIcon className="header__searchIcon" />
            <input className="header__searchInput"  placeholder="Search twitter" type="text" />
          </div>

          <div class="trending__news">
          
            <h3>Trending News</h3>
          </div>


          <div class="other__people">
              <h3>Other People</h3>

          </div>
          



        </div>

      </div>


      


   

  


  )
}

export default Feeds;
