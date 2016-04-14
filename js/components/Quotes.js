import React from 'react';

import Carousel from './Carousel';

const Quotes = () => {
  return (
    <Carousel items={
      [
        'Rajat’s deep and growing knowledge of web UI technologies, coupled with his strong design skills make him a powerhouse developer. He is always working to further his knowledge and technique in these areas. As a result he is widely respected and consulted.-Peter Muellers',
        'Rajat is a hardworking and detail driven individual who likes to deliver very modular and highly extensible code. He\'s Efficient in analyzing issues and deriving action items. He continually seeks solutions, not blame.-Saoli Mitra',
        'Rajat is meticulous when it comes to starting a new piece of work. He evaluates and understands the problem statement with respect to use cases, before thinking about the design and implementation details.-Deepak Anand',
        'I find Rajat to be very easy to work with, very responsive and willing when it comes to answering questions.-Melissa DeVeau',
        'Rajat possesses excellent communication skills and has been very helpful in sharing his knowledge.-Koundinya Surepeddi',
        'Rajat has a good command over the language and was able to point out a lot of good practices for writing clean code.-Keerthi Gurijala'
      ]
    }/>
  );
};

export default Quotes;