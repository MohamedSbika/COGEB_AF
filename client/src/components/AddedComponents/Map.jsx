import React from "react";

export default function Map() {
  return (
    <div>
      <div className="mx-auto mt-8" style={{ width: "80%" }}>
        <iframe
            className="rounded-lg shadow-[25px_25px_0px_rgba(11,79,72,1)]"
          title="Google Map"
          width="100%"
          height="400"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=RJ8V+VMX,%20Av.%20Hedi%20Nouira,%20Sousse+(COGEB)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps tracker sport</a>
        </iframe>
      </div>
    </div>
  );
}
