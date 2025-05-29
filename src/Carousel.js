import React, { useEffect } from 'react';
import './Carousel.css';
import experienceGif from './gifs/rowing.gif';
import speakingGif from './gifs/speaking.gif';
import marshallImage from './images/carousel/marshall.png';
import BoeingImage from './images/carousel/Boeing.png';
import LeoganeImage from './images/carousel/Leogane.png';

const carouselItems = [
  {
    title: "Marshall Scholar",
    description: "Awarded the 2023 Marshall Scholarship to pursue graduate study in the United Kingdom.",
    image: marshallImage,
    link: "https://news.nd.edu/news/alumna-hannah-gillespie-named-2023-marshall-scholar/",
    buttons: [
      { text: "Notre Dame Press Release", url: "https://news.nd.edu/news/alumna-hannah-gillespie-named-2023-marshall-scholar/" },
      { text: "Forbes News", url: "https://www.forbes.com/sites/michaeltnietzel/2022/12/14/the-2023-class-of-marshall-scholars-has-been-selected/" },
      { text: "Marshall Profile", url: "https://www.marshallscholarship.org/scholars/scholar-profiles/hannah-gillespie/" }
    ]
  },
  {
    title: "Hands-On Engineering",
    description: "Bridging lab research with field work, from 3D-printing ideas on the factory floor to debugging at 10,000 feet.",
    image: BoeingImage,
    link: "https://onfirstup.com/boeing/BNN/articles/video-smarter-safer-airplanes-enabled-by-machine-learning-1",
    buttons: [
      { text: "Boeing Article", url: "https://onfirstup.com/boeing/BNN/articles/video-smarter-safer-airplanes-enabled-by-machine-learning-1" },
      { text: "U.S. Patent", url: "https://patents.google.com/patent/US20230030042A1/en?oq=US-20230030042-A1" }
    ]
  },
  {
    title: "Design Ethos",
    description: "Guided by human-centered design thinking and a deep respect for the dignity of every person.",
    image: LeoganeImage,
    link: "https://www.cai.cam.ac.uk/news/engineering-putting-people-first",
    buttons: [
      { text: "Cambridge Feature", url: "https://www.cai.cam.ac.uk/news/engineering-putting-people-first" },
      { text: "Haiti Research", url: "https://kellogg.nd.edu/hannah-gillespie" },
      { text: "Vatican Conference on RoboEthics", url: "https://rome.nd.edu/news-stories/news/study-abroad-students-in-rome-volunteer-at-annual-pontifical-academy-for-life-conference/" }
    ]
  },
  {
    title: "Personal Interests",
    description: "Exploring nature and culture as an avid hiker, skier, athlete, musician, and lover of Gothic architecture.",
    gif: experienceGif,
    link: "https://youtu.be/9j-zqBvEcPU?si=X3_YPUt8_rtRaA61",
    buttons: [
      { text: "Rowing Footage", url: "https://youtu.be/9j-zqBvEcPU?si=X3_YPUt8_rtRaA61" },
      { text: "Piano (Chopin)", url: "https://youtu.be/l4OjamOr9Pk?si=oVyNEZa7LQAjiZf9" },
      { text: "Piano (Rachmaninoff)", url: "https://www.youtube.com/watch?v=2KGkZOajM0s" }
    ]
  },
  {
    title: "Community Proponent",
    description: "Fostering dialogue on the importance of belonging through speaking, writing, and living in community.",
    gif: speakingGif,
    link: "https://youtu.be/nfU3aCVCwYM?si=h1UKJD6MraRYEXF6",
    buttons: [
      { text: "Conference Presentation", url: "https://youtu.be/nfU3aCVCwYM?si=h1UKJD6MraRYEXF6" },
      { text: "Writing", url: "https://www.lisieuxhouseseattle.com/single-post/virtue-freedom" },
      { text: "Lisieux House Feature", url: "https://www.catholicnewsagency.com/news/256920/lisieux-house-convent-turned-young-adult-community-celebrates-10-years" }
    ]
  }
];

function CarouselItem({ item, index }) {
  const handleParentClick = (e) => {
    if (e.target.closest('.carousel-tag-button')) {
      e.preventDefault();
    }
  };

  return (
    <a 
      href={item.link}
      className="carousel-item"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleParentClick}
    >
      <div className="carousel-image">
        <img src={item.image || item.gif} alt={item.title} />
      </div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <div className="carousel-buttons">
        {item.buttons?.map((button, btnIndex) => (
          <a
            key={btnIndex}
            href={button.url}
            className="carousel-tag-button"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {button.text}
          </a>
        ))}
      </div>
    </a>
  );
}

function Carousel() {
  return (
    <section className="carousel-section">
      <div className="carousel-track-container">
        <div className="carousel-track">
          {[...carouselItems, ...carouselItems].map((item, index) => (
            <CarouselItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Carousel;