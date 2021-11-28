import React from 'react'
import PropTypes from 'prop-types';

const Footter = ({title, website,address,postcode,isOpen}) => {

    //const{title,website,address,postcode} = props;

    return (
        <div>
            <h3 style={styles.title}>{title} &copy; {new Date().getFullYear()}</h3>
            <p style={{color:"green",fontSize:18}}>{website} {address} {postcode} {isOpen.toString()}</p>
            <p style={styles.title}>Passawee Wanwilai</p>
        </div> 
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
