

import React, { useMemo } from "react";

const CheckoutSummary = ({ cartItems }) => {

    
  const DELIVERY_CHARGE = 30;
  const COMMISSION_RATE = 0.1; // 10%
  const GST_RATE = 0.18; // 18%

  const priceDetails = useMemo(() => {
    const itemTotal = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    const commission = itemTotal * COMMISSION_RATE;
    const subtotal = itemTotal + commission;
    const taxableAmount = subtotal + DELIVERY_CHARGE;
    const gst = taxableAmount * GST_RATE;

    const grandTotal = taxableAmount + gst;

    return {
      itemTotal,
      commission,
      deliveryCharge: DELIVERY_CHARGE,
      gst,
      grandTotal,
    };
  }, [cartItems]);

  return (
    <div style={styles.card}>
      <h3>Bill Details</h3>

      <div style={styles.row}>
        <span>Item Total</span>
        <span>₹{priceDetails.itemTotal.toFixed(2)}</span>
      </div>

      <div style={styles.row}>
        <span>Platform Commission (10%)</span>
        <span>₹{priceDetails.commission.toFixed(2)}</span>
      </div>

      <div style={styles.row}>
        <span>GST (18%)</span>
        <span>₹{priceDetails.gst.toFixed(2)}</span>
      </div>

      <div style={styles.row}>
        <span>Delivery Charge</span>
        <span>₹{priceDetails.deliveryCharge.toFixed(2)}</span>
      </div>

      <hr />

      <div style={{ ...styles.row, fontWeight: "bold" }}>
        <span>Grand Total</span>
        <span>₹{priceDetails.grandTotal.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default CheckoutSummary;

const styles = {
  card: {
    maxWidth: "400px",
    padding: "16px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "8px",
  },
};