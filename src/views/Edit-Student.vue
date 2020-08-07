<template>
  <div id="edit-student">
    <div class="container">
      <div class="columns">
        <div class="column is-half">
          <div class="notification is-success is-light" v-if="pesan">
            <button class="delete"></button>
            Data Berhasil diperbaharui!
          </div>
          <form @submit.prevent="simpan(form)">
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
  name: 'Edit-Student',
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

  mounted() {
    this.tampilkan()
  },

  methods: {
    tampilkan() {
      axios({
        method: 'get',
        url: 'http://localhost:3000/students/' + this.$route.params.id
      })
      .then(response => {
        this.form = response.data
      })
    },

    simpan(form) {
      axios({
        method: 'put',
        url: 'http://localhost:3000/students/' + form.id,
        data: this.form
      })
      .then(response => {
        this.form = response.data
        this.pesan = true
      })
    }
  }
}
</script>
