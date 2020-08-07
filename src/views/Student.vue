<template>
  <div class="student">
    <div class="container">
      <div class="columns">
        <div class="column is-12">
          <h1 class="title">
            Students
            <router-link :to="{ name: 'add-student' }" class="button is-primary">Tambah</router-link>
          </h1>
          <table class="table">
            <thead>
              <tr>
                <th>NO.</th>
                <th>NIS</th>
                <th>NAMA LENGKAP</th>
                <th>TINDAKAN</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(student, index) in students" :key="student.id">
                <td>{{ index + 1 }}.</td>
                <td>{{ student.nis }}</td>
                <td>{{ student.nama }}</td>
                <td>
                  <router-link :to="{ name: 'edit-student', params: { id: student.id }}" class="button is-primary mr-3">...</router-link>
                  <button class="button is-danger" @click="hapus(student)">X</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Student',
  data() {
    return {
      students: ''
    }
  },

  mounted() {
    this.tampilkan()
  },

  methods: {
    tampilkan() {
      axios({
        method: 'get',
        url: 'http://localhost:3000/students'
      })
      .then(response => {
        this.students = response.data
      })
    },

    hapus(student) {
      if (confirm("Hapus data ini?")) {
        axios({
          method: 'delete',
          url: 'http://localhost:3000/students/' + student.id
        })
        .then(response => {
          this.tampilkan()
        })
      }
    }
  }
}
</script>
