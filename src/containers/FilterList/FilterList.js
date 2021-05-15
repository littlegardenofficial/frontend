import React from 'react';
import {
  View,
  ScrollView,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {SCROLL_EVENT_THROTTLE, HIDE_SCROLL_INDICATOR} from '../../styles/theme';
import styles from './FilterListStyles';

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
          scrollEventThrottle={SCROLL_EVENT_THROTTLE}
          showsHorizontalScrollIndicator={HIDE_SCROLL_INDICATOR}>
          {this.props.categoryProductMap.map((category, index) => {
            return (
              <TouchableOpacity
                key={category.id}
                onPress={() => this.onCategorySelect(category)}>
                <ImageBackground
                  blurRadius={0}
                  imageStyle={styles.imageBackground}
                  style={styles.imageCard}
                  source={category.filterImage}></ImageBackground>
                <View style={styles.filterTitleContainer}>
                  <Text style={styles.filterTitle}>
                    {!!category.categoryTitle ? category.categoryTitle : ''}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

export default FilterList;
