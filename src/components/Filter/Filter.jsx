import React from 'react';

function Filter({ options, onChange }) {
  return (
    <div>
      {options.map((option, index) => (
        <label key={index}>
          <input
            type="checkbox"
            checked={option.checked}
            onChange={() => onChange(option.value)}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
}

export default Filter;
