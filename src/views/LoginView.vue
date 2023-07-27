<template>
    <main>
        <div class="container">
            <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                            <div class="d-flex justify-content-center py-4">
                                <a href="index.html" class="logo d-flex align-items-center w-auto">
                                    <img src="assets/img/logo.png" alt="">
                                    <span class="d-none d-lg-block">Cibernatik</span>
                                </a>
                            </div>
                            <!-- End Logo -->
                            <div class="card mb-3">
                                <div class="card-body">
                                    <div class="pt-4 pb-2">
                                        <h5 class="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                                        <p class="text-center small">Enter your username & password to login</p>
                                    </div>
                                    <form  @submit.prevent="login" class="row g-3 needs-validation" novalidate>
                                        <div class="col-12">
                                            <label for="yourUsername" class="form-label">Username</label>
                                            <div class="input-group has-validation">
                                                <span class="input-group-text" id="inputGroupPrepend">@</span>
                                                <input type="text" name="username" class="form-control" id="yourUsername"  v-model="form_login.username" required>
                                                <div class="invalid-feedback">Please enter your username.</div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <label for="yourPassword" class="form-label">Password</label>
                                            <input type="password" name="password" class="form-control" id="yourPassword"  v-model="form_login.password" required>
                                            <div class="invalid-feedback">Please enter your password!</div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe">
                                                <label class="form-check-label" for="rememberMe">Remember me</label>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <button class="btn btn-primary w-100">Login</button>
                                        </div>
                                        <div class="col-12">
                                            <p class="small mb-0"><a href="pages-register.html"></a>
                                            </p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="credits">
                                <!-- All the links in the footer should remain intact. -->
                                <!-- You can delete the links only if you purchased the pro version. -->
                                <!-- Licensing information: https://bootstrapmade.com/license/ -->
                                <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/ --> Designed by <a>MIB LABS</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </main>
    <!-- End #main -->
</template>

<script setup>
import { reactive, ref, onMounted, onBeforeMount} from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import { ip } from "../ip_config";
import { useUserStore } from "../stores/user.js";

const router = useRouter();
const user = useUserStore();
const respon = ref("");
const form_login = reactive({
  username: "",
  password: "",
});
const login = async () => {
  try {
      let res = await axios.post(ip + "/login", form_login);
      console.log(res.data.data);
      if (form_login.username === "" || form_login.password === "" ) {
        alert("Username dan Password harus di isi")
      }
      if(res.data.error_code) {
        alert(res.data.error_desc)
      } else {
      localStorage.setItem("user_token", res.data.token);
      localStorage.setItem("nama_user", res.data.data.nama_user);
      user.nama_user = res.data.data.nama_user
      user.user_token = res.data.token
    //   console.log("store", user.user_token);
      router.push("/");
      }
  } catch (err) {
    console.log(err);
  }
};

// onBeforeMount(async () => {
//   login()
// });

</script>