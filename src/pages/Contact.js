import { useEffect, useState } from "react"

export default function Contact() {
    const [notification,setNotification] = useState(true);
    const [fname,setFname]= useState("");
    const [lname,setLname]= useState("");
    const [message,setMessage]= useState("");
    const [isDisabled, setIsDisabled] = useState(true)
    
    const handleSubmit = event => {
      event.preventDefault(); 

      setFname('');
      setLname('');
      setMessage('');
    };

    useEffect(() => {
      if(fname.length > 0 && lname.length > 0 && message.length > 0) {
        setIsDisabled(false)
      } else {
        setIsDisabled(true)
      }
    }, [fname, lname, message])

    return(
        <div>
            <h1>Contact</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="fname">First Name:</label><br/>
                <input  type="text" placeholder="First Name" value={fname} onChange={(e) => setFname(e.target.value)} /><br/>

                <label htmlFor="lname">Last Name:</label><br/>
                <input type="text" placeholder="Last Name" value={lname} onChange={(e) => setLname(e.target.value)}></input><br/>

                <label htmlFor="message">Message: </label><br/>
                <input type="text"className="text-box" placeholder="type here" value={message} onChange={(e) => setMessage(e.target.value)}></input><br/>

                <button type="submit" disabled={isDisabled} onClick={() => setNotification("Message Sent")}>Submit</button>
            </form>
            
            <div className="sent-notification">{notification}</div>
    </div>
    )
}
