import React from 'react'
import cn from 'classnames'


export default class SorterItem extends React.Component {
  render () {
    let label = this.props.item[this.props.labelKey]

    let cns = {
      item: cn(
        'as-item',
        {'as-item--navigator': this.props.isNavigator},
        {'as-item--selected': this.props.isSelected !== null}
      )
    }

    return (
      <div className={cns.item}>
        <div className='as-item__navigator'>
          { label.charAt(0).toUpperCase() }
        </div>

        <div className='as-item__content'>
          { this.buildContent() }
        </div>
      </div>
    )
  }

  buildContent() {
    let {
      item,
      labelKey,
      valueKey,
      itemOptions,
      handleCheck,
      asName
    } = this.props

    let input_options = {
      name: asName,
      id: `${asName}_${item[valueKey]}`,
      value: item[valueKey],
      onChange: handleCheck,
      ...itemOptions
    }

    let link_options = {
      href: item.href,
      onClick: handleCheck,
      ...itemOptions
    }

    switch (this.props.type) {
      case 'link':
        return (
          <a {...link_options}>{ `${item[labelKey]}` }</a>
        )
        break

      case 'radio':
        return (
          <label htmlFor={`${asName}_${item[valueKey]}`}>
            <input type='radio' {...input_options} />
            { `${item[labelKey]}` }
          </label>
        )
        break

      case 'checkbox':
        return (
          <label htmlFor={`${asName}_${item[valueKey]}`}>
            <input type='checkbox' {...input_options} />
            { `${item[labelKey]}` }
          </label>
        )
        break

      default:
        return (
          <span onClick={handleCheck} {...itemOptions} >
            { `${item[labelKey]}` }
          </span>
        )
    }
  }
}
