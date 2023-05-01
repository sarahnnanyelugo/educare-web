import "./prefooter.scss";

export const Prefooter = () => {
  return (
    <>
      <div className="col-md-12 prefooter-div">
        <div className="prefooter-inner col-md-10 offset-md-1 flexy ">
          <div className="col-md-4 prefooter-heading">
            {" "}
            <h3>
              Provide a Finance experience that <br />
              will scale your business upward.
            </h3>
          </div>
          <div>
            {" "}
            <button>Get started for free</button>
          </div>
        </div>
      </div>
    </>
  );
};
