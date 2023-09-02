"use client";
import Image from "next/image";
import { styled } from "styled-components";
import { useState } from "react";

interface Props {
  primary: boolean;
}

const Header = styled.h3<Props>`
  color: ${({ primary }) => (primary ? "#fff" : "#000")};
  margin-left: 8px;
`;

const Para = styled.div<Props>`
  color: ${({ primary }) => (primary ? "#fff" : "#000")};
  margin-left: 8px;
`;

const Container = styled.div<Props>`
height: 100vh;
background-color:${({ primary }) => (primary ? "#000" : "#fff")};
`
const Button = styled.button<Props>`
margin-top: 20px;
margin-left: 8px;
width: 300px;
height: 30px;
border: 2px solid black;
outline-style: solid;
outline-color: ${({ primary }) => (primary ? "#fff" : "brown")};
background-color: ${({ primary }) => (primary ? "brown" : "fff")};
border-style: none;
color: ${({ primary }) => (primary ? "#fff" : "brown")};
font-familiy: 'monospace';
font-size: 16px;
`
export default function Home() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const handleMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <Container primary={darkMode}>
      <label className="switch">
        <input type="checkbox"  onClick={handleMode} />
        <span className="slider round" />
      </label>

      <Header primary={darkMode}>Hey! There. Let's try out DarkMode</Header>
      <Para primary={darkMode}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex harum
        suscipit sint! Placeat libero numquam quam doloribus beatae cum rerum
        incidunt error. Eligendi est beatae a cupiditate aliquam. Explicabo
        adipisci, laborum optio similique voluptatem, amet esse quibusdam
        officiis libero molestias vel voluptas? Repellat dolores natus
        recusandae corrupti?
      </Para>
      <Button primary={darkMode}>Submit</Button>
    </Container>
  );
}
