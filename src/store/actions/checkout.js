import { CHECKOUT_BOOKING } from '../types';
import axios from 'axios';

export const checkoutBooking = (payload) => (dispatch) => {
  dispatch({
    type: CHECKOUT_BOOKING,
    payload: payload,
  });
};

export const submitBooking = (payload) => () => {
  return axios.post(
    `http://admin-staycation.herokuapp.com/api/v1/member/booking-page`,
    payload,
    { headers: { contentType: 'multipart/form-data' } }
  );
};
