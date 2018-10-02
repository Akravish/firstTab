'use strict';
import axios from 'axios';

export const authAxios = axios.create({
  baseURL: process.env.AUTH_API_URL,
  headers: {
    // Authorization: 'Bearer {token}',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Expose-Headers': 'Authorization',
    'clientId': process.env.APP_CLIENT_ID
  },
  crossDomain: true
});

export default authAxios