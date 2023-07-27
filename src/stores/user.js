import axios from "axios";
import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { ip } from "../ip_config";
import { useRouter } from "vue-router";

export const useUserStore = defineStore("user", () => {
  // other options...
  const router = useRouter()
  const user = useUserStore();
  const user_token = ref();
  const nama_user = ref();
  const namaKelompok = ref()
  const dataResponden = reactive([]);
  // const form_login = reactive({
  //   username: "",
  //   password: "",
  // });
  const login = async (form_login) => {
    console.log(form_login, "store");
    try {
      if (form_login.username === "" || form_login.password === "") {
        alert("Username dan Password harus di isi");
      }
      let res = await axios.post(ip + "/login", form_login);
      console.log(res.data.data);
      if (res.data.error_code) {
        alert(res.data.error_desc);
      } else {
        // localStorage.setItem("user_token", res.data.token);
        // localStorage.setItem("nama_user", res.data.data.nama_user);
        nama_user.value = res.data.data.nama_user;
        user_token.value = res.data.token;
        console.log(user_token.value);
        // nama_user.value = res.data.data.kelompok
        console.log("token", user.user_token);
        router.push("/");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const getResponden = async () => {
    // console.log("halo", localStorage.getItem("user_token"));
    try {
      dataResponden.splice(0)
      let res = await axios.get(ip + "/list-responden", {
        headers: {
          Authorization: localStorage.getItem("user_token")
        }
      })
      // console.log(res);
      if (res.data.error_code === 0) {
        res.data.data.forEach(el => {
        dataResponden.push(el)      
        console.log(dataResponden, "ini data responden");
      });
      } else {
        alert (res.data.error_code)
      };

      console.log(res);
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log('error.response.data',error.response.data);
        console.log('error.response.status',error.response.status);
        console.log('error.response.headers',error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // error.request is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log('error.request',error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log('error.config',error.config);
    }
  };

  const deleteResponden = async (id) => {
    try {
     let res= await axios.get(ip+ "/delete-responden/" + id, {
        headers: {
          Authorization: localStorage.getItem("user_token")
        }
      }
      )
      console.log(res);
    } catch (error) {
      console.log("error");
    }
  }
  return {
    // form_login,
    user_token,
    nama_user,
    dataResponden,
    login,
    getResponden,
    deleteResponden
  };
});
