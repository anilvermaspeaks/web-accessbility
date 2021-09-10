
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

            <section className={classes.semantic}>
                <h3>What semantic means</h3>
                <select>
                    <option value='1'>Hindi</option>
                    <option value='2'>English</option>
                </select>

                <div>Hindi</div>

                <article>Hindi</article>
                <input type="radio" />
                <input type="text" />
            </section>

            <section >
                <h3>How to use checkbox</h3>
                <input type="checkbox" id="chk1-label" />
                <label for="chk1-label">Remember my preferences</label>
            </section>

            <section>
                <h3>Techniques for hiding content: display:none or visibility: hidden</h3>
                <div><p>These styles will hide content from all users. The content is removed from the visual flow of
                    the page and is ignored by screen readers. <strong>Do not use this CSS if you want the content to be read by a screen reader.</strong></p> </div>

                <h3>width:0px, height:0px or other 0 pixel sizing techniques</h3>
                <div><p>An element with no height or width, whether defined in HTML or CSS, is typically removed from the flow of the page, so most screen readers will not read it</p> </div>

                <h3>text-indent: -10000px;</h3>
                <div><p>Good but have problems with link, form control, or other focusable element</p> <b>the element would be focusable, but not visible on the page—sighted keyboard users would likely be confused</b></div>
                <h3>Absolutely positioning content off-screen</h3>
                <div><p>The following are the recommended styles for visually hiding content that will be read by a screen reader.</p>
                    <code>.sr-only (
                        position:absolute; <br />
                        left:-10000px;<br />
                        top:auto;<br />
                        width:1px;<br />
                        height:1px;<br />
                        overflow:hidden;<br />
                        )</code>
                    <br /> <br /> <br />
                    OR <br /> <br /> <br />
                    <code>(clip: rect(1px, 1px, 1px, 1px); <br />
                        clip-path: inset(50%); <br />
                        height: 1px; <br />
                        width: 1px; <br />
                        margin: -1px;  <br />
                        overflow: hidden; <br />
                        padding: 0;  <br />
                        position: absolute;)</code>

                </div>

            </section>
        </div>
    )
}


export default Contact;