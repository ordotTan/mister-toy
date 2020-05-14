import React from 'react';
import { Formik } from 'formik';
import toyService from '../services/toyService.js';
import { saveToy } from '../store/actions/toyActions.js';
import axios from 'axios'


import { connect } from "react-redux";


const CLOUD_NAME = 'dsqh7qhpg';
const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

class ToyEdit extends React.Component {
    state = {
        name: '',
        price: '',
        type: 'Funny',
        inStock: 'true',
        imgURL: '',
        _id: ''
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


    handleSubmit = (formInputs) => {

        formInputs.imgURL = this.state.imgURL
        this.props.saveToy(formInputs)
            .then(() => {
                this.props.history.push('/');
            })
    }

    validate = (values) => {
        const errors = {};
        if (values.name.length < 3) errors.name = 'Name must be with at least 3 characters'
        if (values.price <= 0) errors.price = 'Price must be a positive number'
        return errors;
    }

    OnUploadImg = (ev) => {
        const formData = new FormData();
        formData.append('file', ev.target.files[0]);
        formData.append('upload_preset', 'hrzvfhbk');
        return axios.post(UPLOAD_URL, formData)
            .then(res => {
                this.setState(prevState => {
                    return {
                        ...prevState,
                        imgURL: res.data.url
                    }
                })
            })
    }

    render() {
        const { name, price, type, inStock, _id } = this.state
        return (
            <>
                <h2>Add/Edit Toy</h2>
                <Formik initialValues={{ name, price, type, inStock, _id }} validate={this.validate} onSubmit={this.handleSubmit} enableReinitialize>

                    {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, }) => (
                        <form className="toy-edit flex column align-center" onSubmit={handleSubmit}>
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Toy Name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                            />
                            {errors.name && touched.name && <span className="validation-error-msg">{errors.name}</span>}
                            <label>Price</label>
                            <input
                                type="number"
                                name="price"
                                placeholder="Toy Price"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.price}
                            />
                            {errors.price && touched.price && <span className="validation-error-msg">{errors.price}</span>}
                            <label>Category</label>
                            <select
                                name="type"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.type}>
                                <option value="Funny">Funny</option>
                                <option value="Educational">Educational</option>
                                <option value="Adult">Adult</option>
                            </select>
                            <label>In Stock?</label>
                            <select
                                name="inStock"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.inStock}>
                                <option value="true">Yes</option>
                                <option value="false">No</option>
                            </select>
                            <label>Choose file </label>
                            <input className="file-input"
                                onChange={(ev) => this.OnUploadImg(ev)}
                                type="file"
                            // name="imgURL"
                            />

                            <input
                                type="hidden"
                                name="_id"
                                value={values._id}
                            />
                            <button type="submit" disabled={isSubmitting} className="save-button">Save</button>
                        </form >
                    )
                    }

                </Formik>
            </>
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