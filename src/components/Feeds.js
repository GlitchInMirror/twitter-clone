import React, { useState } from 'react';
import './Feeds.css';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import InsertPhotoOutlinedIcon from '@material-ui/icons/InsertPhotoOutlined';
import GifOutlinedIcon from '@material-ui/icons/GifOutlined';
import { IconButton } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import TweetContainer from './TweetContainer';
import IconList from './IconList';

const Feeds = () => {
  const [tweet, setTweet] = useState(null);

  const changeHandler = () => {
    setTweet();
  };
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="main__container">
      <div className="left__container">
        <img className="app__logo" src="/assets/images/logo.png" alt="" />

        <div className="icons__list">
          <IconList
            classname="icon__name"
            src="/assets/images/home.svg"
            alt="home"
            titleName="Home"
          />
          <IconList
            classname="icon__name"
            src="/assets/images/explore.svg"
            alt="explore"
            titleName="Explore"
          />
          <IconList
            classname="icon__name"
            src="/assets/images/notifications.svg"
            alt="notifications"
            titleName="Notifications"
          />
          <IconList
            classname="icon__name"
            src="/assets/images/messages.svg"
            alt="messages"
            titleName="Messages"
          />
          <IconList
            classname="icon__name"
            src="/assets/images/lists.svg"
            alt="Lists"
            titleName="Lists"
          />
          <IconList
            classname="icon__name"
            src="/assets/images/bookmarks.svg"
            alt="bookmarks"
            titleName="Bookmarks"
          />
          <IconList
            classname="icon__name"
            src="/assets/images/profile.svg"
            alt="profile"
            titleName="Profile"
          />
          <IconList
            classname="icon__name"
            src="/assets/images/more.svg"
            alt="more"
            titleName="More"
          />
          <button className="btn__tweet">Tweet</button>
        </div>
      </div>

      <div className="middle__container">
        <h3>Home</h3>
        <div className="post__tweet">
          <Avatar className="user__pic" alt="" src="/static/images/ava1.png" />
          <textarea
            cols="45"
            className="post__area"
            placeholder="What's happening?"
            value={tweet}
            onChange={changeHandler}
          />
        </div>
        <div className="share__icons">
          <IconButton>
            <InsertPhotoOutlinedIcon />
          </IconButton>
          <IconButton>
            <GifOutlinedIcon />
          </IconButton>
          <IconButton>
            <InsertChartIcon />
          </IconButton>
          <IconButton>
            <InsertEmoticonIcon />
          </IconButton>
          <button onclick={submitHandler} className="btn__post">
            Tweet
          </button>
        </div>

        <TweetContainer id="1" name="Hello" username="@Hello" tweet={tweet} />

        <TweetContainer />

        <TweetContainer />
      </div>

      <div className="right__container">
        <div className="header__search">
          <SearchIcon className="header__searchIcon" />
          <input
            className="header__searchInput"
            placeholder="Search twitter"
            type="text"
          />
        </div>

        <div class="trending__news">
          <h3>Trending News</h3>
        </div>

        <div class="other__people">
          <h3>Other People</h3>
        </div>
      </div>
    </div>
  );
}

export default Feeds;
