import React from 'react'
import { Header, Card } from 'semantic-ui-react'
import Pattern from './Pattern'

const PatternsList = ({ companiesObj, handleDelete }) => {

  let patternsToDisplay;

  if (companiesObj[0] === undefined) {
    return console.log("Undefined")
  } else {

    let patternsArr = []

    function collectAllPatterns() {
      companiesObj.map((company) => {
        company.patterns.map((pattern) => {
          patternsArr.push(pattern)
        })
      })
    }
    collectAllPatterns()

    patternsToDisplay = patternsArr.sort((prevPat, currPat) => {
      const currTime = new Date(currPat.created_at)
      const prevTime = new Date(prevPat.created_at)
      return prevTime - currTime
    }).map((pattern) => {
      return <Pattern
        id={pattern.id}
        key={pattern.id}
        companyName={companiesObj[pattern.company_id - 1].name}
        extras={pattern.extras}
        image={pattern.image}
        notions={pattern.notions}
        patternCode={pattern.pattern_code}
        size={pattern.size}
        createdAt={pattern.created_at}
        yardage={pattern.yardage}
        handleDelete={handleDelete}
      />
    })


  }

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