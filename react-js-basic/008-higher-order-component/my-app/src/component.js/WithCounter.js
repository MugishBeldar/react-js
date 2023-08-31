// import React from "react";

// const UpdatedComponent = (OriginalComponent) => {
//     class NewComponent extends React.Component {
//         constructor(props) {
//             super(props)

//             this.state = {
//                 count: 0,
//             }
//         }
//         countHandler = () => {
//             this.setState(prevState => {
//                 return { count: prevState.count + 1 }
//             })
//         }
//         render() {
//             return <OriginalComponent count={this.state.count} countHandler={this.countHandler} />

//         }
//     }
//     return NewComponent
// }

// export default UpdatedComponent;

import React from "react";

const WithCounter = (WrappedComponent, increamentBy) => {
    class WithCounter extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                count: 0,
            }
        }
        countHandler = () => {
            this.setState(prevState => {
                return { count: prevState.count + increamentBy }
            })
        }
        render() {
            // console.log(this.props.name)
            return <WrappedComponent count={this.state.count} countHandler={this.countHandler} props={this.props}/>

        }
    }
    return WithCounter
}
export default WithCounter;
