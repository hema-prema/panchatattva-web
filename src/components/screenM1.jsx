import React, { useState } from 'react';

const Screen1 = () => {
    const [showFullText, setShowFullText] = useState([false, false, false, false]);

    // Function to toggle the "Read More" and "Read Less" state for a specific card
    const toggleShowFullText = (index) => {
        const updatedShowFullText = [...showFullText];
        updatedShowFullText[index] = !updatedShowFullText[index];
        setShowFullText(updatedShowFullText);
    };

    return (
        <div className="centered-container">
            <div className="card-types">
                {/* Card 1 */}
                <div className="card-items">
                    <div className='head-card'>
                        <img className="img-bg" src='images/icons/icon1.png' alt='Icon 1' />
                        <h3>AHAAR</h3>
                    </div>
                    <p>
                        {showFullText[0] ? (
                            <>
                                Food – It is not about eating less or counting your calories
                                but eating the right kind of food at the right time in a right way.
                                Diet is considered to be one of the Upastambha of life and the greatest medicine.
                                It has a prime role in maintaining health and treating various diseases.
                            </>
                        ) : (
                            <>
                                Food – It is not about eating less or counting...
                            </>
                        )}
                        <br />
                        {showFullText[0] ? (
                            <a onClick={() => toggleShowFullText(0)}>Read Less</a>
                        ) : (
                            <a onClick={() => toggleShowFullText(0)}>Read More</a>
                        )}
                    </p>
                </div>

                {/* Card 2 */}
                <div className="card-items">
                    <div className='head-card'  >
                        <img  src='images/icons/icon2.png' alt='Icon 1' />
                        <h3>VIHAAR</h3>
                    </div>        
                    <p>
                        {showFullText[1] ? (
                            <>
                                Exercise – Regular exercise is known to improve circulation, strength, and 
                                endurance. It helps you to relax mentally and have a sound sleep. It also improves
                                digestion and elimination.
                            </>
                        ) : (
                            <>
                                Exercise – Regular exercise is known to improve circulation...
                            </>
                        )}
                        <br />
                        {showFullText[1] ? (
                            <a onClick={() => toggleShowFullText(1)}>Read Less</a>
                        ) : (
                            <a onClick={() => toggleShowFullText(1)}>Read More</a>
                        )}
                    </p>
                </div>

                {/* Card 3 */}
                <div className="card-items">
                    <div className='head-card' >
                        <img  src='images/icons/icon3.png' alt='Icon 1' />
                        <h3>NIDRA</h3>
                    </div>
                    <p>
                        {showFullText[2] ? (
                            <>
                                Sleep – It is not about sleeping for 8 hours but about how well you are sleeping,
                                which is possible only when the mind completely dissociates itself from the senses.
                                Quality sleep recharges the mind, repairs the body and nourishes the soul.
                            </>
                        ) : (
                            <>
                                Sleep – It is not about sleeping for 8 hours but about...
                            </>
                        )}
                        <br />
                        {showFullText[2] ? (
                            <a onClick={() => toggleShowFullText(2)}>Read Less</a>
                        ) : (
                            <a onClick={() => toggleShowFullText(2)}>Read More</a>
                        )}
                    </p>
                </div>

                {/* Card 4 */}
                <div className="card-items">
                    <div className='head-card'>
                        <img  src='images/icons/icon4.png' alt='Icon 1' />
                        <h3>DHYANA</h3>
                    </div>
                    <p>
                        {showFullText[3] ? (
                            <>
                                Mindfulness - Yoga comprises of several practices, of which Dhyana means pure
                                meditation to keep the mind at peace and stress free. Stress increases the risk 
                                of conditions like obesity, heart disease, diabetes, depression, gastrointestinal 
                                problems, and asthma.
                            </>
                        ) : (
                            <>
                                Mindfulness - Yoga comprises of several practices, of which Dhyana...
                            </>
                        )}
                        <br />
                        {showFullText[3] ? (
                            <a onClick={() => toggleShowFullText(3)}>Read Less</a>
                        ) : (
                            <a onClick={() => toggleShowFullText(3)}>Read More</a>
                        )}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Screen1;
