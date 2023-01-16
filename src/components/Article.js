import { Fragment } from "react/cjs/react.production.min";

function Article({
    title,
    date="January 1, 1970",
    minutes,
    preview,
}) {

    function roundNearest5(num) {
        return Math.round(num / 5);
      }
      function roundNearest10(num) {
        return Math.round(num / 10);
      }
    const emoji = () => {
        const emojiArray = [];
        if (minutes <= 30) {
            for (let i = 0; i < roundNearest5(minutes); i++) {
                emojiArray.push("☕️");
            }
            return emojiArray.join(" ") + " " + minutes + " mins to read"
        } else {
            for (let i = 0; i < roundNearest10(minutes); i++) {        
                emojiArray.push("🍱");
            }      
            return emojiArray.join('') + " " + minutes + " mins to read"; 
    }
        console.log("heyoo");
    }
    return (
        <Fragment>
            <article>
                <h3>{title}</h3>
                <small>{date}&nbsp;&nbsp;</small> 
                <span>{emoji}</span>
                <p>{preview}</p>
            </article>
        </Fragment>
    )
}

export default Article;