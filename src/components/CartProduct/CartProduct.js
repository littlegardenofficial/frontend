import React from 'react';
import {View, Image} from 'react-native';
import {Button, Text, Icon} from 'react-native-elements';
import {
  THEME_COLOR,
  THEME_COLOR_DARK,
  THEME_COLOR_LIGHT,
  THEME_CONTRAST_COLOR,
} from '../../styles/theme';
import getStyles from './CartProductStyles';

const CartProduct = props => {
  styles = getStyles(props.productCardStyle);

  return (
    <View style={styles.productCard}>
      <View style={styles.productDetail}>
        <View style={styles.imageSection}>
          <Image
            blurRadius={props.item.stockStatus === 'SOLD_OUT' ? 8 : 0}
            style={styles.imageStyle}
            source={props.item.productImage}
          />
        </View>
        <View style={styles.descriptionSection}>
          <Text
            h4
            h4Style={{
              fontSize: 14,
              fontWeight: 'bold',
              color: props.item.stockStatus === 'SOLD_OUT' ? 'grey' : 'black',
            }}>
            {props.item.productName}
          </Text>
          <Text
            h4
            h4Style={{
              fontSize: 13,
              fontWeight: '500',
              color: props.item.stockStatus === 'SOLD_OUT' ? 'grey' : 'black',
            }}>
            <Text
              style={{
                fontWeight: '700',
                color: props.item.stockStatus === 'SOLD_OUT' ? 'grey' : 'black',
              }}>
              Price: {'\u20B9'}
            </Text>{' '}
            <Text style={{textDecorationLine: 'line-through'}}>
              {props.item.productPrice} {props.item.perUnit}
            </Text>{' '}
            <Text
              style={{
                fontWeight: 'bold',
                color: props.item.stockStatus === 'SOLD_OUT' ? 'grey' : 'black',
              }}>
              {props.item.discountedPrice} {props.item.perUnit}
            </Text>
          </Text>
          <Text
            style={{marginTop: 5}}
            h4
            h4Style={{
              fontSize: 15,
              fontWeight: '700',
              color: THEME_COLOR_DARK,
              color:
                props.item.stockStatus === 'SOLD_OUT'
                  ? THEME_COLOR_LIGHT
                  : THEME_COLOR_DARK,
            }}>
            {'\u20B9'} {props.item.pricePerPack}/Pack
          </Text>
        </View>
      </View>
      <View style={styles.actions}>
        <Button
          disabled={props.item.stockStatus === 'SOLD_OUT'}
          type="clear"
          icon={<Icon name="remove" size={25} color="white" />}
          buttonStyle={styles.buttonStyle}
          containerStyle={{width: '20%'}}
          titleStyle={{color: 'white', fontSize: 15}}
          onPress={() => props.removeItem(props.item)}
        />
        <Text style={{fontSize: 15, color: {THEME_COLOR}, fontWeight: 'bold'}}>
          {props.item.quantity}
        </Text>
        <Button
          disabled={props.item.stockStatus === 'SOLD_OUT'}
          type="clear"
          icon={<Icon name="add" size={25} color="white" />}
          buttonStyle={styles.buttonStyle}
          containerStyle={{width: '20%'}}
          titleStyle={{color: 'white', fontSize: 15}}
          onPress={() => props.addItem(props.item)}
        />
      </View>
    </View>
  );
};

export default CartProduct;
