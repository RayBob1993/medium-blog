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
              @click="onSubmit"
            >
              Добавить
            </b-button>
          </div>
        </b-field>
      </form>
    </div>
  </DefaultLayout>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import { Loading } from '../../mixins/utils'
  import { required } from 'vuelidate/lib/validators'
  import PostModel from '../../models/PostModel'

  export default {
    name: 'PostAddPage',
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
      ...mapState('user', [
        'user',
      ]),
    },
    methods: {
      ...mapActions('posts', [
        'addPost',
      ]),
      async onSubmit () {
        const formValid = !this.$v.$invalid

        if (!formValid) {
          return
        }

        try {
          this.setLoading(true)

          const post = new PostModel({
            ...this.form.model,
            userId: this.user.id,
          })

          await this.addPost(post)

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