import styled from 'styled-components'

const Input = styled.input`
  margin-bottom: 10px;
  padding-left: 5px;
  padding-top: 2px;
  width: 100%;
  height: 30px;
  background: ${props => props.theme.inputBackground};
  border: none;
  border-radius: 4px;
  font-family: "Montserrat Medium";
  color: ${props => props.theme.text};
  outline: none;
`

export default Input
