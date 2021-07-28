import React from 'react';
import './Button.css';

export function Button(props) {
  return (
      <a className='btn' href={props.url}>{props.text}</a>
  );
}
export default Button;