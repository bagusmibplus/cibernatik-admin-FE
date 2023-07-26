<template>
    <main id="main" class="main">
      <div class="pagetitle">
        <h1>Manajemen Data Kuesioner dan Data Pelaporan </h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item">Home / Kuesioner dan Data Pelaporan</li>
          </ol>
        </nav>
      </div>
      <!-- End Page Title -->
      <section class="section" >
        <div class="row">
          <div class="col-lg-12">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title"></h5>
  
                <div class="row text-right ">
                  <div class="col"></div>
                  <div class="col"></div>
                  <div class="col"></div>
                  <div class="col"></div>
                  <div class="col">
                    <button style="margin-left: 150px;" type="button" class="btn btn-secondary " data-toggle="tooltip" data-placement="top" title="DOWNLOAD EXCEL" onclick="">
                        <i class="ri ri-file-excel-2-fill me-1 "></i> Download
                      </button>
                    
                  </div>
                </div>
                <br />
                <!-- Table with stripped rows -->
                <div class="table-responsive">
                  <table
                    id="example"
                    class="table table-striped shadow p-3 mb-5 bg-body rounded"
                    style="font-size: 0.95em"
                  >
                    <thead>
                      <tr >
                        <th scope="col">No</th>
                        <th scope="col">Nama</th>
                        <th scope="col">Username</th>
                        <th scope="col">Kelurahan</th>
                        <th scope="col">Total Kuesioner</th>
                        <th scope="col">Tanggal Terakhir</th>
                        <th scope="col">Opsi</th>
                        <!--<th scope="col">Jenis Kelamin</th>
                                          <th scope="col">Pendidikan</th>
                                          <th scope="col">Opsi</th> -->
                    </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(data, index) in dataKuesioner">
                        <td>{{ index + 1 }}</td>
                        <td>{{ data.nama_responden }} </td>
                        <td>{{ data.username_responden }}</td>
                        <td>{{ data.kelurahan }}</td>
                        <td>{{ data.total_kuesioner }}</td>
                        <td>{{ data.tanggal_terakhir }}</td>
                        <!-- <td>{{ data.humanDate }}</td>
                                          <td>{{ data.gender }}</td>
                                          <td>{{ data.nama_pendidikan }} {{ data.jurusan }}</td> -->
                        <td>
                          <button
                            type="button"
                            class="btn btn-info" data-toggle="tooltip" data-placement="top" title="DETAIL KUESIONER"
                            @click="tabel_kuesioner(data.id)">
                            <i class="bi bi-clipboard-data"></i>
                          </button>
                         
                          &nbsp;
                         
                          <button  type="button" class="btn btn-success" data-toggle="tooltip" data-placement="top" title="DETAIL PELAPORAN"
                          @click="tabel_pelaporan(data.id)">
                          <i class="bi bi-clipboard-data-fill"></i>
                          </button>
                    
                        </td>
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
  import { useRouter } from "vue-router";
  import { useUserStore } from "../stores/user.js";
  import axios from "axios";
  import { ip } from "../ip_config";
  
  const user = useUserStore();
  const router = useRouter();
  const dataKuesioner = reactive([])
  const tabel_kuesioner = (id) => {
    router.push("/tabelkuesioner/" + id)
  }
  const tabel_pelaporan = (id) => {
    router.push("/tabelpelaporan/" + id)
  }
  function detail(
    nama_responden,
    gender,
    alamat,
    rt,
    rw,
    kelurahan,
    pendidikan,
    pekerjaan,
    anggota_keluarga,
    luas_rumah
  ) {
    Swal.fire({
      title: "Detail Demografi " + nama_responden,
      html: `
                              <table class="table table-striped table-bordered table-sm">
                                  <tr>
                                      <th>Nama</th>
                                      <td>${nama_responden}</td>
                                  </tr>
                                  <tr>
                                      <th>Jenis Kelamin</th>
                                      <td>${gender}</td>
                                  </tr>
                                  <tr>
                                      <th>alamat</th>
                                      <td>${alamat} RT ${rt} RW ${rw} Kelurahan ${kelurahan}</td>
                                  </tr>
                                  <tr>
                                      <th>Pendidikan</th>
                                      <td>${pendidikan}</td>
                                  </tr>
                                  <tr>
                                      <th>Pekerjaan</th>
                                      <td>${pekerjaan}</td>
                                  </tr>
                                  <tr>
                                      <th>Anggota Keluarga</th>
                                      <td>${anggota_keluarga}</td>
                                  </tr>
                                  <tr>
                                      <th>Luas Rumah</th>
                                      <td>${luas_rumah}</td>
                                  </tr>
                                  <tr>
                              </table>
                          `,
    });
  }
  
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
  
  const getKuesioner = async () => {
    try {
        dataKuesioner.splice(0)
        let res = await axios.get(ip + "/list-prepost", {
            headers : {
                Authorization : localStorage.getItem("user_token")
            }
        }) 
        console.log(res, "data RES");
        if (res.data.error_code === 0) {
        res.data.data.forEach(el => {
        dataKuesioner.push(el)      
        console.log(dataKuesioner, "ini data responden");
      });
      }
        
    } catch (error) {
        console.log(error);
    }
  }
  onMounted(async () => {
    await getKuesioner();
    new DataTable("#example");
  });
  </script>
  