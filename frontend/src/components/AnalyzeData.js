import React from 'react';
import axios from 'axios';

class AnalyzeData extends React.Component {

    state = {
        clinicalData: []
    }

    componentWillMount() {
        axios.get("http://localhost:8080/clinicalservices/api/patients/analyze/"
            + this.props.match.params.patientId)
            .then(res => {
                this.setState(res.data)
            })
    }
    render() {
        return (<div>
            <h2>Patient Details:</h2>
            First Name: {this.state.firstName}
            Last Name:{this.state.lastName}
            Age: {this.state.age}
            <h2>Clinical Report:</h2>
            {this.state.clinicalData.map(eachEntry => <TableCreator item={eachEntry} patientId={this.state.id}></TableCreator>)}
        </div>)
    }
}

class TableCreator extends React.Component {
    render() {
        var eachEntry = this.props.item;
        var patientId = this.props.patientId;
        return <div>
            <table>
                <tr><td><b>{eachEntry.componentName}</b></td></tr>
                <tr>
                    <td>{eachEntry.componentName}</td>
                    <td>{eachEntry.componentValue}</td>
                    <td>{eachEntry.measuredDateTime}</td>
                </tr>
            </table>
        </div>
    }
}

export default AnalyzeData;