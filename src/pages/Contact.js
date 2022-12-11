import { useEffect, useState } from "react"

export default function Contact() {
    const [notification,setNotification] = useState(true);
    const [fname,setFname]= useState("");
    const [lname,setLname]= useState("");
    const [message,setMessage]= useState("");
    const [email,setEmail]= useState("")
    const [isDisabled, setIsDisabled] = useState(true)
    
    const handleSubmit = event => {
      event.preventDefault(); 

      setFname('');
      setLname('');
      setMessage('');
      setEmail('');
    };

    useEffect(() => {
      if(fname.length > 0 && lname.length > 0 && message.length > 0 && email.length > 0) {
        setIsDisabled(false)
      } else {
        setIsDisabled(true)
      }
    }, [fname, lname, message, email])

return(
  <div className="contact-page-container">
    <div className="title">
    <h1>Contact Us</h1>
    </div>

    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="fname">First Name:</label><br/>
        <input  type="text" placeholder="First Name" value={fname} onChange={(e) => setFname(e.target.value)} /><br/>

        <label htmlFor="lname">Last Name:</label><br/>
        <input type="text" placeholder="Last Name" value={lname} onChange={(e) => setLname(e.target.value)}></input><br/>

        <label htmlFor="email">Email: </label><br/>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}></input><br/>

        <label htmlFor="message">Message: </label><br/>
        <textarea type="text"className="text-box" value={message} onChange={(e) => setMessage(e.target.value)}></textarea><br/>

        <button type="submit" disabled={isDisabled} onClick={() => setNotification("Message Sent!")}>Submit</button>
        <div className="sent-notification">{notification}</div>
      </form>
        
      <div className="contact-us-text-wrapper">
        <h2>We Love Our Customers!!!</h2>
        

        <figure>
          <blockquote>
            <p>
              We mean it! We want to hear from you. If you want to suggest a new product
              for us to carry, if you want to make us awaire of a faulty product, or if you
              just want to tell us how cool we are, send us a message. Just provide your
              first and last name, email and a detailed message about your situation. A member
              of our support team will be in contact with you promptly.
             </p>
          </blockquote>
        </figure>

        <h3>-Brett Wheeler (Founder/CEO)</h3>
      </div>
    </div>
  </div>
)
}
