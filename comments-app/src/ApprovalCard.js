import React from 'react';

const ApprovalCard = ({ children }) => {
  return (
    <div className="ui card">
      <div className="content">
        {children}
      </div>

      <div className="extra content">
        <div className="ui two buttons">
          <div class="ui basic green button">Approve</div>
          <div class="ui basic red button">Decline</div>
        </div>
      </div>
    </div>
  );
}

export default ApprovalCard;