import React, { Component } from "react"
import Modal from "../../components/UI/Modal/Modal"

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {

        constructor(props) {
            super(props)
            this.requestInterceptor = axios.interceptors.request.use(request => {
                this.errorConfirmHandler()
                return request
            })
            this.responseInterceptor = axios.interceptors.response.use(response => response, error => {
                this.setState({
                    error: error
                })
            })
        }

        state = {
            error: null
        }
        
        componentWillUnmount() {
            axios.interceptors.request.eject(this.requestInterceptor)
            axios.interceptors.response.eject(this.responseInterceptor)
        }

        errorConfirmHandler = () => {
            this.setState({
                error: null
            })
        }

        render () {
            return (
                <React.Fragment>
                <Modal show={this.state.error} modalClosed={this.errorConfirmHandler}>
                    {this.state.error ? this.state.error.message : null}
                </Modal>
                <WrappedComponent {...this.props} />
            </React.Fragment>
            )
        }
    }
}

export default withErrorHandler