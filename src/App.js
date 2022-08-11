import React from 'react'
import { Routes, Route } from 'react-router-dom'
// import logo from './logo.svg';
// import './App.css';
import './components/Upload/Upload'
import { Button, Container } from 'semantic-ui-react'
import UploadPage from './components/Upload/UploadPage';
import Home from './components/Home/Home';
import NavBar from './components/PageComponents/NavBar';
import Footer from './components/PageComponents/Footer';



function App() {
  const ButtonExampleButton = () => <Button>Click Here</Button>
  return (
    <>

      <NavBar />
      <Container text style={{ marginTop: '7em' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<UploadPage />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;
