import classes from './About.module.css';
import { vegetables } from '../../data.js'

const About = () => {
    return (
        <div>
            <section className={classes.contrastRadio}>
                <h3>Contrast Radio</h3>
                <p>What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?
                </p>
            </section>

            <section className={classes.semanticEls}>
                <h3>Use of semantic tag</h3>
                <div onClick={0}>Link item with div </div>
                <div><a href="/">Link item with anchor</a></div>
                <button onClick={0}>Link item with button</button>
            </section>

            <section className={classes.grocerySec}>
                <h3>Proper labeling while listing data</h3>
                <ul>{vegetables && vegetables.map((vegetable) => <li key={vegetable.id}>
                    <b>{vegetable.name}</b>
                    <div> <img src={vegetable.photo_url} alt="" /></div>
                    <button onClick={0}>Buy</button>
                </li>)}</ul>
            </section>

            <section className={classes.enoughTime}>
                <h3>Give enough Time</h3>
                <p>Complete this form in 10 min.</p>
            </section>

            <section className={classes.enoughTime}>
                <h3>Avoid Jargon</h3>
                <p>Use simple lang.</p>
                <abbr title="Indian Space Research Organisation">ISRO</abbr>
            </section>

            <section className={classes.enoughTime}>
                <h3>Always Define Lang attribute on html tag</h3>
                <p>Toujours définir l'attribut Lang sur la balise html</p>
                <p lang="fr">Toujours définir l'attribut Lang sur la balise html</p>
            </section>
        </div>
    )
}

export default About;