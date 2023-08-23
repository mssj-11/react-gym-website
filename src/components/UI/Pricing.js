import React from 'react';
import '../../styles/pricing.css';


const Pricing = () => {
  return (
    <section id='pricing'>
        {/* --- Pricing Section --- */}
        <div className='container'>
            <div className='pricing_top'>
                <h2 className='section_title'>Gym
                    <span className='highlights'> Pricing</span> Plan
                </h2>
                <p>
                    The Lorem Ipsum pasta first appeared in a type specimen book.<br/> 
                    The Lorem Ipsum pasta first appeared in a type specimen book.
                </p>
            </div>
            

            {/* --- Pricing Wrapper --- */}
            <div className='pricing_wrapper'>
                <div className='pricing_item'>
                    <div className='pricing_card-top'>
                        <h2 className='section_title'>Regular Member</h2>
                        <h2 className='pricing section_title'>$50 <span className='highlights'>/month</span></h2>
                    </div>

                    <div className='services'>
                        <ul>
                            <li><span><i className='ri-checkbox-blank-circle-fill'></i></span> Unlimited access to the gym</li>
                            <li><span><i className='ri-checkbox-blank-circle-fill'></i></span> Customer support</li>
                            <li><span><i className='ri-checkbox-blank-circle-fill'></i></span> Personal trainer</li>
                            <li><span><i className='ri-checkbox-blank-circle-fill'></i></span> Standard options</li>
                            <li><span><i className='ri-checkbox-blank-circle-fill'></i></span> 5 classes per week</li>
                        </ul>

                        <button className='register_btn'>Join Now</button>
                    </div>
                </div>

                
                <div className='pricing_item pricing_item-02'>
                    <div className='pricing_card-top'>
                        <h2 className='section_title'>Premium Member</h2>
                        <h2 className='pricing section_title'>$70 <span className='highlights'>/month</span></h2>
                    </div>

                    <div className='services'>
                        <ul>
                            <li><span><i className='ri-checkbox-blank-circle-fill'></i></span> Unlimited access to the gym</li>
                            <li><span><i className='ri-checkbox-blank-circle-fill'></i></span> Customer support</li>
                            <li><span><i className='ri-checkbox-blank-circle-fill'></i></span> Personal trainer</li>
                            <li><span><i className='ri-checkbox-blank-circle-fill'></i></span> Standard options</li>
                            <li><span><i className='ri-checkbox-blank-circle-fill'></i></span> 7 classes per week</li>
                        </ul>

                        <button className='register_btn'>Join Now</button>
                    </div>
                </div>


                <div className='pricing_item pricing_item-03'>
                    <div className='pricing_card-top'>
                        <h2 className='section_title'>Standard Member</h2>
                        <h2 className='pricing section_title'>$100 <span className='highlights'>/month</span></h2>
                    </div>

                    <div className='services'>
                        <ul>
                            <li><span><i className='ri-checkbox-blank-circle-fill'></i></span> Unlimited access to the gym</li>
                            <li><span><i className='ri-checkbox-blank-circle-fill'></i></span> Customer support</li>
                            <li><span><i className='ri-checkbox-blank-circle-fill'></i></span> Personal trainer</li>
                            <li><span><i className='ri-checkbox-blank-circle-fill'></i></span> Standard options</li>
                            <li><span><i className='ri-checkbox-blank-circle-fill'></i></span> 11 classes per week</li>
                        </ul>

                        <button className='register_btn'>Join Now</button>
                    </div>
                </div>


            </div>
        </div>
    </section>
  );
}


export default Pricing