import React from 'react';
import toyService from '../services/toyService.js';
import { saveToy } from '../store/actions/toyActions.js';


import { connect } from "react-redux";
import { Link } from "react-router-dom";



class ToyEdit extends React.Component {
    state = {
        name: '',
        price: '',
        type: 'Funny',
        inStock: 'true'
    }

    componentDidMount() {
        this.loadToy();
    }

    loadToy() {
        const { id } = this.props.match.params;
        if (!id) return; // As it is s a new toy, nothing to load... 
        toyService.get(id)
            .then(toy => {
                this.setState({ ...toy });
            })
    }

    handleChange = (ev) => {
        let { name, value } = ev.target;
        value = ev.target.type === 'number' ? parseInt(value) : value;
        this.setState({ [name]: value });

    }

    handleSubmit = (ev) => {
        ev.preventDefault();
        let toy = this.state
        this.props.saveToy(toy)
            .then(() => {
                this.props.history.push('/');
            })
    }

    OnUploadImg = (ev) => {
        console.log(ev.target.files[0])
    }

    render() {
        return (
            <section className="toy-edit">
                <h2>Add/Edit Toy</h2>
                <form className="flex column align-center" onSubmit={this.handleSubmit}>
                    <label>
                        Toy Name
                    <input autoFocus placeholder="Toy Name" type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
                    </label>
                    <label>
                        Toy Price
                    <input type="number" placeholder="Toy Price" name="price" value={this.state.price} onChange={this.handleChange} required />
                    </label>
                    <label>
                        Toy Type
                    <select name="type" value={this.state.type} onChange={this.handleChange} required>
                            <option value="Funny">Funny</option>
                            <option value="Educational">Educational</option>
                            <option value="Adult">Adult</option>
                        </select>
                    </label>
                    <label>
                        In Stock
                    <select name="inStock" value={this.state.inStock} onChange={this.handleChange} required>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                    </label>
                    <input
                        onChange={(ev) => this.OnUploadImg(ev)}
                        type="file"
                    />
                    <button className="sve-buttona">Save</button>
                </form>
                <Link to="/">Toy list</Link>

            </section>

        )
    }

}

const mapStateToProps = (state) => {
    return {
        toy: state.toyApp.currToy,
    };
};

const mapDispatchToProps = {
    saveToy
}
export default connect(mapStateToProps, mapDispatchToProps)(ToyEdit);