import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

const Portal = ({
  children,
  className = 'root-portal',
  el = 'div',
  style = { position: 'absolute', top: '47px' },
}) => {
  const [container] = React.useState(() => {
    return document.createElement(el);
  });

  useEffect(() => {
    container.classList.add(className);
    document.body.appendChild(container);
    container.style.top = style.top;

    return () => {
      container.remove();
    };
  }, [className, container, style]);

  return createPortal(children, container);
};

export default Portal;
