<template>
  <AuthLayout>
    <div class="container">
      <form action="">
        <b-field
          label="Логин"
          :type="!$v.form.model.login.required ? 'is-danger' : 'is-success'"
          :message="!$v.form.model.login.required ? 'Поле обязательно для заполнения' : ''"
        >
          <b-input
            v-model="form.model.login"
            type="text"
          />
        </b-field>

        <b-field
          label="Пароль"
          :type="!$v.form.model.password.required ? 'is-danger' : 'is-success'"
          :message="!$v.form.model.password.required ? 'Поле обязательно для заполнения' : ''"
        >
          <b-input
            v-model="form.model.password"
            type="password"
            password-reveal
          />
        </b-field>

        <b-field>
          <div class="buttons">
            <b-button
              :loading="isLoading"
              type="is-success"
              @click="onSumbit"
            >
              Войти
            </b-button>
          </div>
        </b-field>
      </form>
    </div>
  </AuthLayout>
</template>

<script>
  import { mapActions } from 'vuex'
  import { Loading } from '../../mixins/utils'
  import { required } from 'vuelidate/lib/validators'

  export default {
    name: 'SignInPage',
    mixins: [
      Loading,
    ],
    data: () => ({
      form: {
        model: {
          login: 'reader@mail.com',
          password: 123456,
        },
      },
    }),
    validations: {
      form: {
        model: {
          login: {
            required,
          },
          password: {
            required,
          },
        },
      },
    },
    methods: {
      ...mapActions('auth', [
        'signIn',
      ]),
      async onSumbit () {
        const formValid = !this.$v.$invalid

        if (!formValid) {
          return
        }

        try {
          this.setLoading(true)

          await this.signIn(this.form.model)

          this.$router.push({
            path: '/'
          })
        } catch ({ message }) {
          this.$buefy.notification.open({
            message,
            position: 'is-bottom-left',
            type: 'is-danger'
          })
        } finally {
          this.setLoading(false)
        }
      },
    }
  }
</script>
