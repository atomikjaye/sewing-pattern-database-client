import React, { useState } from 'react'
import { Card, Header, Divider, Image, Dimmer, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';



const Pattern = ({ id, companyName, image, patternCode, handleDelete }) => {

  const [showHide, setShowHide] = useState(false)

  // key={pattern.id}
  // id={pattern.id}
  // companyId={pattern.company_id}
  // extras={pattern.extras}
  // image={pattern.image}
  // notions={pattern.notions}
  // patternCode={pattern.pattern_code}
  // size={pattern.size}
  // yardage={pattern.yardage}

  // Handling Dimmer tings
  const handleShowHide = () => {
    // console.log("hi", showHide)
    showHide === false ? setShowHide(true) : setShowHide(false)
  }

  function handleDeleteClick() {
    // console.log("IDDDDDDDD", id)
    setShowHide(false)
    fetch(`http://localhost:9292/patterns/${id}`, {
      method: "DELETE",
    });

    handleDelete(id);
  }
  const UpdateDeleteButtons = (
    <div>
      <Button.Group>
        <Button negative onClick={handleDeleteClick}>Delete</Button>
        <Button.Or />
        <Button positive>Update</Button>
      </Button.Group>
    </div>
  )

  return (
    <>
      <Card key={id}>
        <Dimmer.Dimmable
          // as={Card}
          key={id}
          // dimmed={showHide}
          // dimmer={{ showHide }}
          onMouseEnter={handleShowHide}
          onMouseLeave={handleShowHide}
        >
          <Dimmer
            active={showHide}
          >
            {UpdateDeleteButtons}
          </Dimmer>
          <Image src={image} fluid />
        </Dimmer.Dimmable>
        <Card.Content>
          <Card.Header>{patternCode}</Card.Header>
          <Card.Description>
            {/* <strong>Code:</strong> M8717<br /> */}
            <strong>Company:</strong> {companyName}<br />
          </Card.Description>
        </Card.Content>
      </Card>
    </>
  )

}

export default Pattern