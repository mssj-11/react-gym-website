import React from 'react';
import '../../styles/start.css';
import trainerImg from '../../assets/img/trainer.png';


const Start = () => {
  return (
    <section id='classes'>
        <div className='container'>
            <div className='start_wrapper'>
                <div className='start_img'>
                    <img src={trainerImg} alt='trainerImg' data-aos='fade-left' data-aos-duration='1500' />
                </div>

                <div className='start_content' data-aos='fade-right' data-aos-duration='1500'>
                    <h2 className='section_title'>Ready to make a <span className='highlights'>change</span>?</h2>
                    <p>
                        The Lorem Ipsum pasta first appeared in a type specimen book in the 1500s as a placeholder text.
                        The Lorem Ipsum pasta first appeared in a type specimen book in the 1500s as a placeholder text.
                    </p>
                    <button className='register_btn'>Get Started</button>
                </div>

            </div>
        </div>
    </section>
  );
}

export default Start