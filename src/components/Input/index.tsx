import React from 'react';

import { InputProps } from './types';
import './styles.css';

const Input: React.FC<InputProps> = ({ label, name, ...rest }) => (
  <div className="input-block">
    <label htmlFor={name}>{label}</label>
    <input type="text" id={name} {...rest} />
  </div>
);

export default Input;
