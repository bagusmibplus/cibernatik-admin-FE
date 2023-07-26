<template>
  <main id="main" class="main">
    <div class="pagetitle">
      <h1>Detail Pelaporan</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item">Home / Detail Pelaporan</li>
        </ol>
      </nav>
    </div>
    <!-- End Page Title -->
    <section class="section">
      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Halaman Pelaporan</h5>

              <div class="row text-right">
                <div class="col"></div>
                <div class="col"></div>
                <div class="col"></div>
                <div class="col"></div>
                <div class="col">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="DOWNLOAD EXCEL"
                    style="display: flex; margin-left: 1200px"
                    onclick=""
                  >
                    <i class="ri ri-file-excel-2-fill me-1"></i> Download
                  </button>
                </div>
                <div class="col">
                  <!-- <a href="/responden/add" -->
                  <!-- <button type="button" class="btn btn-success" @click="tambah">
                        <i class="bi bi-person-plus me-1"></i> Tambah
                      </button>
                     -->
                </div>
              </div>
              <br />
              <!-- Table with stripped rows -->
              <div class="table-responsive shadow p-3 mb-5 bg-body rounded">
                <table
                v-for="(data, index) in dataDetailPelaporan"
                
                  class="table table table-striped border border-dark table-bordered shadow p-3 mb-5 bg-body rounded"
                  style="font-size: 0.95em"
                >
                  <tbody>
                    <tr>
                      <th style="width: 50%">Nama Responden</th>
                      <th
                        style="width: 50%; text-align: center"
                        
                      >
                        {{ namaPelapor}}
                      </th>
                    </tr>
                    <tr>
                      <th>Username</th>
               
                      <th  
                        style="width: 50%; text-align: center"
                      >
                        {{ usernamePelapor }}
                      </th>
                    </tr>
                    <tr>
                      <th>Tanggal Pelaporan</th>
                      <th style="width: 50%; text-align: center">
                        {{ data.created_at }}
                      </th>
                    </tr>

                    <tr>
                      <th>Jenis Kontainer Yang diPeriksa</th>
                      <th style="width: 50%; text-align: center">
                        {{ data.jenis }}
                      </th>
                    </tr>

                    <tr>
                      <th>Keberadaan Jentik Nyamuk</th>
                      <th style="width: 50%; text-align: center">
                        {{ data.Keberadaan }}
                      </th>
                    </tr>

                    <tr>
                      <th>Letak Kontainer</th>
                      <th style="width: 50%; text-align: center">
                        {{ data.di_luar }}
                      </th>
                    </tr>

                    <tr>
                      <th>Kondisi Kontainer</th>
                      <th style="width: 50%; text-align: center">
                        {{ data.terbuka }}
                      </th>
                    </tr>

                    <tr>
                      <th>Bukti Foto</th>
                      <th style="width: 50%; text-align: center">
                        <img
                          style="width: 50%"
                          :src="
                            'https://lumen-cibernatik.mibplus.id' + data.foto
                          "
                          alt=""
                        />
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- End Table with stripped rows -->
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

// const namaUser = localStorage.getItem("nama_user");
// const URL = ref("https://lumen-cibernatik.mibplus.id")
const user = useUserStore();
const route = useRoute();
var dataDetailPelaporan = ref();
var namaPelapor = ref();
var usernamePelapor = ref()
const getDataPelaporan = async () => {
  try {
    // dataDetailPelaporan.splice(0);
    let res = await axios.get(
      ip + "/list-detail-pelaporan/" + route.params.id,
      {
        headers: {
          Authorization: localStorage.getItem("user_token"),
        },
      }
    );
    // console.log(res.data.data[0], "iniii pelaporan");
    if (res.data.error_code === 0) {
      let data = res.data.data
      let pelaporan = data.map(obj => obj.pelaporan)
      let reduced = pelaporan.reduce((total,el) => total.concat(el))
      console.log(reduced)
      dataDetailPelaporan.value = reduced
      namaPelapor.value = data[0].nama_responden
      usernamePelapor.value = data[0].username_responden
      console.log(namaPelapor, "ini nama pelapor");
      console.log(dataDetailPelaporan, "ini pelaporan")
      // for (let i = 0; i < res.data.data.length; i++) {
      //   const lapor = res.data.data[i];
      //   namaPelapor.push(lapor);
      //   if (lapor.pelaporan && lapor.pelaporan.length > 0) {
      //     for (let j = 0; j < lapor.pelaporan.length; j++) {
      //       const laporan = lapor.pelaporan[j];
      //       dataDetailPelaporan.push(laporan);
      //       console.log(namaPelapor, "ini dataaaaaaa nama");
      //       console.log(dataDetailPelaporan, "ini data lapooorr");
            // console.log("ID Laporan:", laporan.id);
            // console.log("Responden ID:", laporan.responden_id);
            // console.log("Jenis:", laporan.jenis);
            // console.log("Keberadaan:", laporan.keberadaan);
            // console.log("Raw Created At:", laporan.raw_created_at);
            // console.log("---------------------");
        //   }
      //   }
      // }

      // res.data.data.pelaporan.forEach((ele) => {
      //   dataDetailPelaporan.push(ele);
      // });
      // res.data.data.forEach((el) => {
      //   namaPelapor.push(el);
      // })
      // console.log(dataDetailPelaporan, "INIIIIIIII");
      // console.log(namaPelapor, "iniiii pelapor");
    } else {
      alert(res.data.error_code);
    }

    // console.log(res);
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log("error.response.data", error.response.data);
      console.log("error.response.status", error.response.status);
      console.log("error.response.headers", error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // error.request is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log("error.request", error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    console.log("error.config", error.config);
  }
};

onMounted(async () => {
  getDataPelaporan();
  // await hapus();
  // new DataTable("#example");
});
</script>
<!-- 
<script>
const data = [
  {
    nama_responden: "IRFAN",
    username_responden: "a",
    created_at: "Kamis, 20 Juli 2023 18:36",
    raw_created_at: "2023-07-20 18:36:22+07",
    pelaporan: [],
  },
  {
    nama_responden: "IRFAN",
    username_responden: "a",
    created_at: "Kamis, 20 Juli 2023 19:21",
    raw_created_at: "2023-07-20 19:21:14+07",
    pelaporan: [],
  },
  {
    nama_responden: "IRFAN",
    username_responden: "a",
    created_at: "Kamis, 20 Juli 2023 23:35",
    raw_created_at: "2023-07-20 23:35:58+07",
    pelaporan: [
      {
        id: "f6d0a872-0d79-47c6-b27a-9640c4847c34",
        responden_id: "00000000-0000-0000-0000-000responden",
        jenis: "TALANG AIR",
        keberadaan: false,
      },
      {
        id: "f31be7b1-93c7-4509-acdc-87f43f7e2d1b",
        responden_id: "a0e55eab-0c86-4d6c-ae61-717b1c66c6e9",
        jenis: "DRUM",
        raw_created_at: "2023-07-24 22:40:09+07",
      },
    ],
  },
];
</script> -->
