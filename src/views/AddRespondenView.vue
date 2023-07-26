<template>
  <main id="main" class="main">
    <div class="pagetitle">
      <h1>TAMBAH RESPONDEN</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li class="breadcrumb-item">
            <a href="/responden">Responden</a>
          </li>
          <li class="breadcrumb-item active">Tambah Responden</li>
        </ol>
      </nav>
    </div>
    <!-- End Page Title -->
    <section class="section">
      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">General Form Elements</h5>
              <!-- General Form Elements -->
              <form
                @submit.prevent="createData"
                class="needs-validation"
                method="post"
                novalidate
              >
                <div class="row mb-3">
                  <label for="inputText" class="col-sm-2 col-form-label"
                    >Nama</label
                  >
                  <div class="col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                      name="nama"
                      v-model="dataResponden.nama_responden"
                      required
                    />
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="inputText" class="col-sm-2 col-form-label"
                    >Alamat</label
                  >
                  <div class="col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                      name="nama"
                      v-model="dataResponden.alamat"
                      required
                    />
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="inputText" class="col-sm-2 col-form-label"
                    >RT</label
                  >
                  <div class="col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                      name="nama"
                      v-model="dataResponden.rt"
                      required
                    />
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="inputText" class="col-sm-2 col-form-label"
                    >RW</label
                  >
                  <div class="col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                      name="nama"
                      v-model="dataResponden.rw"
                      required
                    />
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="inputText" class="col-sm-2 col-form-label"
                    >Kelurahan</label
                  >
                  <div class="col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                      name="nama"
                      v-model="dataResponden.kelurahan"
                      required
                    />
                  </div>
                </div>

                <div class="row mb-3">
                  <label class="col-sm-2 col-form-label">Pendidikan</label>
                  <div class="col-sm-10">
                    <select
                      class="form-select"
                      v-model="dataResponden.pendidikan"
                      aria-label="Default select example"
                    >
                      <option selected>Daftar Pendidikan</option>
                      <option value="1">Tidak sekolah</option>
                      <option value="2">SD / Setara</option>
                      <option value="3">SMP / Setara</option>
                      <option value="4">SMA / setara</option>
                      <option value="5">
                        Perguruan Tinggi (D3,D4,S1,S2,S3)
                      </option>
                    </select>
                  </div>
                </div>

                <div class="row mb-3">
                  <label class="col-sm-2 col-form-label">Pekerjaan</label>
                  <div class="col-sm-10">
                    <select
                      class="form-select"
                      v-model="dataResponden.pekerjaan"
                      aria-label="Default select example"
                    >
                      <option selected>Daftar Pekerjaan</option>
                      <option value="1">Tidak bekerja</option>
                      <option value="2">Nelayan</option>
                      <option value="3">Petani</option>
                      <option value="4">Peternak</option>
                      <option value="5">PNS/TNI/Polri</option>
                      <option value="6">Karyawan Swasta</option>
                      <option value="7">Pedagang Kecil</option>
                      <option value="8">Pengusaha/Pedagang Besar</option>
                      <option value="9">Wiraswasta</option>
                      <option value="10">Wirausaha</option>
                      <option value="11">Buruh</option>
                      <option value="12">Pensiunan</option>
                      <option value="13">Peneliti</option>
                      <option value="14">Tim Ahli / Konsultan</option>
                      <option value="15">Lainnya</option>
                    </select>
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="inputText" class="col-sm-2 col-form-label"
                    >Anggota Keluarga</label
                  >
                  <div class="col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                      name="nama"
                      v-model="dataResponden.anggota_keluarga"
                      required
                    />
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="inputText" class="col-sm-2 col-form-label"
                    >Luas Rumah</label
                  >
                  <div class="col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                      name="nama"
                      v-model="dataResponden.luas_rumah"
                      required
                    />
                  </div>
                </div>

                <fieldset class="row mb-3">
                  <legend class="col-form-label col-sm-2 pt-0">
                    Jenis Kelamin
                  </legend>
                  <div class="col-sm-10">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        id="GenderL"
                        value="L"
                        v-model="dataResponden.gender"
                        name="gender"
                        required
                      />
                      <label class="form-check-label" for="GenderL">
                        Laki-laki
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        id="GenderP"
                        value="P"
                        v-model="dataResponden.gender"
                        name="gender"
                        required
                      />
                      <label class="form-check-label" for="GenderP">
                        Perempuan
                      </label>
                    </div>
                  </div>
                </fieldset>
                <div class="row mb-3">
                  <label for="inputText" class="col-sm-2 col-form-label"
                    >Username</label
                  >
                  <div class="col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                      name="username"
                      v-model="dataResponden.username_responden"
                      required
                    />
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="inputPassword" class="col-sm-2 col-form-label"
                    >Password</label
                  >
                  <div class="col-sm-10">
                    <div class="input-group has-validation">
                      <span
                        class="input-group-text"
                        id="inputGroupPrepend"
                        @click="togglePassword"
                        ><i :class="icon_password" aria-hidden="true"></i
                      ></span>
                      <input
                        :type="type_password"
                        class="form-control"
                        name="password"
                        v-model="dataResponden.password_responden"
                      />
                      <div class="invalid-feedback">
                        Silahkan Masukan Password Anda
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="inputPassword" class="col-sm-2 col-form-label"
                    >Password Confirm</label
                  >
                  <div class="col-sm-10">
                    <div class="input-group has-validation">
                      <span
                        class="input-group-text"
                        id="inputGroupPrepend"
                        @click="togglePasswordConfirm"
                        ><i
                          :class="icon_password_confirm"
                          aria-hidden="true"
                        ></i
                      ></span>
                      <input
                        :type="type_password_confirm"
                        class="form-control"
                        name="password_confirm"
                        value=""
                      />
                      <div class="invalid-feedback">
                        Silahkan Masukan Password Confirm
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row mb-3">
                  <label class="col-sm-2 col-form-label"></label>
                  <div class="col-sm-10">
                    <button type="submit" class="btn btn-primary">KIRIM</button>
                  </div>
                </div>
              </form>
              <!-- End General Form Elements -->
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, reactive, computed, watch, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useUserStore } from "../stores/user.js";
import axios from "axios";
import { ip } from "../ip_config";
import router from "@/router";

