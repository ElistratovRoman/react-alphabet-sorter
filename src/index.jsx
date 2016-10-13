import React, {Component, PropTypes} from 'react'
import cn from 'classnames'
import SorterItem from './SorterItem.jsx'

import './alphabetical_sorter.sass'


export default class AlphabeticalSorter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selected: props.selected
    }
  }

  static propTypes = {
    asGroup     : PropTypes.array.isRequired,
    selected    : PropTypes.array,
    asName      : PropTypes.string,
    type        : PropTypes.string,
    itemOptions : PropTypes.object,
    labelKey    : PropTypes.string,
    valueKey    : PropTypes.string,
    navigator   : PropTypes.bool,
    chunkLength : PropTypes.number,
    handleCheck : PropTypes.func
  }

  static defaultProps = {
    asGroup     : [],
    selected    : [],
    asName      : 'sorter',
    type        : 'text',
    itemOptions : {},
    labelKey    : 'label',
    valueKey    : 'value',
    navigator   : true
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.selected !== this.props.selected) {
      this.setState({
        selected: nextProps.selected
      })
    }
  }

  render () {
    let { chunkLength, labelKey, navigator } = this.props
    let sorted_arr = [...this.props.asGroup].sort(::this.alphabeticalSort)

    let cns = {
      items: cn('as-items', {'as-items--navigator': navigator})
    }

    if (chunkLength)
      sorted_arr = this.chunkify(sorted_arr, chunkLength)

    return (
      <div className={cns.items}>
        {
          !chunkLength
            ? <div className='as-items__list'>
                { sorted_arr.map((item, index) =>
                    this.buildItem(item, index, this.isNavigator(sorted_arr, index, item))) }
              </div>

            : sorted_arr.map((chunk, index) =>
                <div className='as-items__chunk' key={index}>
                  { chunk.map((item, index) =>
                      this.buildItem(item, index, this.isNavigator(chunk, index, item))) }
                </div>
              )
        }
      </div>
    )
  }

  buildItem(item, index, isNavigator) {
    return (
      <SorterItem
        itemOptions={this.props.itemOptions}
        isNavigator={isNavigator}
        isSelected={this.findByLabelKey(this.state.selected, item, this.props.labelKey)}
        type={this.props.type}
        asName={this.props.asName}
        labelKey={this.props.labelKey}
        valueKey={this.props.valueKey}
        handleCheck={this.handleCheck.bind(this, item)}
        item={item}
        key={index} />
    )
  }

  isNavigator(arr, index, item) {
    let { navigator, labelKey } = this.props

    if (index > 0) {
      let currentNavigator = item[labelKey].charAt(0).toUpperCase()
      let prevNavigator = arr[index-1][labelKey].charAt(0).toUpperCase()

      return navigator && currentNavigator !== prevNavigator
    }

    return navigator
  }

  chunkify(arr, chunk_size) {
    let chunks_count = Math.floor(arr.length/chunk_size)
    let result = []

    for (let i=0; i<=chunks_count; i++) {
      let start = i*chunk_size
      let end = start + chunk_size
      let chunk = arr.slice(start, end)
      result.push(chunk)
    }

    return result
  }

  alphabeticalSort(a, b) {
    let A = a[this.props.labelKey].toLowerCase()
    let B = b[this.props.labelKey].toLowerCase()

    if (A < B)
      return -1
    else if
      (A > B) return  1
    else
      return 0
  }

  handleCheck(item) {
    let selected = [...this.state.selected]
    let { labelKey, type, handleCheck } = this.props

    if (type === 'checkbox')
      selected = this.buildCheckboxGroup(selected, item, labelKey)
    else
      selected = [item]

    this.setState({ selected: selected })

    if (handleCheck)
      handleCheck(selected)
  }

  buildCheckboxGroup(arr, item, key) {
    let item_index = this.findByLabelKey(arr, item, key)

    if (item_index !== null)
      arr.splice(item_index, 1)
    else
      arr.push(item)

    return arr
  }

  findByLabelKey(arr, item, labelKey) {
    let item_index = null

    arr.forEach((selected_item, index) => {
      if (selected_item[labelKey] === item[labelKey])
        return item_index = index
    })

    return item_index
  }
}
