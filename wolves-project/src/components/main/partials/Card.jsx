import React, { useState } from 'react';
import CardView from '../../cardView/CardView';

import MenuIcon from '../../../static/menu-icon.svg';
import '../styles/card.scss';

const Card = ({ images }) => {
  const [openView, setOpenView] = useState(false);

  const handleClick = () => {
    setOpenView(!openView);

    openView
      ? (document.body.style.overflow = 'unset')
      : (document.body.style.overflow = 'hidden');
  };

  return (
    <>
      <article className="card">
        <div className="card__container">
          <div className="card__image-wrapper">
            <div
              className="card__background-image"
              style={{
                backgroundImage: `url(${images[0]})`,
                backgroundClip: 'content-box',
              }}
            ></div>
          </div>

          <div className="card__tags">
            <span className="card__tags card__tags_isPrimary">ANIMALS</span>
            <span className="card__tags card__tags_isSecondary">
              WILDLIFE WATCH
            </span>
          </div>
          <div onClick={handleClick}>
            <div className="card__description">
              <span className="card__description-text">
                Siberian tigers are being hunted at night for their body parts
              </span>
            </div>

            <div className="card__footer">
              <img src={MenuIcon} alt="menu-icon" className="card__menu-icon" />
              <span className="card__menu-text">VIEW</span>
            </div>
          </div>
        </div>
      </article>

      {openView ? (
        <CardView
          src={images[1]}
          title="Wolf"
          handleClick={handleClick}
          setOpenView={setOpenView}
        />
      ) : null}
    </>
  );
};

export default Card;
