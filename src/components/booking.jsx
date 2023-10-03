import React, { useState } from 'react';
import '../assets/styles/booking.css'; 

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    age: '',
    city: '',
    gender: '',
    country: '',
    dateTime: '',
    appointmentType: 'virtual',
    purpose: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className='booking'>
        <div className='booking-img'>
            <div className='image-container'>
                <img src='images/logo2.png' alt='Logo 1' />
            </div>
            <div className='image-container'>
                <img src='images/contact.png' alt='Logo 2' />
            </div>
        </div>
        <div className="appointment-form">
        <h2 className="form-title">Appointment Booking Form</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
            <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="form-input"
                placeholder='Full Name'
            />
            </div>
            <div className="form-group">
            <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
                placeholder='Email'
            />
            </div>
            <div>
            <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="form-input"
                placeholder='Phone Number'
            />
            </div>
            <div className='form-grid'>
            <div>
            <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
                className="form-input"
                placeholder='Age'
            />
            </div>
            <div>
            <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="form-input"
                placeholder='City'
            />
            </div>
            <div>
            <input
                type="text"
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className="form-input"
                placeholder='Gender'
            />
            </div>
            <div>
            <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="form-input"
                placeholder='Country'
            />
            </div>
            <div>

            <input
                type="datetime-local"
                id="dateTime"
                name="dateTime"
                value={formData.dateTime}
                onChange={handleChange}
                required
                className="form-input"
                placeholder='Date and Time'
            />
            </div>
            <div>
            <label htmlFor="appointmentType"></label>
            <select
                id="appointmentType"
                name="appointmentType"
                value={formData.appointmentType}
                onChange={handleChange}
                required
                className="form-input"
                placeholder=''
            >
                <option value="virtual">Virtual</option>
                <option value="personal">Personal</option>
            </select>
            </div>
            </div>
            <div>
            <textarea
                id="purpose"
                name="purpose"
                value={formData.purpose}
                onChange={handleChange}
                required
                className="form-input"
                placeholder='Appointment Type'
            />
            </div>
            <div className="form-group">
            <button type="submit" className="form-button">
                Book Appointment
            </button>
            </div>
        </form>
        </div>
    </div>
  );
};

export default AppointmentForm;
