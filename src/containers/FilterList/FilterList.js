import React from 'react';
import {View, Dimensions , ScrollView , Text, Image , ImageBackground, TouchableOpacity} from 'react-native';
import styles from './FilterListStyles';

const DEVICE_WIDTH = Dimensions.get('window').width;

class FilterList extends React.Component {
  
  getCardStyles = (category) => {
    if(category.active){
      return {
        flex: 1,
        width: 140,
        backgroundColor: 'white',
        height: '95%',
        resizeMode: 'stretch',
        borderRadius: 10,
        borderStyle: 'solid',
        borderColor: 'green',
        borderWidth: 5 ,
        marginHorizontal : 10 ,
        justifyContent: 'center',
        alignItems: 'center', 
        marginTop: 3,
      }
    }else{
      return { 
        flex: 1,
        width: 140,
        backgroundColor: 'white',
        height: '95%',
        resizeMode: 'stretch',
        borderRadius: 10,
        borderStyle: 'solid',
        marginHorizontal : 10 ,
        borderColor: 'grey',
        borderWidth: 4 ,
        justifyContent: 'center',
        alignItems: 'center', 
        marginTop: 3,
      }
    }
  }

  onCategorySelect = () => {
    
  }

  cards = [
    {
      name: 'Vegetables',
      active: true ,
      source: require('../../../assets/images/vegetablesCategory.jpg'),
    },
    {
      name: 'Fruits',
      active: false ,
      source: require('../../../assets/images/fruitsCategory.jpg'),
    },
    {
      name: 'Navratri',
      active: false , 
      source: require('../../../assets/images/fruitsCategory.jpg'),
    },
    {
      name: 'Cereals/Spices',
      active : false ,
      source: require('../../../assets/images/cereals.jpg'),
    },
  ];
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <View style={styles.wrapper}>
        <ScrollView 
          horizontal={true}
          scrollEventThrottle={10}
          showsHorizontalScrollIndicator={false}
        >
          {
            this.cards.map((image , index ) => {
              return ( <TouchableOpacity key={index}><ImageBackground
                imageStyle={{width: '98%' , height: '95%' , alignItems: 'center' , justifyContent: 'center'}}
                style={this.getCardStyles(image)}
                key={index}
                source={image.source}
              >
                <View style={{height: 'auto' ,  backgroundColor: '#000000a0' , width: '100%' , alignItems: 'center', justifyContent: 'center'}}>
                  <Text style={{color: 'white'  , fontWeight: 'bold' , fontSize: 20}}>
                    {image.name}
                    </Text>
                </View>
              </ImageBackground></TouchableOpacity>);
            })
          }
          </ScrollView>
      </View>
    );
  }
}

export default FilterList;
