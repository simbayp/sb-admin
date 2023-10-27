import React from 'react';
import BrandButton from '../../ui/buttons/BrandButton';
import CircleButton from '../../ui/buttons/CircleButton';
import SplitButtons from '../../ui/buttons/SplitButtons';

function ButtonsPage() {
  return (
    // <!-- Begin Page Content -->
    <div className="container-fluid">
      {/* <!-- Page Heading --> */}
      <h1 className="h3 mb-4 text-gray-800">Buttons</h1>
      <div className="row">
        <div className="col-lg-6">
          <CircleButton />
          <BrandButton />
        </div>
        <SplitButtons />
      </div>
    </div>
  );
}

export default ButtonsPage;
