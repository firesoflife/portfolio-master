import React, { Fragment, useState } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { ReactComponent as Next } from '../../assets/chevronDown.svg';
import { ReactComponent as Prev } from '../../assets/chevronUp.svg';
import Footer from '../../Components/Footer/Footer';

const Projects = ({ data, leadingText }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (direction) => {
    setActiveIndex((prevIndex) => {
      if (direction === 'next') {
        // And if we are at the end of the carousle .. go back to 0 in Index
        if (prevIndex + 1 > data.length - 1) {
          return 0;
        }
        //Otherwise keep going up through the array index
        return prevIndex + 1;
      }

      //  Want to go backwards ? If on first slide move to end of array
      if (prevIndex - 1 < 0) {
        return data.length - 1;
      }
      //  Keep going backwards in the carousel
      return prevIndex - 1;
    });
  };

  const determinePlacement = (itemIndex) => {
    // Position item in the center of the list
    if (activeIndex === itemIndex) return 0;

    // Targeting items in the second part of the list
    if (itemIndex >= halfwayIndex) {
      // If moving backwards from index 0 to the last item, move the value down
      if (activeIndex > itemIndex - halfwayIndex) {
        return (itemIndex - activeIndex) * itemHeight;
      } else {
        // Negative value moves upwards towards the top of the list
        return -(data.length + activeIndex - itemIndex) * itemHeight;
      }
    }

    // Spacing for items after the current index
    if (itemIndex > activeIndex) {
      return (itemIndex - activeIndex) * itemHeight;
    }
    // Spacing for items before the current index
    if (itemIndex < activeIndex) {
      if ((activeIndex - itemIndex) * itemHeight >= shuffleThreshold) {
        return (data.length - (activeIndex - itemIndex)) * itemHeight;
      }
      return -(activeIndex - itemIndex) * itemHeight;
    }
  };

  // position carousel list items above and below current active
  const halfwayIndex = Math.ceil(data.length / 2);

  // Determines hight / spacing of items
  const itemHeight = 52;

  // takes previous constants and multiplies them together to create a number that will let us knwo when to move an item to the top or bottom of the list
  const shuffleThreshold = halfwayIndex * itemHeight;

  // Used to determine which items should be visible (prevents ghost transitions)
  const visibleStyleThreshold = shuffleThreshold / 2;

  return (
    <div className="background">
      <section className="outer-container">
        <div className="carousel-wrapper">
          <button
            type="button"
            className="carousel-button prev"
            onClick={() => handleClick('prev')}
          >
            <Prev />
          </button>

          <div className="carousel">
            <div className="leading-text">
              <p>{leadingText}</p>
            </div>
            <div className="slides">
              <div className="carousel-inner">
                {data.map((item, i) => (
                  <button
                    type="button"
                    onClick={() => setActiveIndex(i)}
                    className={cn('carousel-item', {
                      active: activeIndex === i,
                    })}
                    key={item.id}
                    style={{
                      transform: `translateY(${determinePlacement(i)}px)`,
                    }}
                  >
                    {item.introline}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <button
            type="button"
            className="carousel-button next"
            onClick={() => handleClick('next')}
          >
            <Next />
          </button>
        </div>

        <div className="content">
          <h2>{data[activeIndex].content.heading}</h2>
          <div className="underline"></div>
          <div className="subtitles">
            <h3>{data[activeIndex].content.sub}</h3>
          </div>
          <img
            src={data[activeIndex].content.image}
            alt={data[activeIndex].content.introline}
          />
          <h4>{data[activeIndex].content.category}</h4>

          <button className="project-link">
            <a href={data[activeIndex].content.link}>
              Visit {data[activeIndex].content.heading}
            </a>
          </button>
        </div>
        <div className="footer-container-special">
          <Footer />
        </div>
        <button
          type="button"
          className="carousel-button next mobile"
          onClick={() => handleClick('next')}
        >
          <Next />
        </button>
      </section>
    </div>
  );
};

Projects.popTypes = {
  data: PropTypes.array.isRequired,
  leadingText: PropTypes.string.isRequired,
};

export default Projects;
