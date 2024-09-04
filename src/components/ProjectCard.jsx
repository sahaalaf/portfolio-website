import React, { useState } from 'react';
import Slider from 'react-slick';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const ProjectCard = () => {
  const projects = [
    {
      id: 1,
      title: "Weather App",
      description: "A React.js app using the OpenWeather API for real-time weather updates. Styled with Tailwind CSS, it offers a clean, responsive design.",
      imgUrl: '/weather.PNG',
      githubRepo: 'https://github.com/sahaalaf/weather-app',
      linkedinPost: 'https://www.linkedin.com/posts/sahal-sajeed-aa736721b_weatherapp-reactjs-openweatherapi-activity-7234468683438256129-Jv33?utm_source=share&utm_medium=member_desktop'
    },
    {
      id: 2,
      title: "StreamX",
      description: "StreamX is a Movie App, which fetches movies/series data using the Netflix API. Technologies used include Tailwind CSS, ShadCN, and React Hot Toast.",
      imgUrl: '/netflix.PNG',
      githubRepo: 'https://github.com/sahaalaf/weather-app',
      linkedinPost: 'https://www.linkedin.com/posts/sahal-sajeed-aa736721b_weatherapp-reactjs-openweatherapi-activity-7234468683438256129-Jv33?utm_source=share&utm_medium=member_desktop'
    },
    {
      id: 3,
      title: "Blog App",
      description: "A blog application built with React.js and styled with Tailwind CSS and ShadCN. It features a user-friendly interface for reading, creating, and managing blog posts.",
      imgUrl: '/blog.PNG',
      githubRepo: 'https://github.com/sahaalaf/weather-app',
      linkedinPost: 'https://www.linkedin.com/posts/sahal-sajeed-aa736721b_weatherapp-reactjs-openweatherapi-activity-7234468683438256129-Jv33?utm_source=share&utm_medium=member_desktop'
    },
    {
      id: 4,
      title: "Book Store",
      description: "An online bookstore built with React.js, offering features like browsing, searching, and purchasing books with a seamless user experience.",
      imgUrl: '/book_store.PNG',
      githubRepo: 'https://github.com/sahaalaf/weather-app',
      linkedinPost: 'https://www.linkedin.com/posts/sahal-sajeed-aa736721b_weatherapp-reactjs-openweatherapi-activity-7234468683438256129-Jv33?utm_source=share&utm_medium=member_desktop'
    },
    {
      id: 5,
      title: "Weather App",
      description: "A React.js app using the OpenWeather API for real-time weather updates. Styled with Tailwind CSS, it offers a clean, responsive design.",
      imgUrl: '/weather.PNG',
      githubRepo: 'https://github.com/sahaalaf/weather-app',
      linkedinPost: 'https://www.linkedin.com/posts/sahal-sajeed-aa736721b_weatherapp-reactjs-openweatherapi-activity-7234468683438256129-Jv33?utm_source=share&utm_medium=member_desktop'
    },
    {
      id: 6,
      title: "StreamX",
      description: "StreamX is a Movie App, which fetches movies/series data using the Netflix API. Technologies used include Tailwind CSS, ShadCN, and React Hot Toast.",
      imgUrl: '/netflix.PNG',
      githubRepo: 'https://github.com/sahaalaf/weather-app',
      linkedinPost: 'https://www.linkedin.com/posts/sahal-sajeed-aa736721b_weatherapp-reactjs-openweatherapi-activity-7234468683438256129-Jv33?utm_source=share&utm_medium=member_desktop'
    },
    {
      id: 7,
      title: "Blog App",
      description: "A blog application built with React.js and styled with Tailwind. It features a user-friendly interface for reading, creating, and managing blog posts.",
      imgUrl: '/blog.PNG',
      githubRepo: 'https://github.com/sahaalaf/weather-app',
      linkedinPost: 'https://www.linkedin.com/posts/sahal-sajeed-aa736721b_weatherapp-reactjs-openweatherapi-activity-7234468683438256129-Jv33?utm_source=share&utm_medium=member_desktop'
    },
    {
      id: 8,
      title: "Book Store",
      description: "An online bookstore built with React.js, offering features like browsing, searching, and purchasing books with a seamless user experience.",
      imgUrl: '/book_store.PNG',
      githubRepo: 'https://github.com/sahaalaf/weather-app',
      linkedinPost: 'https://www.linkedin.com/posts/sahal-sajeed-aa736721b_weatherapp-reactjs-openweatherapi-activity-7234468683438256129-Jv33?utm_source=share&utm_medium=member_desktop'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Custom arrow components
  const PrevArrow = (props) => (
    <button
      {...props}
      className={`slick-prev ${currentIndex === 0 ? 'hidden' : ''}`}
      aria-label="Previous"
    />
  );

  const NextArrow = (props) => (
    <button
      {...props}
      className={`slick-next ${currentIndex === projects.length - 1 ? 'hidden' : ''}`}
      aria-label="Next"
    />
  );

  // Slider settings
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => setCurrentIndex(newIndex),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    prevArrow: currentIndex === 0 ? <></> : <PrevArrow />,
    nextArrow: currentIndex === projects.length - 1 ? <></> : <NextArrow />,
  };

  return (
    <Slider {...settings} className="py-4">
      {projects.map((project) => (
        <div key={project.id} className="p-4">
          <div className="bg-gray-800 w-full h-auto rounded-xl shadow-lg p-6 hover:scale-105 transition-all cursor-pointer">
            <div className="h-32 bg-gray-200 rounded-xl mb-4 overflow-hidden">
              <img
                src={project.imgUrl}
                alt={`${project.title} Thumbnail`}
                className="object-cover w-full h-full"
              />
            </div>
            <h2 className="text-xl font-bold mb-2 text-white">{project.title}</h2>
            <p className="text-white mb-4 text-sm">{project.description}</p>

            <div className="flex justify-start space-x-4 mt-4">
              <a href={project.githubRepo} target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-white hover:text-black text-2xl" />
              </a>
              <a href={project.linkedinPost} target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-blue-700 hover:text-blue-900 text-2xl" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default ProjectCard;
