import React from 'react'
import FunctionalComponent from './FunctionalComponent'
import addData from '../action/Add'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        message: state.Reducer1.message
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addData: value => dispatch(addData(value))
    }
}

class StateComponent extends React.Component {

    state = {
        value: ''
    }

    onChangeHandle = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    onClickHandle = () => {
        this.props.addData(this.state.value);
        this.setState({
            value: ''
        })
    }

    render() {
        return (
            <React.Fragment>
                <FunctionalComponent
                    onChange={this.onChangeHandle.bind(this)}
                    value={this.state.value}
                    onClick={this.onClickHandle.bind(this)} />
                <br />
                <span>{this.props.message}</span>
            </React.Fragment>
        );
    }
}

// const ConnectedStateComponent = connect(null, mapDispatchToProps)(StateComponent);
const ConnectedStateComponent = connect(mapStateToProps, mapDispatchToProps)(StateComponent);

export default ConnectedStateComponent;