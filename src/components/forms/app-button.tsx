import React from 'react';

interface IntAppButton{
  label: string;
  disabled?: boolean;
  tabIndex?: number;
  idQa?:string;
  handleClick?(): any;
}

const AppButton: React.FC<IntAppButton> = (props)  => {
  return (
    <button
      disabled={props.disabled}
      tabIndex={props.tabIndex}
      className={`dog-form__button dog-select__item  ${ props.disabled === true ? 'dog-form__button--disabled': ''}`}
      onClick={props.handleClick}
      data-qa={props.idQa}
    >
      {props.label}
    </button>
  );
};

export default AppButton;