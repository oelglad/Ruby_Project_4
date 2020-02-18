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
    // localStorage.setItem('name', resp.data.user.name);
    // localStorage.setItem('email', resp.data.user.email);
    return resp.data.user;
  }


  //Register

  export const registerUser = async(registerData) => {
      // try{
        const resp = await api.post('/signup', registerData);
        api.defaults.headers.common.authorization = `Bearer ${resp.data.auth_token}`;
        localStorage.setItem('authToken', resp.data.auth_token);
        localStorage.setItem('name', resp.data.user.name);
        localStorage.setItem('email', resp.data.user.email);
        return resp.data.user;
      // }catch (e) {
      //   console.log(e.response);
      //   if (e.respose.status === 422) {
      //     return {errorMessage: "Email is already associated with a user, please login to continue"}
      //   }
      // }
  }

  //Verify user
  export const verifyUser = () => {
    const token = localStorage.getItem('authToken');
    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
    }
  }

    // Get All hotels
    export const indexHotels = async () => {
      const resp = await api.get('/hotels');  
      // console.log(resp)
      return resp.data;
    }
    
    //Hotels
    //POST hotel
    export const postHotel = async (postData) => {
      const resp = await api.post('/hotels', postData);
      return resp.data;
    }
    
    // UPDATE hotel
    export const putHotel= async (id, postData) => {
      const resp = await api.put(`/hotels/${id}`, postData);
      const hotel = {id: id, hotel_name: resp.data.data}
      return hotel;
    }

  //Reservations
  // Get All reservations
  export const indexReservations = async (id) => {
    const resp = await api.get(`/hotels/${id}/reservations`);
    console.log(resp.data);
    return resp.data;
  }
  
  //POST reservation
  export const postReservation = async (id, postData) => {
    console.log(id);
    console.log(postData);
    const resp = await api.post(`/hotels/${id}/reservations`, postData);
    console.log(resp.data);
    return resp.data;
  }
  
  // UPDATE reservation
  export const putReservation= async ( hotId ,resId,  postData) => {
   
    const resp = await api.put(`/hotels/${hotId }/reservations/${resId}/`, postData);
    // const reservation = {resId: id, reservation_desc: resp.data.data}
    console.log(resp.data);
    // return reservation;
    // return resp.data;
    return resp.data
  }

    //Deletereservation
    export const deleteReservation = async (res, hot) => {
      // console.log(id);
      // console.log(postData);
      const resp = await api.delete(`/hotels/${hot}/reservations/${res}`);
      console.log(resp.data);
      return resp.data;
    }