import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:3000"
})

//Login
export const loginUser = async (loginData) => {
    const resp = await api.post('/auth/login', loginData);
    console.log(resp);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.auth_token}`;
    localStorage.setItem('authToken', resp.data.auth_token);
    localStorage.setItem('name', resp.data.user.name);
    localStorage.setItem('email', resp.data.user.email);
    return resp.data.user;
  }


  //Register

  export const registerUser = async(registerData) => {
      try{
        const resp = await api.post('/signup', registerData);
        api.defaults.headers.common.authorization = `Bearer ${resp.data.auth_token}`;
        localStorage.setItem('authToken', resp.data.auth_token);
        localStorage.setItem('name', resp.data.user.name);
        localStorage.setItem('email', resp.data.user.email);
        return resp.data.user;
      }catch (e) {
        console.log(e.response);
        if (e.respose.status === 422) {
          return {errorMessage: "Email is already associated with a user, please login to continue"}
        }
      }
  }

  //Verify user
  export const verifyUser = () => {
    const token = localStorage.getItem('authToken');
    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
    }
  }

  //Reservations
  // Get All reservations
  export const indexReservations = async () => {
    const resp = await api.get('/reservations');
    return resp.data;
  }
  
  //POST reservation
  export const postReservation = async (postData) => {
    const resp = await api.post('/reservations', postData);
    return resp.data;
  }
  
  // UPDATE reservation
  export const putReservation= async (id, postData) => {
    const resp = await api.put(`/reservations/${id}`, postData);
    const reservation = {id: id, reservation_desc: resp.data.data}
    return reservation;
  }