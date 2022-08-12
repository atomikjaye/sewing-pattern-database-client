import React from 'react'
import Pattern from './Pattern'
import { Grid, Header, Divider, Image, Card } from 'semantic-ui-react'



const PatternDisplay = () => {
  let patternDisplays = []


  for (let i = 0; i <= 20; i++) {
    // console.log(i)
    patternDisplays.push(<Pattern />);
  }

  return (
    <Card.Group itemsPerRow={3}>
      {patternDisplays}
    </Card.Group>
  )

}

export default PatternDisplay