import { Button } from 'antd';
import React from 'react';

const DeleteAccount = () => {
  return (
    <div>
      <div
        style={{
          padding: '20px',
          textAlign: 'center',
        }}
        className="bg-gray-1 lead"
      >
        If you delete your NobleQ account, all associated information will also
        be deleted. This action cannot be undone. Make sure that you really want
        to do this.
      </div>
      <Button loading={false} className="btn-danger my-2">
        Delete Account
      </Button>
    </div>
  );
};

export default DeleteAccount;
