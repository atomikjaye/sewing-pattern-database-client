import React from 'react'
import { Header, Grid, Image } from 'semantic-ui-react'
import { useParams } from "react-router-dom";


const PatternPage = ({ patternsObj, categoriesObject, fabricsObj, companiesObj, handleDelete }) => {
  const params = useParams();
  // console.log(params);
  console.log(patternsObj)
  let singlePattern

  if (patternsObj === []) {
    return (
      <>
        NOT WORKING</>
    )
  } else {
    singlePattern = patternsObj.find((pattern) => pattern.id === parseInt(params.patternId))
  }


  console.log("SINGLE PATTERN", singlePattern)
  // const singlePattern = patternsObj.filter((pattern) => console.log(params.patternId))
  // function displayingStuff() {
  //   if (singlePattern === undefined) {
  //     return
  //   } else {
  // console.log(singlePattern.id)
  //   }
  // }

  // console.log(displayingStuff())


  return (
    <>
      <Grid columns={2} celled>
        <Grid.Row stretched>
          <Grid.Column width={3}>
            {/* <Header>{singlePattern.yardage}</Header> */}
            {/* <Image src={patternsObj[params.patternId].image} /> */}
          </Grid.Column>
          <Grid.Column width={13}>
            <Image src='https://react.semantic-ui.com/images/wireframe/centered-paragraph.png' />
          </Grid.Column>
        </Grid.Row>

      </Grid>
    </>
  )
}

export default PatternPage
