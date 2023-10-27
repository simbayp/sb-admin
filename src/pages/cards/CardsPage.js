import React from 'react';
import BasicCard from '../../ui/cards/BasicCard';
import CollapseableCard from '../../ui/cards/CollapseableCard';
import DefaultCard from '../../ui/cards/DefaultCard';
import DropdownCard from '../../ui/cards/DropdownCard';
import EarningMonthly from '../../ui/cards/EarningMonthly';
import EarningYealy from '../../ui/cards/EarningYealy';
import PendingRequests from '../../ui/cards/PendingRequests';
import Tasks from '../../ui/cards/Tasks';

function CardsPage() {
  return (
    <div className="container-fluid">
      {/* <!-- Page Heading --> */}
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Cards</h1>
      </div>

      <div className="row">
        <EarningMonthly />
        <EarningYealy />
        <Tasks />
        <PendingRequests />
      </div>

      <div className="row">
        <div className="col-lg-6">
          <DefaultCard />
          <BasicCard />
        </div>

        <div className="col-lg-6">
          <DropdownCard />
          <CollapseableCard />
        </div>
      </div>
    </div>
  );
}

export default CardsPage;
