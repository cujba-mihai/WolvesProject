import React, { useEffect, useState } from 'react';

import CardView from '../cardView/CardView';
import ImagePopup from '../imagePopup/imagePopup';

import MenuIcon from '../../static/menu-icon.svg';
import './styles/card.scss';

const Card = ({ images }) => {
  const [bigImg, smallImg] = images;
  const [openView, setOpenView] = useState(false);
  const [showImgPopup, setShowImgPopup] = useState(false);

  const handleImagePopup = () => {
    setShowImgPopup(!showImgPopup);
  };

  const handleDescriptionModal = () => {
    setOpenView(!openView);
  };

  useEffect(() => {}, []);

  return (
    <>
      <article className="card">
        <div className="card__container">
          <div className="card__image-wrapper" onClick={handleImagePopup}>
            <div
              className="card__background-image"
              style={{
                backgroundImage: `url(${smallImg})`,
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
          <div onClick={handleDescriptionModal}>
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
          src={bigImg}
          title="Wolf"
          handleClick={handleDescriptionModal}
          setOpenView={setOpenView}
        />
      ) : null}

      {showImgPopup ? (
        <ImagePopup {...images} handleImagePopup={handleImagePopup} />
      ) : null}
    </>
  );
};

export default Card;
