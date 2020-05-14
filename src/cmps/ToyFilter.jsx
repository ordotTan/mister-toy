import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

export default class ToyFilter extends React.Component {

    state = {
        filter: {
            name: '',
            type: '',
            inStock: '',
            sort: ''
        }
    }

    handleChange = (ev) => {
        let { name, value } = ev.target;
        value = ev.target.type === 'number' ? parseInt(value) : value;
        this.setState(prevState => ({ filter: { ...prevState.filter, [name]: value } }), () => {
            this.props.onSetFilter(this.state.filter)
        })

    }

    render() {
        return (
            <section className="toy-filter flex justify-center fs20">
                <SearchIcon style={{ color:'blue',fontSize: 25 }}/>
                <label>
                    Toy Name
                        <input type="text" name="name" placeholder="Toy Name" value={this.state.name} onChange={this.handleChange} />

                </label>
                <label>
                    Toy Type
                    <select name="type" value={this.state.type} onChange={this.handleChange}>
                        <option value="">All</option>
                        <option value="Funny">Funny</option>
                        <option value="Educational">Educational</option>
                        <option value="Adult">Adult</option>
                    </select>
                </label>
                <label>
                    In Stock
                    <select name="inStock" value={this.state.inStock} onChange={this.handleChange}>
                        <option value="">All</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </label>
                <label>
                    Sort By
                    <select name="sort" value={this.state.sort} onChange={this.handleChange}>
                        <option defaultValue value="name">Name</option>
                        <option value="price">Price</option>
                    </select>
                </label>

            </section>
        )

    }
}