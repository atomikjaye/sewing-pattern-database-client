import React, { useState } from 'react'
import FileBase64 from 'react-file-base64'
import { Form, Divider, Header, Input, TextArea, Button } from 'semantic-ui-react'



const Upload = ({ categoriesObject, fabricsObj, companiesObj }) => {
  const [patternCode, setPatternCode] = useState('')
  const [patternCompany, setPatternCompany] = useState(0)
  const [notions, setNotions] = useState('')
  const [size, setSize] = useState('')
  const [yardage, setYardage] = useState(0)
  const [extras, setExtras] = useState('')
  const [image, setImage] = useState('https://via.placeholder.com/150x200?text=Sewing+Pattern')
  const [fabricList, setFabricList] = useState([])
  const [categoryList, setCategoryList] = useState([])


  function handleChange(e, data) {
    if (data.name === 'patternCode') {
      setPatternCode(data.value)
    } else if (data.name === 'patternCompanies') {
      setPatternCompany(data.value)
    } else if (data.name === 'notions') {
      setNotions(data.value)
    } else if (data.name === 'size') {
      setSize(data.value)
    } else if (data.name === 'yardage') {
      setYardage(data.value)
    } else if (data.name === 'extras') {
      setExtras(data.value)
    } else if (data.name === 'image') {
      setImage(data.value)
    } else if (data.name === 'fabrics') {
      setFabricList(data.value)
    } else if (data.name === 'categories') {
      setCategoryList(data.value)
    }
  }


  function categories() {
    let categoryArr = []
    Object.keys(categoriesObject).forEach(key => {
      categoryArr.push({ key: categoriesObject[key].id, value: categoriesObject[key].id, text: categoriesObject[key].name })
    })
    return categoryArr
  }

  function fabrics() {
    let fabricArr = []
    Object.keys(fabricsObj).forEach(key => {
      fabricArr.push({ key: fabricsObj[key].id, value: fabricsObj[key].id, text: fabricsObj[key].name })
    })
    return fabricArr
  }

  function companies() {
    let companyArr = []
    Object.keys(companiesObj).forEach(key => {
      companyArr.push({ key: companiesObj[key].id, value: companiesObj[key].id, text: companiesObj[key].name })
    })
    return companyArr
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

  function handleSubmit(e) {
    e.preventDefault()
    console.log('Hello')

    const formData = {
      company_id: patternCompany,
      pattern_code: patternCode,
      notions: notions,
      size: size,
      yardage: yardage,
      extras: extras,
      image: image
    }

    fetch(`http://localhost:9292/patterns`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(r => r.json())
      .then(data => console.log(data))

  }

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
      <Form onSubmit={handleSubmit}>
        {/* <Form> */}
        <Form.Group widths='equal'>
          <Form.Input fluid
            label='Pattern Code'
            name='patternCode'
            placeholder='M8281'
            value={patternCode}
            onChange={handleChange}
          />
          <Form.Dropdown
            name='patternCompanies'
            label='Pattern Comany'
            placeholder='Select Company'
            fluid
            search
            selection
            options={companies()}
            value={patternCompany}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input fluid
            label='Notions'
            name='notions'
            placeholder='7in. (18 cm) Zipper, Hook and Eye'
            value={notions}
            onChange={handleChange}
          />
          <Form.Input fluid
            label='Size'
            name='size'
            width={6}
            placeholder='6 or XXL'
            value={size}
            onChange={handleChange}
          />
          <Form.Input fluid
            label='Yardage'
            name='yardage'
            width={3}
            placeholder='2'
            value={yardage}
            onChange={handleChange}
          />
          <Form.TextArea fluid
            label='Extras'
            name='extras'
            placeholder='Description and notes etc.'
            value={extras}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Input type="file" fluid label='Pattern Image' name='image' />
        {/* <FileBase64
          multiple={true}
          onDone={this.getFiles.bind(this)} /> */}

        <Form.Dropdown search selection multiple allowAdditions fluid
          options={fabrics()}
          label='Fabrics'
          name='fabrics'
          placeholder='i.e. Cotton Blends, Gingham, Sateen, Poplin'
          value={fabricList}
          onChange={handleChange}
        />
        <Form.Dropdown search selection multiple allowAdditions fluid
          options={categories()}
          label='Categories'
          name='categories'
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
