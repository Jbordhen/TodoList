import styled from 'styled-components'

const Col = styled.div`
  padding: 1rem 0;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  width: calc(100vw - 2rem);
  height: 100vh;
  max-width: 1080px;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  form,
  ${Col} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: calc(100% - 1rem);
  }

  form > div {
    margin: 0 auto;
  }
  /* filter: blur(${({ showModal }) => (showModal ? '1px' : '0px')}) */
  filter: ${({ showModal }) =>
    showModal ? 'blur(1px) brightness(80%)' : 'none'};
`

const Header = styled.header`
  font-size: 3rem;
  font-style: italic;
  color: coral;
  margin: 0 auto;
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

const Todo = styled.div`
  /* width: calc(100% - 2rem); */
  width: inherit;
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: fit-content;
  aspect-ratio: 16/9;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
  padding-right: 1.25rem;
  background-color: rgba(238, 238, 238, 0.7);
  color: white;
  border-radius: 0.25rem;
  z-index: 100;
  input {
    border-radius: 0.25rem;
  }
`

export { Wrapper, Header, Input, Row, Button, Col, Todo, IconDiv, Modal }
