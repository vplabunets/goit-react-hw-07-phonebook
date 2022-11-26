import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosBaseUrl } from '../components/lib/axiosConfig';
axios.defaults.baseURL = 'https://637d165116c1b892ebc7525b.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${axiosBaseUrl}/contacts`);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContactData, thunkAPI) => {
    try {
      const response = await axios.post(`${axiosBaseUrl}/contacts`, {
        ...newContactData,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(
        `${axiosBaseUrl}/contacts/${contactId}`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
