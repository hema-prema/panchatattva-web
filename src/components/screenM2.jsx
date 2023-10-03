import React from 'react';

const Screen2 = () => {
    return (
        <div className="about">
            <h1>About Us</h1>
            <div className="about_block">
                {/* Video Section */}
                <div className="video_about">
                    <iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/i0nOUybPoUg?si=K-CTXhml2xarco8F" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                {/* Read About Section */}
                <div className="read_about">
                    <h3>About Doctor Avantika Krishna Killa</h3>
                    <p>
                        A qualified Naturopathy and Yoga Physician,
                        who takes an integrative medical approach to health.
                        Having 10+ years of experience in integrative health,
                        she firmly believes that balance is the key to good
                        health and that abiding by the principles of Mother
                        Nature, one can reverse chronic diseases we encounter
                        nowadays. She has been working extensively in managing
                        some of the chronic lifestyle-related conditions like
                        Diabetes, Asthma, Autoimmune diseases, Sciatica, PCOS,
                        Infertility, Obesity, Thyroid, Dyslipidemia, and more.
                        She has had the opportunity to work with some great
                        Naturopaths, Doctors, and Hospitals like the All India
                        Institute of Medical Sciences (AIIMS), New Delhi.
                        She is also a trained Acupuncturist and Chiropractor.
                    </p>
                    <button>Read More</button>
                </div>
            </div>
        </div>
    );
}

export default Screen2;
