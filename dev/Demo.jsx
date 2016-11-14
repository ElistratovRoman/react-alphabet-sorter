import React, { Component } from 'react'
import Select from 'react-select'
import AlpabeticalSorter from '../dist/index'

import './style.sass'
import 'react-select/dist/react-select.css'


const data = [
  { href: '#', id: 1, title: 'Audi'},
  { href: '#', id: 2, title: 'Honda'},
  { href: '#', id: 3, title: 'Hundai'},
  { href: '#', id: 4, title: 'BMW'},
  { href: '#', id: 5, title: 'Bentley'},
  { href: '#', id: 7, title: 'Opel'},
  { href: '#', id: 8, title: 'Mersedes'},
  { href: '#', id: 9, title: 'Akura'},
  { href: '#', id: 10, title: 'Porshe'},
  { href: '#', id: 11, title: 'Kia'},
  { href: '#', id: 12, title: 'ВАЗ'}
]

class Demo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selected: {},
      navigator: true
    }
  }

  render() {
    let { selected, navigator } = this.state

    return (
      <div>
        <h1>React-alphabetical-sorter demo</h1>

        <div className='demo__navigator-btn' onClick={::this.toggleNavigator}>
          { `Navigator ${navigator ? "disable" : "enable"}` }
        </div>

        <div className='demo__text'>
          <h2>Simple list</h2>

          <div className='demo__checked-value'>
            {
              selected.text && selected.text.length
                ? `You selected: ${selected.text[0].title}`
                : 'Nothing selected'
            }
          </div>

          <AlpabeticalSorter
            asGroup={data}
            asName='text'
            valueKey='id'
            labelKey='title'
            navigator={navigator}
            handleCheck={(selected) => this.handleSorter('text', selected)} />
        </div>


        <div className='demo__chunk'>
          <h2>Chunks</h2>

          <div className='demo__checked-value'>
            {
              selected.chunk && selected.chunk.length
                ? `You selected: ${selected.chunk[0].title}`
                : 'Nothing selected'
            }
          </div>

          <AlpabeticalSorter
            asGroup={data}
            name='chunk'
            valueKey='id'
            labelKey='title'
            navigator={navigator}
            chunkLength={3}
            handleCheck={(selected) => this.handleSorter('chunk', selected)} />
        </div>


        <div className='demo__link'>
          <h2>Checkbox</h2>

          <div className='demo__checked-value'>
            {
              selected.checkbox && selected.checkbox.length
                ? selected.checkbox.reduce((str, item, index) => {
                  return str + (index === 0  ? item.title : ', ' + item.title)
                }, 'You selected: ')

                : 'Nothing selected'
            }
          </div>

          <AlpabeticalSorter
            asGroup={data}
            asName='checkbox'
            valueKey='id'
            labelKey='title'
            navigator={navigator}
            type='checkbox'
            handleCheck={(selected) => this.handleSorter('checkbox', selected)} />
        </div>


        <div className='demo__link'>
          <h2>Link</h2>

          <AlpabeticalSorter
            asGroup={data}
            asName='link'
            valueKey='id'
            labelKey='title'
            navigator={navigator}
            type='link'
            itemOptions={{target: '_blank'}} />
        </div>

        <div className='demo__searchable'>
          <h2>Single search</h2>

          <div className='demo__searchable__search'>
            <Select
              placeholder='Search...'
              clearable={false}
              options={data}
              value={selected.single_search && selected.single_search[0]}
              onChange={(selected) => this.handleSelect('single_search', selected)}
              valueKey='id'
              labelKey='title'
            />
          </div>

          <AlpabeticalSorter
            asGroup={data}
            selected={selected.single_search}
            asName='single_search'
            valueKey='id'
            labelKey='title'
            navigator={navigator}
            type='radio'
            handleCheck={(selected) => this.handleSorter('single_search', selected)} />
        </div>

        <div className='demo__searchable'>
          <h2>Multi search</h2>

          <div className='demo__searchable__search'>
            <Select
              placeholder='Search...'
              clearable={false}
              multi={true}
              options={data}
              value={selected.multi_search}
              onChange={(selected) => this.handleSelect('multi_search', selected)}
              valueKey='id'
              labelKey='title'
            />
          </div>

          <AlpabeticalSorter
            asGroup={data}
            selected={selected.multi_search}
            asName='multi_search'
            valueKey='id'
            labelKey='title'
            navigator={navigator}
            type='checkbox'
            handleCheck={(selected) => this.handleSorter('multi_search', selected)} />
        </div>
      </div>
    )
  }

  toggleNavigator() {
    this.setState({
      navigator: !this.state.navigator
    })
  }

  handleSorter(key, selected) {
    this.setState({
      selected: {
        ...this.state.selected,
        [key]: selected
      }
    })
  }

  handleSelect(key, selected) {
    let result

    if (Array.isArray(selected))
      result = selected.length > 0 ? [...selected] : []
    else
      result = [selected]

    this.setState({
      selected: {
        ...this.state.selected,
        [key]: result
      }
    })
  }
}

export default Demo
