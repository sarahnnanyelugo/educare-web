import "./prefooter.scss";

export const Prefooter = (props) => {
  return (
    <>
      <div className="col-md-12 prefooter-div">
        <div className="prefooter-inner col-md-10 offset-md-1 flexy ">
          <div className="col-md-4 prefooter-heading">
            {" "}
            <h3>{props.text}</h3>
            <p>{props.paragraph}</p>
          </div>
          <div className="offset-md-6">
            {" "}
            <button>Get started for free</button>
          </div>
        </div>
      </div>
    </>
  );
};
