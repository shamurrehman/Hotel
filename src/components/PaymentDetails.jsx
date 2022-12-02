import React, { useState } from "react";
import Input from "./Input";

const PaymentDetails = () => {
  const [eMoney, setEMoney] = useState(false);
  const [cashOnDelivery, setCashOnDelivery] = useState(true);

  const eMo = () => {
    setEMoney(true);
    setCashOnDelivery(false);
  };

  const cashOnDev = () => {
    setEMoney(false);
    setCashOnDelivery(true);
  };

  return (
    <div className="mt-10">
      <h2 className="text-orange-500 uppercase font-bold text-sm">
        Payment Details
      </h2>

      <div className="flex justify-between mt-5">
        <h3>Payment Method</h3>

        <div className="space-y-3">
          {/* <div className="px-1 cursor-pointer border-2 border-slate-300 space-x-3 rounded-md flex items-center ">
            <input
              onClick={eMo}
              required
              type="radio"
              id="e-moeny"
              name="payment"
            />
            <label
              onClick={eMo}
              className="py-3  cursor-pointer"
              htmlFor="e-moeny"
            >
              e-Money
            </label>
          </div> */}

          <div className="cursor-pointer px-1 border-2 border-slate-300 space-x-3 rounded-md flex items-center ">
            <input
              onClick={cashOnDev}
              type="radio"
              required
              id="cash-on-delivery"
              name="payment"
              readOnly
              checked="checked"
            />
            <label
              onClick={cashOnDev}
              className=" py-3 cursor-pointer"
              htmlFor="cash-on-delivery"
            >
              Cash on Delivery
            </label>
          </div>
        </div>
      </div>

      {/* {eMoney && (
        <div className="grid grid-cols-2 gap-6 mt-16 mb-10">
          <Input
            id={"e-money-number"}
            placeholder="2343565"
            label={"e-Money Number"}
            type="number"
          />
          <Input
            id={"e-money-pin"}
            label={"e-Money PIN"}
            placeholder={"6969"}
            type="number"
          />
        </div>
      )} */}

      {cashOnDelivery && (
        <div className="flex items-center mb-10 justify-between space-x-6 mt-16">
          <img src="/images/cash.svg" alt="" />
          <p className="text-gray-500">
            The ‘Cash on Delivery’ option enables you to pay in cash when our
            delivery courier arrives at your residence. Just make sure your
            address is correct so that your order will not be cancelled.
          </p>
        </div>
      )}
    </div>
  );
};

export default PaymentDetails;
