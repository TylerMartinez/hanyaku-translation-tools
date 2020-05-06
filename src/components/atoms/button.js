import styled from 'styled-components'

const Button = styled.button`
  background: ${props => props.theme.primary};
  border: none;
  border-radius: 3px;
  height: 29px;
  width: ${props => props.stretch ? '100%' : 'auto'};
  padding-left: 10px;
  padding-right: 10px;
  color: ${props => props.theme.text};
  font-family: "Montserrat Medium";
  cursor: pointer;
  outline: none;

  &:hover {
    background: ${props => props.theme.primaryHover};
  }

  &:disabled {
    background: ${props => props.theme.disabled};
    color: ${props => props.theme.disabledText};
  }
`

export default Button
