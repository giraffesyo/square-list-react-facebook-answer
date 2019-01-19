import React from 'react'
import './App.css'
import Square from './components/Square'

const ARRAYSIZE = 49

const Styles = {
  width: 300,
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr'
}

const createInitialArray = () => new Array(ARRAYSIZE).fill(false)

class App extends React.PureComponent {
  state = {
    numberOfClickedBoxes: 0,
    checkedSquares: createInitialArray()
  }

  handleClick = event => {
    const ClickedSquare = parseInt(event.target.getAttribute('name'), 10)
    const { numberOfClickedBoxes, checkedSquares } = this.state
    const wasPreviouslyTrue = checkedSquares[ClickedSquare - 1]

    if (!wasPreviouslyTrue) {
      //check if we already have maximum checked boxes
      if (numberOfClickedBoxes === 6) {
        return
      } else {
        this.setState({ numberOfClickedBoxes: numberOfClickedBoxes + 1 })
      }
    } else {
      this.setState({ numberOfClickedBoxes: numberOfClickedBoxes - 1 })
    }

    // toggle the square
    this.setState({
      checkedSquares: [
        ...checkedSquares.slice(0, ClickedSquare - 1),
        !wasPreviouslyTrue,
        ...checkedSquares.slice(ClickedSquare)
      ]
    })
  }

  render() {
    const {
      handleClick,
      state: { checkedSquares }
    } = this

    const SquareList = checkedSquares.map((value, index) => (
      <Square clicked={value} onClick={handleClick} key={index}>
        {index + 1}
      </Square>
    ))
    return <div style={Styles}>{SquareList}</div>
  }
}

export default App
