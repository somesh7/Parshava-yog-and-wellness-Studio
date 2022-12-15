import React, { useRef, useEffect } from 'react'


const Video = () => {
    const videoRef = useRef(null);
  
    useEffect(() => {
        let options = {
          rootMargin: "0px",
          threshold: [0.25, 0.75]
        };
    
        let handlePlay = (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              videoRef.current.play();
            } else {
              videoRef.current.pause();
            }
          });
        };
    
        let observer = new IntersectionObserver(handlePlay, options);
    
        observer.observe(videoRef.current);
      });
    
  return (
   <>
   <div className='videos'>
   <video id="myvideo" width="100%" height="600" loop ref={videoRef} controls>
           <source src="/Videos/Sound Healing.mp4" />
       </video>
   </div>
   <script>
let observer = new IntersectionObserver()
   </script>
       
   </>
  )
}

export default Video