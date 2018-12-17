import React, { Component } from 'react'

class Bottom extends Component {
  render() {
    const { todos, changeType, type } = this.props

    const num = todos.filter(todo => !todo.completed).length
    return (
      <div>
        <span style={{ marginRight: '20px' }}>
          {num} {num === 1 ? 'item' : 'items'} left
        </span>
        <span
          style={{
            marginRight: '20px',
            border: type === 'all' ? '1px solid #ccc' : '1px solid #fff'
          }}
          onClick={() => {
            changeType('all')
          }}
        >
          all
        </span>
        <span
          style={{
            marginRight: '20px',
            border: type === 'active' ? '1px solid #ccc' : '1px solid #fff'
          }}
          onClick={() => {
            changeType('active')
          }}
        >
          active
        </span>
        <span
          style={{
            marginRight: '20px',
            border: type === 'completed' ? '1px solid #ccc' : '1px solid #fff'
          }}
          onClick={() => {
            changeType('completed')
          }}
        >
          completed
        </span>
      </div>
    )
  }
}

export default Bottom
