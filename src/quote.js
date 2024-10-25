import './quote.css';

function Quote() {
  const imageSrc = "http://localhost:3000/static/media/Quote.c6d6af851205833a13f1.png";

  return (
    <>
      <div className="container-wrapper">
        <img src={imageSrc} className="quote-image" alt="quote" />
      </div>
    </>
  );
}

export default Quote;