import Typist from 'react-typist';
import React, { useState } from 'react';

import './text.css'

const Text = () => {

  const [loopCount, setLoopCount] = useState(0);

  const handleTypistLoop = () => {
    setLoopCount(loopCount + 1);
  };


  return ( 
    <div className="typist">
       <Typist avgTypingDelay={80} cursor={{ show: false }} onTypingDone={handleTypistLoop} key={loopCount}>
                <span>HTML</span>
                <Typist.Backspace count={4} delay={700} />
                <span>CSS</span>
                <Typist.Backspace count={3} delay={800} />
                <span>JavaScript</span>
                <Typist.Backspace count={10} delay={900} />
                <span>React</span>
                <Typist.Backspace count={5} delay={1000} />
                <span>Redux</span>
                <Typist.Backspace count={5} delay={1100} />
                <span className="many-more"> more oher stack...</span>
                <Typist.Backspace count={16} delay={1200} />
              </Typist>
    </div>
   );
}
 
export default Text;
