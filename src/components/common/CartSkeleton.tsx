import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import { cartStyle } from '../../styles/screens/CartStyles';

const CartSkeleton: React.FC = () => {
  const skeletonItems = Array.from({ length: 3 }, (_, index) => index);

  return (
    <View style={cartStyle.container}>
      <View style={cartStyle.productContainer}>
        {skeletonItems.map((item, index) => (
          <React.Fragment key={item}>
            <View style={cartStyle.cartItem}>
              <View style={styles.skeletonImage} />
              <View style={cartStyle.itemDetails}>
                <View style={styles.skeletonText} />
                <View style={styles.skeletonPrice} />
                <View style={cartStyle.quantityControls}>
                  <View style={styles.skeletonBtn} />
                  <View style={styles.skeletonQuantity} />
                  <View style={styles.skeletonBtn} />
                </View>
              </View>
              <View style={styles.skeletonRemove} />
            </View>
            {index !== skeletonItems.length - 1 && (
              <View style={cartStyle.separator} />
            )}
          </React.Fragment>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  skeletonImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    backgroundColor: colors.skeleton || '#e0e0e0',
    marginRight: 15,
  },
  skeletonText: {
    height: 16,
    backgroundColor: colors.skeleton || '#e0e0e0',
    borderRadius: 4,
    marginBottom: 5,
  },
  skeletonPrice: {
    height: 14,
    width: '50%',
    backgroundColor: colors.skeleton || '#e0e0e0',
    borderRadius: 4,
    marginBottom: 10,
  },
  skeletonBtn: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.skeleton || '#e0e0e0',
  },
  skeletonQuantity: {
    height: 16,
    width: 20,
    backgroundColor: colors.skeleton || '#e0e0e0',
    borderRadius: 4,
    marginHorizontal: 15,
  },
  skeletonRemove: {
    width: 20,
    height: 20,
    backgroundColor: colors.skeleton || '#e0e0e0',
    borderRadius: 5,
  },
});

export default CartSkeleton;
