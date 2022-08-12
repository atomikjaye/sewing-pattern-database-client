import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
// import logo from './logo.svg';
// import './App.css';
import './components/Add/AddPattern'
import { Button, Container } from 'semantic-ui-react'
import AddPattern from './components/Add/AddPattern';
import Home from './components/Home/Home';
import NavBar from './components/PageComponents/NavBar';
import Footer from './components/PageComponents/Footer';



function App() {
  let serverURL = 'http://localhost:9292'

  const [categories, setCategories] = useState({})


  useEffect(() => {
    // fetch catgories
    fetch(serverURL + '/categories')
      .then(res => res.json())
      .then(categoriesObjects => {
        setCategories(categoriesObjects)
        // console.log("cate obg", categoriesObjects)
      })
  }, [])
  // console.log(categories)

  const ButtonExampleButton = () => <Button>Click Here</Button>
  return (
    <>

      <NavBar />
      <Container text style={{ marginTop: '7em' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<AddPattern categoriesObject={categories} />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;
