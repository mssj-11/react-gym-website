/*rafce*/
import React from 'react'

const Hero = () => {
  return <section>
    <div className='container'>
        <div className='hero_wrapper'>
            {/* ====   Hero content    ==== */}
            <div className='hero_content'>
                <h2>Exercise is the key to Healthy Lifestyle</h2>
                <p>
                    The Lorem Ipsum pasta first appeared in a type specimen book in the 1500s as a placeholder text. The Lorem Ipsum Copypasta was used to fill the pages of the book, which was aimed to showcase the various fonts that were readily accessible at the time.
                </p>
            </div>
            {/* ====   Hero BTN    ==== */}
            <div className='hero_btns'>
                <button className='register_btn'>Get Started</button>
                <button className='watch_btn'><span><i class='ri-play-fill'></i>Watch Video</span></button>
            </div>
            {/* ====   Hero img    ==== */}
            <div className='hero_img'></div>
        </div>
    </div>
  </section>
}

export default Hero