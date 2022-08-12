import React, { useState } from 'react'
import FileBase64 from 'react-file-base64'
import { Form, Divider, Header, Input, TextArea, Button } from 'semantic-ui-react'

const patternCompanies = [
  { key: 'mccalls', value: 1, text: 'McCall\'s' },
  { key: 'simplicity', value: 2, text: 'Simplicity' },
  { key: 'vogue', value: 3, text: 'Vogue' },
  { key: 'butterick', value: 4, text: 'Butterick' }
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
  { key: 'wool', value: 'wool', text: 'wool' }
]

function handleChange(e, data) {
  console.log(e)
  console.log(data)
}

// const categories = [
//   { key: 'dresses', value: 1, text: 'Pants' },
//   { key: 'tops_vests', value: 2, text: 'Skirts' },
//   { key: 'skirts_pants_jumpsuits', value: 3, text: 'Skirts, Pants, & Jumpsuits' },
//   { key: 'active_swim', value: 4, text: 'Activewear & Swimsuits' },
//   { key: 'sports_coord', value: 5, text: 'Sportswear & Coordinates' },
//   { key: 'jackets_coats', value: 6, text: 'Jackets & Coats' },
//   { key: 'special', value: 7, text: 'Special Occasion' },
//   { key: 'lingerie', value: 8, text: 'Lingerie' },
//   { key: 'women', value: 9, text: 'Women' },
//   { key: 'men', value: 10, text: 'Men' },
//   { key: 'kids', value: 11, text: 'Kids' },
//   { key: 'toys', value: 12, text: 'Toys' }
// ]

const Upload = ({ categoriesObject }) => {
  const [patternCode, setpatternCode] = useState('')
  const [patternCompany, setpatternCompany] = useState(0)
  const [notions, setNotions] = useState([])
  const [size, setSize] = useState('')
  const [yardage, setYardage] = useState(0)
  const [extras, setExtras] = useState('')
  const [image, setImage] = useState('https://via.placeholder.com/150x200?text=Sewing+Pattern')
  const [fabricList, setFabricList] = useState([])
  const [categoryList, setCategoryList] = useState([])


  function categories() {
    let categoryArr = []
    Object.keys(categoriesObject).forEach(key => {
      categoryArr.push({ key: categoriesObject[key].id, value: categoriesObject[key].id, text: categoriesObject[key].name })
    })
    return categoryArr
  }

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

  // function handleSubmit(e) {
  //   e.preventDefault()


  //   fetch(`http://localhost:9292/patterns`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(newPattern)
  //   })
  //     .then(r => r.json())
  //     .then(data => console.log(data))
  // }

  // const getFiles = (file) => {
  //   setFile(file)
  // }

  return (
    <>
      <Header as='h1'>Add a New Pattern</Header>

      {/* patternCode, setpatternCode] = useState('')
      const [patternCompany, setpatternCompany] = useState(0)
      const [notions, setNotions] = useState([])
      const [size, setSize] = useState('')
      const [yardage, setYardage] = useState(0)
      const [extras, setExtras] = useState('')
      const [image, setImage] = useState( */}

      {/* <Divider horizontal>Or</Divider> */}
      {/* <Form onSubmit={handleSubmit}> */}
      <Form>
        <Form.Group widths='equal'>
          <Form.Input fluid
            label='Pattern Code'
            name='patternCode'
            placeholder='M8281'
            value={patternCode}
          />
          <Form.Dropdown
            name='patternCompanies'
            label='Pattern Comany'
            placeholder='Select Company'
            fluid
            search
            selection
            options={patternCompanies}
            value={patternCompany}
          />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input fluid
            label='Notions'
            name='notions'
            placeholder='7in. (18 cm) Zipper, Hook and Eye'
            value={notions}
          />
          <Form.Input fluid
            label='Size'
            name='size'
            width={6}
            placeholder='6 or XXL'
            value={size}
          />
          <Form.Input fluid
            label='Yardage'
            name='yardage'
            width={3}
            placeholder='2'
            value={yardage}
          />
          <Form.TextArea fluid
            label='Extras'
            name='extras'
            placeholder='Description and notes etc.'
            value={extras}
          />
        </Form.Group>
        <Form.Input type="file" fluid label='Pattern Image' name='image' />
        {/* <FileBase64
          multiple={true}
          onDone={this.getFiles.bind(this)} /> */}

        <Form.Dropdown search selection multiple allowAdditions fluid
          options={fabricTypes}
          label='Fabrics'
          name='fabrics'
          placeholder='i.e. Cotton Blends, Gingham, Sateen, Poplin'
          value={fabricList}
        />
        <Form.Dropdown search selection multiple allowAdditions fluid
          options={categories()}
          label='Categories'
          name='Categories'
          onChange={handleChange}
          placeholder='Choose one or more categories'
          value={categoryList}
        />
        <Button type="submit" content='Submit' primary />
      </Form>
    </>
  )
}

export default Upload
