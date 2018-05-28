<template>

  <form method="POST" action="/login" @submit.prevent="onSubmit" @keydown="form.errors.clear($event.target.name)">

    <div class="control has-icons-left has-icons-right" >

      <input class="input" type="text" name="username" v-model="form.username"  placeholder="用户名" value="">

      <span class="help is-danger" v-if="form.errors.has('username')" v-text="form.errors.get('username')" ></span>
    </div>

    <div class="control has-icons-left has-icons-right">

      <input class="input" type="text" name="password" v-model="form.password"  placeholder="密码" value="">

      <span class="help is-danger" v-if="form.errors.has('password')" v-text="form.errors.get('password')"></span>
    </div>

    <div class="field is-grouped">

      <div class="control">

        <button :disabled="form.errors.any()" class="button is-link">Submit</button>

      </div>

    </div>

  </form>

</template>

<script>
  import Form from '@/core/Form'

  export default {

    name: 'login',

    data() {

      return {

        form: new Form({
          username: '',
          password: ''
        }),

      }

    },

    methods: {

      onSubmit() {
        let errors = {};
        this.form
          .submit('post', '/api/login')
          .then((response) => {
            console.log(response)
          })
          .catch((error) => {
            console.log(error)
          })
        this.form.errors.record(errors);
      }

    }

  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
