import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ value, isValid, onChange, options, defaultOption }) => (
  <select onChange={onChange} value={value} className={isValid ? 'valid' : 'invalid'}>
    {renderDefaultOption(defaultOption)}
    {renderOptions(options.toJS(), value)}
  </select>
);

const renderDefaultOption = (defaultOption) => (
  defaultOption !== false ?
    <option value={defaultOption.value} key={defaultOption.key}>{defaultOption.key}</option>
  : null
);

const renderOptions = (options) => (
  options.length > 0 ?
    options.map((option) =>
      <option value={option.value} key={option.value}>{option.label}</option>
    )
  : null
);

Select.defaultProps = {
  defaultOption: { value: '', key: 'Select One' },
};

Select.propTypes = {
  defaultOption: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  value: PropTypes.string,
  isValid: PropTypes.bool,
  onChange: PropTypes.func,
  options: PropTypes.object,
};

export default Select;
