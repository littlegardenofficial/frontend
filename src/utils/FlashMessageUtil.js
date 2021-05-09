import {showMessage, hideMessage} from 'react-native-flash-message';

export const showDangerFlashMessage = message => {
  showMessage({
    message: message,
    type: 'danger',
  });
};

export const showInfoFlashMessage = message => {
  showMessage({
    message: message,
    type: 'info',
  });
};

export const showSuccessFlashMessage = message => {
  showMessage({
    message: message,
    type: 'success',
  });
};

export const showWarnFlashMessage = message => {
  showMessage({
    message: message,
    type: 'warn',
  });
};
