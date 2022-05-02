import React, { ChangeEvent, FC } from "react";
import {Select, SelectOption, Container, Label} from './styled'
import {Option} from '../../types';
interface SelectProps {
  id: string;
  label?: string;
  name: string;
  value: string;
  handleChange: (value: string) => void;
  options: Array<Option>;
  defaultOption?: Option;
}

const SelectInput: FC<SelectProps> = ({
  id,
  label,
  name,
  value,
  handleChange,
  options,
  defaultOption,
}) => {
    const onChange = (e:ChangeEvent<HTMLSelectElement>) => handleChange(e.target.value)
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <Select
        name={name}
        id={id}
        onChange={onChange}
        value={value}
      >
        {defaultOption && (
          <SelectOption value={defaultOption.value}>{defaultOption.label}</SelectOption>
        )}
        {options?.map((option) => {
          const { value, label } = option;
          return (
            <SelectOption key={value} value={value}>
              {label}
            </SelectOption>
          );
        })}
      </Select>
    </Container>
  );
};

export default SelectInput;
