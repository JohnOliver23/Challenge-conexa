import React, {
  SelectHTMLAttributes,
  useRef,
  useState,
  useCallback,
} from 'react';

import { Container, Label, LabelError } from './styles';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  list: any;
  error?: string;
}

const Select: React.FC<SelectProps> = ({
  name,
  label,
  list,
  error,
  ...rest
}) => {
  const selectRef = useRef<HTMLSelectElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!selectRef.current?.value);
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  return (
    <>
      <Container isErrored={!!error} isFilled={isFilled} isFocused={isFocused}>
        <Label isErrored={!!error}>{label}</Label>
        <section className="container-input">
          <select
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            ref={selectRef}
            name={name}
            {...rest}
          >
            <option value="">Escolha um paciente</option>
            {list}
          </select>
        </section>
      </Container>

      {error && <LabelError>{error}</LabelError>}
    </>
  );
};

export default Select;
