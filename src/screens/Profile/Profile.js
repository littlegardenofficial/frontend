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
import ProfilePageField from '../../components/ProfilePageField/ProfilePageField';
import { THEME_TEXT_COLOR } from '../../styles/theme';
import { showInfoFlashMessage, showSuccessFlashMessage } from '../../utils/FlashMessageUtil';
import _ from "lodash";
import { NavigationEvents } from 'react-navigation';
import InterCommRoutingService from '../../services/interCommRoutingService';
import ROUTES from '../../routes/routeNames';
import { isUserLoggedIn } from '../../utils/ComponentRendererUtil';
import { requestUserDataUpdateAction } from '../../redux/actions/authActions';

class Profile extends Component {

  profilePageForm = {};
  updatedProfilePageForm = {}

  constructor(props) {
    super(props);
    this.dataInitialization();
    InterCommRoutingService.navigationProps = this.props.navigation;
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
    switch (field) {
      case 'firstName':
        {
          if (!_.isMatch(value, this.updatedProfilePageForm.firstName)) {
            InterCommRoutingService.haveUnsavedProfilePageChanges = true;
          }
          this.updatedProfilePageForm = { ...this.updatedProfilePageForm, 'firstName': value };
          break;
        }
      case 'lastName':
        {
          if (!_.isMatch(value, this.updatedProfilePageForm.lastName)) {
            InterCommRoutingService.haveUnsavedProfilePageChanges = true;
          }
          this.updatedProfilePageForm = { ...this.updatedProfilePageForm, 'lastName': value, };
          break;
        }
      case 'email':
        {
          if (!_.isMatch(value, this.updatedProfilePageForm.email)) {
            InterCommRoutingService.haveUnsavedProfilePageChanges = true;
          }
          this.updatedProfilePageForm = { ...this.updatedProfilePageForm, 'email': value, };
          break;
        }
      case 'mobileNo':
        {
          if (!_.isMatch(value, this.updatedProfilePageForm.mobileNo)) {
            InterCommRoutingService.haveUnsavedProfilePageChanges = true;
          }
          this.updatedProfilePageForm = { ...this.updatedProfilePageForm, 'mobileNo': value, };
          break;
        }
      default:
        break;
    }
  }

  generateRequestPayload = () => {
    console.log(this.props.auth);
    return {
      'requestBody': {
        'user_name': this.updatedProfilePageForm.email.toLowerCase().trim(),
        'first_name': this.updatedProfilePageForm.firstName.trim(),
        'last_name': this.updatedProfilePageForm.lastName.trim(),
        'mobile_no': this.updatedProfilePageForm.mobileNo.trim(),
      },
      authToken: this.props.auth.jwt_token,
    };
  }

  onSaveProfileData = () => {
    console.log(this.updatedProfilePageForm);
    console.log(this.profilePageForm);
    console.log(!_.isEqual(this.updatedProfilePageForm, this.profilePageForm));
    if (!_.isEqual(this.updatedProfilePageForm, this.profilePageForm)) {
      this.props.requestUserProfileUpdate(this.generateRequestPayload())
      this.setState({ saveButton: false });
      InterCommRoutingService.haveUnsavedProfilePageChanges = false;
    } else {
      showInfoFlashMessage('Please update atleast one field');
      this.setState({ saveButton: false });
    }
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
    let sourceImage = require('../../../assets/images/profile.png')
    return (
      <View style={styles.headerContainer}>
        <ImageBackground
          style={styles.headerBackgroundImage}
          blurRadius={10}
          source={sourceImage}>
          <View style={styles.headerColumn}>
            <Image style={styles.userImage} source={sourceImage} />
            <Text style={styles.userNameText}>{name}</Text>
          </View>
        </ImageBackground>
      </View>
    );
  };

  renderField = (nameType, data) => {
    return (
      <View style={styles.emailContainer}>
        <ProfilePageField
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
              {this.renderUpdateProfileButton()}
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
    requestUserProfileUpdate: (payload) => { dispatch(requestUserDataUpdateAction(payload)) },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
