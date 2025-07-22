
import React, { useState } from 'react';
import { MdContactMail } from 'react-icons/md';
import PageHeader from '../../components/pageheader';
import { Animate } from 'react-simple-animate';
import './style.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async () => {
    try {
const response = await fetch('http://portback-production.up.railway.app/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', description: '' });
      } else {
        alert('Failed to send message.');
      }
    } catch (err) {
      alert('Server error!');
      console.error(err);
    }
  };

  return (
    <section id="contact" className="contact">
      <PageHeader
        headerText="My Contact"
        icon={<MdContactMail size={30} />}
      />

      <div className="contact-content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{ transform: 'translateX(-200px)' }}
          end={{ transform: 'translateX(0px)' }}
        >
          <h3 className="contact-content-header-text">Let's Talk</h3>
        </Animate>

        <Animate
          play
          duration={1}
          delay={0}
          start={{ transform: 'translateX(200px)' }}
          end={{ transform: 'translateX(0px)' }}
        >
          <div className="contact-content-form">
            <div className="contact-content-form-controlswrapper">
              <div className="nameWrapper">
                <input
                  required
                  name="name"
                  className="inputName"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                />
                <label htmlFor="name" className="nameLabel">Name</label>
              </div>
              <div className="emailWrapper">
                <input
                  required
                  name="email"
                  className="inputEmail"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <label htmlFor="email" className="emailLabel">Email</label>
              </div>
            </div>

            <div className="descriptionWrapper">
              <textarea
                required
                name="description"
                className="inputDescription"
                rows="4"
                value={formData.description}
                onChange={handleChange}
              />
              <label htmlFor="description" className="descriptionLabel">Description</label>
            </div>

            <button type="button" className="submit-button" onClick={handleSubmit}>Submit</button>
          </div>
        </Animate>
      </div>
    </section>
  );
};

export default Contact;
