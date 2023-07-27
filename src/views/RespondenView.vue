<template>
  <main id="main" class="main">
    <div class="pagetitle">
      <h1>Manajemen Responden</h1>
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
            <div class="card-body">
              <h5 class="card-title">Data Responden</h5>

              <div class="row text-right">
                <div class="col"></div>
                <div class="col"></div>
                <div class="col"></div>
                <div class="col"></div>
                <div class="col"></div>
                <div class="col">
                  <a href="https://lumen-cibernatik.mibplus.id/respondens/export">
                  <button type="button" style="display: flex; position: relative; align-items: right; margin-left: 200px;" class="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="DOWNLOAD EXCEL" onclick="">
                      <i class="ri ri-file-excel-2-fill me-1" ></i> Download
                    </button>
                    </a>
                  
                </div>
                <div class="col">
                  <!-- <a href="/responden/add" -->
                    <button type="button" style="display: flex; position: relative; align-items: right; margin-left: 10px; " class="btn btn-success" data-toggle="tooltip" data-placement="top" title="TAMBAH DATA" @click="tambah">
                      <i class="bi bi-person-plus me-1"></i> Tambah
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
                    <tr>
                      <th scope="col">No</th>
                      <th scope="col">Nama</th>
                      <th scope="col">Username</th>
                      <th scope="col">Kelurahan</th>
                      <th scope="col">Opsi</th>
                      <!--<th scope="col">Jenis Kelamin</th>
										<th scope="col">Pendidikan</th>
										<th scope="col">Opsi</th> -->
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(data, index) in user.dataResponden">
                      <td>{{ index + 1 }}</td>
                      <td>{{ data.nama_responden }}</td>
                      <td>{{ data.username_responden }}</td>
                      <td>{{ data.kelurahan }}</td>
                      <!-- <td>{{ data.humanDate }}</td>
										<td>{{ data.gender }}</td>
										<td>{{ data.nama_pendidikan }} {{ data.jurusan }}</td> -->
                      <td>
                        <button
                          type="button"
                          class="btn btn-info"
                          @click="
                            detail(
                              data.nama_responden,
                              data.gender,
                              data.alamat,
                              data.rt,
                              data.rw,
                              data.kelurahan,
                              data.pendidikan,
                              data.pekerjaan,
                              data.anggota_keluarga,
                              data.luas_rumah
                            )
                          "
                        >
                          <i class="bi bi-info-circle-fill"></i>
                        </button>
                        &nbsp;
                        <button
                          type="button"
                          class="btn btn-warning"
                          @click="editDataResponden(data.id)"
                        >
                          <i
                            class="fa fa-pencil-square-o"
                            aria-hidden="true"
                          ></i>
                        </button>
                        &nbsp;
                        <button
                          type="button"
                          class="btn btn-danger"
                          @click="destroy(data.nama_responden, data.id)"
                        >
                          <i class="fa fa-trash" aria-hidden="true"></i>
                        </button>
                        &nbsp;
                        <!-- <button type="button" class="btn btn-primary ">
												<i class="fa fa-bar-chart" aria-hidden="true" @click="grafik"></i></button> -->
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

const user = useUserStore();
const router = useRouter();

const editDataResponden = (id) => {
  router.push("/editresponden/" + id);
};
const tambah = () => {
	router.push("/addresponden")
}


const hapus = async (id) => {
  console.log("aaaa");
  await user.deleteResponden(id);
};
const dataResponden = async () => {
  await user.getResponden();
};
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


onMounted(async () => {
  // aqwait getToken()
  await dataResponden();
  // await hapus();
  new DataTable("#example");
});
</script>
