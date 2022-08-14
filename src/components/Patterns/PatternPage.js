import React, { useEffect } from 'react'
import { Header, Grid, Image, List, Icon } from 'semantic-ui-react'
import { useParams } from "react-router-dom";


const PatternPage = ({ patternsObj, categoriesObject, fabricsObj, companiesObj, handleDelete }) => {
  const params = useParams();
  // console.log(params);
  console.log("Pattern Obj", Object.entries(patternsObj).length)
  let singlePattern
  let fabrics
  let categories

  if (companiesObj === undefined || Object.entries(companiesObj).length === 0) {
    // console.log("hi")
    return console.log("Undefined")
  } else {

    // https://stackoverflow.com/questions/40025718/es6-finding-data-in-nested-arrays
    let patternsArr = []

    companiesObj.find((company) => {
      console.log("Company", company.patterns)
      company.patterns.find((pattern) => {
        if (pattern.id === parseInt(params.patternId)) {
          patternsArr = company.patterns
        } else {
          return
        }
        // pattern.id === parseInt(params.patternId)
      })
      console.log("PatternsArr", patternsArr)
    })

    singlePattern = patternsArr.find((pattern) => pattern.id === parseInt(params.patternId))
    // singlePattern = companiesObj.find((pattern) => pattern.id === parseInt(params.patternId))
    fabrics = singlePattern.fabrics.map((fabric => fabric.name))
    console.log("fabrics", fabrics)


    console.log("PATTERN SINGLE", singlePattern.id)

    if (singlePattern.categories.length === 0) {
      categories = "Sorry no categories chosen"
    } else {
      categories = singlePattern.categories.map((category) => category.name)
      //TODO: COME BACK TO THIS
      // categories = singlePattern.fabrics.map((category) => )
    }



    // console.log("SINGLE Categories", companiesObj)
    // console.log("SINGLE Categories", companiesObj.patterns)

  }


  // console.log("SINGLE PATTERN", singlePattern.id)
  // const singlePattern = patternsObj.filter((pattern) => console.log(params.patternId))
  // function displayingStuff() {
  //   if (singlePattern === undefined) {
  //     return
  //   } else {
  // console.log(singlePattern.id)
  //   }
  // }

  // console.log(displayingStuff())

  // useEffect(() => {

  //   let patternFetch = await fetch(serverURL + `/pattern${id}`)
  //   patternFetch = await patternsFetch.json()
  //   setPatterns(patternsFetch)
  //   console.log("Patterns", patterns)
  // })




  return (
    <>
      <Grid columns={2} celled>
        <Grid.Row>
          <Header style={{ margin: '10px' }}>{singlePattern.pattern_code}</Header>
        </Grid.Row>
        <Grid.Row stretched>
          <Grid.Column width={6}>
            <Image src={singlePattern.image} fluid />
          </Grid.Column>
          <Grid.Column width={10}>
            <List>
              <List.Item>
                <List.Icon name="users" color='pink' />
                <List.Content>
                  <List.Header>Notions</List.Header>
                  <List.Description>{singlePattern.notions}</List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="expand arrows alternate" color='pink' />
                <List.Content>
                  <List.Header>Size</List.Header>
                  <List.Description>{singlePattern.size}</List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="arrows alternate horizontal" color='pink' />
                <List.Content>
                  <List.Header>Yardage</List.Header>
                  <List.Description>{singlePattern.yardage}</List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="info" color='pink' />
                <List.Content>
                  <List.Header>Information</List.Header>
                  <List.Description>{singlePattern.extras}</List.Description>
                </List.Content>
              </List.Item>

              <List.Item>
                <List.Icon name="info" color='pink' />
                <List.Content>
                  <List.Header>Fabrics</List.Header>
                  <List.Description>{fabrics.join(",  ")}</List.Description>
                </List.Content>
              </List.Item>

              <List.Item>
                <List.Icon name="info" color='pink' />
                <List.Content>
                  <List.Header>Categories</List.Header>
                  <List.Description>{categories.join(",  ")}</List.Description>
                </List.Content>
              </List.Item>

            </List>

          </Grid.Column>
        </Grid.Row>

      </Grid>
    </>
  )
}

//TODO: Add video tutorials to this page?


// List >
//     <List.Item>
//       <List.Icon name='users' />
//       <List.Content>Semantic UI</List.Content>
//     </List.Item>
//     <List.Item>
//       <List.Icon name='marker' />
//       <List.Content>New York, NY</List.Content>
//     </List.Item>
//     <List.Item>
//       <List.Icon name='mail' />
//       <List.Content>
//         <a href='mailto:jack@semantic-ui.com'>jack@semantic-ui.com</a>
//       </List.Content>
//     </List.Item>
//     <List.Item>
//       <List.Icon name='linkify' />
//       <List.Content>
//         <a href='http://www.semantic-ui.com'>semantic-ui.com</a>
//       </List.Content>
//     </List.Item>
//   </List >

export default PatternPage
