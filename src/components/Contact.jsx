import React, { useState } from 'react';
import './contact.css';
import useAOS from './useAOS';
import 'aos/dist/aos.css';

const ContactForm = () => {
    useAOS();
    const initialFormState = {
        name: '',
        email: '',
        message: ''
    };

    const [formData, setFormData] = useState(initialFormState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setFormData(initialFormState);
                alert("form submitted successfully")

            } else {
                alert("Error Occurred");
            }
        } catch (error) {
            alert("Error Occurred");
        }
    };
    return (

        <div className='contact_section h_100  py-4 py-lg-4 d-flex flex-column flex- align-items-center justify-content-center' id="contact">
            <div className=" text-center pb-5" data-aos="zoom-in">
                <h3 className="fs_big fw-bold f-color-white">Contact Us</h3>
            </div>

            <div className="f-color-white w_70 d-flex flex-column flex- align-items-center justify-content-center">

                <form onSubmit={handleSubmit} className='col-lg-8 m-auto'>
                    <div className="form-group " data-aos="zoom-in">
                        <label htmlFor="name" className='f_22'>Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        
                        />
                    </div>
                    <div className="form-group" data-aos="zoom-in">
                        <label htmlFor="email" className='f_22'>Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group" data-aos="zoom-in">
                        <label htmlFor="message" className='f_22'>Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <div className='py-2'>
                        <button data-aos="zoom-in" className="m-auto col-lg-4  nav-link active ff_roboto f_18 resume_btn px-4 py-2 text-nowrap" id="downloadBtn">
                            Submit</button></div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
