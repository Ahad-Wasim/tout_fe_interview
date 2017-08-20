/* Defaults */
import React from 'react';

/* Utils */
import { determineDefaultOutput } from '../../../Utils/Helper/helper';

const ConfigurationBoard = ({ onChange, settings }) => {

  return (
    <input
      type='text'
      className='timerCount'
      onChange={onChange}
      value={ determineDefaultOutput(settings, 'timerCount') }
    />
  );
};

export { ConfigurationBoard };
