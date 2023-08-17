// Conditional Rendering
import React, { Component } from "react";

class UserGreeting extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false,
        };
    }

    render() {
        // Fourth Approach (short circuit operator)
        return this.state.isLoggedIn && <div>Welcome Ivan</div>

        // Third Approach (ternary conditional operator)
        /*
        return this.state.isLoggedIn ? (
            <div>Welcome Ivan</div>
        ) : (
            <div>Welcome Guest</div>
        );
        */

        // Second Approach (element variables)
        /*
        let message;
        if (this.state.isLoggedIn) {
            message = <div>Welcome Ivan</div>;
        } else {
            message = <div>Welcome Guest</div>;
        }

        return <div>{message}</div>;
        */

        // First Approach (if/else)
        /*
        if (this.state.isLoggedIn) {
            return (
                <>
                    <div>Welcome Ivan</div>
                </>
            );
        } else {
            return (
                <>
                    <div>Welcome Guest</div>
                </>
            );
        }
        */
    }
}

export default UserGreeting;
