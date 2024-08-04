import React, { useState } from "react";
import Header from "../components/Header";
import { updateOxygenData } from "../utils";
import { NavLink } from "react-router-dom";

export default function SlotsPage() {
  return (
    <>
      <Header />
      <div className="h-screen bg-gradient-to-r from-[--scheme-1] via-[--scheme-4] to-[--scheme-5] flex items-center justify-content flex-col">
        <div />
        <div className="flex flex-col text-white">
          <div className="w-100 flex justify-center">
            <img src="/assets/Banners/StellarSlotsBanner.png" alt="Banner Title" className="w-[40%]" />
          </div>
        </div>
        <SlotMachine className={"slotmachine-classer"} />
      </div>
    </>
  );

  // return <SlotMachine/>
}

class SlotMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      winner: null,
      betAmount: 10,
      isModalOn: false,
      winAmount: 0
    }
    this.finishHandler = this.finishHandler.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.toggleModel = this.toggleModel.bind(this);
    this.updateBetAmount = this.updateBetAmount.bind(this);
  }

  handleClick() {
    this.setState({ winner: null })
    this.emptyArray();
    this._child1.forceUpdateHandler();
    this._child2.forceUpdateHandler();
    this._child3.forceUpdateHandler();
  }

  static loser = ['LOSER', 'L BOZO'];

  static matches = [];

  updateBetAmount(value) {
    this.setState((prevState) => ({
      betAmount: prevState.betAmount + value
    }));
  }
  toggleModel() {
    this.setState({
      isModalOn: false
    })
  }

  finishHandler(value) {
    SlotMachine.matches.push(value);

    if (SlotMachine.matches.length === 3) {
      const { winner } = this.state;
      const first = SlotMachine.matches[0];
      let results = SlotMachine.matches.every(match => match === first);
      console.log(first) // WIN OR LOSS
      // HERE

      if (results === true) {
        let amount = 0;
        switch (first) {
          case -0:
            amount = this.state.betAmount * 5;
            this.setState({ winAmount: this.state.betAmount * 5 });

          case -1:
            amount = this.state.betAmount * 10
            this.setState({ winAmount: this.state.betAmount * 10 });
          case -2:
            amount = this.state.betAmount * 50
            this.setState({ winAmount: this.state.betAmount * 50 });
          case -3:
            amount = this.state.betAmount * 1.5
            this.setState({ winAmount: this.state.betAmount * 1.5 });
          case -4:
            amount = this.state.betAmount * 100
            this.setState({ winAmount: this.state.betAmount * 100 });

          default:
            amount = 0

        }
        this.setState({ winner: results });
        updateOxygenData(amount)
      }
      else {
        updateOxygenData(this.state.betAmount * -1)
      }
    }
  }

  emptyArray() {
    SlotMachine.matches = [];
  }

  render() {
    const { winner } = this.state;
    let repeatButton = <RepeatButton onClick={this.handleClick} />;

    if (winner !== null) {
      repeatButton = <RepeatButton onClick={this.handleClick} />
    }

    return (
      <>

        {winner === true && (
          <WinningModal betAmount={this.state.winAmount} />
        )}
        <div className="flex">

          <div className="flex flex-col gap-2 w-72 slide-in-left-1">
            <div>
              <img src="/assets/slots/Multipliers.png" alt="" className="" />
            </div>
            <div className="bg-white p-3 border-2 rounded-md flex flex-col justify-center items-center drop-shadow-[2px_2px_10px_#5bc8af]">
              <h1 className="nunito text-3xl">Choose Bet Amount:</h1>
              <div style={{ flex: 'left' }} className="mb-4">
                <div className="flex flex-col">
                  <span className={"bg-black m-2 py-2 px-10 text-white text-centre"}>{this.state.betAmount}</span>
                  <div className="flex justify-content">
                    <button className={"bg-red-400 rounded-md w-10 m-2 text-center py-2 text-white"} onClick={() => this.updateBetAmount(-10)}>-10</button>
                    <button className={"bg-green-400 rounded-md w-10 m-2 text-center py-2 text-white"} onClick={() => this.updateBetAmount(+10)}>+10</button>
                  </div>
                </div>
              </div>

            </div>
          </div>


          <div className={'spinner'}>
            <div className={'spinner-parent'}>
              <div className={'spinner-container'}>
                <Spinner onFinish={this.finishHandler} ref={(child) => {
                  this._child1 = child;
                }} timer="537" />
                <Spinner onFinish={this.finishHandler} ref={(child) => {
                  this._child2 = child;
                }} timer="1074" />
                <Spinner onFinish={this.finishHandler} ref={(child) => {
                  this._child3 = child;
                }} timer="1611" />
                {repeatButton}
              </div>
            </div>

          </div>
          {/* <h1 className={'bg-[var(--scheme-1)] border rounded-xl p-3 w-20'} style={{ color: 'white' }}>
            <span>{winner === null ? 'Spin!' : winner ? 'WON' : 'LOST'}</span>
          </h1> */}
        </div>
      </>
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

      this.setState({ position: clamp_pos, timeRemaining: this.props.timer })
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
    let { position, current } = this.state;

    return (
      <div
        style={{ backgroundPosition: '0px ' + position + 'px' }}
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
      <img src={flip} alt={'Lever'} />
    </button>
  );
}

function BettingModal({ bet, modifyBetAmount, toggleSelecting }) {
  const onSubmitSelection = () => {
    if (bet <= 0) {
      alert("Bet Must be greater than 0")
    } else {
      toggleSelecting()
    }
  }

  return (
    <div className="z-50 fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 border-4 rounded-md flex flex-col justify-center items-center drop-shadow-[2px_2px_10px_#5bc8af]">
        <h1 className="nunito text-3xl">Choose Bet Amount:</h1>
        <div style={{ flex: 'left' }} className="mb-4">
          <button className={"bg-red-400 rounded-md w-10 m-2 text-center py-2 text-white"} onClick={() => modifyBetAmount(-10)}>-10</button>
          <button className={"bg-red-400 rounded-md w-10 m-2 text-center py-2 text-white"} onClick={() => modifyBetAmount(-1)}>-1</button>
          <span className={"bg-black rounded-md m-2 py-2 px-6 text-white"}>{bet}</span>
          <button className={"bg-green-400 rounded-md w-10 m-2 text-center py-2 text-white"} onClick={() => modifyBetAmount(+1)}>+1</button>
          <button className={"bg-green-400 rounded-md w-10 m-2 text-center py-2 text-white"} onClick={() => modifyBetAmount(+10)}>+10</button>
        </div>

        <div style={{ flex: 'left' }}>
          <button className={"bg-[var(--scheme-5)] rounded-md w-100 m-2 p-4 nunito text-white text-2xl"} onClick={onSubmitSelection}>Play Game!</button>
        </div>
      </div>
    </div>
  );
}

function WinningModal({ betAmount }) {
  const reload = () => {
    window.location.reload();
  }

  return (

    <div className="z-50 fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-10 rounded-md flex flex-col justify-center items-center gap-4 drop-shadow-[10px_10px_40px_var(--scheme-4)]">

        <div className="mb-4 flex flex-col justify-center items-center gap-4">
          <h1 className="text-6xl blocky">You won!</h1>
          <p className= "text-xl">You won: {betAmount}</p>
        </div>

        <div className="flex justify-between w-100 gap-10">
          <NavLink onClick={reload} className={"rounded-md bg-green-500 p-2 text-4xl nunito"}>Play Again</NavLink>
          <NavLink to="/home" className={"rounded-md bg-red-500 p-2 text-4xl nunito"}>Go Home</NavLink>

        </div>
      </div>
    </div>

  )
}