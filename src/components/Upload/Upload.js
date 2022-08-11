import React from 'react'
import { Form, Divider, Header, Input, TextArea, Button } from 'semantic-ui-react'

const patternCompanies = [
  { key: 'mccalls', value: 'mccalls', text: 'McCall\'s' },
  { key: 'simplicity', value: 'simplicity', text: 'Simplicity' },
  { key: 'vogue', value: 'vogue', text: 'Vogue' },
  { key: 'butterick', value: 'butterick', text: 'Butterick' }
]

const fabricTypes = [
  { key: 'baize', value: 'baize', text: 'baize' },
  { key: 'charmeuse', value: 'charmeuse', text: 'charmeuse' },
  { key: 'chenille', value: 'chenille', text: 'chenille' },
  { key: 'cheviot', value: 'cheviot', text: 'cheviot' },
  { key: 'chiffon', value: 'chiffon', text: 'chiffon' },
  { key: 'cotton', value: 'cotton', text: 'cotton' },
  { key: 'cottonBlends', value: 'cottonBlends', text: 'cottonBlends' },
  { key: 'denim', value: 'denim', text: 'denim' },
  { key: 'dimity', value: 'dimity', text: 'dimity' },
  { key: 'felt', value: 'felt', text: 'felt' },
  { key: 'georgette', value: 'georgette', text: 'georgette' },
  { key: 'jacuard', value: 'jacuard', text: 'jacuard' },
  { key: 'jersey', value: 'jersey', text: 'jersey' },
  { key: 'jute', value: 'jute', text: 'jute' },
  { key: 'lace', value: 'lace', text: 'lace' },
  { key: 'linen', value: 'linen', text: 'linen' },
  { key: 'lycra', value: 'lycra', text: 'lycra' },
  { key: 'poplin', value: 'poplin', text: 'poplin' },
  { key: 'rayon', value: 'rayon', text: 'rayon' },
  { key: 'sateen', value: 'sateen', text: 'sateen' },
  { key: 'satin', value: 'satin', text: 'satin' },
  { key: 'silk', value: 'silk', text: 'silk' },
  { key: 'twill', value: 'twill', text: 'twill' },
  { key: 'velvet', value: 'velvet', text: 'velvet' },
  { key: 'wool', value: 'wool', text: 'wool' },
]

const categories = [
  { key: 'pants', value: 'pants', text: 'Pants' },
  { key: 'skirts', value: 'skirts', text: 'Skirts' },
  { key: 'blouses', value: 'blouses', text: 'Blouses' }
]


const Upload = () => {

  const newPattern = {
    company_id: 2,
    category_id: 4,
    pattern_code: "S8578",
    notions: ["1/2\" elastic (1.5yd)",],
    size: "1X - 5X",
    yardage: 0,
    fabrics: ["active wear knits", "spandex blends", "two way stretch"],
    extras: "These knit leggings are available in both Misses' sizes XS to XL and Plus sizes 1X to 5X. Special features include contrasting twisted tabs at ankle, stirrup detail, convenient side pockets, and super-flattering rear curved seam.",
    image: "/images/S8561_envelope_front__14083.jpg"
  }

  function handleSubmit(e) {
    e.preventDefault()


    fetch(`http://localhost:9292/patterns`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPattern)
    })
      .then(r => r.json())
      .then(data => console.log(data))
  }

  return (
    <>
      <Header as='h1'>Add a New Pattern</Header>

      {/* <Divider horizontal>Or</Divider> */}
      <Form onSubmit={handleSubmit}>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Pattern Code' name='patternCode' placeholder='M8281' />
          <Form.Dropdown
            name='patternCompanies'
            label='Pattern Comany'
            placeholder='Select Company'
            fluid
            search
            selection
            options={patternCompanies}
          />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Notions' name='notions' placeholder='7in. (18 cm) Zipper, Hook and Eye' />
          <Form.Input fluid label='Size' name='size' width={6} placeholder='6 or XXL' />
          <Form.Input fluid label='Yardage' name='yardage' width={3} placeholder='2' />
          <Form.TextArea fluid label='Extras' name='interfacing' placeholder='Interfacing etc.' />
        </Form.Group>
        <Form.Dropdown search selection multiple allowAdditions fluid options={fabricTypes} label='Fabrics' name='fabrics' placeholder='i.e. Cotton Blends, Gingham, Sateen, Poplin' />
        <Form.Dropdown search selection multiple allowAdditions fluid options={categories} label='Categories' name='Categories' placeholder='Choose one or more categories' />
        <Button type="submit" content='Submit' primary />
      </Form>
    </>
  )
}

export default Upload
