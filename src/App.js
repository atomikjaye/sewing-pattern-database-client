import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
// import logo from './logo.svg';
// import './App.css';
import './components/Add/AddPattern'
import { Button, Container } from 'semantic-ui-react'
import AddPattern from './components/Add/AddPattern';
import PatternsList from './components/Patterns/PatternsList';
import PatternPage from './components/Patterns/PatternPage';
import NavBar from './components/PageComponents/NavBar';
import Footer from './components/PageComponents/Footer';



function App() {
  let serverURL = 'http://localhost:9292'

  const [categories, setCategories] = useState({})
  const [fabrics, setFabrics] = useState({})
  const [companies, setCompanies] = useState({})
  const [patterns, setPatterns] = useState([])


  useEffect(() => {
    // fetch catgories GET
    fetch(serverURL + '/categories')
      .then(res => res.json())
      .then(categoriesObjects => {
        setCategories(categoriesObjects)
        // console.log("cate obg", categoriesObjects)
      })

    fetch(serverURL + '/fabrics')
      .then(res => res.json())
      .then(fabricsObj => {
        setFabrics(fabricsObj)
        // console.log("cate obg", categoriesObjects)
      })

    fetch(serverURL + '/companies')
      .then(res => res.json())
      .then(companiesObj => {
        setCompanies(companiesObj)
        // console.log("cate obg", categoriesObjects)
      })

    fetch(serverURL + '/patterns')
      .then(res => res.json())
      .then(patternsObj => {
        setPatterns(patternsObj)
        // console.log("patterns obj from APP.js", patternsObj)
        // patternsObj.map((pattern) => {
        //   // console.log(pattern)
        // })
      })

  }, [])
  // console.log(categories)

  const handleDelete = (id) => {
    const updatedPatterns = patterns.filter((pattern) => pattern.id != id);
    setPatterns(updatedPatterns)

  }

  const handleNewPatterns = (newPattern) => {
    setPatterns([...patterns, newPattern])
  }

  const ButtonExampleButton = () => <Button>Click Here</Button>
  return (
    <>

      <NavBar />
      <Container text style={{ marginTop: '7em' }}>
        <Routes>
          <Route path="/" element={
            <PatternsList
              patternsObj={patterns}
              categoriesObject={categories}
              fabricsObj={fabrics}
              companiesObj={companies}
              handleDelete={handleDelete}

            />
          } />

          <Route path="/upload" element={
            <AddPattern
              categoriesObject={categories}
              fabricsObj={fabrics}
              companiesObj={companies}
              handleNewPatterns={handleNewPatterns}
            />
          } />
          <Route path={`/patterns/:patternId`} element={
            <PatternPage
              patternsObj={patterns}
              categoriesObject={categories}
              fabricsObj={fabrics}
              companiesObj={companies}
            />
          }
          />

        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;
