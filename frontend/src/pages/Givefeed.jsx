import React, { useState } from 'react';
import { toast } from 'react-toastify';

function Givefeed() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    recipeName: '',
    feedbackMsg: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    recipeName: '',
    feedbackMsg: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: ''
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'Name must be at least 3 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[\w.-]+@[\w.-]+\.\w+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }

    if (!formData.recipeName.trim()) {
      newErrors.recipeName = 'Recipe name is required';
    }

    if (!formData.feedbackMsg.trim()) {
      newErrors.feedbackMsg = 'Feedback is required';
    } else if (formData.feedbackMsg.trim().length < 10) {
      newErrors.feedbackMsg = 'Feedback must be at least 10 characters';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const response = await fetch('https://full-stack-recipe-finder-website.onrender.com/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        console.error('Failed to send message');
        toast.error('Failed to submit feedback. Please try again later.');
        return;
      }

      const data = await response.json();
      console.log('server response:', data);

      toast.success('Feedback submitted successfully!');

      setFormData({
        name: '',
        email: '',
        recipeName: '',
        feedbackMsg: ''
      });
      setErrors({
        name: '',
        email: '',
        recipeName: '',
        feedbackMsg: ''
      });

    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Something went wrong. Please try again.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col items-center text-sm text-slate-800">
        <h1 className="text-4xl font-bold py-4 mt-13 text-center text-green-600">Feedback</h1>

        <div className="max-w-96 w-full px-4">

          {/* Name */}
          <label htmlFor="name" className="font-medium">Full Name</label>
          <div className="flex items-center mt-2 h-10 pl-3 border border-slate-300 rounded-full focus-within:ring-2 focus-within:ring-indigo-400 transition-all overflow-hidden">
            <input
              name='name'
              value={formData.name}
              onChange={handleChange}
              type="text"
              className="h-full px-2 w-full outline-none bg-transparent"
              placeholder="Enter your full name"
            />
          </div>
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}

          {/* Email */}
          <label htmlFor="email" className="font-medium mt-4">Email Address</label>
          <div className="flex items-center mt-2 h-10 pl-3 border border-slate-300 rounded-full focus-within:ring-2 focus-within:ring-indigo-400 transition-all overflow-hidden">
            <input
              name='email'
              value={formData.email}
              onChange={handleChange}
              type="email"
              className="h-full px-2 w-full outline-none bg-transparent"
              placeholder="Enter your email address"
            />
          </div>
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}

          {/* Recipe Name */}
          <label htmlFor="recipeName" className="font-medium mt-4">Recipe name</label>
          <div className="flex items-center mt-2 h-10 pl-3 border border-slate-300 rounded-full focus-within:ring-2 focus-within:ring-indigo-400 transition-all overflow-hidden">
            <input
              name='recipeName'
              value={formData.recipeName}
              onChange={handleChange}
              type="text"
              className="h-full px-2 w-full outline-none bg-transparent"
              placeholder="Enter your recipe name"
            />
          </div>
          {errors.recipeName && <p className="text-red-500 text-xs mt-1">{errors.recipeName}</p>}

          {/* Feedback */}
          <label htmlFor="feedbackMsg" className="font-medium mt-4">Feedback</label>
          <textarea
            name='feedbackMsg'
            value={formData.feedbackMsg}
            onChange={handleChange}
            className="w-full mt-2 p-2 bg-transparent border border-slate-300 rounded-lg resize-none outline-none focus:ring-2 focus:ring-green-600 transition-all"
            placeholder="Enter your feedback message"
            rows={4}
          />
          {errors.feedbackMsg && <p className="text-red-500 text-xs mt-1">{errors.feedbackMsg}</p>}

          <button
            type="submit"
            className="flex items-center justify-center gap-1 mt-5 bg-green-500 text-white py-2.5 w-full rounded-full transition"
          >
            Submit Form
          </button>
        </div>
      </form>
    </div>
  );
}

export default Givefeed;
