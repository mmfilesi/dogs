import React from 'react';

interface IntItemList {
  key: string;
  value: string;
}

interface IntAppSelect{
  required?: boolean;
  label?: string;
  noSelectionLabel?: string;
  valueNoSelection?: string;
  disabled?: boolean;
  tabIndex?: number;
  idQa?:string;
  handleOnChange(value: string): any;
  list: Array<IntItemList>;
}

const AppSelect: React.FC<IntAppSelect> = (props)  => {
  return (
    <>
    {props.label && <label>props.label</label>}
    <select
      aria-required={props.required}
      tabIndex={props.tabIndex}
      className={`dog-form__select dog-select__item ${ props.disabled ? 'dog-form__select--disabled': ''}`}
      disabled={props.disabled}
      onChange={e => props.handleOnChange(e.target.value)}
      data-qa={props.idQa}
    >

      {props.noSelectionLabel && <option value={props.valueNoSelection}>{props.noSelectionLabel}</option>}

      {Array.isArray(props.list) && props.list.map((item: IntItemList) => {
        return (
          <option value={item.key} key={item.key}>{item.value}</option>
        )
      })}

    </select>
    </>
  );
};

export default AppSelect;