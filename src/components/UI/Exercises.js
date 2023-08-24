import React from 'react';
import '../../styles/exercises.css';
import lunges from '../../assets/img/lunges.png';
import yoga from '../../assets/img/yoga-pose.png';
import extended from '../../assets/img/extended.png';


const Exercises = () => {
  return (
    <section id='schedule'>
        <div className='container exercises_container'>
            <div className='exercise_top'>
                <h2 className='section_title'>Benefits of <span className='highlights'>Exercise</span></h2>
                <p className='p'>
                    The Lorem Ipsum pasta first appeared in a type specimen <br/> book in the 1500s as a placeholder text.
                </p>
            </div>

            {/* ====     Exercises List   ==== */}
            <div className='exercise_wrapper'>
                <div className='exercise_item' data-aos='zoom-in' data-aos-duration='1500'>
                    <span className='exercise_icon'>
                        <img src={lunges} alt='lunges' />
                    </span>

                    <div className='exercise_content' data-aos='zoom-in' data-aos-duration='1500'>
                        <h4>Healthy Life</h4>
                        <p>
                            The Lorem Ipsum pasta first appeared in a type specimen <br/> book in the 1500s as a placeholder text.
                        </p>
                    </div>
                </div>

                
                <div className='exercise_item' data-aos='zoom-in' data-aos-duration='1500'>
                    <span className='exercise_icon'>
                        <img src={yoga} alt='lunges' />
                    </span>

                    <div className='exercise_content'>
                        <h4>Increased Flexibility</h4>
                        <p>
                            The Lorem Ipsum pasta first appeared in a type specimen <br/> book in the 1500s as a placeholder text.
                        </p>
                    </div>
                </div>


                <div className='exercise_item' data-aos='zoom-in' data-aos-duration='1500'>
                    <span className='exercise_icon'>
                        <img src={extended} alt='lunges' />
                    </span>

                    <div className='exercise_content'>
                        <h4>Reducing Blood Pressure</h4>
                        <p>
                            The Lorem Ipsum pasta first appeared in a type specimen <br/> book in the 1500s as a placeholder text.
                        </p>
                    </div>
                </div>
                
            </div>

        </div>
    </section>
  );
}


export default Exercises