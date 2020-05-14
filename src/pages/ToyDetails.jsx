import React from 'react';
import { loadToy } from '../store/actions/toyActions.js'
import { connect } from "react-redux";

class ToyDetails extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.loadToy(id);
  }

  render() {
    const { toy } = this.props;
    if (!toy) return 'Loading...';
    let imgSRC = toy.imgURL ? toy.imgURL : "https://image.shutterstock.com/image-vector/no-image-available-vector-illustration-260nw-744886198.jpg"
    return <div className="toy-details">
      <h1>Name: {toy.name}</h1>
      <h2>Price: ${toy.price}</h2>
      <h2>Category: {toy.type}</h2>
      <img src={imgSRC} alt=""></img>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident optio unde ipsa aliquid eos distinctio quam rem. Itaque sed, harum distinctio veniam soluta ipsa quisquam, exercitationem animi culpa, nesciunt similique!</p>
    </div>;
  }
}

const mapStateToProps = (state) => {
  return {
    toy: state.toyApp.currToy
  };
};


const mapDispatchToProps = {
  loadToy
}

export default connect(mapStateToProps, mapDispatchToProps)(ToyDetails);
