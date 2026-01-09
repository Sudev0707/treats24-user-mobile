import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { cartStyle } from '../../styles/screens/CartStyles';

interface RandomItemProps {
  item: any;
  quantity: number;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onAddToCart: (item: any) => void;
}

const RandomItem: React.FC<RandomItemProps> = ({
  item,
  quantity,
  onUpdateQuantity,
  onAddToCart,
}) => {
  return (
    <View style={cartStyle.randomItemContainer}>
      <View style={cartStyle.randomItemImage}>
        <Image
          source={
            item.image
              ? typeof item.image === 'string'
                ? { uri: item.image }
                : item.image
              : require('../../assets/images/foods/dummy food.png')
          }
          style={{ width: '60%', height: '60%' }}
          resizeMode="contain"
        />
      </View>
      <View style={{paddingHorizontal:5, paddingBottom:5}} >
        <Text style={cartStyle.randomItemName}>
          {item.name}
        </Text>
        {/* <Text style={cartStyle.randomItemType}>
          {item.isVeg ? 'Veg' : ' Non-Veg'}
        </Text> */}

        <View style={cartStyle.randomItemControls}>
          <Text style={cartStyle.randomItemPrice}>₹{item.price}</Text>
          {quantity > 0 ? (
            <>
              <TouchableOpacity
                onPress={() => onUpdateQuantity(item.id, quantity - 1)}
                style={cartStyle.quantityButton}
              >
                <Text style={cartStyle.quantityButtonText}>-</Text>
              </TouchableOpacity>
              <Text style={cartStyle.quantityDisplay}>{quantity}</Text>
              <TouchableOpacity
                onPress={() => onUpdateQuantity(item.id, quantity + 1)}
                style={cartStyle.quantityButton}
              >
                <Text style={cartStyle.quantityButtonText}>+</Text>
              </TouchableOpacity>
            </>
          ) : (
            <TouchableOpacity
              onPress={() => onAddToCart(item)}
              style={cartStyle.addButton}
            >
              <Text style={cartStyle.addButtonText}>Add</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default RandomItem;
