<template>
  <v-app id="inspire">
    <v-main>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-row>
                  <v-col class="d-flex justify-space-around">
                    <v-toolbar-title>Login form</v-toolbar-title>
                  </v-col>
                </v-row>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    prepend-inner-icon="mdi-account"
                    filled
                    name="Email"
                    label="Email"
                    type="text"
                    v-model="formData.email"
                  ></v-text-field>
                  <v-text-field
                    id="password"
                    prepend-inner-icon="mdi-lock"
                    filled
                    name="password"
                    label="Password"
                    type="password"
                    v-model="formData.password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-row class="pb-3" align="center" justify="space-around">
                  <v-btn color="primary" to="/" @click="login">Login</v-btn>
                </v-row>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      formData: {},
    };
  },
  created: function () {
    this.$store
      .dispatch("checkLogin")
      .then(() => this.$router.push({ name: "dashboard" }))
      .catch(() => null);
  },
  methods: {
    login() {
      this.$store
        .dispatch("login", this.formData)
        .then((response) => {
          this.$store.dispatch("checkLogin").then((response) => {
            this.$router.push({ name: "dashboard" });
          });
        })
        .catch((error) => {
          console.log("error");
        });
    },
  },
};
</script>

<style>
#inspire {
  background-image: url("../../assets/bg-auth.jpg");
  background-size: cover;
}
</style>