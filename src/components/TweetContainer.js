import React from 'react'
import "./TweetContainer.css"
import { Avatar } from '@material-ui/core';

function TweetContainer({id,name,username,tweet}) {
  return (
    <div className="tweet__container">


      
      <div key={id} className="user__details">
          <Avatar  alt="" src="/static/images/ava1.png" />
            <h4>{name}</h4>
            <p>{username}</p>
            <p>.</p>
            <p>Date</p>
      </div>
      <div className="tweet__area">
        <p>{tweet}</p>
      </div>

      

      <div className="tweet__icons">
        <img src="assets/images/retweet.svg" alt="" />
        <img src="/assets/images/heart.svg" alt="" />
      
      </div>


      
    </div>
  )
}

export default TweetContainer
