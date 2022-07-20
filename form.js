function validasi(form) {
  if (form.nama_inp.value == "") {
    alert("Anda belum mengisi Nama anda");
    form.nama_inp.focus();
    return false;
  }
  if (form.alamat_inp.value == "") {
    alert("Anda belum mengisi Alamat anda");
    form.alamat_inp.focus();
    return false;
  }
  if (form.kontak_inp.value == "") {
    alert("Anda belum mengisi Nomor Kontak anda");
    form.kontak_inp.focus();
    return false;
  }
  if (form.date_inp.value == "") {
    alert("Anda belum mengisi Tanggal Lahir anda");
    form.date_inp.focus();
    return false;
  }
  if (form.email_inp.value == "") {
    alert("Anda belum mengisi Email anda");
    form.email_inp.focus();
    return false;
  } else {
    alert("Selamat Anda Telah Terdaftar");
  }
  return true;
}
