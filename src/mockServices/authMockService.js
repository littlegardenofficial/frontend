export const loginMockRequest = ({email, password}) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(successLoginData);
    }, 1000);
  });
};

const successLoginData = {
  userId: 12,
  userName: 'New Conception',
  firstName: 'NewConception',
  lastName: 'Yadav',
  profileImage: '',
  email: 'mj07yadav@gmail.com',
  address: [
    {
      addressName: 'NewConception1',
      addressId: 1,
      primary: true,
      addressLine1: 'A - 4 Himgiri colony ',
      addressLine2: 'kanth road ',
      landmark: 'near shiv mandir',
      pinCode: 244001,
      city: 'Moradabad',
      state: 'Uttar Pradesh',
      country: 'India',
    },
    {
      addressName: 'NewConception2',
      addressId: 2,
      primary: false,
      addressLine1: 'A - 4 Himgiri colony ',
      addressLine2: 'kanth road ',
      landmark: 'near shiv mandir',
      pinCode: 244001,
      city: 'Moradabad',
      state: 'Uttar Pradesh',
      country: 'India',
    },
  ],
};
