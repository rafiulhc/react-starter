import React from 'react';
import  Button  from 'react-bootstrap/Button';


const Player = (props) => {
    const {img,name,salary} = props.player;
    const handleClick = props.handleClick;
    const imgDesign = {
        width : '300px',
        height : '250px',
        borderRadius :'20px',
    }
    const design ={
        width : '400px',
        backgroundColor : 'cyan',
        border : '5px solid blue',
        margin : '30px',
        padding :'20px',
        borderRadius :'20px'
    }


    return (
        <div style={design}>
            <img style = {imgDesign} src={img} alt=""/>
            <h3>{name}</h3>
            <h4 >Salary :  {salary}</h4>
            <Button className="bg-primary" onClick={()=> handleClick(props.player)}>Add to list</Button>
        </div>
    );
};

export default Player;