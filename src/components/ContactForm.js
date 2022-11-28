import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { validateEmail } from '../utils/helper';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../App.css';

function contactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
    const [formMessage, setFormMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setFormMessage('Invalid Email');
            } else {
                setFormMessage('')
            }
        } else {
            if (!e.target.value.length) {
                const name = e.target.name;
                setFormMessage(`${name.charAT(0).toUpperCase() + name.slice(1)} is required`);
            } else {
                setFormMessage('')
            }
        }

        if (!formMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_hw21l3h', '#contactForm')
        .then(function (response) {
            console.log(response.text);
            setFormMessage('Message Sent!');
        }, function (error) {
            console.log(error.text);
            setFormMessage('Email Could not be sent via webpage; Please email me directly at hhc3h8@gmail.com');
        });
    }

    return (
        <Form className='text-white' onSubmit={sendEmail} id='contactForm'>
            <Form.Group controlId='name'>
                <Form.Label>Your Name</Form.Label>
                <Form.Control required name='name' placeholder="Henry" onBlur={handleChange}></Form.Control>
            </Form.Group>

            <Form.Group controlId='email'>
                <Form.Label>Your Email</Form.Label>
                <Form.Control required name='email' placeholder="3000@blackjets.allah" onBlur={handleChange}></Form.Control>
            </Form.Group>

            <Form.Group controlId='subject'>
                <Form.Label>Subject</Form.Label>
                <Form.Control required name='subject' placeholder="Cheese" onBlur={handleChange}></Form.Control>
            </Form.Group>

            <Form.Group controlId='message'>
                <Form.Label>Message</Form.Label>
                <Form.Control required name='message' placeholder="Henry" onBlur={handleChange}></Form.Control>
            </Form.Group>
            {formMessage && <p className='form-message'>{formMessage}</p>}

            <Button type='submit' className='btn'>Submit</Button>
        </Form>
    )
}

export default contactForm;
