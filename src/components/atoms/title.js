import styled from 'styled-components'

const Title = styled.div`
  font-family: ${props => props.theme.englishTitle};
  font-size: 28px;
  color: ${props => props.theme.title1};
  user-select: none;
`

export default Title
