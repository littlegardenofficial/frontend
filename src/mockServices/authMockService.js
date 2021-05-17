export const loginRequest = ({email, password}) => {
  return new Promise((resolve, reject) => {
    resolve(successLoginData);
  });
};

const successLoginData = {
  userId: 12,
  userName: 'Mritunjay Yadav',
  profileImage: '',
  email: 'mj07yadav@gmail.com',
  address: [
    {
      addressName: 'Mritunjay Yadav',
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
  ],
};
