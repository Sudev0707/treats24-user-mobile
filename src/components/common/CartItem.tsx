import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { cartStyle } from '../../styles/screens/CartStyles';

interface CartItemProps {
  item: {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image?: any;
    isVeg?: boolean;
  };
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
  isLast: boolean;
}

const CartItem: React.FC<CartItemProps> = ({
  item,
  onUpdateQuantity,
  onRemoveItem,
  isLast,
}) => {
  return (
    <>
      <View style={cartStyle.cartItem}>
        <View style={cartStyle.foodImageBox}>
          <Image
            resizeMode="contain"
            source={
              item.image ||
              require('../../assets/images/foods/dummy food.png')
            }
            style={
              item.image
                ? cartStyle.itemImage
                : cartStyle.dummyItemImage
            }
          />
        </View>
        <View style={cartStyle.itemDetails}>
          <View style={cartStyle.titleRow}>
            <Text style={cartStyle.itemName}>
              {item.name}
            </Text>
            <View style={cartStyle.quantityControls}>
              <TouchableOpacity
                onPress={() =>
                  onUpdateQuantity(
                    item.id,
                    item.quantity - 1,
                  )
                }
                style={cartStyle.quantityBtn}
              >
                <Text style={cartStyle.quantityBtnText}>
                  -
                </Text>
              </TouchableOpacity>
              <Text style={cartStyle.quantityText}>
                {item.quantity}
              </Text>
              <TouchableOpacity
                onPress={() =>
                  onUpdateQuantity(
                    item.id,
                    item.quantity + 1,
                  )
                }
                style={cartStyle.quantityBtn}
              >
                <Text style={cartStyle.quantityBtnText}>
                  +
                </Text>
              </TouchableOpacity>
            </View>
            {/* <TouchableOpacity
              onPress={() => onRemoveItem(item.id)}
              style={cartStyle.removeBtn}
            >
              <Text style={cartStyle.removeBtnText}>X</Text>
            </TouchableOpacity> */}
          </View>

          <View style={cartStyle.priceRow}>
            <Text style={cartStyle.itemPrice}>
              ₹{item.price}
            </Text>
          </View>
        </View>
      </View>

      {/* Dashed Separator */}
      {!isLast && (
        <View style={cartStyle.separator} />
      )}
    </>
  );
};

export default CartItem;
