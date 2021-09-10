import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import ReactClock from './ReactClock';

const App = () => {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState();
    const [text, setText] = useState('Click me');
    const [name, setName] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });
    

    // const[firstName,setFirstName] = useState("");
    // const[lastName,setLastName] = useState("");
    // const[fullName,setFullName] = useState();
    // const[fullName2,setFullName2] = useState();

    const handleChange = () => {
        let newBg = "lightblue";
        setColor(newBg);
        let newName = ' Hurry!😙'
        setText(newName);
    }

    const handleBack = () => {
        let color = "rgb(212, 214, 65)";
        setColor(color);
        let name = "Ouch!🙃"
        setText(name)
    }

  const  handleDecrement = () =>{
        if(count > 0){
            setCount(count - 1)
        }
        else if( count === 0){
            alert('Sorry, Zero Limit Reached')
            setCount(0)
        }
    }

    let currentTime = new Date().toLocaleTimeString();
    const [time, setTime] = useState(currentTime)

    const updatedTime = () => {
        currentTime = new Date().toLocaleTimeString();
        setTime(currentTime);
    }
    setInterval(updatedTime, 1000)


    //     const inputValue = (event) => {
    //       console.log(event.target.value);
    //       setFirstName(event.target.value);
    //     }
    //     const inputValue2 = (event) =>{
    //         console.log(event.target.value);
    //         setLastName(event.target.value);
    //     }
    //    const handleSubmit = (event) => {
    //        event.preventDefault();
    //        setFullName(firstName);
    //        setFullName2(lastName);
    //    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('form submitted 👌')
    }

    const inputEvent = (event) => {
        console.log(event.target.value);
        console.log(event.target.name);
        // const value = event.target.value;
        // const name = event.target.name;

        const{name,value} = event.target;


        setName((preValue) => {
            console.log(preValue);
            return {
                ...preValue,
                [name] : value
            }


            // if (name === 'firstName') {
            //     return {
            //         firstName: value,
            //         lastName: preValue.lastName,
            //         password: preValue.password,
            //         email: preValue.email,
            //         password: preValue.password
            //     }
            // }
            // else if (name === 'lastName') {
            //     return {
            //         firstName: preValue.firstName,
            //         lastName: value,
            //         email: preValue.email,
            //         password: preValue.password
            //     }
            // }
            // else if (name === 'email') {
            //     return {
            //         firstName: preValue.firstName,
            //         lastName: preValue.lastName,
            //         email: value,
            //         password: preValue.password
            //     }
            // }
            // else if (name === 'password') {
            //     return {
            //         firstName: preValue.firstName,
            //         lastName: preValue.lastName,
            //         email: preValue.email,
            //         password: value
            //     }
            // }
            
        })
    }


  

    return (
        <>
        <div className="counter_div" style={{ backgroundColor: color }}>
        <ReactClock/>

            <h1>{time}</h1>
            
            {/* <button className="button" onClick={updatedTime} >get time</button> */}
         
          <h1 style={{backgroundColor: 'white', width: '40%',margin: '0 auto' ,marginBottom: '10px'}}>{count}</h1>
          
          <Tooltip title="Add" aria-label="add">
            <Button variant="contained" className="button_green" onClick={() => setCount(count + 1)} ><AddIcon/>
            </Button>
            </Tooltip>
            <Tooltip title="delete" aria-label="delete">
            <Button variant="contained"  className="button_red" onClick={handleDecrement}><DeleteIcon/></Button>
            </Tooltip>

            <div style={{ marginTop: '20px' }}>
                <Button variant="contained" color="secondary" onClick={handleChange} onDoubleClick={handleBack}>{text}</Button>
            </div>

            <div style={{ marginTop: '20px' }}>

                {/* <form onSubmit={handleSubmit}>
            <h1>Hello {fullName} {fullName2}</h1>
            <input type="text" placeholder="Enter Your First Name" onChange={inputValue} value={firstName}/><br/>
            <input type="text" placeholder="Enter Your Last Name" onChange={inputValue2} value={lastName}/><br/>
            <button type="submit" className="button" >Submit👌</button>
            </form> */}

                <form onSubmit={handleSubmit}>
                    <h1>Hello {name.firstName} {name.lastName} </h1>
                    <h4>{name.email}</h4>
                    <h4>{name.password}</h4>
                    <input type="text" placeholder="Enter Your First Name" onChange={inputEvent}
                        name="firstName" value={name.firstName} /><br />
                    <input type="text" placeholder="Enter Your Last Name" onChange={inputEvent}
                        value={name.lastName} name="lastName" /><br />

                    <input type="email" placeholder="Enter Your Email Name" onChange={inputEvent}
                        value={name.email} name="email" /><br />

                    <input type="number" placeholder="Enter Your Mobile Number" onChange={inputEvent}
                        value={name.password} name="password" /><br />

                    <Button type="submit" variant="contained" color="secondary" >Submit👌</Button>
                </form>
            </div>


        </div>
      
        </>
    );
};

export default App;