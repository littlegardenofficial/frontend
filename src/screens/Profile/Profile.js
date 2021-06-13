import React, {Component} from 'react';
import { connect } from 'react-redux'
import { Card, Icon } from 'react-native-elements';
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import Separator from '../../components/Seperator/Separator';
import styles from './ProfileStyles';
import ProfileName from '../../components/ProfilePageField/ProfilePageField';
import { THEME_TEXT_COLOR } from '../../styles/theme';
import { showInfoFlashMessage, showSuccessFlashMessage } from '../../utils/FlashMessageUtil';
import _ from "lodash";
import { NavigationEvents } from 'react-navigation';
import InterCommRoutingService from '../../services/interCommRoutingService';
import ROUTES from '../../routes/routeNames';
import { isUserLoggedIn } from '../../utils/ComponentRendererUtil';

class Profile extends Component {

  profilePageForm = {};
  updatedProfilePageForm = {}

  constructor(props) {
    super(props);
    this.dataInitialization();
    this.state = {
      saveButton: false,
    }
  }

  // used to update profilePageForm and updateProfilePageForm objects after updating store 
  componentDidUpdate() {
    console.log('updated in store');
    this.dataInitialization();
  }

  dataInitialization = () => {
    if (isUserLoggedIn(this.props.auth)) {
      this.profilePageForm = {
        email: this.props.auth.email,
        firstName: this.props.auth.firstName,
        lastName: this.props.auth.lastName,
        mobileNo: this.props.auth.mobileNo,
      }
      this.updatedProfilePageForm = _.cloneDeep(this.profilePageForm);
    }
  }

  onEditFieldValue = (field, value) => {
    this.setState({ saveButton: true });
    switch (field) {
      case 'firstName':
        this.updatedProfilePageForm = { ...this.updatedProfilePageForm, 'firstName': value };
        break;
      case 'lastName':
        this.updatedProfilePageForm = { ...this.updatedProfilePageForm, 'lastName': value, };
        break;
      case 'email':
        this.updatedProfilePageForm = { ...this.updatedProfilePageForm, 'email': value, };
        break;
      case 'mobileNo':
        this.updatedProfilePageForm = { ...this.updatedProfilePageForm, 'mobileNo': value, };
        break;
      default:
        break;
    }
  }

  onSaveProfileData = () => {
    if (!_.isEqual(this.updatedProfilePageForm, this.profilePageForm)) {
      // dispatch action for updating profile data
      showSuccessFlashMessage('Updated Successfully');
    } else {
      showInfoFlashMessage('Please update atleast one field');
    }
    this.setState({ saveButton: false });
  }

  renderUpdateProfileButton = () => {
    return (
      <View style={styles.saveButtonWrapper}>
        <TouchableOpacity style={styles.saveButtonContainer} onPress={this.onSaveProfileData}>
          <Icon name="save" color={THEME_TEXT_COLOR}></Icon>
        </TouchableOpacity>
      </View>
    );
  }


  renderHeader = () => {
    let name = this.props.auth.firstName + " " + this.props.auth.lastName;
    return (
      <View style={styles.headerContainer}>
        <ImageBackground
          style={styles.headerBackgroundImage}
          blurRadius={10}
          source={this.props.auth.profileImage}>
          <View style={styles.headerColumn}>
            <Image style={styles.userImage} source={this.props.auth.profileImage} />
            <Text style={styles.userNameText}>{name}</Text>
          </View>
        </ImageBackground>
      </View>
    );
  };

  renderField = (nameType, data) => {
    return (
      <View style={styles.emailContainer}>
        <ProfileName
          nameType={nameType}
          name={data}
          onEdit={this.onEditFieldValue}
        />
      </View>
    );
  };

  navigateToLoginPage = () => {
    console.log('here');
    if (!isUserLoggedIn(this.props.auth)) {
      showInfoFlashMessage("Please login to access your profile");
      InterCommRoutingService.routeToScreen(ROUTES.LOGIN);
    }
    this.dataInitialization();
  }


  render() {
    return (
      <ScrollView style={styles.scroll} >
        <NavigationEvents
          onDidFocus={payload => this.navigateToLoginPage()}
        />
        {isUserLoggedIn(this.props.auth) ?
        <View style={styles.container}>
          <Card containerStyle={styles.cardContainer}>
            {this.renderHeader()}
              {this.state.saveButton ? this.renderUpdateProfileButton() : <View></View>}
              {this.renderField('mobileNo', this.props.auth.mobileNo)}
              {Separator()}
              {this.renderField('email', this.props.auth.email)}
              {Separator()}
              {this.renderField('firstName', this.props.auth.firstName)}
              {Separator()}
              {this.renderField('lastName', this.props.auth.lastName)}
          </Card>
        </View>
          : <></>}
      </ScrollView>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    ...props,
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    ...props,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
