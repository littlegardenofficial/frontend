import * as React from "react";
import { StyleSheet, View, Text , ScrollView, Dimensions, Image } from "react-native";
import styles from './HorizontalScrollCardsStyles';

const DEVICE_WIDTH = Dimensions.get("window").width;

class HorizontalScrollCards extends React.Component {
  scrollRef = React.createRef();
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0
    };
    this.scrollRef = React.createRef();
  }

  componentDidMount = () => {
    if(this.props.autoScroll){
    setInterval(() => {
      this.setState(
        prev => ({
          selectedIndex:
            prev.selectedIndex === this.props.cards.length - 1
              ? 0
              : prev.selectedIndex + 1
        }),
        () => {
          this.scrollRef.current.scrollTo({
            animated: true,
            x: ( DEVICE_WIDTH ) * this.state.selectedIndex,
            y: 0
          });
        }
      );
    }, 3000); 
    }
  };

  setSelectedIndex = event => {
    const contentOffset = event.nativeEvent.contentOffset;
    const viewSize = event.nativeEvent.layoutMeasurement;

    // Divide the horizontal offset by the width of the view to see which page is visible
    const selectedIndex = Math.floor(contentOffset.x / viewSize.width);
    this.setState({ selectedIndex });
  };

  render() {
    const { cards } = this.props;
    const { selectedIndex } = this.state;
    return (
      <View style={styles.wrapper}>
        <ScrollView
          horizontal
          pagingEnabled
          onMomentumScrollEnd={this.setSelectedIndex}
          ref={this.scrollRef}>
          {cards.map((image, index) => (
            <View
              style={styles.cardStyle}
              key={index}>
              <Text>{image}</Text>
            </View>
          ))}
        </ScrollView>
        <View style={styles.circleDiv}>
          {cards.map((image, i) => (
            <View
              style={[
                styles.whiteCircle,
                {opacity: i === selectedIndex ? 0.5 : 1},
              ]}
              key={image}
              active={i === selectedIndex}
            />
          ))}
        </View>
      </View>
    );
  }
}

export default HorizontalScrollCards ;