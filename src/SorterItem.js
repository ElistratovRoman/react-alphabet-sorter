import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

class SorterItem extends React.Component {
  static propTypes = {
    item: PropTypes.object,
    type: PropTypes.string,
    isNavigator: PropTypes.bool,
    isSelected: PropTypes.any,
    labelKey: PropTypes.string,
    valueKey: PropTypes.string,
    itemOptions: PropTypes.object,
    handleCheck: PropTypes.func,
    asName: PropTypes.string,
  }

  buildContent = () => {
    let {
      item,
      labelKey,
      valueKey,
      itemOptions,
      handleCheck,
      asName,
    } = this.props

    let inputOptions = {
      name: asName,
      id: `${asName}_${item[valueKey]}`,
      value: item[valueKey],
      onChange: handleCheck,
      ...itemOptions,
    }

    let linkOptions = {
      href: item.href,
      onClick: handleCheck,
      ...itemOptions,
    }

    switch (this.props.type) {
      case 'link':
        return (
          <a { ...linkOptions }>{ `${item[labelKey]}` }</a>
        )
      case 'radio':
        return (
          <label htmlFor={ `${asName}_${item[valueKey]}` }>
            <input type="radio" { ...inputOptions }/>
            { `${item[labelKey]}` }
          </label>
        )
      case 'checkbox':
        return (
          <label htmlFor={ `${asName}_${item[valueKey]}` }>
            <input type="checkbox" { ...inputOptions }/>
            { `${item[labelKey]}` }
          </label>
        )
      default:
        return (
          <span onClick={ handleCheck } { ...itemOptions } >
            { `${item[labelKey]}` }
          </span>
        )
    }
  }

  render() {
    let label = this.props.item[this.props.labelKey]

    let cns = {
      item: cn(
        'as-item',
        {'as-item--navigator': this.props.isNavigator},
        {'as-item--selected': this.props.isSelected !== null}
      ),
    }

    return (
      <div className={ cns.item }>
        <div className="as-item__navigator">
          { label.charAt(0).toUpperCase() }
        </div>

        <div className="as-item__content">
          { this.buildContent() }
        </div>
      </div>
    )
  }
}

export default SorterItem
