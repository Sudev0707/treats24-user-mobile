import React from 'react';
import { View, Text } from 'react-native';
import SectionHeader from './SectionHeader';
import { cartStyle } from '../../styles/screens/CartStyles';
import fonts from '../../theme/fonts';
import colors from '../../theme/colors';

interface PriceDetails {
  itemTotal: number;
  gst: number;
  deliveryCharge: number;
  grandTotal: number;
}

interface PaymentSummaryProps {
  priceDetails: PriceDetails;
  gstRate: number;
  couponDiscount?: number;
}

const PaymentSummary: React.FC<PaymentSummaryProps> = ({
  priceDetails,
  gstRate,
  couponDiscount = 0,
}) => {
  return (
    <View style={cartStyle.paymentSummary}>
      <View style={cartStyle.productinfo}>        
        <SectionHeader title="Payment Summary" />
        <View style={{borderWidth:0.2, borderColor:colors.borderLight, marginBottom:8}} />

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

        {couponDiscount > 0 && (
          <View style={cartStyle.paymentRow}>
            <Text style={[cartStyle.paymentLabel, { color: colors.brandPrimary }]}>
              Coupon Discount
            </Text>
            <Text style={[cartStyle.paymentValue, { color: colors.brandPrimary }]}>
              -₹{couponDiscount.toFixed(2)}
            </Text>
          </View>
        )}

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
