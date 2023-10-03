import React from 'react';

const Screen3 = () => {
    return (
        <div>
            {/* Why Choose Us Section */}
            <div className="first">
                <h1>Why Choose Us</h1>
                <div className="choose">
                    <div className="choose_us">
                        {/* Choose Item 1 */}
                        <div className="choose-items">
                            <img className="img-bg" src='images/icons/icon5.png' alt='Icon 5' />
                            <h5>No medicines or supplements used</h5>
                            <p>
                                Our approach is purely based on an individual’s
                                lifestyle and the connection between Mind-Body-Soul.
                                It is drugless, safe and effective.
                            </p>
                        </div>
                        {/* Choose Item 2 */}
                        <div className="choose-items">
                            <img className="img-bg" src='images/icons/icon6.png' alt='Icon 6' />
                            <h5>Evidenced Based Medicine</h5>
                            <p>
                                Our approach is guided by the best available research data,
                                balanced with the doctor’s judgement and patient’s values.
                            </p>
                        </div>
                        {/* Choose Item 3 */}
                        <div className="choose-items">
                            <img className="img-bg" src='images/icons/icon7.png' alt='Icon 7' />
                            <h5>Individualized programs</h5>
                            <p>
                                Each one of us being different with regards to the body type, mindset, likes and dislikes,
                                our programs are designed to meet individual requirements and goals. Not just weight loss,
                                but we believe in overall health, managing the chronic diseases and restoring the factor of wellness.
                            </p>
                        </div>
                        {/* Choose Item 4 */}
                        <div className="choose-items">
                            <img className="img-bg" src='images/icons/icon8.png' alt='Icon 8' />
                            <h5>Virtual programs</h5>
                            <p>
                                We have something for all those living far away or running a busy life. All you
                                need to do is book an appointment with our doctors and we shall reach back to you as
                                soon as we can with our online program details and help you deal with it over an audio
                                / video call.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Healing Center Section */}
            <div className="flower">
                <div className="heal">
                    <h1>Our Healing Center</h1>
                    <div className="healing_center">
                        {/* Healing Item 1 */}
                        <div className="heal-items">
                            <img src='images/heal1.png' alt="Heal 1" />
                            <a href="#">Relieve Ache & pains</a>
                        </div>
                        {/* Healing Item 2 */}
                        <div className="heal-items">
                            <img src='images/heal2.png' alt="Heal 2" />
                            <a href="#">Healing & Strengthening</a>
                        </div>
                        {/* Healing Item 3 */}
                        <div className="heal-items">
                            <img src='images/heal3.png' alt="Heal 3" />
                            <a href="#">Ayurveda Spa</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Program Section */}
            <div className="ourprogrm-full">
                <h1>Our Program</h1>
                <div className="our_progrm">
                    {/* Program Item 1 */}
                    <div className="progrm-items">
                        <img src="images/icons/icon9.png" alt="Program 1" />
                        <p>Weight management</p>
                    </div>
                    {/* Program Item 2 */}
                    <div className="progrm-items">
                        <img src="images/icons/icon10.png" alt="Program 2" />
                        <p>Diabetes management</p>
                    </div>
                    {/* Program Item 3 */}
                    <div className="progrm-items">
                        <img src="images/icons/icon11.png" alt="Program 3" />
                        <p>Cardiac Care</p>
                    </div>
                    {/* Program Item 4 */}
                    <div className="progrm-items">
                        <img src="images/icons/icon12.png" alt="Program 4" />
                        <p>Pain management</p>
                    </div>
                    {/* Program Item 5 */}
                    <div className="progrm-items">
                        <img src="images/icons/icon13.png" alt="Program 5" />
                        <p>Hormonal Care</p>
                    </div>
                    {/* Program Item 6 */}
                    <div className="progrm-items">
                        <img src="images/icons/icon14.png" alt="Program 6" />
                        <p>Skin Care</p>
                    </div>
                    {/* Program Item 7 */}
                    <div className="progrm-items">
                        <img src="images/icons/icon15.png" alt="Program 7" />
                        <p>Allergy Care</p>
                    </div>
                    {/* Program Item 8 */}
                    <div className="progrm-items">
                        <img src="images/icons/icon16.png" alt="Program 8" />
                        <p>Pregnancy Care</p>
                    </div>
                    {/* Program Item 9 */}
                    <div className="progrm-items">
                        <img src="images/icons/icon17.png" alt="Program 9" />
                        <p>Stress Management</p>
                    </div>
                    {/* Program Item 10 */}
                    <div className="progrm-items">
                        <img src="images/icons/icon18.png" alt="Program 10" />
                        <p>Detoxification</p>
                    </div>
                </div>
            </div>

            {/* Healing Stories Section */}
            <div className="stories">
                <h1>Our Healing Stories</h1>
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner someee">
                        <div className="carousel-item active">
                            <div className="over">
                                <p className="d-block w-100">
                                    “I have Diabetes for the last 20 years for which I have been taking
                                    up to 20 units of insulin everyday along with other regular medicines to control my sugar
                                    level. One of my relatives informed me about Panchatattva and I planned a visit. Within 2
                                    months of following the diet plan, the results were so positive that at present I no longer
                                    need insulin shots and my other medicines have also been reduced to half. I’m grateful to the entire team.”
                                </p>
                            </div>
                            <div className="carousel-caption d-none d-md-block lower">
                                <img src='images/Ellipse11.png' alt="Ellipse 11" />
                                <h6>Rajesh Goenka (Business)</h6>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="over">
                                <p className="d-block w-100">
                                    “ One of my relatives informed me about Panchatattva and I planned a visit. Within 2
                                    months of following the diet plan, the results were so positive that at present I no longer
                                    need insulin shots and my other medicines have also been reduced to half. I’m grateful
                                    to the entire team.I have Diabetes for the last 20 years for which I have been taking
                                    up to 20 units of insulin everyday along with other regular medicines to control my sugar
                                    level.”
                                </p>
                            </div>
                            <div className="carousel-caption d-none d-md-block lower">
                                <img src='images/Ellipse12.png' alt="Ellipse 12" />
                                <h6>Jenii Yusuf (Hospitality)</h6>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev control-icon" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next control-icon" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Screen3;
