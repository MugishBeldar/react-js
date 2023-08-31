import React, { Component } from 'react'

export class Errorboundary extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    componentDidCatch(error, info) {
        console.log(error);
        console.info(info);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <h1>Somthing went wrong</h1>
                </div>
            )
        } else {
            return this.props.children
        }
    }
}

export default Errorboundary