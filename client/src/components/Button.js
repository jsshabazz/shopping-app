import React from 'react';
import { Link } from 'react-router-dom';

import "./Button.css";

const STLYES = ['btn--primary', 'btn--outline']

const SIZE = ['btn--medium', 'btn--large'];

export const Button = ({
    children, type, onclick, buttonStyle, buttonSize
}) => {
  const checkButtonstyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

  return (
      <Link to='/signup' className='btn-mobile'>
          <button
          className={`btn ${checkButtonStyle}${checkButtonSize}`}
          onClick={onclick}
          type={type}>

            {children}
          </button>


      </Link>
  )
};
