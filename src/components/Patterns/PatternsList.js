import React from 'react'
import { Header, Card } from 'semantic-ui-react'
import Pattern from './Pattern'

const PatternsList = ({ patternsObj, categoriesObject, fabricsObj, companiesObj, handleDelete }) => {

  console.log("From HOME", companiesObj[0])
  let patternsToDisplay;
  console.log(companiesObj)

  if (companiesObj[0] === undefined) {
    return console.log("Undefined")
  } else {
    console.log("From IF", companiesObj[0].name)

    patternsToDisplay = companiesObj.map((company) => {

      return company.patterns.map((pattern) => {
        console.log(pattern)
        // console.debug("pattern id", pattern.id)
        // console.debug("pattern id STUFF", pattern.company_id - 1)
        // TODO: I forgot the easier way to do this D:
        // TODO: Seems like name is undefined for something, can't figure it out
        // console.error("TEST", pattern.company_id)
        // console.error("TEST2", companiesObj[pattern.company_id - 1].name)
        return <Pattern
          id={pattern.id}
          key={pattern.id}
          companyName={companiesObj[pattern.company_id - 1].name}
          extras={pattern.extras}
          image={pattern.image}
          notions={pattern.notions}
          patternCode={pattern.pattern_code}
          size={pattern.size}
          yardage={pattern.yardage}
          handleDelete={handleDelete}
        //TODO: Is this because my pattern component is nested in an inner function??
        />
      })

    })
  }

  // componentDidUpdate() {
  //   console.log("FROM NEW FUNCTION", companiesObj[0]);
  // }

  // ********************************************************************
  //TODO: THE ABOVE ISN'T WORKING WHEN I ADD .name... ALSO MULTIPLE CALLS SHOWN IN CONSOLE..
  // WHY IS IT UNDEFINED??
  // ********************************************************************




  // console.log("From HOME2", companiesObj[0].id)

  // companiesObj.map((pattern) => {
  //   console.log(pattern)
  // })



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