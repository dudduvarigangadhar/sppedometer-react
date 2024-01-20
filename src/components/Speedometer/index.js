import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerate = () => {
    this.setState(prevState => {
      console.log('accelerate clicked')
      return {speed: prevState.speed + 10}
    })
  }

  onBrake = () => {
    this.setState(prevState => {
      console.log('brake applied')
      return {speed: prevState.speed - 10}
    })
  }

  render() {
    const {imgUrl} = this.props
    const {speed} = this.state
    return (
      <div className="bg-container">
        <h1 className="main-heading">SPEEDOMETER</h1>
        <img src={imgUrl} alt={Speedometer} className="image" />
        <h1 className="speedometer">Speed is {speed}mph</h1>
        <p className="speed-conditions">
          Min Limit is 0mph, Max Limit is 200mph
        </p>
        <div className="buttons-container">
          <div>
            <button className="accelerate-button" onClick={this.onAccelerate}>
              Accelerate
            </button>
            <button className="brake-button" onClick={this.onBrake}>
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
