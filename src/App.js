import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css'

class App extends Component {
    state = {
        number: 0,
        alpha: 1,
        operate: '',
        operating: 0,
        display: 0,
    }
    render() {
        console.log(this.state.number);
        console.log(this.state.alpha);
        console.log(this.state.operating);
        console.log(this.state.operate);
        return (
            <React.Fragment>
                <div className="layout">

                    <div className="screen">
                        <div className="screenDisplay">
                            <p className="result">{this.state.display % 1 === 0 ? this.state.display : this.state.display.toFixed(14)}</p>
                        </div>
                    </div>


                    <div className="keyboard">
                        <div className="numerical">
                            <button className="k1" onClick={() => {
                                this.numericalHandle(1)
                            }}>1</button>
                            <button className="k2" onClick={() => {
                                this.numericalHandle(2)
                            }}>2</button>
                            <button className="k3" onClick={() => {
                                this.numericalHandle(3)
                            }}>3</button>
                            <button className="k4" onClick={() => {
                                this.numericalHandle(4)
                            }}>4</button>
                            <button className="k5" onClick={() => {
                                this.numericalHandle(5)
                            }}>5</button>
                            <button className="k6" onClick={() => {
                                this.numericalHandle(6)
                            }}>6</button>
                            <button className="k7" onClick={() => {
                                this.numericalHandle(7)
                            }}>7</button>
                            <button className="k8" onClick={() => {
                                this.numericalHandle(8)
                            }}>8</button>
                            <button className="k9" onClick={() => {
                                this.numericalHandle(9)
                            }}>9</button>
                            <button className="k10" onClick={() => {
                                this.numericalHandle(0)
                            }}>0</button>
                            <button className="k11" onClick={this.thousandHandle}>.</button>

                            <button className="k12" onClick={this.switchOper}>+/-</button>
                        </div>



                        <div className="operators">
                            <button className="o1" onClick={() => {
                                (this.state.operating === 0) ? this.operateHandle1("+") : this.operateHandle2("+")
                            }}>+</button>
                            <button className="o2" onClick={() => {
                                (this.state.operating === 0) ? this.operateHandle1("-") : this.operateHandle2("-")
                            }}>-</button>
                            <button className="o3" onClick={() => {
                                (this.state.operating === 0) ? this.operateHandle1("x") : this.operateHandle2("x")
                            }}>x</button>
                            <button className="o4" onClick={() => {
                                (this.state.operating === 0) ? this.operateHandle1("/") : this.operateHandle2("/")
                            }}>/</button>
                            <button className="o5">=</button>
                            <button className="o6">AC</button>
                        </div>
                    </div>

                </div>
            </React.Fragment>
        )
    }
    numericalHandle = n => {
        if (this.state.alpha === 1) {
            let temp = this.state.number;
            this.setState({ number: n + (temp * 10) });
            this.setState({ display: n + (temp * 10) });
        }
        else {
            this.setState({ number: this.state.number + (n * this.state.alpha) });
            this.setState({ display: this.state.number + (n * this.state.alpha) });
            this.setState({ alpha: this.state.alpha * 1 / 10 });

        }

    }

    switchOper = () => {
        this.setState({ number: this.state.number * -1 })
        this.setState({ display: this.state.number });
    }

    thousandHandle = n => {
        this.setState({ alpha: this.state.alpha * 1 / 10 });
    }

    operateHandle1 = o => {
        this.setState({ operate: o })
        this.setState({ alpha: 1 });
        this.setState({ operating: this.state.number });
        this.setState({ number: 0 });
        this.setState({ display: 0 });
    }
    operateHandle2 = o => {
        this.setState({ operate: o });
        this.setState({ alpha: 1 });
        if (this.state.operate === "+") {
            this.setState({ operating: this.state.number + this.state.operating })
            this.setState({ display: this.state.number + this.state.operating });
        }
        else if (this.state.operate === "-") {
            this.setState({ operating: this.state.operating - this.state.number })
            this.setState({ display: this.state.operating - this.state.number });
        }
        else if (this.state.operate === "x") {
            this.setState({ operating: this.state.number * this.state.operating })
            this.setState({ display: this.state.number * this.state.operating });
        }
        else {
            this.setState({ operating: this.state.operating / this.state.number })
            this.setState({ display: this.state.operating / this.state.number });
        }
        this.setState({ number: 0 });

    }
}
export default App