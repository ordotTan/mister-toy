import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';


export default class ToyFilter extends React.Component {

    state = {
        filter: {
            name: '',
            type: '',
            inStock: '',
            sort: 'name'
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
                <TextField  className="my-select" id="standard-basic" label="Toy Name" type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                <FormControl>
                    <InputLabel>Cateogry</InputLabel>
                    <Select
                        className="my-select"
                        name="type"
                        value={this.state.type}
                        onChange={this.handleChange}
                        label="Cateogry"
                    >
                        <MenuItem value="">
                            <em>All</em>
                        </MenuItem>
                        <MenuItem value="Funny">Funny</MenuItem>
                        <MenuItem value="Educational">Educational</MenuItem>
                        <MenuItem value="Adult">Adult</MenuItem>
                    </Select>
                </FormControl>
                <FormControl>
                    <InputLabel>In Stock</InputLabel>
                    <Select
                        className="my-select"
                        name="inStock"
                        value={this.state.inStock}
                        onChange={this.handleChange}
                        label="In Stock"
                    >
                        <MenuItem value="">
                            <em>All</em>
                        </MenuItem>
                        <MenuItem value="true">Yes</MenuItem>
                        <MenuItem value="false">No</MenuItem>
                    </Select>
                </FormControl>
                <FormControl>
                    <InputLabel>Sort By</InputLabel>
                    <Select
                        className="my-select"
                        name="sort"
                        value={this.state.sort}
                        onChange={this.handleChange}
                        label="Sort By"
                    >
                        <MenuItem value="name">Name</MenuItem>
                        <MenuItem value="price">Price</MenuItem>
                    </Select>
                </FormControl>
            </section>
        )

    }
}