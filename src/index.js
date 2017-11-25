import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import SorterItem from './SorterItem.js'

import './style.sass'

class AlphabetSorter extends React.Component {
  static propTypes = {
    asGroup: PropTypes.array.isRequired,
    selected: PropTypes.array,
    asName: PropTypes.string,
    type: PropTypes.string,
    itemOptions: PropTypes.object,
    labelKey: PropTypes.string,
    valueKey: PropTypes.string,
    navigator: PropTypes.bool,
    chunkLength: PropTypes.number,
    chunkByLetter: PropTypes.bool,
    handleCheck: PropTypes.func,
  }

  static defaultProps = {
    asGroup: [],
    selected: [],
    asName: 'sorter',
    type: 'text',
    itemOptions: {},
    labelKey: 'label',
    valueKey: 'value',
    navigator: true,
  }

  state = {
    selected: this.props.selected,
  }

  componentWillReceiveProps(nextProps) {
    let { selected } = nextProps

    if (selected !== this.props.selected) {
      this.setState({ selected })
    }
  }

  buildItem = (item, index, isNavigator) => {
    return (
      <SorterItem
        itemOptions={ this.props.itemOptions }
        isNavigator={ isNavigator }
        isSelected={ this.findByLabelKey(this.state.selected, item, this.props.labelKey) }
        type={ this.props.type }
        asName={ this.props.asName }
        labelKey={ this.props.labelKey }
        valueKey={ this.props.valueKey }
        handleCheck={ () => this.handleCheck(item) }
        item={ item }
        key={ index }/>
    )
  }

  isNavigator = (arr, index, item) => {
    let { navigator, labelKey } = this.props

    if (index > 0) {
      let currentNavigator = item[labelKey].charAt(0).toUpperCase()
      let prevNavigator = arr[index - 1][labelKey].charAt(0).toUpperCase()

      return navigator && currentNavigator !== prevNavigator
    }

    return navigator
  }

  chunkify = (arr, chunkSize) => {
    let chunksCount = Math.floor(arr.length / chunkSize)
    let result = []

    for (let i = 0; i <= chunksCount; i++) {
      let start = i * chunkSize
      let end = start + chunkSize
      let chunk = arr.slice(start, end)

      result.push(chunk)
    }

    return result
  }

  alphaChunk = (sortedArr) => {
    let result = []
    let pos = 0

    for (let i = 0; i <= sortedArr.length; i++) {
      if (result[pos] === undefined) {
        result.push([sortedArr[i]])
        continue
      }

      let last = result[pos][result[pos].length - 1]

      if (!!last && !!sortedArr[i] && last[this.props.labelKey].charAt(0).toLowerCase() === sortedArr[i][this.props.labelKey].charAt(0).toLowerCase()) {
        result[pos].push(sortedArr[i])
      } else if (sortedArr[i]) {
        result.push([sortedArr[i]])
        pos++
      }
    }

    return result
  }

  alphabeticalSort = (a, b) => {
    let A = a[this.props.labelKey].toLowerCase()
    let B = b[this.props.labelKey].toLowerCase()

    if (A < B) {
      return -1
    } else if (A > B) {
      return 1
    } else {
      return 0
    }
  }

  handleCheck = (item) => {
    let selected = [...this.state.selected]
    let { labelKey, type, handleCheck } = this.props

    if (type === 'checkbox') {
      selected = this.buildCheckboxGroup(selected, item, labelKey)
    } else {
      selected = [item]
    }

    this.setState({ selected })

    if (handleCheck) {
      handleCheck(selected)
    }
  }

  buildCheckboxGroup = (arr, item, key) => {
    let itemIndex = this.findByLabelKey(arr, item, key)

    if (itemIndex !== null) {
      arr.splice(itemIndex, 1)
    } else {
      arr.push(item)
    }

    return arr
  }

  findByLabelKey = (arr, item, labelKey) => {
    let itemIndex = null

    arr.forEach((selectedItem, index) => {
      if (selectedItem[labelKey] === item[labelKey]) {
        itemIndex = index
      }
    })

    return itemIndex
  }

  render () {
    let { chunkLength, chunkByLetter, navigator } = this.props
    let sortedArr = [...this.props.asGroup].sort(this.alphabeticalSort)

    let cns = {
      items: cn(
        'as-items',
        !!navigator && 'as-items--navigator'
      ),
    }

    if (chunkLength) {
      sortedArr = this.chunkify(sortedArr, chunkLength)
    }

    if (chunkByLetter) {
      sortedArr = this.alphaChunk(sortedArr)
    }

    return (
      <div className={ cns.items }>
        { (!chunkLength && !chunkByLetter)
          ? <div className="as-items__list">
            { sortedArr.map((item, index) => this.buildItem(item, index, this.isNavigator(sortedArr, index, item))) }
          </div>

          : sortedArr.map((chunk, index) =>
            <div className="as-items__chunk" key={ `chunk_${index}` }>
              { chunk.map((item, index) => this.buildItem(item, index, this.isNavigator(chunk, index, item))) }
            </div>) }
      </div>
    )
  }
}

export default AlphabetSorter
