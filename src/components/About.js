import { Fragment } from "react";

function About({image="https://via.placeholder.com/215", about}) {
    return (
        <Fragment>
            <aside>
                <img src={image} alt="blog logo"/>
                <p>{about}</p>
            </aside>

        </Fragment>
    )
}

export default About;