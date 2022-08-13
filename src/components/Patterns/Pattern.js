import React from 'react'
import { Card, Header, Divider, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom';



const Pattern = ({ id, companyName, image, patternCode, handleDelete }) => {

  // key={pattern.id}
  // id={pattern.id}
  // companyId={pattern.company_id}
  // extras={pattern.extras}
  // image={pattern.image}
  // notions={pattern.notions}
  // patternCode={pattern.pattern_code}
  // size={pattern.size}
  // yardage={pattern.yardage}

  function handleDeleteClick() {
    console.log("IDDDDDDDD", id)
    fetch(`http://localhost:9292/patterns/${id}`, {
      method: "DELETE",
    });

    handleDelete(id);
  }

  return (
    <Card key={id}>
      <Image src={image} />
      <Card.Content>
        <Card.Header>{patternCode}</Card.Header>
        <Card.Description>
          {/* <strong>Code:</strong> M8717<br /> */}
          <strong>Company:</strong> {companyName}<br />
          <a onClick={handleDeleteClick}>Delete</a>
        </Card.Description>
      </Card.Content>
    </Card>
  )

}

export default Pattern