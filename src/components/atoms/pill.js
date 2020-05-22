import styled from 'styled-components'
import PropTypes from 'prop-types'

const Pill = styled.div`
  background: ${props => props.theme.pill};
  border: none;
  border-radius: 10px;
  color: ${props => props.theme.text};
  font-family: ${props => props.isJapanese ? props.theme.english : props.theme.japanese};
  cursor: pointer;
  outline: none;
  text-align: center;
  padding-left: 5px;
  padding-right: 8px;
  display: inline-block;

  &:hover {
    background: ${props => props.theme.pillHover};
  }
`

Pill.propTypes = {
  isJapanese: PropTypes.bool
}

export default Pill
