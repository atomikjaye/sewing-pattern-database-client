import React from 'react'
import { Segment, Container, Grid, List, Header, Divider, Image } from 'semantic-ui-react'

const Footer = () => {
  return (
    <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
      <Container textAlign='center'>

        <Divider inverted section />
        <List horizontal inverted divided link size='small'>
          Made with 🩸😅😭
        </List>
      </Container>
    </Segment>
  )
}

export default Footer