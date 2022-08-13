import React from 'react'
import { Header } from 'semantic-ui-react'
import PatternDisplay from './../Patterns/PatternsDisplay'

const Home = ({ patternsObj, categoriesObject, fabricsObj, companiesObj, handleDelete }) => {

  console.log("From HOME", patternsObj)



  return (
    <>
      <Header>
        My Patterns
      </Header>
      <PatternDisplay
        patternsObj={patternsObj}
        categoriesObject={categoriesObject}
        fabricsObj={fabricsObj}
        companiesObj={companiesObj}
        handleDelete={handleDelete} />
    </>
  )

}

export default Home