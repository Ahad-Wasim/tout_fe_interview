/* Defaults */
import React from 'react';
import { Header } from '../../../UIComponents/Header';
import { Input } from '../../../UIComponents/Input';

const SettingsBoard = ({ onChange, value }) => {
  return (
    <div className="timerCount">
      <Header
        className="text-center"
        value={`Total Timers: ${value}`}
        headerType="H3"
      />
    </div>
  );
};

export { SettingsBoard };
