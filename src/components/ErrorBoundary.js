import React, {Component} from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }

    }

    // New life cycle method in v16 react. This acts like a try/catch method.
    componentDidCatch(error, info) {
        // If we catch an error, set the state of hasError flag to true 
        // (remember setting the state triggers render() method which will show the h1 tag of the error message)
        this.setState({hasError: true});
    }

    render() {
        if (this.state.hasError) {
            return <h1>Ooops. That is not good.</h1>
        }
        return this.props.children; // We can return the children that was wrapped inside the Error Boundary component.
    }
}

export default ErrorBoundary;