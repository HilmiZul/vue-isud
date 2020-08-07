<template>
  <div id="add-student">
    <div class="container">
      <div class="columns">
        <div class="column is-half">
          <div class="notification is-success is-light" v-if="pesan">
            <button class="delete"></button>
            Data Berhasil disimpan!
          </div>
          <form @submit.prevent="simpan()">
            <input type="hidden" v-model="form.id">
            <div class="field">
              <div class="control">
                <label for="" class="label">NIS</label>
                <input v-model="form.nis" type="text" class="input is-primary" autofocus placeholder="misal: 11110044" required="required">
              </div>
            </div>
            <div class="field">
              <div class="control">
                <label for="" class="label">NAMA</label>
                <input v-model="form.nama" type="text" class="input is-primary" placeholder="misal: Yuli">
              </div>
            </div>
            <button class="button is-primary mr-3">Simpan</button>
            <router-link :to="{ name: 'student' }" class="button is-danger">Kembali</router-link>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios'

export default {
  name: 'Add-Student',
  data() {
    return {
      form: {
        id: '',
        nis: '',
        nama: '',
      },
      pesan: false
    }
  },

  methods: {
    simpan() {
      axios({
        method: 'post',
        url: 'http://localhost:3000/students',
        data: this.form
      })
      .then(response => {
        this.form.nis = '',
        this.form.nama = '',
        this.pesan = true
      })
    }
  }
}
</script>