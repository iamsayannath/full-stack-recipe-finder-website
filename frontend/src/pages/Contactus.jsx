
import { useState } from 'react';

function Contactus() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
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

    // try {
    //   const response = await fetch('https://api.example.com/contact', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(formData)
    //   });
    //   if (!response.ok) {
    //     console.error('Failed to send message');
    //     return;
    //   }
    //   const data = await response.json();
    //   console.log('server responce:', data);

    //   // Reset form data after successful submission
    //   setFormData({
    //     name: '',
    //     email: '',
    //     message: ''
    //   });
    // } catch (error) {
    //   console.error('Error sending message:', error);
    // }
    console.log('Form submitted:', formData);
    // Reset form data after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col items-center text-sm">
        <h1 className="text-4xl font-semibold text-green-600 m-15 pb-4">Get in touch with us</h1>

        <div className="flex flex-col md:flex-row items-center gap-10 w-[350px] md:w-[700px]">

          <div className="w-full">
            <label className="text-black/70">Your Name</label>
            <input name='name' placeholder='enter your name' value={formData.name} onChange={handleChange} className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-green-600" type="text" required />
          </div>

          <div className="w-full">
            <label className="text-black/70">Your Email</label>
            <input name='email' placeholder='enter your email' value={formData.email} onChange={handleChange} className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-green-600" type="email" required />
          </div>
        </div>

        <div className="mt-6 w-[350px] md:w-[700px]">
          <label className="text-black/70">Message</label>

          <input name='message' placeholder='enter your message' value={formData.message} onChange={handleChange} className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-green-600" type="text" required />
        </div>

        <button type="submit" className="mt-5 bg-green-600 text-white h-12 w-56 px-4 rounded active:scale-95 transition">Send Message</button>
      </form>
    </div>
  );
}

export default Contactus;