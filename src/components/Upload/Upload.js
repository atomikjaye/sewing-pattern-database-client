import React from 'react'
import { Form, Divider, Header, Input } from 'semantic-ui-react'

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


export default function Upload() {
  return (
    <>
      <Header as='h1'>Add a New Pattern</Header>

      <Divider horizontal>Or</Divider>
      <Form>
        <Form.Group widths='equal'>
          <Form.Input fluid label="Pattern Code" name="patternCode" placeholder="M8281" />
          <Form.Dropdown
            name="patternCompanies"
            label="Pattern Comany"
            placeholder='Select Company'
            fluid
            search
            selection
            options={patternCompanies}
          />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input fluid label="Notions" name="notions" placeholder="7in. (18 cm) Zipper, Hook and Eye" />
          <Form.Input fluid label="Interfacing" name="interfacing" placeholder="Lightweight" />
          <Form.Input fluid label="Size" name="size" width={3} placeholder="6 or XXL" />
          <Form.Input fluid label='Yardage' name="yardage" width={3} placeholder="2" />
        </Form.Group>
        <Form.Dropdown search selection multiple allowAdditions fluid options={fabricTypes} label="Fabrics" name="fabrics" placeholder="i.e. Cotton Blends, Gingham, Sateen, Poplin" />
      </Form>
    </>
  )
}

