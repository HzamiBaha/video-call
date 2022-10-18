import React, { useContext } from 'react';
import { Typography, Paper, makeStyles } from '@material-ui/core';
import './videoScreen.css';
import Sidebar from '../SideBar/Sidebar';
import Notifications from '../Notifications';
import { SocketContext } from '../../Context';

const useStyles = makeStyles((theme) => ({
  video_host: {
    borderRadius: '1rem',
    width: '80%',
    marginTop: '40px',
    [theme.breakpoints.down('xs')]: {
      width: '300px',
    },
  },
  video_guest: {
    width: '100%',
    position: 'absolute',
    height: '100%',
    borderRadius: '1rem',
  },
  gridContainer: {
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  paper: {
    border: '1px solid rgba(0,0,0,.1)',
    margin: '10px',
    padding: '5px',
    borderRadius: '1rem',
  },
  name: {
    position: 'absolute',
    top: '50px',
    right: '80px',
    background: 'rgba(0,0,0,0.25)',
    padding: '5px 15px',
    borderRadius: '15px',
    fontSize: '16px',
    fontWeight: '600',
  },

}));

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
  const classes = useStyles();

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
            <Typography variant="h5" gutterBottom className="name">{call.name || 'Name'} </Typography>
            <video playsInline ref={userVideo} autoPlay className={classes.video_guest} />
          </Paper>
        ) : (
          <Paper className="videoScreen__guest">
            <Notifications />
          </Paper>
        )}
        {stream && (
          <Paper elevation={2} className="videoScreen__host">
            <Typography variant="h5" className={classes.name} gutterBottom>{name || 'Name'}</Typography>
            <video playsInline muted ref={myVideo} autoPlay className={classes.video_host} />
            <Sidebar />

          </Paper>
        )}

      </div>
    </>
  );
};

export default VideoPlayer;
