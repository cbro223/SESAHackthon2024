import React, {useState} from "react";
import Header from "../components/header";


export default function SlotsPage() {
  return (
    <div className="h-screen bg-gradient-to-r from-[--scheme-1] via-[--scheme-4] to-[--scheme-5]">
      <Header/>
      <div/>
      <div className="flex flex-col text-white">
        <div className="w-100 flex justify-center">
          <img src="/assets/Banners/StellarSlotsBanner.png" alt="Banner Title" className="w-1/2"/>
        </div>
      </div>
      <SlotMachine/>
    </div>
  );

  // return <SlotMachine/>
}

class SlotMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      winner: null
    }
    this.finishHandler = this.finishHandler.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({winner: null})
    this.emptyArray();
    this._child1.forceUpdateHandler();
    this._child2.forceUpdateHandler();
    this._child3.forceUpdateHandler();
  }

  static loser = ['LOSER', 'L BOZO'];

  static matches = [];

  finishHandler(value) {
    SlotMachine.matches.push(value);

    if (SlotMachine.matches.length === 3) {
      const {winner} = this.state;
      const first = SlotMachine.matches[0];
      let results = SlotMachine.matches.every(match => match === first);
      this.setState({winner: results});
      console.log(results)
    }
  }

  emptyArray() {
    SlotMachine.matches = [];
  }

  render() {
    const {winner} = this.state;
    let repeatButton = <RepeatButton onClick={this.handleClick}/>;

    if (winner !== null) {
      repeatButton = <RepeatButton onClick={this.handleClick}/>
    }

    return (
      <div className={'spinner'}>
        <div className={'spinner-parent'}>
          <div className={'spinner-container'}>
            <Spinner onFinish={this.finishHandler} ref={(child) => {
              this._child1 = child;
            }} timer="537"/>
            <Spinner onFinish={this.finishHandler} ref={(child) => {
              this._child2 = child;
            }} timer="1074"/>
            <Spinner onFinish={this.finishHandler} ref={(child) => {
              this._child3 = child;
            }} timer="1611"/>
            {repeatButton}
          </div>
        </div>
        <h1 className={'h1-element'} style={{color: 'white'}}>
          <span>{winner === null ? '...' : winner ? 'WON' : 'LOST'}</span>
        </h1>
      </div>
    );
  }
}

class Spinner extends React.Component {
  constructor(props) {
    super(props);
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
  };

  forceUpdateHandler() {
    this.reset();
  }

  reset() {
    if (this.timer) {
      clearInterval(this.timer);
    }

    this.start = this.setStartPosition();

    this.setState({
      position: this.start,
      timeRemaining: this.props.timer
    });

    this.timer = setInterval(() => {
      this.tick()
    }, 100);
  }

  state = {
    position: 0,
    lastPosition: null
  }

  static iconHeight = 537; // height of each icon in pixels
  multiplier = Math.floor(Math.random() * (4 - 1) + 1);

  start = this.setStartPosition();
  speed = Spinner.iconHeight * 1;

  setStartPosition() {
    return ((Math.floor((Math.random() * 5))) * Spinner.iconHeight) * -1;
  }

  moveBackground() {
    this.setState({
      position: this.state.position - this.speed,
      timeRemaining: this.state.timeRemaining - 100
    })
  }

  getSymbolFromPosition() {
    const currentPosition = Math.floor(this.state.position / Spinner.iconHeight) % 5
    this.props.onFinish(currentPosition);
  }

  tick() {
    if (this.state.timeRemaining <= 0) {
      clearInterval(this.timer);
      this.getSymbolFromPosition();
      let clamp_pos = Math.floor(this.state.position / Spinner.iconHeight) % 5 * Spinner.iconHeight

      this.setState({position: clamp_pos, timeRemaining: this.props.timer})
    } else {
      this.moveBackground();
    }
  }

  componentDidMount() {
    clearInterval(this.timer);

    this.setState({
      position: this.start,
      timeRemaining: this.props.timer
    });

    this.timer = setInterval(() => {
      this.tick()
    }, 100);
  }

  render() {
    let {position, current} = this.state;

    return (
      <div
        style={{backgroundPosition: '0px ' + position + 'px'}}
        className={`icons`}
      />
    )
  }
}

function RepeatButton(props) {
  const [flip, setFlip] = useState('./assets/slots/LeverUp.PNG');

  const onMouseUpDown = () => {
    if (flip === './assets/slots/LeverUp.PNG') {
      setFlip('./assets/slots/LeverDown.PNG')
    } else {
      setFlip('./assets/slots/LeverUp.PNG')
    }
  }

  return (
    <button
      id='repeatButton'
      onClick={props.onClick}
      onMouseDown={onMouseUpDown}
      onMouseUp={onMouseUpDown}>
      <img src={flip} alt={'Lever'}/>
    </button>
  );
}


