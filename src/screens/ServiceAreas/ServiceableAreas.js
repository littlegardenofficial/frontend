import React, {Component} from 'react';
import {View, Text , Modal } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Accordion from 'react-native-collapsible/Accordion';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';
import { HIDE_SCROLL_INDICATOR, SCROLL_EVENT_THROTTLE, THEME_COLOR, THEME_TEXT_COLOR } from '../../styles/theme';
import { fetchServiceLocations } from '../../redux/actions/serviceLocationAction';
import { isNotEmpty, isNotNullOrUndefined, sortProductByProductId } from '../../utils/HelperUtil';
import { Icon } from 'react-native-elements';
import styles from './ServiceableAreasStyles';
import CustomPicker from '../../components/CustomPicker/CustomPicker';
import CustomPickerOption from '../../components/modalComponents/CustomPickerOption/CustomPickerOption';

class ServiceableAreas extends Component {
  state = {
    activeSections: [],
    selectedValue: null,
    sections: [],
    popup: false,
  };

  constructor(props){
    super(props);
    this.props.fetchServiceLocations();
  }

  _renderHeader = section => {
    return (
      <View style={styles.accordionItemHeader}>
        <Text style={styles.accorHeaderTitle}>{section.title}</Text>
        <Icon  name='chevron-down' type='evilicon' color={THEME_COLOR} iconStyle={styles.accorHeaderIcon} ></Icon>
      </View>
    );
  };

  _renderContent = section => {
    return (
      <View style={styles.accordItemContent}>
        {section.content.map((item) => 
          <View style={styles.accordItemContentItem}>
            <Text style={styles.accordItemContentText}>{item.title}</Text>
          </View>)}
      </View>
    );
  };

  _updateSections = activeSections => {
    this.setState({activeSections});
  };

  getTopLevelLocationList = () => {
    if(isNotEmpty(this.props.serviceLocations)){
     const list =  this.props.serviceLocations
      .filter(location => location.is_top_level === true && location.is_enabled === true)
      .map((location , index) => {
        return { key:index , label:location.title , value:location.id };
      });
      return list;
    }
  }

  onDropDownChange = (itemValue) => {
    console.log(itemValue);
    this.setState({selectedValue: itemValue , popup : false});
  }
  
  getSectionsList = () => {
    if(isNotEmpty(this.props.serviceLocations)){
      const sectionsList =  this.props.serviceLocations
      .filter(location => location.id === this.getDefaultSelectedValue())[0]
      .associated_location_info
      .map(location => {
        let secondLevel = location.associated_location_info;
        return {title: location.title, content: secondLevel};
      });
      return sectionsList;
    }else{
      return [];
    }
  }

  renderAccordianForSubLevelLocations = () => {
    return (
      <Accordion key={1}
            sections={this.getSectionsList()}
            activeSections={this.state.activeSections}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
            onChange={this._updateSections}
          />
    )
  }

  getDefaultSelectedValue = () => {
    let selectedOptionId ;
    if(isNotEmpty(this.props.serviceLocations)){
      if(!isNotNullOrUndefined(this.state.selectedValue)){
        const id =  this.props.serviceLocations.sort(sortProductByProductId)[0].id;
        selectedOptionId =  id;
      }else{
        selectedOptionId = this.state.selectedValue;
      }
     }else{
      selectedOptionId = null;
     }

     console.log(selectedOptionId);
     return selectedOptionId;
  }

  renderChangeTopLevelLocationComponent = () => {
    return (
      <Modal
        animationType="fade"
        style={styles.modalWrapper}
        transparent={true}
        visible={this.state.popup}
        statusBarTranslucent={true}>
        <CustomPickerOption
          onOptionSelect={this.onDropDownChange}
          listOfOptions={this.getTopLevelLocationList}
          ></CustomPickerOption>
      </Modal>
    );
  };

  openOptionDialog = () => {
    this.setState({popup : true});
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.topLevelLocationPicker}>
          <CustomPicker 
            onDialogOpen={this.openOptionDialog} 
            selectedValue={this.getDefaultSelectedValue} 
            getListOptions={this.getTopLevelLocationList} >
          </CustomPicker>
          {this.renderChangeTopLevelLocationComponent()}
        </View>
        <ScrollView 
          style={styles.scrollViewDimension}
          scrollEventThrottle={SCROLL_EVENT_THROTTLE}
          showsVerticalScrollIndicator={HIDE_SCROLL_INDICATOR}
          >
          {this.renderAccordianForSubLevelLocations()}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state , props) => {
  return {
    ...props,
    serviceLocations : state.serviceLocations,
  }
}

const mapDispatchToProps = (dispatch , props) => {
  return {
    ...props,
    fetchServiceLocations : () => {dispatch(fetchServiceLocations())}
  }
}

export default connect(mapStateToProps , mapDispatchToProps)(ServiceableAreas);
