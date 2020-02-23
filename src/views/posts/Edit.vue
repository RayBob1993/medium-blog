<template>
  <DefaultLayout>
    <div class="container">
      <form action="">
        <b-field
          label="Название"
          :type="!$v.form.model.title.required ? 'is-danger' : 'is-success'"
          :message="!$v.form.model.title.required ? 'Поле обязательно для заполнения' : ''"
        >
          <b-input
            v-model="form.model.title"
            type="text"
          />
        </b-field>

        <b-field
          label="Описание"
          :type="!$v.form.model.description.required ? 'is-danger' : 'is-success'"
          :message="!$v.form.model.description.required ? 'Поле обязательно для заполнения' : ''"
        >
          <b-input
            v-model="form.model.description"
            type="textarea"
          />
        </b-field>

        <b-field>
          <div class="buttons">
            <b-button
              :loading="isLoading"
              type="is-success"
              @click="onSumbit"
            >
              Сохранить
            </b-button>
          </div>
        </b-field>
      </form>
    </div>
  </DefaultLayout>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import { required } from 'vuelidate/lib/validators'
  import { Loading } from '../../mixins/utils'

  export default {
    name: 'PostEditPage',
    mixins: [
      Loading,
    ],
    data: () => ({
      form: {
        model: {
          title: '',
          description: '',
        },
      },
    }),
    validations: {
      form: {
        model: {
          title: {
            required,
          },
          description: {
            required,
          },
        },
      },
    },
    computed: {
      ...mapState('posts', [
        'post',
      ]),
    },
    async created () {
      await this.onGetPost(this.$route.query.id)
    },
    methods: {
      ...mapActions('posts', [
        'editPost',
        'getPost',
      ]),
      setModel () {
        for (const prop in this.post) {
          if (
            Object.prototype.hasOwnProperty.call(this.post, prop) &&
            Object.prototype.hasOwnProperty.call(this.form.model, prop)
          ) {
            this.form.model[prop] = this.post[prop]
          }
        }
      },

      async onGetPost (id) {
        try {
          await this.getPost(id)

          this.setModel()
        } catch (error) {
          console.error(error)
        }
      },

      async onSumbit () {
        const formValid = !this.$v.$invalid

        if (!formValid) {
          return
        }

        try {
          this.setLoading(true)

          await this.editPost({
            ...this.form.model,
            id: this.$route.query.id,
            updateAt: new Date().toISOString()
          })

          this.$router.push({
            path: '/'
          })
        } catch (error) {
          console.error(error)
        } finally {
          this.setLoading(false)
        }
      },
    }
  }
</script>