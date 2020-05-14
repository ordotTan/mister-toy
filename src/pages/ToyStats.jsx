import { loadToys } from '../store/actions/toyActions.js'
import React, { Component } from 'react'
import { Pie } from 'react-chartjs-2';
import { connect } from "react-redux";
import { Link } from "react-router-dom";


class ToyStats extends Component {
    state = {
        data: {
            labels: [],
            datasets: [{
                data: [],
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                ],
                hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                ]
            }]
        }
    }

    componentDidMount() {
        this.props.loadToys(null, true)
            .then(this.setData)
    }

    setData = () => {
        const result = this.props.toys.reduce((acc, toy) => {
            if (!acc[toy.type]) acc[toy.type] = 0
            acc[toy.type]++
            return acc
        },{})
        const data = Object.values(result)
        const labels = Object.keys(result)

        this.setState(prevState => {
            return {
                data: {
                    ...prevState.data,
                    labels,
                    datasets: [{
                        ...prevState.data.datasets[0],
                        data
                    }]
                }
            }
        })
    }


    render() {
        const { data } = this.state
        return (
            <div>
                <h2>Toys Per Category</h2>
                <Pie data={data} />
                <Link to="/">Toy list</Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        toys: state.toyApp.toys
    };
};

const mapDispatchToProps = {
    loadToys
}
export default connect(mapStateToProps, mapDispatchToProps)(ToyStats);