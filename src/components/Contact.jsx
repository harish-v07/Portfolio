import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://getform.io/f/akkpyzga', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Message submitted successfully!');
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        alert('Failed to submit message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to submit message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id='contact' className='w-full py-20 bg-[#0a192f] flex justify-center items-center p-4'>
      <div className='max-w-[1000px] w-full'>
        <div className='pb-8 text-center'>
          <p className='text-4xl font-bold inline border-b-4 border-[#ff6b35] relative text-white'>
            Contact
            <span className='absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-[#ff6b35] to-transparent'></span>
          </p>
          <p className='text-gray-300 py-4 text-xl'>Get in touch with me!</p>
        </div>

        <div className='grid md:grid-cols-2 gap-12'>
          {/* Left Side: Contact Info */}
          <div className='flex flex-col space-y-8'>
            <p className='text-lg text-gray-300 leading-relaxed'>
              I'm actively looking for new opportunities and would love to hear from you. Whether you have a question or just want to say hi, feel free to reach out.
            </p>
            
            <div className='space-y-6'>
              <a 
                href="mailto:vharish7100@gmail.com" 
                className='flex items-center space-x-4 group p-4 rounded-xl bg-[#112240] border border-gray-800 hover:border-[#ff6b35]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#ff6b35]/10'
              >
                <div className='p-3 bg-[#ff6b35]/20 rounded-lg'>
                  <FaEnvelope className='text-[#ff6b35]' size={20} />
                </div>
                <div>
                  <p className='text-gray-400 text-sm'>Email</p>
                  <span className='text-gray-100 group-hover:text-[#ff6b35] transition-colors font-medium'>
                    vharish7100@gmail.com
                  </span>
                </div>
              </a>
              
              <a 
                href="tel:+919042999161" 
                className='flex items-center space-x-4 group p-4 rounded-xl bg-[#112240] border border-gray-800 hover:border-[#ff6b35]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#ff6b35]/10'
              >
                <div className='p-3 bg-[#ff6b35]/20 rounded-lg'>
                  <FaPhone className='text-[#ff6b35]' size={20} />
                </div>
                <div>
                  <p className='text-gray-400 text-sm'>Phone</p>
                  <span className='text-gray-100 group-hover:text-[#ff6b35] transition-colors font-medium'>
                    +91 9042999161
                  </span>
                </div>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/HarishV07" 
                target="_blank" 
                rel="noopener noreferrer" 
                className='flex items-center space-x-4 group p-4 rounded-xl bg-[#112240] border border-gray-800 hover:border-[#ff6b35]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#ff6b35]/10'
              >
                <div className='p-3 bg-[#ff6b35]/20 rounded-lg'>
                  <FaLinkedin className='text-[#ff6b35]' size={20} />
                </div>
                <div>
                  <p className='text-gray-400 text-sm'>LinkedIn</p>
                  <span className='text-gray-100 group-hover:text-[#ff6b35] transition-colors font-medium'>
                    linkedin.com/in/HarishV07
                  </span>
                </div>
              </a>
              
              <a 
                href="https://github.com/harish-v07" 
                target="_blank" 
                rel="noopener noreferrer" 
                className='flex items-center space-x-4 group p-4 rounded-xl bg-[#112240] border border-gray-800 hover:border-[#ff6b35]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#ff6b35]/10'
              >
                <div className='p-3 bg-[#ff6b35]/20 rounded-lg'>
                  <FaGithub className='text-[#ff6b35]' size={20} />
                </div>
                <div>
                  <p className='text-gray-400 text-sm'>GitHub</p>
                  <span className='text-gray-100 group-hover:text-[#ff6b35] transition-colors font-medium'>
                    github.com/harish-v07
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className='bg-[#112240] p-8 rounded-xl border border-gray-800 shadow-2xl'>
            <h3 className='text-2xl font-bold text-white mb-6'>Send Message</h3>
            <form onSubmit={handleSubmit} className='flex flex-col space-y-6'>
              <div>
                <label className='block text-gray-400 text-sm font-medium mb-2'>Name</label>
                <input 
                  className='w-full bg-[#0a192f] text-gray-100 p-4 rounded-lg border border-gray-700 focus:border-[#ff6b35] focus:outline-none transition-colors duration-300' 
                  type="text" 
                  placeholder='Your Name' 
                  name='name' 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div>
                <label className='block text-gray-400 text-sm font-medium mb-2'>Email</label>
                <input 
                  className='w-full bg-[#0a192f] text-gray-100 p-4 rounded-lg border border-gray-700 focus:border-[#ff6b35] focus:outline-none transition-colors duration-300' 
                  type="email" 
                  placeholder='Your Email' 
                  name='email' 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div>
                <label className='block text-gray-400 text-sm font-medium mb-2'>Message</label>
                <textarea 
                  className='w-full bg-[#0a192f] text-gray-100 p-4 rounded-lg border border-gray-700 focus:border-[#ff6b35] focus:outline-none transition-colors duration-300 resize-none' 
                  name="message" 
                  rows="6" 
                  placeholder='Your Message' 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className='w-full bg-[#ff6b35] hover:bg-[#ff6b35]/90 disabled:bg-[#ff6b35]/50 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-[#ff6b35]/25 hover:scale-[1.02] flex items-center justify-center space-x-2'
              >
                <span>{isSubmitting ? 'Sending...' : 'Send'}</span>
                {!isSubmitting && (
                  <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8' />
                  </svg>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
