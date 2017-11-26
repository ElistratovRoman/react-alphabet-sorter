# react-alphabet-sorter
Reactjs component for alphabetical sorting.

#Example
## In dev mode
```javascript
yarn
yarn start
```
## Or see live-demo
[react-alphabet-sorter](https://elistratovroman.github.io/react-alphabet-sorter/)

#Install
```javascript
yarn react-alphabet-sorter --save
```

# Usage
Sorter takes an array of values, which are passed in "asGroup" option and sorted by their label.

```javascript
import React from 'react'
import AlpabetSorter from 'react-alphabet-sorter'

const data = [
  { value: 1, label: 'Audi'},
  { value: 2, label: 'Honda'},
  { value: 3, label: 'Hundai'},
  { value: 4, label: 'BMW'},
  { value: 5, label: 'Bentley'},
  { value: 7, label: 'Opel'},
  { value: 8, label: 'Mersedes'},
  { value: 9, label: 'Akura'},
  { value: 10, label: 'Porshe'},
  { value: 11, label: 'Kia'},
  { value: 12, label: 'ВАЗ'}
]

export default class Demo extends React.Component {
  render() {
    return (
      <div>
        <h2>Simple list</h2>

        <AlpabetSorter
          asGroup={data}
          asName='usage_example'
          type='radio'
          handleCheck={this.handleSorter} />
      </div>
    )
  }

  handleSorter = (selected) => {
    console.log(selected)
  }
}
```

# Options
  Properties |  Type    |  Default  |  Description
:------------|:---------|:----------|:---------------
  asGroup    |  array   |  []       |  array of data
  asName     |  string  | 'sorter'  |  value, which is passed to the html attribute "name" (for component with props "radio" and "checkbox")
  selected   |  array   | []        |  sets selected elements after init
  type       |  string  | 'text'    |  defines component view type and layout. Sorter have 4 type: "radio"(will be rendered as collection of input "radio"), "checkbox"(will be rendered as collection of input "checkbox"), "link"(will be rendered as collection of links), "text"(will be rendered as collection of text nodes)
  itemOptions| object   | {}        | object with custom properties, which is passed to sorter items
  labelKey   | string   | 'label'   | key, which is used to find item label
  valueKey   | string   | 'value'   | key, which is used to find item value
  navigator  | boolean  | true      | defines whether to show the alphabetical signs
  chunkLength| number   | undefined | defines whether to show the list items or chunks
  chunkByLetter| boolean | undefined | allow make chunks by letter
  handleCheck| function | undefined | callback, which fires after click or change item. Receives 1 argument: array of selected items
