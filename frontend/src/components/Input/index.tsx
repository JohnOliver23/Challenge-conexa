import React, {
  InputHTMLAttributes,
  useRef,
  useState,
  useCallback,
} from 'react';
import { FiAlertCircle } from 'react-icons/fi';

import { Container, Error, Label } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  name: string;
  icon?: React.ReactFragment;
  label: string;
  iconLabel?: React.ReactFragment;
}

const Input: React.FC<InputProps> = ({
  name,
  icon: Icon,
  error,
  label,
  iconLabel,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current?.value);
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  return (
    <Container
      isIcon={!!Icon}
      isErrored={!!error}
      isFilled={isFilled}
      isFocused={isFocused}
    >
      <Label isErrored={!!error}>
        {label} {iconLabel && iconLabel}
      </Label>
      <section className="container-input">
        <input
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          ref={inputRef}
          name={name}
          {...rest}
        />
        {error && (
          <Error title={error}>
            <FiAlertCircle color="#f44336" size={20} />
          </Error>
        )}
        {Icon && Icon}
      </section>
    </Container>
  );
};

export default Input;
