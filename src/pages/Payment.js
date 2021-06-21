import React from "react";
import { Modal, Button } from "antd";
import StripeContainer from "../components/StripeContainer";

const Payment = () => {
  return (
    <div className="container p-5 text-center">
      <Modal
        footer={[
          <Button key="back" onClick={() => {}}>
            Cancel
          </Button>,
        ]}
        title={"Payment"}
        visible={true}
        closeIcon
      >
        <StripeContainer />
      </Modal>
    </div>
  );
};

export default Payment;
