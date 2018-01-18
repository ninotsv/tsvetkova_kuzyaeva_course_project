import React, {Component} from 'react'
import Card from './CardEx'
import PropTypes from 'prop-types'
import { DropTarget } from 'react-dnd'

class ListComponent extends Component {
  render () {
    let cards = this.props.cards.map((card) => {
      return (
        <Card
          key={card.id}
          id={card.id}
          title={card.title}
          description={card.description}
          color={card.color}
        />
      )
    })
    let columnTitle
    if (this.props.id !== 'start') {
      columnTitle = <h1 className="ColumnHeader">{this.props.title}</h1>
    }
    return (
      <div id = { this.props.id } className="listComponent">
        { columnTitle }
        <div className="listIn" >{cards}</div>
      </div>
    )
  }
}
ListComponent.PropTypes = {
  title: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(PropTypes.object)
}
export default ListComponent
