import React, { useState } from "react";

const Accordion = (props) => {
  const [active, setActive] = useState(0);
  const renderItems = props.items.map((item, index) => {
    const show = active === index? 'show': '';
    return (
        <React.Fragment key={item.title}>
        <div
          id="accordion"
          style={{ marginTop: "20px" }}
          onClick={() => setActive(index)}
        >
          <div className="card" style={{ marginBottom: "20px"}}>
            <div className="card-header" id="headingOne">
              <h5 className="mb-0">
                <button
                  className="btn btn-link"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  {item.title}
                </button>
              </h5>
            </div>

            <div
              id="collapseOne"
              className={`collapse ${show}`}
              aria-labelledby="headingOne"
              data-parent="#accordion"
            >
              <div className="card-body">{item.description}</div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  });

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            {renderItems}
            
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Accordion;
