import styled from 'styled-components'
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 1rem;
  width: calc(100vw - 2rem);
  max-width: 1080px;
  justify-content: center;
`

const Header = styled.header`
  font-size: 3rem;
  font-style: italic;
  color: coral;
  margin: auto;
`

const Input = styled.input`
  margin: 1rem 0;
  height: 2rem;
  width: 100%;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-weight: bold;
  color: #ffffff;
  background-color: coral;
  border: none;
  border-radius: 0.25rem;
  margin-right: 0.5rem;
  margin-top: 0.5rem;
  transition: all 250ms ease-in;
  cursor: pointer;
  width: max-content;
  :hover {
    box-shadow: inset 0px 0px 2px 2px white;
  }
`

const Col = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
`

const Todo = styled.div`
  width: calc(100% - 2rem);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  background-color: rgba(57, 62, 70);
  padding: 0.5rem 1rem;
  transition: all 250ms ease-in;
  transform: scaleX(1);
  border-radius: 0.25rem;
  :hover,
  :focus {
    background-color: rgba(57, 62, 70, 0.5);
    box-shadow: 0 0 2px 2px white;
    filter: brightness(120%);
    transform: scaleX(1.01);
  }
  p {
    text-decoration: ${({ completed }) =>
      completed ? 'line-through' : 'none'};
  }
`

const ResponsiveDiv = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 560px) {
    flex-direction: row;
  }
`

const IconDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0;
  margin-left: auto;
  i {
    margin-right: 0.25rem;
  }
`

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 40%;
  bottom: 40%;
  left: 25%;
  right: 25%;
  padding: 1rem;
  padding-right: 1.25rem;
  background-color: rgba(238, 238, 238, 0.7);
  color: white;
  border-radius: 0.25rem;
  z-index: 100;
  @media screen and (max-width: 768px) {
    left: 10%;
    right: 10%;
  }
`

export {
  Wrapper,
  Header,
  Input,
  Row,
  Button,
  Col,
  Todo,
  ResponsiveDiv,
  IconDiv,
  Modal
}
