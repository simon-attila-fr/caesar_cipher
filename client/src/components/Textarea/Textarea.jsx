import { forwardRef } from "react";
import PropTypes from "prop-types";
import "./Textarea.css";

const Textarea = forwardRef(function Textarea({
  classname,
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
      className={classname}
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
  classname: PropTypes.string,
  autofocus: PropTypes.bool,
  cols: PropTypes.string,
  form: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  readonly: PropTypes.bool,
  required: PropTypes.bool,
  rows: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default Textarea;
