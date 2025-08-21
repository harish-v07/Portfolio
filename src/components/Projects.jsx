import React from 'react';

// Import your images
import studentDropoutImg from '../assets/student-dropout.png';
import foodRecommendationImg from '../assets/food-recommendation.jpg';
import salesDashboardImg from '../assets/sales-dashboard.png';
import gatePassImg from '../assets/gate-pass.png';

const Projects = () => {
  const projects = [
    {
      title: 'Student Dropout Prediction',
      description: 'Machine learning model that predicts student dropout probability using various academic and demographic factors.',
      tags: ['Python', 'Machine Learning', 'Scikit-learn', 'Pandas'],
      codeLink: 'https://github.com/harish-v07/Student-Dropout-Prediction',
      image: studentDropoutImg, 
    },
    {
      title: 'Food Recommendation System',
      description: 'ML-powered application that estimates food calories and provides BMI-based nutritional recommendations also identifies food items based on uploaded image.',
      tags: ['Python', 'OpenCV', 'TensorFlow', 'Image Processing'],
      codeLink: 'https://github.com/harish-v07/FoodRecommendationSystem',
      image: foodRecommendationImg,
    },
    {
      title: 'Sales Insights Dashboard',
      description: 'Interactive Power BI dashboard for comprehensive sales analysis and KPI tracking.',
      tags: ['Power BI', 'Data Analysis', 'SQL', 'Excel'],
      codeLink: 'https://github.com/harish-v07/PowerBI-Projects',
      image: salesDashboardImg,
      isDashboard: true,
    },
    {
      title: 'Gate Pass Management System',
      description: 'Full-stack web application for managing institutional gate passes with role-based authentication.',
      tags: ['Spring Boot', 'React', 'MySQL', 'Java'],
      codeLink: 'https://github.com/harish-v07/Gate-Pass-Management',
      image: gatePassImg,
    },
  ];

  return (
    <div id='projects' className='w-full py-20 bg-[#112240] text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 text-center'>
          <p className='text-4xl font-bold inline border-b-4 border-[#ff6b35] relative'>
            Projects
            <span className='absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-[#ff6b35] to-transparent'></span>
          </p>
          <p className='py-6 text-xl text-gray-300'>Check out some of my recent work</p>
        </div>

        <div className='grid sm:grid-cols-2 gap-8'>
          {projects.map((project, index) => (
            <div 
              key={project.title} 
              className='bg-[#0a192f] rounded-xl shadow-2xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300 border border-gray-800 hover:border-[#ff6b35]/50 hover:shadow-[#ff6b35]/10 group'
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className='w-full h-48 overflow-hidden'>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
                />
              </div>
              
              <div className='p-6'>
                <h3 className='text-2xl font-bold text-white mb-3 group-hover:text-[#ff6b35] transition-colors duration-300'>
                  {project.title}
                </h3>
                
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className='bg-[#112240] text-gray-300 text-xs font-semibold px-3 py-1 rounded-full border border-gray-700 hover:border-[#ff6b35]/50 hover:text-[#ff6b35] transition-all duration-300'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <p className='text-gray-400 mb-6 leading-relaxed'>
                  {project.description}
                </p>
                
                <div className='pt-4 border-t border-gray-800'>
                  <a 
                    href={project.codeLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className='text-[#ff6b35] font-semibold hover:text-white transition-colors duration-300 flex items-center group/link'
                  >
                    {project.isDashboard ? 'Dashboard' : 'View Code'}
                    <svg className='w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
