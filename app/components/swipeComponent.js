
import React, { Component } from 'react'
import Interactable from 'react-native-interactable'

export default class SwipeComponent extends Component {
  onDrawerSnap = e => {
    const { getData } = this.props
    const { id } = this.props.children.props

    if (e.nativeEvent.id === 'slideoff') {
      getData(id)
    }
  }
  render() {
    const { children } = this.props

    return (
      <Interactable.View
        snapPoints={[{ x: 0 },
          {'id': 'slideoff', x: -750 }]}
        onSnap={this.onDrawerSnap}
      >
        { children }
      </Interactable.View>
    )
  }
}
