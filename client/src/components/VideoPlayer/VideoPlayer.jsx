import React, { useContext } from 'react';
import { Typography, Paper } from '@material-ui/core';
import './videoScreen.css';
import Sidebar from '../SideBar/Sidebar';
import Notifications from '../Notifications/Notifications';
import { SocketContext } from '../../Context';

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);

  return (

    <>
      <div className="appBar">
        <img src="/logo.png" alt="" className="brand_logo" />
        <div className="line" />
        <div className="brand">Video Call APP</div>
      </div>

      <div className="videoScreen">
        {callAccepted && !callEnded ? (
          <Paper className="videoScreen__guest">
            <Typography className="name">{call.name || 'Name'} </Typography>
            <video playsInline ref={userVideo} autoPlay className="video_guest" />
          </Paper>
        ) : (
          <Paper className="videoScreen__guest">
            <Notifications />
          </Paper>
        )}
        {stream && (
          <Paper elevation={2} className="videoScreen__host">
            <Typography className="name" gutterBottom>{name || 'Name'}</Typography>
            <video playsInline muted ref={myVideo} autoPlay className="video_host" />
            <Sidebar />

          </Paper>
        )}

      </div>
    </>
  );
};

export default VideoPlayer;
