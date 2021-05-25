import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './AddressSelectorStyles';
import {ListItem, Button} from 'react-native-elements';
import {sortAddressByAddressId} from '../../utils/HelperUtil';

const AddressSelector = props => {
  return (
    <View>
      <View>
        {props.auth.address.sort(sortAddressByAddressId).map((address, i) => (
          <ListItem key={i} bottomDivider>
            <ListItem.Content style={styles.wrapper}>
              <ListItem.Subtitle>
                <View>
                  <View>
                    <Text style={styles.smallTitle}>{address.addressName}</Text>
                    <Text>{address.addressLine1}</Text>
                    <Text>{address.addressLine2}</Text>
                    <Text>{address.landmark}</Text>
                    <Text>{address.pinCode}</Text>
                  </View>
                </View>
              </ListItem.Subtitle>
              {!address.primary ? (
                <View>
                  <Button
                    title="Select"
                    onPress={() =>
                      props.onSelectAddress(address.addressId)
                    }></Button>
                </View>
              ) : (
                <Text style={styles.selectedAdd}>Selected</Text>
              )}
            </ListItem.Content>
          </ListItem>
        ))}
      </View>
    </View>
  );
};

export default AddressSelector;
