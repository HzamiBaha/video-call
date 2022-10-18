import React, { useState, useContext } from 'react';
import { Grid, Container, Paper } from '@material-ui/core';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Phone } from '@material-ui/icons';
import './sidebar.css';
import { SocketContext } from '../../Context';

const Sidebar = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');

  return (
    <Container className="container">
      <Paper elevation={0} className="paper">
        <form className="root" noValidate autoComplete="off">

          <Grid container className="gridContainer">
            <span className="label">Account Info</span>
            <div className="input_wrapper">
              <input variant="outlined" label="Name" value={name} placeholder="Enter your Name" onChange={(e) => setName(e.target.value)} className="input" fullWidth />
              <CopyToClipboard text={me}>
                <button type="button" className="button">
                  Copy Your Id
                </button>
              </CopyToClipboard>
            </div>
            <span className="label">Account Info</span>
            <div className="input_wrapper">
              <input label="ID to call" value={idToCall} placeholder="Enter the Id To Call " onChange={(e) => setIdToCall(e.target.value)} className="input" fullWidth />
              {callAccepted && !callEnded ? (
                <button type="button" className="button call disable" fullWidth disabled>
                  <Phone fontSize="large" />
                </button>
              ) : (
                <button type="button" className="button call" fullWidth onClick={() => callUser(idToCall)}>
                  <Phone fontSize="large" />
                </button>
              )}
            </div>
            {callAccepted && !callEnded ? (
              <button type="button" className="button-hang-up" fullWidth onClick={leaveCall}>
                Leave The conversation
              </button>
            ) : (
              <button type="button" className="button-hang-up disable" fullWidth disabled>
                Leave The conversation
              </button>
            )}
          </Grid>
        </form>
        {children}
      </Paper>
    </Container>
  );
};

export default Sidebar;
