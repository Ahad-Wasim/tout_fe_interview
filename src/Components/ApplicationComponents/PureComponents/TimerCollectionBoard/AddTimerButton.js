/* Defaults */
import React from 'react';

/* UI Components */
import { Button } from '../../../UIComponents/Button';

const AddTimerButton = ({ onClick, value }) => {
  return (
    <Button
      className="addTimer"
      name="addTimer"
      type="button"
      value={value}
      onClick={onClick}
    />
  );
};

export { AddTimerButton };
