export default function Contact() {
    return (
      <>
        <h1>Contact</h1>
        <form>
          <div className="form-group">
            <label htmlFor="contact-name">Name</label>
            <input type="input" className="form-control" id="contact-name" placeholder="Your name"></input>
          </div>
          <div className="form-group">
            <label htmlFor="contact-email">Email address</label>
            <input type="email" className="form-control" id="contact-email" aria-describedby="emailHelp" placeholder="Enter email"></input>
          </div>
          <div className="form-group">
            <label htmlFor="contact-message">Message</label>
            <textarea className="form-control" id="contact-message" rows="4"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </>

    );
  }
  