// CertificateCarousel.js
import React, { useState } from 'react';

const certificates = [
    { image: 'path/to/certificate1.jpg', name: 'Certificate 1' },
    { image: 'path/to/certificate2.jpg', name: 'Certificate 2' },
    { image: 'path/to/certificate3.jpg', name: 'Certificate 3' }
];

const Certificates = () => {
    const [current, setCurrent] = useState(0);
    const length = certificates.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(certificates) || certificates.length <= 0) {
        return null;
    }

    return (
        <div className="carousel-container">
            <button className="left-arrow" onClick={prevSlide}>&#10094;</button>
            <button className="right-arrow" onClick={nextSlide}>&#10095;</button>
            {certificates.map((certificate, index) => (
                <div
                    className={index === current ? 'slide active' : 'slide'}
                    key={index}
                >
                    {index === current && (
                        <div className="certificate">
                            <img src={certificate.image} alt={`Certificate ${index + 1}`} className="image" />
                            <p className="legend">{certificate.name}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Certificates;
