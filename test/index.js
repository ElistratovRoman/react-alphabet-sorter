import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { expect } from 'chai'
import sinon from 'sinon'
import jsdom from 'jsdom'
import AlpabeticalSorter from '../src/index.js'
import SorterItem from '../src/SorterItem.js'

Enzyme.configure({ adapter: new Adapter() })

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

const options = {
  asGroup: data,
  asName: 'test',
  valueKey: 'id',
  labelKey: 'title'
}

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.document = doc
global.window = doc.defaultView

// Shallow Rendering
// https://github.com/airbnb/enzyme/blob/master/docs/api/shallow.md
describe('Shallow Rendering', () => {
  it('render component', () => {
    const wrapper = shallow(<AlpabeticalSorter {...options} />)

    expect(wrapper.find('.as-items')).to.have.length(1)
  })

  it('chunkify', () => {
    const CHUNKS = 3
    const wrapper = shallow(<AlpabeticalSorter chunkLength={CHUNKS} {...options} />)

    expect(wrapper.find('.as-items__chunk')).to.have.length(Math.ceil(data.length / CHUNKS))
  })

  it('alphaChunk', () => {
    const wrapper = shallow(<AlpabeticalSorter chunkByLetter {...options} />)
    expect(wrapper.find('.as-items__chunk')).to.have.length(8)
  })

  it('navigator enabled', () => {
    const wrapper = shallow(<AlpabeticalSorter {...options} />)

    expect(wrapper.find('.as-items--navigator')).to.have.length(1)
  })

  it('navigator disabled', () => {
    const wrapper = shallow(<AlpabeticalSorter navigator={false} {...options} />)

    expect(wrapper.find('.as-items--navigator')).to.have.length(0)
  })
})

// Full DOM Rendering
// https://github.com/airbnb/enzyme/blob/master/docs/api/mount.md
describe('Full DOM Rendering', () => {
  it('render items', () => {
    const wrapper = mount(<AlpabeticalSorter {...options} />)

    expect(wrapper.find('.as-item')).to.have.length(data.length)
  })

  it('set initial selected', () => {
    const wrapper = mount(<AlpabeticalSorter {...options} selected={[data[0]]} />)

    expect(wrapper.props().selected[0].title).to.equal(data[0].title)
  })

  it('choose item', () => {
    const itemClick = sinon.spy()
    const wrapper = mount(<AlpabeticalSorter {...options} handleCheck={itemClick} />)

    const firstItem = wrapper.find(SorterItem).first()
    const firstItemTitle = firstItem.props().item.title

    firstItem.find('.as-item__content span').simulate('click')
    expect(itemClick.calledOnce).to.be.true
    expect(wrapper.state().selected[0].title).to.equal(firstItemTitle)
  })

  it('check/uncheck items if type="checkbox"', () => {
    const itemChange = sinon.spy()
    const wrapper = mount(<AlpabeticalSorter type='checkbox' {...options} handleCheck={itemChange} />)

    const firstItem = wrapper.find(SorterItem).first()
    const firstItemTitle = firstItem.props().item.title

    const lastItem = wrapper.find(SorterItem).last()
    const lastItemTitle = lastItem.props().item.title

    firstItem.find('.as-item__content input').simulate('change')
    lastItem.find('.as-item__content input').simulate('change')

    expect(itemChange.calledTwice).to.be.true
    expect(wrapper.state().selected[0].title).to.equal(firstItemTitle)
    expect(wrapper.state().selected[1].title).to.equal(lastItemTitle)

    lastItem.find('.as-item__content input').simulate('change')

    expect(wrapper.state().selected).to.have.length(1)
    expect(wrapper.state().selected[0].title).to.equal(firstItemTitle)
  })

  it('inspect link type', () => {
    const itemClick = sinon.spy()
    const wrapper = mount(<AlpabeticalSorter {...options} type='link' />)

    const firstItemLink = wrapper.find(SorterItem).first().find('.as-item__content a')

    expect(firstItemLink).to.have.length(1)
    expect(firstItemLink.props().href).to.equal('#')
  })

  it('pass item options', () => {
    let updOptions = {
      ...options,
      type: 'link',
      itemOptions: { target: '_blank' }
    }

    const wrapper = mount(<AlpabeticalSorter {...updOptions} />)
    const firstItemLink = wrapper.find(SorterItem).first().find('.as-item__content a')

    expect(firstItemLink.props().target).to.equal('_blank')
  })

  it('calls componentWillReceiveProps', () => {
    const spy = sinon.spy(AlpabeticalSorter.prototype, 'componentWillReceiveProps')
    const wrapper = mount(<AlpabeticalSorter {...options} />)

    const updatedData = [
        {id: 1, title: 'test_1'},
        {id: 2, title: 'test_2'}
    ]

    expect(spy.calledOnce).to.be.false

    wrapper.setProps({ asGroup: updatedData })

    expect(wrapper.props().asGroup[0].title).to.equal('test_1')
    expect(spy.calledOnce).to.be.true
  })
})
