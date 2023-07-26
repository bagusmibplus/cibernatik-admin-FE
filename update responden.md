## End-point: Update Responden
### Method: POST
>```
>https://lumen-cibernatik.mibplus.id/update-responden/{id}
>```
### Params

|key|Value|
|---|---|
|id|responden_id|

### Headers

|Content-Type|Value|
|---|---|
|Authorization|eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDBhZG1pbiJ9.gHe_N1W-Jbxephht3L_JeQAesg9XjLMH120mNPetU4s|

### Body (**raw**) JSON

```json
{
    "nama_responden" : "siapa saja",
    "username_responden" : "z",
    "password_responden" : "z",

    "umur" : 99,
    "gender" : "P",
    "kelurahan" : "jonggol",
    "alamat" : "di bumi Allah ta'ala",
    "rt" : 10,
    "rw" : 10,
    "anggota_keluarga" : 3,
    "luas_rumah" : 999,
    "pendidikan" : 1,
    "pekerjaan" : 1
}
```

### Referencess

|id|pekerjaan|
|--|--|
|1|Tidak bekerja|
|2|Nelayan|
|3|Petani|
|4|Peternak|
|5|PNS/TNI/Polri|
|6|Karyawan Swasta|
|7|Pedagang Kecil|
|8|Pengusaha/Pedagang Besar|
|9|Wiraswasta|
|10|Wirausaha|
|11|Buruh|
|12|Pensiunan|
|13|Peneliti|
|14|Tim Ahli / Konsultan|
|15|Lainnya|

|id|pendidikan|
|--|--|
|1|Tidak sekolah|
|2|SD / Setara|
|3|SMP / Setara|
|4|SMA / setara|
|5|Perguruan Tinggi (D3,D4,S1,S2,S3)|