import { useState } from "react"

export default function Contact() {
    const [notification,setNotification] = useState(true);
    const [fname,setFname]= useState("");
    const [lname,setLname]= useState("");
    const [message,setMessage]= useState("");
    

    function validate() {
        return fname.length & lname.length & message.length;
      };
    
    const isValid = validate();
      
      <button type="button" disabled={isValid}>
        Save
      </button>

    const handleSubmit = event => {
      console.log('handleSubmit ran');
      event.preventDefault(); 

      setFname('');
      setLname('');
      setMessage('');
    };

    return(
        <div>
            <h1>Contact</h1>

            <form onSubmit={handleSubmit}>
                <label for="fname">First Name:</label><br/>
                <input  type="text" placeholder="First Name" value={fname} onChange={(e) => setFname(e.target.value)}required></input><br/>

                <label for="lname">Last Name:</label><br/>
                <input type="text" placeholder="Last Name" value={lname} onChange={(e) => setLname(e.target.value)} required></input><br/>

                <lable for="message">Message: </lable><br/>
                <input type="text"className="text-box" placeholder="type here" value={message} onChange={(e) => setMessage(e.target.value)} required></input><br/>

                <button type="submit" disabled={!isValid} onClick={() => setNotification("Message Sent")}>Submit</button>
            </form>
            
            <div className="sent-notification">{notification}</div>
    </div>
    )
}
