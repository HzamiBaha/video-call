import React, { useContext } from 'react';
import './notification.css';
import { SocketContext } from '../../Context';

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <div className="notification">
          <span className="label">{call.name} is calling </span>
          <button type="button" className="button-answer" onClick={answerCall}>
            Answer
          </button>
        </div>
      )}
    </>
  );
};

export default Notifications;
