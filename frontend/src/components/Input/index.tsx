import React, {
  InputHTMLAttributes,
  useRef,
  useState,
  useCallback,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';

import { Container, Error, Label } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
  label: string;
}

const Input: React.FC<InputProps> = ({
  name,
  icon: Icon,
  error,
  label,
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
    <Container isErrored={!!error} isFilled={isFilled} isFocused={isFocused}>
      <Label isErrored={!!error}>{label}</Label>
      <section className="container-input">
        {Icon && <Icon size={20} />}
        <input
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          ref={inputRef}
          name={name}
          {...rest}
        />
        {error && (
          <Error title={error}>
            <FiAlertCircle color="#c53030" size={20} />
          </Error>
        )}
      </section>
    </Container>
  );
};

export default Input;
