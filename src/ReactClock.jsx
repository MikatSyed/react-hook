import React from 'react';
import Clock from 'react-live-clock';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

const ReactClock = () => {
    return (
        <div>
       
          <Clock  format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'}/><br/>
          <CountdownCircleTimer className="text-center"
    isPlaying
    duration={10}
    colors={[
      ['#004777', 0.33],
      ['#F7B801', 0.33],
      ['#A30000', 0.33],
    ]}
  >
    {({ remainingTime }) => remainingTime}
  </CountdownCircleTimer>
        </div>
    );
};

export default ReactClock;