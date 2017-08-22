/* Defaults */
import React from 'react';
import { Input } from '../../../UIComponents/Input';

const SettingsBoard = ({ onChange, value }) => {
  return (
    <div className="timerCount">Total Timers: {value}</div>
  );
};

export { SettingsBoard };