const user = useUserStore();
const route = useRoute();
// const router = useRouter();

const dataResponden = reactive({
  nama_responden: "",
  gender: "",
  alamat: "",
  rt: "",
  rw: "",
  kelurahan: "",
  pendidikan: "",
  pekerjaan: "",
  anggota_keluarga: "",
  luas_rumah: "",
  username_responden: "",
  password_responden: "",
});

const icon_password = ref("fa fa-eye-slash");
const type_password = ref("password");
const icon_password_confirm = ref("fa fa-eye-slash");
const type_password_confirm = ref("password");

//   const editData = async () => {
//     let res = await axios.get(ip + "/detail-responden/" + route.params.id, {
//       headers :{
//         Authorization: localStorage.getItem("user_token")
//       }
//     })
//     dataResponden.nama = res.data.data.nama_responden
//     dataResponden.gender = res.data.data.gender
//     dataResponden.username = res.data.data.username_responden
//     dataResponden.alamat = res.data.data.alamat
//     dataResponden.rt = res.data.data.rt
//     dataResponden.rw = res.data.data.rw
//     dataResponden.pendidikan = res.data.data.pendidikan
//     dataResponden.pekerjaan = res.data.data.pekerjaan
//     dataResponden.anggota_keluarga = res.data.data.anggota_keluarga
//     dataResponden.luas_rumah = res.data.data.luas_rumah
//     dataResponden.kelurahan = res.data.data.kelurahan
//     console.log(res);
//   }

//   const updateData = async () => {
//    try {

//      let res = await axios.post(ip + "/update-responden/" + route.params.id, {
//      nama_responden : dataResponden.nama,
//      alamat : dataResponden.alamat,
//      gender : dataResponden.gender,
//      rt : dataResponden.rt,
//      rw : dataResponden.rw,
//      kelurahan: dataResponden.kelurahan,
//      pendidikan : dataResponden.pendidikan,
//      pekerjaan : dataResponden.pekerjaan,
//      anggota_keluarga : dataResponden.anggota_keluarga,
//      luas_rumah : dataResponden.luas_rumah,
//      username_responden: dataResponden.username,
//      password_responden: dataResponden.password,
//    }, {
//        headers :{
//          Authorization: localStorage.getItem("user_token")
//        }
//      })
//      console.log(res);
//      router.push('/responden')
//    } catch (error) {
//         if (error.response) {
//           // The request was made and the server responded with a status code
//           // that falls out of the range of 2xx
//           console.log('error.response.data',error.response.data);
//           console.log('error.response.status',error.response.status);
//           console.log('error.response.headers',error.response.headers);
//         } else if (error.request) {
//           // The request was made but no response was received
//           // error.request is an instance of XMLHttpRequest in the browser and an instance of
//           // http.ClientRequest in node.js
//           console.log('error.request',error.request);
//         } else {
//           // Something happened in setting up the request that triggered an Error
//           console.log('Error', error.message);
//         }
//         console.log('error.config',error.config);
//       }
//   }

const togglePassword = () => {
  if (type_password.value == "password") {
    type_password.value = "text";
    icon_password.value = "fa fa-eye";
  } else {
    type_password.value = "password";
    icon_password.value = "fa fa-eye-slash";
  }
};
const togglePasswordConfirm = () => {
  if (type_password_confirm.value == "password") {
    type_password_confirm.value = "text";
    icon_password_confirm.value = "fa fa-eye";
  } else {
    type_password_confirm.value = "password";
    icon_password_confirm.value = "fa fa-eye-slash";
  }
};
const createData = async () => {
  try {
    let res = await axios.post(ip + "/create-responden", dataResponden, {
      headers: {
        Authorization: localStorage.getItem("user_token")
      },
    });
    console.log(dataResponden, "INI DATA RESP");
    console.log(res);
    user.getResponden();
    router.push("/responden");
  } catch (error) {
    console.log(error, "ERRORNYA");
  }
};

onMounted(async () => {
//   await createData();
});
</script>
