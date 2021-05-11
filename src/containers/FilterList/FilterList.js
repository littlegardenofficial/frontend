import React from 'react';
import {View, Dimensions , ScrollView , Text, Image , ImageBackground, TouchableOpacity} from 'react-native';
import styles , {getCardStyles} from './FilterListStyles';

const DEVICE_WIDTH = Dimensions.get('window').width;

class FilterList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate = () => {};

  onCategorySelect = category => {
    this.props.navigation.navigate('CategoryProduct', category);
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <ScrollView
          horizontal={true}
          scrollEventThrottle={10}
          showsHorizontalScrollIndicator={false}>
          {this.props.categoryProductMap.map((category, index) => {
            return (
              <TouchableOpacity
                key={category.id}
                onPress={() => this.onCategorySelect(category)}>
                <ImageBackground
                  blurRadius={5}
                  imageStyle={{
                    width: '98%',
                    height: '95%',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  style={getCardStyles()}
                  source={category.filterImage}>
                  <View
                    style={{
                      height: 'auto',
                      backgroundColor: '#000000a0',
                      width: '100%',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 20,
                      }}>
                      {!!category.categoryTitle ? category.categoryTitle : ''}
                    </Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

export default FilterList;
