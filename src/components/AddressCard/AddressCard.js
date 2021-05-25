import React from 'react';
import {View} from 'react-native';
import {Button, Text} from 'react-native-elements';
import {findPrimaryAddress} from '../../utils/ComponentRendererUtil';
import getStyles from './AddressCardStyles';

const AddressCard = props => {
  let styles = getStyles(props.addressCardStyle);
  let primaryAddress = findPrimaryAddress(props);

  return (
    <View style={styles.productCard}>
      <View style={styles.productDetail}>
        <View style={styles.descriptionSection}>
          <Text style={{fontSize: 14, fontWeight: '700'}}>Deliver to : </Text>
          <View style={styles.primaryAddress}>
            <Text style={styles.addressLine}>{primaryAddress.addressName}</Text>
            <Text style={styles.addressLine}>
              {primaryAddress.addressLine1}
            </Text>
            <Text style={styles.addressLine}>{primaryAddress.city}</Text>
            <Text style={styles.addressLine}>{primaryAddress.pinCode}</Text>
          </View>
        </View>
        <View style={styles.actions}>
          <Button
            type="clear"
            title="Change"
            buttonStyle={styles.buttonStyle}
            containerStyle={{width: '100%'}}
            titleStyle={styles.buttonTitleStyle}
            onPress={props.onPressChange}
          />
        </View>
      </View>
    </View>
  );
};

export default AddressCard;
