import React, { useCallback, useState } from "react";

type SearchInputChangeFunction = (arg: string) => void;

type SearchInputProps = {
  value?: string;
  placeholder?: string;
  onChange?: SearchInputChangeFunction;
};

const SearchInput = ({
  value = '',
  placeholder = '',
  onChange
}: SearchInputProps) => {
  const [inputValue, setInputValue] = useState(value);
  const onChangeHandler = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);

    if (onChange) {
      onChange(event.target.value);
    }
  }, [onChange, setInputValue]);

  return (
    <>
      <input
        type='text'
        placeholder={placeholder}
        value={inputValue}
        onChange={onChangeHandler}
      >
      </input>
    </>
  );
};

export default SearchInput;
