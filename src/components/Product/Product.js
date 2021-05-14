import React from 'react';
import {View, Image} from 'react-native';
import {Button, Text} from 'react-native-elements';
import {THEME_COLOR_DARK, THEME_COLOR_LIGHT} from '../../styles/theme';
import getStyles from './ProductStyles';

const Product = props => {
  styles = getStyles(props.productCardStyle);

  const getProductStockStatus = product => {
    if (product.stockStatus === 'LIMITED') {
      return (
        <View style={this.styles.limitedStock}>
          <Text style={{color: 'white', fontWeight: '700'}}>Limited Stock</Text>
        </View>
      );
    } else if (product.stockStatus === 'SOLD_OUT') {
      return (
        <View style={this.styles.soldOut}>
          <Text style={{color: 'white', fontWeight: '700'}}>Out of Stock</Text>
        </View>
      );
    } else {
      return <View style={this.styles.nothing}></View>;
    }
  };

  return (
    <View style={this.styles.productCard}>
      <View style={this.styles.productDetail}>
        <View style={this.styles.imageSection}>
          {getProductStockStatus(props.item)}
          <Image
            blurRadius={props.item.stockStatus === 'SOLD_OUT' ? 8 : 0}
            style={this.styles.imageStyle}
            source={props.item.productImage}
          />
        </View>
        <View style={this.styles.descriptionSection}>
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
              Source:
            </Text>{' '}
            {props.item.productSource}
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
      <View style={this.styles.actions}>
        <Text style={{color: 'grey', marginLeft: 5, fontSize: 12}}>
          <Text style={{fontWeight: 'bold', fontSize: 12}}>Pack :</Text>{' '}
          {props.item.packSizeRange} {props.item.packUnit}
        </Text>
        <Button
          disabled={props.item.stockStatus === 'SOLD_OUT'}
          type="clear"
          title="ADD"
          buttonStyle={this.styles.buttonStyle}
          containerStyle={{width: '30%'}}
          titleStyle={{color: 'white', fontSize: 12}}
          onPress={() => props.addItem(props.item)}
        />
      </View>
    </View>
  );
};



export default Product;
