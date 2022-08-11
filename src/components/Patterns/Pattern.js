import React from 'react'
import { Card, Header, Divider, Image } from 'semantic-ui-react'



const Pattern = () => {

  return (
    <Card>
      <Image src="https://via.placeholder.com/150x200?text=Sewing+Pattern" />
      <Card.Content>
        <Card.Header>M8717</Card.Header>
        <Card.Description>
          {/* <strong>Code:</strong> M8717<br /> */}
          <strong>Company:</strong> McCall's<br />
          <strong>Added:</strong> 8/11/2022<br />
          <strong>Category:</strong> Pants<br />
        </Card.Description>
      </Card.Content>
    </Card>
  )

}

export default Pattern