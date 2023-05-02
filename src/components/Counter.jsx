import React, { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        };
    }

    // increment() {
    //     this.setState({
    //         count: this.state.count + 1,
    //     });
    // }

    // increment() {
    //     this.setState(
    //         {
    //             count: this.state.count + 1,
    //         },
    //         () => {
    //             console.log("Callback Value", this.state.count);
    //         }
    //     );
    // }

    increment() {
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }));
        console.log(this.state.count);
    }

    incrementFive() {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    render() {
        return (
            <React.Fragment>
                <div>count - {this.state.count}</div>
                <button onClick={() => this.incrementFive()}>Increment</button>
            </React.Fragment>
        );
    }
}

export default Counter;
