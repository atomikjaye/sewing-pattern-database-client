import React, { useState, useEffect, useMemo } from 'react'
import { Routes, Route } from 'react-router-dom'
// import logo from './logo.svg';
// import './App.css';
import './components/Add/AddPattern'
import { Container } from 'semantic-ui-react'
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
  const [updated, setUpdated] = useState(0)


  console.log("App rendering")

  useEffect(() => {
    console.log("USE EFFECT")
    // fetch catgories GET


    // async function getPatternFetch() {
    //   let patternsFetch = await fetch(serverURL + '/patterns')
    //   patternsFetch = await patternsFetch.json()
    //   setPatterns(patternsFetch)
    //   console.log("Patterns", patterns)
    // }

    // console.log(patterns)
    // async function getCategoriesFetch() {
    //   let categoriesFetch = await fetch(serverURL + '/categories')
    //   categoriesFetch = await categoriesFetch.json()
    //   setCategories(categoriesFetch)
    // }

    // async function getFabricsFetch() {
    //   let fabricsFetch = await fetch(serverURL + '/fabrics')
    //   fabricsFetch = await fabricsFetch.json()
    //   setFabrics(fabricsFetch)
    // }

    // async function getCompaniesFetch() {
    //   let companiesFetch = await fetch(serverURL + '/companies')
    //   companiesFetch = await companiesFetch.json()
    //   setCompanies(companiesFetch)
    // }





    async function getInfoFetch() {
      let patternsFetch = await fetch(serverURL + '/patterns')
      patternsFetch = await patternsFetch.json()
      setPatterns(patternsFetch)

      let categoriesFetch = await fetch(serverURL + '/categories')
      categoriesFetch = await categoriesFetch.json()
      setCategories(categoriesFetch)

      let fabricsFetch = await fetch(serverURL + '/fabrics')
      fabricsFetch = await fabricsFetch.json()
      setFabrics(fabricsFetch)

      let companiesFetch = await fetch(serverURL + '/companies')
      companiesFetch = await companiesFetch.json()
      setCompanies(companiesFetch)

    }

    getInfoFetch()

    // getPatternFetch()
    // getCategoriesFetch()
    // getFabricsFetch()
    // getCompaniesFetch()

    // fetch(serverURL + '/categories')
    //   .then(res => res.json())
    //   .then(categoriesObjects => {
    //     setCategories(categoriesObjects)
    //     // console.log("cate obg", categoriesObjects)
    //   })

    // fetch(serverURL + '/fabrics')
    //   .then(res => res.json())
    //   .then(fabricsObj => {
    //     setFabrics(fabricsObj)
    //     // console.log("cate obg", categoriesObjects)
    //   })

    // fetch(serverURL + '/companies')
    //   .then(res => res.json())
    //   .then(companiesObj => {
    //     setCompanies(companiesObj)
    //     // console.log("cate obg", categoriesObjects)
    //   })

    // fetch(serverURL + '/companies')
    //   .then(res => res.json())
    //   .then(companiesObj => {
    //     setCompanies(companiesObj)
    //     console.log("patterns obj from APP.js", companiesObj)
    //     // patternsObj.map((pattern) => {
    //     //   // console.log(pattern)
    //     // })
    //     console.log("patterns from state from APP.js", patterns)
    //   })

  }, [updated])

  console.log("Patterns", patterns)
  // console.log(categories)

  const handleDelete = (id) => {
    const updatedPatterns = patterns.filter((pattern) => pattern.id !== id);
    setPatterns(updatedPatterns)
    setUpdated("d")
  }

  console.log("COMPANIES", companies)

  const handleNewPatterns = (newPattern) => {
    setPatterns([...patterns, newPattern])
    setUpdated("w")
    // let companiesNew = [...companies]
    // companiesNew.map((company) => {
    //   if (company.id === newPattern.company_id) {
    //     console.log("COMPANY PATTERNS IN HANDLENEWPATTERNS", company.patterns)
    //     company.patterns.push(newPattern)
    //     // return company
    //   }
    // })
    // setCompanies(companiesNew)
  }



  return (
    <>

      <NavBar />
      <Container text style={{ marginTop: '7em' }}>
        <Routes>
          <Route path="/" element={
            <PatternsList
              // companiesObj={patterns}
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
          <Route path={'/patterns/:patternId'} element={
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
