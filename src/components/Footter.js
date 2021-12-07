import React from 'react'
import PropTypes from 'prop-types';
import { FaCreativeCommonsPd } from "react-icons/fa";
const Footter = ({title, website,address,postcode,isOpen}) => {

    //const{title,website,address,postcode} = props;
    
    return (
        <>
            <footer className="container">
            <p>© Passawee Wanwilai 2000-{new Date().getFullYear()} <FaCreativeCommonsPd color="red"/></p>
            </footer>
        </>
    )
    
}

const styles = {
    title:{
        color:'red'
    }
}

Footter.propTypes = {
    title: PropTypes.string,
    website: PropTypes.string,
    address: PropTypes.string,
    isOpen:PropTypes.bool,
    postcode:PropTypes.number
  };


export default Footter
