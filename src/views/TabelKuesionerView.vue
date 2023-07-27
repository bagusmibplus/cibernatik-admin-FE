<template>
  <main id="main" class="main">
    <div class="pagetitle">
      <h1>Detail Kuesioner</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"></li>
        </ol>
      </nav>
    </div>
    <!-- End Page Title -->
    <section class="section">
      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body" v-for="(data, index) in dataDetailKuesioner">
              <h5 class="card-title" >Lembar Kuesioner {{ data.nama_responden }}</h5>

              <div class="row text-right">
                <div class="col"></div>
                <div class="col"></div>
                <div class="col"></div>
                <div class="col"></div>
                <div class="col"></div>
                <div class="col"></div>
                <div class="col"></div>

                <div class="col">
                  <a href="https://lumen-cibernatik.mibplus.id/prepost/export">
                  <button
                    type="button"
                    class="btn btn-secondary " data-toggle="tooltip" data-placement="top" title="DOWNLOAD EXCEL"
                    style="display: flex; margin-left: 1000px; height: 50px; align-items: center; "
                    onclick=""
                  >
                    <i class="ri ri-file-excel-2-fill me-1 "></i> Download
                  </button>
                </a>
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
                  v-for="(data, index) in dataDetailKuesioner"
                  class="table border border-dark table-bordered shadow p-3 mb-5 bg-body rounded"
                  style="font-size: 0.95em"
                >
                  <tbody>
                    <tr>
                      <th style="width: 50%">
                        Nama Responden
                      </th>
                      <th
                        
                        style="width: 50%; text-align: center"
                      >
                        {{ data.nama_responden }}
                      </th>
                    </tr>

                    
                    <tr>
                      <th>Username</th>
                      <th
                      
                      style="width: 50%; text-align: center"
                      >
                      {{ data.username_responden }}
                    </th>
                  </tr>
                  
                  <tr>
                    <th style="width: 50%">
                      Tangal Mengisi Kuesioner
                    </th>
                    <th
                      
                      style="width: 50%; text-align: center"
                    >
                      {{ data.created_at }}
                    </th>
                  </tr>
                    <tr
                      class="table-active"
                      style="border-left-style: none !important"
                    >
                      <th colspan="2" style="border: right 2px black">
                        A. MENGURAS TEMPAT PENAMPUNGAN AIR
                        <br />
                        (Bak mandi/WC, drum, maupun tempat tampung air yang ada
                        di dalam maupun di luar rumah)
                      </th>
                    </tr>

                    <tr>
                      <td  scope="col" style="border: right 2px black">
                        1. Apakah Anda atau keluarga Anda menguras tempat
                        penampungan air?
                      </td>
                      <td
                        style="
                          border-left: 1px black;
                          width: 100%;
                          height: 100%;
                          text-align: center;
                          align-items: center;
                        "
                      >
                        {{ data.p011 }}
                      </td>
                    </tr>
                    <tr>
                      <td scope="col">
                        2. “ Jika Ya”, berapa kali dalam seminggu?
                      </td>
                      <td style="width: 50%; text-align: center">
                        {{ data.p012 }}
                      </td>
                    </tr>

                    <tr class="table-active" style="border-left-style: none !important">
                      <th colspan="2" style="border: right 2px black">
                        B. MENUTUP TEMPAT PENAMPUNGAN AIR <br />
                        (Gentong air/tempayan maupun tempat tampung air yang ada
                        di sekitar rumah)
                      </th>
                    </tr>

                    <tr>
                      <td scope="col" style="border: right 2px black">
                        1. Apakah tempat penampungan air Anda biasa ditutup?
                      </td>
                      <td
                        style="
                          border-left: 1px black;
                          width: 100%;
                          height: 100%;
                          text-align: center;
                          align-items: center;
                        "
                      >
                        {{ data.p021 }}
                      </td>
                    </tr>
                    <tr>
                      <td scope="col">
                        2. Jika “Ya”, apakah tempat penampungan air Anda ditutup
                        dengan rapat?
                      </td>
                      <td style="width: 50%; text-align: center">
                        {{ data.p022 }}
                      </td>
                    </tr>

                    <tr class="table-active" style="border-left-style: none !important">
                      <th colspan="2" style="border: right 2px black">
                        C. MENYINGKIRKAN ATAU MENDAUR ULANG BARANG BEKAS <br />
                        (Botol plastik, kaleng, ban bekas, dan barang bekas lain
                        yang dapat menampung air)
                      </th>
                    </tr>

                    <tr>
                      <td scope="col" style="border: right 2px black">
                        1. Apakah Anda atau keluarga Anda menyingkirkan barang
                        bekas?
                      </td>
                      <td
                        style="
                          border-left: 1px black;
                          width: 100%;
                          height: 100%;
                          text-align: center;
                          align-items: center;
                        "
                      >
                        {{ data.p031 }}
                      </td>
                    </tr>
                    <tr>
                      <td scope="col">
                        2. Apakah Anda atau keluarga Anda mendaur ulang barang
                        bekas?
                      </td>
                      <td style="width: 50%; text-align: center">
                        {{ data.p032 }}
                      </td>
                    </tr>

                    <tr class="table-active" style="border-left-style: none !important">
                      <th colspan="2" style="border: right 2px black">
                        D. MEMELIHARA IKAN PEMAKAN JENTIK <br />
                        (Ikan kepala timah, ikan gupi, ikan cupang, ikan mujair,
                        ikan nila)
                      </th>
                    </tr>

                    <tr>
                      <td scope="col" style="border: right 2px black">
                        1. Apakah Anda atau keluarga Anda memelihara ikan?
                      </td>
                      <td
                        style="
                          border-left: 1px black;
                          width: 100%;
                          height: 100%;
                          text-align: center;
                          align-items: center;
                        "
                      >
                        {{ data.p041 }}
                      </td>
                    </tr>
                    <tr>
                      <td scope="col">
                        2. Jika “Ya”, apakah ikan tersebut termasuk ikan pemakan
                        jentik?
                      </td>
                      <td style="width: 50%; text-align: center">
                        {{ data.p042 }}
                      </td>
                    </tr>

                    <tr class="table-active" style="border-left-style: none !important">
                      <th colspan="2" style="border: right 2px black">
                        E. MEMASANG KAWAT KASA
                      </th>
                    </tr>

                    <tr>
                      <td scope="col" style="border: right 2px black">
                        1. Apakah Anda atau keluarga Anda memasang kawat kasa
                        pada lubang ventilasi rumah Anda?
                      </td>
                      <td
                        style="
                          border-left: 1px black;
                          width: 100%;
                          height: 100%;
                          text-align: center;
                          align-items: center;
                        "
                      >
                        {{ data.p05 }}
                      </td>
                    </tr>

                    <tr class="table-active" style="border-left-style: none !important">
                      <th colspan="2" style="border: right 2px black">
                        F. MENGGANTUNG PAKAIAN DI DALAM RUMAH
                      </th>
                    </tr>

                    <tr>
                      <td scope="col" style="border: right 2px black">
                        1. Apakah Anda atau keluarga Anda menggantung pakaian
                        yang telah dipakai di dalam rumah?
                      </td>
                      <td
                        style="
                          border-left: 1px black;
                          width: 100%;
                          height: 100%;
                          text-align: center;
                          align-items: center;
                        "
                      >
                        {{ data.p06 }}
                      </td>
                    </tr>

                    <tr class="table-active" style="border-left-style: none !important">
                      <th colspan="2" style="border: right 2px black">
                        G. KEBIASAAN TIDUR MENGGUNAKAN KELAMBU
                      </th>
                    </tr>

                    <tr>
                      <td scope="col" style="border: right 2px black">
                        1. Apakah Anda atau keluarga Anda biasa tidur pada pukul
                        08.00-10.00 atau 15.00-17.00?
                      </td>
                      <td
                        style="
                          border-left: 1px black;
                          width: 100%;
                          height: 100%;
                          text-align: center;
                          align-items: center;
                        "
                      >
                        {{ data.p071 }}
                      </td>
                    </tr>
                    <tr>
                      <td scope="col">
                        2. Jika “Ya”, apakah saat itu Anda atau keluarga Anda
                        tidur menggunakan kelambu?
                      </td>
                      <td style="width: 50%; text-align: center">
                        {{ data.p072 }}
                      </td>
                    </tr>

                    <tr class="table-active" style="border-left-style: none !important">
                      <th colspan="2" style="border: right 2px black">
                        H. MENGGUNAKAN OBAT ANTI NYAMUK <br />
                        (Repelent, obat nyamuk bakar, semprot atau elektrik)
                      </th>
                    </tr>

                    <tr>
                      <td scope="col" style="border: right 2px black">
                        1. Apakah Anda atau keluarga Anda menggunakan obat anti
                        nyamuk pada pukul 08.00-10.00 atau 15.00-17.00?
                      </td>
                      <td
                        style="
                          border-left: 1px black;
                          width: 100%;
                          height: 100%;
                          text-align: center;
                          align-items: center;
                        "
                      >
                        {{ data.p08 }}
                      </td>
                    </tr>

                    <tr class="table-active" style="border-left-style: none !important">
                      <th colspan="2" style="border: right 2px black">
                        I. MENABURKAN ABATE/ ANTI JENTIK PADA KONTAINER <br />
                        (Repelent, obat nyamuk bakar, semprot atau elektrik)
                      </th>
                    </tr>

                    <tr>
                      <td scope="col" style="border: right 2px black">
                        1. Apakah anda atau keluarga anda menaburkan abate atau
                        anti jentik di tempat penampungan air?
                      </td>
                      <td
                        style="
                          border-left: 1px black;
                          width: 100%;
                          height: 100%;
                          text-align: center;
                          align-items: center;
                        "
                      >
                        {{ data.p09 }}
                      </td>
                    </tr>

                    <tr class="table-active" style="border-left-style: none !important">
                      <th colspan="2" style="border: right 2px black">
                        J. KASUS DEMAM BERDARAH DENGUE (DBD)
                      </th>
                    </tr>

                    <tr>
                      <td scope="col" style="border: right 2px black">
                        1. Apakah anda atau keluarga anda pernah di diagnosis
                        atau dirawat sebagai penderita DBD?
                      </td>
                      <td
                        style="
                          border-left: 1px black;
                          width: 100%;
                          height: 100%;
                          text-align: center;
                          align-items: center;
                        "
                      >
                        {{ data.p10 }}
                      </td>
                    </tr>

                    <!-- <tr class="table-active">
                      <th scope="col">Hasil</th>
                      <td style="width: 50%; text-align: center">
                        {{ data.hasil_score }}
                      </td>
                    </tr>

                    <tr class="table-active">
                      <th scope="col">Hasil</th>
                      <td style="width: 50%; text-align: center">
                        {{ data.hasil_class }}
                      </td>
                    </tr> -->
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

const user = useUserStore();
const route = useRoute();
const namaUser = localStorage.getItem("nama_user")
const dataDetailKuesioner = reactive([]);

const hapus = async (id) => {
  console.log("aaaa");
  await user.deleteResponden(id);
};
const dataResponden = async () => {
  await user.getResponden();
};

function destroy(nama_responden, id) {
  Swal.fire({
    text: `Anda yakin untuk menghapus Responden "${nama_responden}"?`,
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Iya, Hapus saja",
  }).then((result) => {
    console.log(result);
    if (result.isConfirmed) {
      hapus(id);
      router.go();
    }
  });
}

const getDataKuesioner = async () => {
  try {
    dataDetailKuesioner.splice(0);
    let res = await axios.get(ip + "/list-detail-pelaporan/" + route.params.id, {
      headers: {
        Authorization: localStorage.getItem("user_token"),
      },
    });
    console.log(res);
    if (res.data.error_code === 0) {
      res.data.data.forEach((el) => {
        dataDetailKuesioner.push(el);
      });
      // console.log(dataDetailKuesioner, "INI DATANYA KUESI");
    } else {
      alert(res.data.error_code);
    }

    console.log(res);
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
  await getDataKuesioner();
  // await hapus();
  new DataTable("#example");
});
</script>
