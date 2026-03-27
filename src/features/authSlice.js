import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api/axios';

export const registerUser = createAsyncThunk(
  'auth/signup',
  async (userData, { rejectWithValue }) => {
    try {
      // Endpoint matches your authRoutes.js 
      const response = await api.post('/auth/signup', userData);
      return { ...response.data, role: userData.role };
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || 'Signup failed');
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await api.post('/auth/login', credentials);
      return response.data; // Returns { token, role } 
    } catch (err) {
      // Check for the 403 status defined in your authController.js 
      return rejectWithValue({ 
        message: err.response?.data?.message, 
        status: err.response?.status 
      });
    }
  }
);


// Add this new Thunk at the top of authSlice.js
export const fetchAllOrganizers = createAsyncThunk(
  'admin/fetchAllOrganizers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/admin/organizers');
      // Based on your backend: res.status(200).json({ organizers: [...] })
      return response.data.organizers; 
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || 'Failed to fetch');
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: localStorage.getItem('token'),
    role: localStorage.getItem('role'),
    isPending: false,
    loading: false,
    error: null,
    organizersList: [],
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.role = null;
      state.isPending = false;
      state.organizersList = [];
      localStorage.clear();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.role = action.payload.role;
        state.isPending = false;
        localStorage.setItem('token', action.payload.token);
        localStorage.setItem('role', action.payload.role);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
        if (action.payload.status === 403) state.isPending = true;
      })
      .addCase(fetchAllOrganizers.fulfilled, (state, action) => {
        state.organizersList = action.payload;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.role === 'organizer') state.isPending = true;
      });
      
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;



// import { createSlice } from '@reduxjs/toolkit';

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     user: null,
//     token: localStorage.getItem('token') || null,
//     loading: false,
//     error: null,
//   },
//   reducers: {
//     setCredentials: (state, action) => {
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//       localStorage.setItem('token', action.payload.token);
//     },
//     logout: (state) => {
//       state.user = null;
//       state.token = null;
//       localStorage.removeItem('token');
//     },
//   },
// });

// export const { setCredentials, logout } = authSlice.actions;
// export default authSlice.reducer;


// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import api from '../api/axios';

// // Action for Registration
// export const registerUser = createAsyncThunk(
//   'auth/register',
//   async (userData, { rejectWithValue }) => {
//     try {
//       const response = await api.post('/auth/register', userData);
//       return response.data;
//     } catch (err) {
//       return rejectWithValue(err.response.data.message || 'Registration failed');
//     }
//   }
// );

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     user: null,
//     token: localStorage.getItem('token'),
//     loading: false,
//     error: null,
//   },
//   reducers: {
//     logout: (state) => {
//       state.user = null;
//       state.token = null;
//       localStorage.removeItem('token');
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(registerUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(registerUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         localStorage.setItem('token', action.payload.token);
//       })
//       .addCase(registerUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export const { logout } = authSlice.actions;
// export default authSlice.reducer;