import { Fragment } from "react/cjs/react.production.min";

function Article({
    title,
    date="January 1, 1970",
    preview,
}) {
    
    return (
        <Fragment>
            <article>
                <h3>{title}</h3>
                <small>{date}</small>
                <p>{preview}</p>
            </article>
        </Fragment>
    )
}

export default Article;