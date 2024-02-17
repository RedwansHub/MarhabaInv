'use client'
import React, { useState } from 'react'
import InputField from './InputField';
import TextArea from './TextArea';

type Props = {}

const Form = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });
  
    const handleChange = (e : any) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    };
  
    const handleSubmit = (e : any) => {
      e.preventDefault();
      console.log(formData); // You can replace this with your submission logic
    };
  
    return (
      <form onSubmit={handleSubmit} className="w-full border-4 p-4 ">
        <InputField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <InputField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextArea
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit" className="bg-green-500 text-white py-2 px-4 w-full rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-500">
          Send Message
        </button>
      </form>
    );
  };
  
  export default Form;