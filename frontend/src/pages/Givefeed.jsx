import React, { useState } from 'react';
import { toast } from 'react-toastify';

function Givefeed() {

  const [formData, setFormData] = useState({
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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://full-stack-recipe-finder-website.onrender.com/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        console.error('Failed to send message');
        toast.error('Failed to submit feedback. Please try again later.', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
        });
        return;
      }
      const data = await response.json();
      console.log('server responce:', data);

    } catch (error) {
      console.error('Error sending message:', error);
    }
    console.log('Form submitted:', formData);
    // Reset form data after submission
    setFormData({
      name: '',
      email: '',
      recipeName: '',
      feedbackMsg: ''
    });
    toast.success('Feedback submitted successfully!', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col items-center text-sm text-slate-800">

        <h1 className="text-4xl font-bold py-4 mt-13 text-center text-green-600">Feedback</h1>

        <div className="max-w-96 w-full px-4">
          <label htmlFor="name" className="font-medium">Full Name</label>
          <div className="flex items-center mt-2 mb-4 h-10 pl-3 border border-slate-300 rounded-full focus-within:ring-2 focus-within:ring-indigo-400 transition-all overflow-hidden">
            <input
              name='name'
              value={formData.name}
              onChange={handleChange}
              type="text" className="h-full px-2 w-full outline-none bg-transparent" placeholder="Enter your full name" required />
          </div>

          <label htmlFor="email" className="font-medium mt-4">Email Address</label>
          <div className="flex items-center mt-2 mb-4 h-10 pl-3 border border-slate-300 rounded-full focus-within:ring-2 focus-within:ring-indigo-400 transition-all overflow-hidden">

            <input
              name='email'
              value={formData.email}
              onChange={handleChange}
              type="email" className="h-full px-2 w-full outline-none bg-transparent" placeholder="Enter your email address" required />
          </div>

          <label htmlFor="recipeName" className="font-medium mt-4">Recipe name</label>
          <div className="flex items-center mt-2 mb-4 h-10 pl-3 border border-slate-300 rounded-full focus-within:ring-2 focus-within:ring-indigo-400 transition-all overflow-hidden">
            <input
              name='recipeName'
              value={formData.recipeName}
              onChange={handleChange}
              type="text" className="h-full px-2 w-full outline-none bg-transparent" placeholder="Enter your recipe name" required />
          </div>

          <label htmlFor="feedbackMsg" className="font-medium mt-4">Feedback</label>
          <input
            name='feedbackMsg'
            value={formData.feedbackMsg}
            onChange={handleChange}
            type="text"
            className="w-full mt-2 p-2 bg-transparent border border-slate-300 rounded-lg resize-none outline-none focus:ring-2 focus-within:ring-green-600 transition-all" placeholder="Enter your feedback massage" required></input>

          <button type="submit" className="flex items-center justify-center gap-1 mt-5 bg-green-500 text-white py-2.5 w-full rounded-full transition">
            Submit Form
          </button>
        </div>
      </form>
    </div>
  );
}

export default Givefeed;