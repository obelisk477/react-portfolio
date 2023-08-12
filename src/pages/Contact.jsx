export default function Contact() {

  const handleBlur = (e) => {
    let messageId = e.target.id.match(/[^-]+/g)[1] + '-required'
    let elem = document.getElementById(messageId)
    
    if (e.target.value == '') {
      elem.style.display = "block"
    } else {
      elem.style.display = "none"
    }
  }

  const handleSubmit =(e) => {
    e.preventDefault()
    let emailElem = document.getElementById('contact-email')
    let validEmail = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
    let message = document.getElementById("email-invalid")

    if (validEmail.test(emailElem.value)) {
      message.style.display = "none"
      emailElem.value = ""
    } else if (emailElem.value != ''){
      message.style.display = "block"
    }
  }

  return (
    <div id="contact-container">
      <h1>Contact</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="contact-name">Name</label>
          <input type="input" className="form-control" id="contact-name" placeholder="Your name" onBlur={handleBlur}></input>
        </div>
        <h6 id="name-required" style={{ display: 'none' }}>***Name is required</h6>
        <div className="form-group">
          <label htmlFor="contact-email">Email address</label>
          <input type="email" className="form-control" id="contact-email" aria-describedby="emailHelp" placeholder="Enter email" onBlur={handleBlur}></input>
        </div>
        <h6 id="email-required" style={{ display: 'none' }}>***Email is required</h6>
        <h6 id="email-invalid" style={{ display: 'none' }}>***Email is in an invalid format</h6>
        <div className="form-group">
          <label htmlFor="contact-message">Message</label>
          <textarea className="form-control" id="contact-message" rows="4" onBlur={handleBlur}></textarea>
        </div>
        <h6 id="message-required" style={{ display: 'none' }}>***Message is required</h6>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>

  );
}
