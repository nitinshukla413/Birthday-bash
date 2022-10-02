import React,{useState,} from 'react'
import { useNavigate,Navigate,Link, createSearchParams } from 'react-router-dom';
import './styles.css'


function CreateEvent() {
    const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    hostname: "",
    date: "",
    time: "",
    endtime:"",
    location: "",
    photo:""

  });



    const handleChange  = (e) => {
        e.preventDefault();
        const value = e.target.value;
        console.log("val",userData)

        setUserData({...userData,[e.target.id]:value});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("ok",userData);
           
                navigate({
                    pathname: "/event",
                    search: createSearchParams(userData).toString(),
                })
            

      };
    // const submitPost = async (e) => {
    //     e.preventDefault();
    //     const { name, email, tel } = userData;
    //     const response = await fetch(
    //       "https://reactform-4bea0-default-rtdb.firebaseio.com/reactForm.json",
    //       {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //           name,
    //           email,
    //           tel,
    //         }),
    //       }
    //     );
    
    //     if (response) {
    //       setUserData({
    //         name: "",
    //         email: "",
    //         tel: "",
    //       });
    //       alert("Your Data has been stored in our Database");
    //       navigate('/showdata')
    //     }
    //   };
  return (
    <>
    <h2>Creat Event!!! 🥳</h2>
    <form method='POST' onSubmit={handleSubmit}>
        <label htmlFor="name"> Event Name</label>
        <input type="text" id="name" name="name" placeholder="Name" onChange={handleChange} />
        <label htmlFor="hostname"> Host Name</label>
        <input type="text" id="hostname" name="hostname" laceholder="Host Name"onChange={handleChange}  />
        <label htmlFor="date">Date</label>
        <input type="date" id="date" name="date" placeholder="Date" onChange={handleChange}  />
        <label htmlFor="time">Start Time</label>
        <input type="time" id="time" name="time" placeholder="Time" onChange={handleChange} />
        <label htmlFor="time">End Time</label>
        <input type="time" id="endtime" name="endtime" placeholder="End Time" onChange={handleChange}  />
        <label htmlFor="location">Location</label>
        <input type="text" id="location" name="location" placeholder="Location" onChange={handleChange}  />
         <label htmlFor="photo">Photo</label>
        <input type="file" id="photo" name="photo" placeholder="Photo" onChange={handleChange}  />
        <Link to="/event">
        <button className='submitButton' type='submit' onClick={handleSubmit}>Submit</button>

        </Link>

     {/* <h1>New Order</h1>
     <label>Name</label>
     <input name="name"/>
     <label>Address</label>
     <input name="address"/>
     <label>Date</label>
     <input name="date"/>
     <label>Order Number</label>
     <input name="order"/>
     <input type="submit" /> */}
   </form>
    </>
  )
}

export default CreateEvent