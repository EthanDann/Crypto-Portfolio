import React from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Container = styled.div``;
const Header = styled.h2``;
const Nav = styled.nav``;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users/*" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <Container>
      <Nav>
        <Link to="/users">Users</Link>
      </Nav>
      <Header>Home</Header>
    </Container>
  );
}

function Users() {
  return (
    <Container>
      <Nav>
        <Link to="/">Home</Link>
      </Nav>
      <Header>Users</Header>
    </Container>
  );
}

export default App;
