import React from 'react';
import {View, Image} from 'react-native';
import {Button, Text, Icon} from 'react-native-elements';
import {
  THEME_COLOR, THEME_COLOR_DARK,
} from '../../styles/theme';
import { getOrderStatusTitle } from '../../utils/HelperUtil';
import getStyles from './CartProductStyles';

const CartProduct = props => {
  const styles = getStyles(props.productCardStyle);

  return (
    <View style={styles.productCard}>
      <View style={styles.productDetail}>
        <View style={styles.descriptionSection}>
          <Text
            h4
            h4Style={{
              fontSize: 15,
              fontWeight: 'bold',
              color: 'black',
            }}>
            {props.item.productName}
          </Text>
          <Text style={{color: 'grey', fontSize: 14}}>
            <Text style={{fontWeight: 'bold', fontSize: 14}}>Pack :</Text>{' '}
            {props.item.packSizeRange} {props.item.packUnit}
          </Text>
          <Text style={{marginTop: 3 , color: 'black' , fontWeight: 'bold'}}>
          {'\u20B9'} {props.item.pricePerPack * props.item.quantity}
          </Text>
          {props.isOrdered ? 
          <Text style={{marginTop: 3 , color: 'blue' , fontWeight: 'bold'}}>
            {getOrderStatusTitle(props.item.orderStatus)}
          </Text> : <View></View>}
        </View>
        {props.isOrdered ? 
          <View style={{...styles.actions , marginVertical: 0}}>
            <Image 
              source={props.item.productImage} 
              style={{height: props.productCardStyle.height - 20 , width: '100%'}}>
              </Image>
          </View>
          : <View style={styles.actions}>
                 <Button
                  type="clear"
                  icon={<Icon name="remove" size={25} color="white" />}
                  buttonStyle={styles.buttonStyle}
                  containerStyle={{width: '50%'}}
                  titleStyle={{color: 'white', fontSize: 15}}
                  onPress={() => props.removeItem(props.item)}
                />
                <Text
                  style={{fontSize: 15, color: {THEME_COLOR}, fontWeight: 'bold'}}>
                  {props.item.quantity}
                </Text>
                <Button
                  type="clear"
                  icon={<Icon name="add" size={25} color="white" />}
                  buttonStyle={styles.buttonStyle}
                  containerStyle={{width: '50%'}}
                  titleStyle={{color: 'white', fontSize: 15}}
                  onPress={() => props.addItem(props.item)}
                />
              </View> }
      </View>
    </View>
  );
};

export default CartProduct;
