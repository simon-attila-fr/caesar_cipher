import { forwardRef } from "react";
import PropTypes from "prop-types";

const Textarea = forwardRef(function Textarea({
  autofocus,
  cols,
  form,
  id,
  name,
  placeholder,
  readonly,
  required,
  rows,
  value,
  onChange,
}, ref) {
  return (
    <textarea
      autoFocus={autofocus}
      cols={cols}
      id={id}
      form={form}
      name={name}
      placeholder={placeholder}
      readOnly={readonly}
      required={required}
      rows={rows}
      value={value}
      onChange={onChange}
      ref={ref}
    />
  );
})

Textarea.propTypes = {
  autofocus: PropTypes.bool,
  cols: PropTypes.string,
  form: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  readonly: PropTypes.bool,
  required: PropTypes.bool,
  rows: PropTypes.string,
  value: PropTypes.func,
  onChange: PropTypes.func
};

export default Textarea;
