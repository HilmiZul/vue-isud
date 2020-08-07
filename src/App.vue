<template>
  <div id="app">
    <div class="container">
      <div class="columns">
        <div class="column is-full">
          <div id="nav">
            <nav class="navbar" role="navigation" aria-label="main navigation">
              <div class="navbar-brand">
                <router-link to="/" class="navbar-item">Home</router-link>
                <router-link :to="{ name: 'About' }" class="navbar-item">About</router-link>
                <router-link :to="{ name: 'student' }" class="navbar-item">Student</router-link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import '../node_modules/bulma';
</style>
