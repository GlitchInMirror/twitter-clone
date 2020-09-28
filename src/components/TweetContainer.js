import React from 'react'
import "./TweetContainer.css"
import { Avatar } from '@material-ui/core';

function TweetContainer() {
  return (
    <div className="tweet__container">


      
      <div className="user__details">
          <Avatar  alt="" src="/static/images/ava1.png" />
            <h4>Hello User</h4>
            <p>@hello</p>
            <p>.</p>
            <p>Date</p>
      </div>
      <div className="tweet__area">
        <p>Hello this is the first tweet</p>
      </div>

      

      <div className="tweet__icons">
        <img src="assets/images/retweet.svg" alt="" />
        <img src="/assets/images/heart.svg" alt="" />
      
      </div>


      
    </div>
  )
}

export default TweetContainer
