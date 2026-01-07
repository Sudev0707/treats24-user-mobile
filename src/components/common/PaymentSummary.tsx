import React from 'react';
import { View, Text } from 'react-native';
import SectionHeader from './SectionHeader';
import { cartStyle } from '../../styles/screens/CartStyles';
import fonts from '../../theme/fonts';

interface PriceDetails {
  itemTotal: number;
  gst: number;
  deliveryCharge: number;
  grandTotal: number;
}

interface PaymentSummaryProps {
  priceDetails: PriceDetails;
  gstRate: number;
}

const PaymentSummary: React.FC<PaymentSummaryProps> = ({
  priceDetails,
  gstRate,
}) => {
  return (
    <View style={cartStyle.paymentSummary}>
      <View style={cartStyle.productinfo}>
        <SectionHeader title="Payment Summary" />

        <View style={cartStyle.paymentRow}>
          <Text style={cartStyle.paymentLabel}>Item Total</Text>
          <Text style={cartStyle.paymentValue}>
            ₹{priceDetails.itemTotal.toFixed(2)}
          </Text>
        </View>

        <View style={cartStyle.paymentRow}>
          <Text style={cartStyle.paymentLabel}>
            GST
            {/* ({(gstRate * 100).toFixed(0)}% ) */}
          </Text>
          <Text style={cartStyle.paymentValue}>
            ₹{priceDetails.gst.toFixed(2)}
          </Text>
        </View>

        <View style={cartStyle.paymentRow}>
          <Text style={cartStyle.paymentLabel}>Delivery Fee</Text>
          <Text style={cartStyle.paymentValue}>
            ₹{priceDetails.deliveryCharge}
          </Text>
        </View>

        <View style={cartStyle.separator} />

        <View style={cartStyle.paymentRow}>
          <Text style={cartStyle.totalText}>Total Amount</Text>
          <Text style={cartStyle.amountText}>₹{priceDetails.grandTotal}</Text>
        </View>
      </View>
    </View>
  );
};

export default PaymentSummary;
