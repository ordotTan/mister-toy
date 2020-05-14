import React from 'react';
import Chatapp from './ChatApp'
//import PropTypes from 'prop-types'; 

export default class PopUp extends React.Component {
    render() {
        const { heading,footing, children} = this.props;

        return <section className="popup">
            <header>
                {heading}
            </header>
            <main>
                <Chatapp/>
                {children}
            </main>
            <footer>
                {footing}
            </footer>
        </section>
    }
}

// Modal.propTypes = {
//     importance : PropTypes.number,
//     x: function(props, propName, componentName) {
//                 const val = props[propName];
//                 if (!val) return;

//               if (!/puki/.test(val)) {
//                 return new Error(
//                   'Invalid prop `' + propName + '` supplied to' +
//                   ' `' + componentName + '`. Validation failed.'
//                 );
//               }
//             }

// }

