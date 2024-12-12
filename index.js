const element = (
  <div className="main-background-container">
    <div className="card-container">
      <h1 className="heading">Congratulations</h1>
      <div className="details-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
          alt="card-profile-img"
          className="card-profile-img"
        />
        <p className="name">Kiran V</p>
        <p className="description">
          Vishnu Institute of Education and Technology,Bhimavaram
        </p>
        <img
          style={{ height: "60px", width: "50px" }}
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
          alt="card-watch-img"
        />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
