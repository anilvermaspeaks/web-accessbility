
import classes from './Contact.module.css';

const Contact = () => {
    return (
        <div>
            <section className={classes.labelControls}>
                <h3>Label Your Controles</h3>
                <div><label>User Name</label>
                    <input type="text" /></div>
                <div><label for="UserEmail">Email</label>
                    <input type="text" id="UserEmail" /></div>
                <div><label for="UserPassword">Enter User Password</label>
                    <input type="password" id="UserPassword" /></div>
            </section>
        </div>
    )
}


export default Contact;