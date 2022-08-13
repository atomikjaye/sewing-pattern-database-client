import React from 'react'
import { Header, Card } from 'semantic-ui-react'
import Pattern from './Pattern'

const PatternsList = ({ patternsObj, categoriesObject, fabricsObj, companiesObj, handleDelete }) => {

  console.log("From HOME", patternsObj)

  patternsObj.map((pattern) => {
    console.log(pattern)
  })

  const patternsToDisplay = patternsObj.map((pattern) => {
    // console.debug("pattern id", pattern.id)
    // console.debug("pattern id STUFF", pattern.company_id - 1)
    // TODO: I forgot the easier way to do this D:
    // TODO: Seems like name is undefined for something, can't figure it out
    // console.error("TEST", pattern.company_id)
    // console.error("TEST2", companiesObj[pattern.company_id - 1].name)
    return <Pattern
      id={pattern.id}
      companyName={companiesObj[pattern.company_id - 1].name}
      extras={pattern.extras}
      image={pattern.image}
      notions={pattern.notions}
      patternCode={pattern.pattern_code}
      size={pattern.size}
      yardage={pattern.yardage}
      handleDelete={handleDelete}
    />
  })


  return (
    <>
      <Header>
        My Patterns
      </Header>

      <Card.Group itemsPerRow={3}>
        {patternsToDisplay}
      </Card.Group>
    </>
  )

}

export default PatternsList