import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';
import { Avatar } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const ReviewsPost = () => (
    <div className="reviews__post">
    <div className="post__top">
      <Avatar src="" className="post__avatar" />
      <h3>Username</h3>
      <p>Date</p>
      <div className="post__options">
        <div className="post__option">
          <ThumbUpIcon />
          <p>Like</p>
        </div>
      </div>
    </div>
    <div className="post__bottom">
      <div className="post__rates">
        <div className="post__rate">
          <span>Graphics</span>
          
            5/10
        </div>
        <div className="post__rate">
          <span>Story</span>
          
            5/10
        </div>
        <div className="post__rate">
          <span>Writing</span>
          
            5/10
        </div>
        <div className="post__rate">
          <span>Animation</span>
          
            5/10
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet varius felis, sed mollis nibh. Suspendisse sit amet consequat quam. Suspendisse odio metus, sagittis vitae lobortis id, ullamcorper nec enim. Vestibulum malesuada maximus dignissim. Aliquam quam sapien, malesuada quis libero eu, ultrices lobortis nisl. Suspendisse urna nisl, mattis vel gravida in, efficitur tristique neque. Fusce non nunc magna. Morbi maximus tortor non leo dapibus sollicitudin. Proin quis turpis vitae sapien tempor varius. Aenean hendrerit, quam et condimentum sagittis, quam nunc commodo odio, id tincidunt ante neque a ex. Vestibulum tempus ipsum nisl, eget vulputate justo congue aliquet. Ut sodales velit neque, sit amet finibus quam molestie suscipit. Curabitur id justo nec diam dignissim bibendum. Fusce ac ornare odio.
        Mauris quis fermentum ligula. Sed faucibus enim est, at maximus mi tincidunt nec. Nam nulla ligula, laoreet in egestas sit amet, convallis vitae est. Quisque in imperdiet tortor. Fusce sed sagittis ligula. Aenean augue neque, tempus mattis imperdiet at, hendrerit ut neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer consequat, enim sit amet lacinia vestibulum, purus tellus lacinia tellus, id pulvinar massa sem tristique odio. Vestibulum tempus eleifend interdum. Vivamus egestas pharetra turpis, quis finibus ante blandit et. Phasellus eleifend ante id nisl porta semper at quis elit.
        Sed vulputate sed eros nec aliquet. Maecenas vel lobortis nibh, a tristique quam. Integer condimentum diam at quam tristique, sed iaculis felis consectetur. Proin at tempus mauris, sed lacinia ipsum. Nunc id erat laoreet, placerat neque aliquam, pretium lorem. Suspendisse nec ex tincidunt, maximus augue vel, euismod erat. Nam et eros egestas lorem imperdiet blandit eu vel ipsum. Maecenas vehicula accumsan massa quis pulvinar.
        Vestibulum aliquet sagittis nulla, vel aliquam tortor porta vitae. Nullam mauris enim, rhoncus sit amet commodo non, auctor id sapien. Nullam ut nisl ligula. Nam suscipit rutrum tincidunt. Mauris posuere congue justo vitae malesuada. Ut sit amet dolor gravida, tincidunt urna sed, condimentum orci. Suspendisse sit amet sagittis leo. Suspendisse tristique magna consectetur facilisis accumsan. Sed consectetur vitae ligula id maximus. Morbi congue convallis metus, a vehicula metus sodales at. Praesent tincidunt viverra risus, a eleifend dolor aliquet quis. Nam massa urna, malesuada vitae ligula at, viverra dignissim sem. Nullam ac metus non augue ullamcorper aliquam eu sit amet lacus. Nunc quis tellus metus. Aliquam tempus tortor vel nulla placerat congue.
        Aenean sit amet pharetra sem. Curabitur laoreet risus vel tempus tristique. Donec interdum mi ipsum, eget dapibus risus sollicitudin et. Praesent ut enim sollicitudin, egestas dolor et, viverra mi. Morbi consectetur augue ut mauris aliquam, et molestie tortor tincidunt. Pellentesque ex nisl, iaculis ac ex nec, commodo interdum leo. Donec hendrerit massa enim, eu aliquet lectus rhoncus at. Ut consequat turpis nulla, nec sollicitudin elit placerat non. Mauris iaculis varius purus sed imperdiet. Integer vel dictum erat, consectetur mollis tellus. Ut quis mollis ipsum laoret.
      </p>
    </div>
    
    
    
    
  </div>
);

export default ReviewsPost;
