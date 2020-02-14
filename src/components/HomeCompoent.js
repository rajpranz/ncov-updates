import React from "react";

const HomeComponent = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="pb-2 mt-4 mb-2 border-bottom">
          <h3>Example Page Header</h3>
        </div>
      </div>

      <div className="row">
        <iframe
          width="933"
          height="700"
          src="https://app.powerbi.com/view?r=eyJrIjoiNDA4NmIzMDUtMjk4MC00YTYzLWE3Y2EtZDk0MjQ2MjIwYThlIiwidCI6IjkwZTRkY2Q0LWE4YmMtNGU1Yi1hYjEzLTIzY2FiMTgzZmYyOSJ9"
          frameborder="0"
          allowFullScreen="true"
        ></iframe>
      </div>
    </div>
  );
};

export default HomeComponent;
