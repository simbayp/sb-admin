import React from "react";

function CollapseableCard() {
  return (
    <div className="card shadow mb-4">
      {/* <!-- Card Header - Accordion --> */}
      <a
        href="#collapseCardExample"
        className="d-block card-header py-3"
        data-toggle="collapse"
        role="button"
        aria-expanded="true"
        aria-controls="collapseCardExample"
      >
        <h6 className="m-0 font-weight-bold text-primary">
          Collapsable Card Example
        </h6>
      </a>
      {/* <!-- Card Content - Collapse --> */}
      <div className="collapse show" id="collapseCardExample">
        <div className="card-body">
          This is a collapsable card example using Bootstrap's built in collapse
          functionality. <strong>Click on the card header</strong> to see the
          card body collapse and expand!
        </div>
      </div>
    </div>
  );
}

export default CollapseableCard;
