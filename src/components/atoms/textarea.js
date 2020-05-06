import styled from 'styled-components'

const TextArea = styled.textarea`
  padding: 10px;
  width: 100%;
  background: ${props => props.theme.inputBackground};
  resize: ${props => props.resize ? 'inital' : 'none'};
  border: none;
  border-radius: 4px;
  font-family: "Montserrat Medium";
  color: ${props => props.theme.text};
  outline: none;

  ::-webkit-scrollbar {
  width: 15px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.scrollbar_thumb};
    border: 4px solid rgba(0, 0, 0, 0);
    background-clip: padding-box;
    border-radius: 20px;
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.theme.scrollbar_track};
    border-radius: 20px;
    border: 4px solid rgba(0, 0, 0, 0);
    background-clip: padding-box;
    
  }
`

export default TextArea
