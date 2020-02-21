<template>
  <AuthLayout>
    <div class="container">
      <form action="">
        <b-field label="Логин">
          <b-input
            v-model="form.model.login"
            type="text"
            maxlength="30"
          />
        </b-field>

        <b-field label="Пароль">
          <b-input
            v-model="form.model.password"
            type="password"
            password-reveal
          />
        </b-field>
      </form>
    </div>
  </AuthLayout>
</template>

<script>
export default {
  name: 'SignInPage',
  data: () => ({
    form: {
      model: {
        login: '',
        password: '',
      },
    },
  }),
  methods: {
    onSumbit () {

    },
  }
}
</script>
