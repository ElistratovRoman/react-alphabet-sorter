# react-alphabet-sorter
Reactjs component for alphabetical sorting.

#Example
TODO...

#Install
```javascript
npm install react-alphabet-sorter --save
```

# Usage
Sorter takes an array of values, wich passed in "asGroup" option and sort their by label.

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
  asName     |  string  | 'sorter'  |  value, wich will pass to html attribute "name". Actualy for component with props "radio" and "checkbox"
  selected   |  array   | []        |  set selected elems after init
  type       |  string  | 'text'    |  defines component view type and layot. Sorter have 4 type: "radio"(will be render how collection inputs "radio"), "checkbox"(will be render how collection inputs "checkbox"), "link"(will be render how collection links), "text"(will be render how collection text nodes)
  itemOptions| object   | {}        | object with custom properties, wich will pass in sorter items
  labelKey   | string   | 'label'   | key, wich use to find item label
  valueKey   | string   | 'value'   | key, wich use to find item value
  navigator  | boolean  | true      | defines whether to show the alphabetical signs
  chunkLength| number   | undefined | defines whether to show the list items or chunks
  handleCheck| function | undefined | callback, wich fire after click or change item. Receive 1 argument - array of selected items
