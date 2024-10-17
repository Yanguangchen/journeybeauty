import React from "react";
import './Maps.css';

function Maps() {
  return (
    <div>
      <div className="flex-wrapper maps">
        <h1>Locate Us!</h1>
          </div>
          <div className="grid1maps">
            <iframe
              className="grid-maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.70607507877!2d103.95187957496582!3d1.352917898634278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da17d3d6c0eb05%3A0x89a7f16a86002dfc!2sJourney%20Beauty%20Brow%20Work!5e0!3m2!1sen!2ssg!4v1726588300894!5m2!1sen!2ssg"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Journey Beauty Brow Work"
            ></iframe>
          </div>
        </div>
  );
}

export default Maps;