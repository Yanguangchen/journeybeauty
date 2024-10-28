import './quote.css';
import imageSrc from "./Assets/Quote.png";

function Quote() {

  return (
    <>
      <div className="container-wrapper">
        <img src={imageSrc} className="quote-image" alt="quote" />
      </div>
    </>
  );
}

export default Quote;