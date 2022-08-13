import React from 'react'
import Pattern from './Pattern'
import { Grid, Header, Divider, Image, Card } from 'semantic-ui-react'



const PatternDisplay = ({ patternsObj, categoriesObject, fabricsObj, companiesObj, handleDelete }) => {
  // console.log("FROM PATTERN DISPLAY", categoriesObject)

  patternsObj.map((pattern) => {
    console.log(pattern)
  })





  const patternsToDisplay = patternsObj.map((pattern) => {
    console.debug("pattern id", pattern.id)
    console.debug("pattern id STUFF", pattern.company_id - 1)
    // TODO: I forgot the easier way to do this D:
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




  // for (let i = 0; i <= 20; i++) {
  //   // console.log(i)
  //   patternDisplays.push(<Pattern />);
  // }

  return (
    <Card.Group itemsPerRow={3}>
      {patternsToDisplay}
    </Card.Group>
  )

}

export default PatternDisplay