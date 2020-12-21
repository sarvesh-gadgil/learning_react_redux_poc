import React from 'react'
import { connect } from 'react-redux'
import deleteData from '../action/Delete'
import toggleData from '../action/Toggle'

const mapStateToProps = (state) => {
    return {
        ReducerStates: {
            details: state.Reducer1.details,
            toggleStatus: state.Reducer2
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        ReducerDispatches: {
            deleteData: index => dispatch(deleteData(index)),
            toggleData: isVisible => dispatch(toggleData(isVisible))
        }
    }
}

const displayComponent = ({ ReducerStates, ReducerDispatches }) => {

    const { details, toggleStatus } = ReducerStates;
    const { deleteData, toggleData } = ReducerDispatches

    return (
        <div>
            <ul style={toggleStatus.displayData}>
                {details.map((details, index) => (
                    <li key={index}>
                        {details}
                        <button type="button" onClick={() => deleteData(index)}>Delete</button>
                    </li>
                ))}
            </ul>
            <br />
            <button type="button" onClick={() => toggleData(!toggleStatus.isVisible)}>{toggleStatus.buttonValue} Table</button>
        </div>
    );
}

const displayList = connect(mapStateToProps, mapDispatchToProps)(displayComponent);

export default displayList;