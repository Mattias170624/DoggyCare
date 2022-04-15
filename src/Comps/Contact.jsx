import "../CompStyles/contact.css"

const Contact = () => {
    return (
        <div id="contact">
            <section id="contactPageImage">
                <form id="contactForm">
                    <label>First Name</label>
                    <input type='text' placeholder='Name..' />

                    <label>Last Name</label>
                    <input type='text' placeholder='Lastname..' />

                    <label>Email</label>
                    <input type='email' placeholder='Email..' />

                    <label>About your dog</label>
                    <textarea rows='3' id='dogInfo' placeholder="Breed, Age etc" />

                    <hr id="contactLine" />

                    <input type='submit' value='Send' />
                </form>
            </section>
        </div>
    );
};

export default Contact;