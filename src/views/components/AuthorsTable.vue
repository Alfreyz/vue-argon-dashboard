<template>
  <div class="card">
    <div class="card-header pb-0">
      <h6>Authors table</h6>
      <button type="button" class="btn btn-success" @click="createUser()">
        Create
      </button>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0">
          <thead>
            <tr>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Author
              </th>
              <th class="text-secondary opacity-7 text-center">Actions</th>
            </tr>
          </thead>
          <!-- <tbody> -->
          <tbody v-if="get">
            <!-- <tr v-for="users in g$user" :key="users.id"> -->
            <tr v-for="gets of get">
              <td>
                <div class="d-flex px-2 py-1">
                  <div>
                    <img
                      :src="gets.avatar"
                      class="avatar avatar-sm me-3"
                      alt="user1"
                    />
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">
                      {{ gets.first_name }} {{ gets.last_name }}
                    </h6>
                    <p class="text-xs text-secondary mb-0">
                      {{ gets.email }}
                    </p>
                  </div>
                </div>
              </td>
              <td class="align-middle">
                <div class="ms-auto text-center">
                  <a
                    class="btn btn-link text-danger text-gradient px-3 mb-0"
                    @click="deleteUser()"
                  >
                    <i class="far fa-trash-alt me-2" aria-hidden="true"></i
                    >Delete
                  </a>
                  <a
                    class="btn btn-link text-dark px-3 mb-0"
                    @click="updateUser()"
                  >
                    <i
                      class="fas fa-pencil-alt text-dark me-2"
                      aria-hidden="true"
                    ></i
                    >Edit
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "authors-table",
  data: () => ({
    get: [],
  }),
  created() {
    axios.get(`https://reqres.in/api/users`).then((response) => {
      this.get = response.data.data;
    });
  },

  methods: {
    async createUser() {
      const response = await axios.post(`https://reqres.in/api/users`, {
        email: "george.bluth@reqres.in",
        first_name: "John",
        last_name: "Doe",
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIh7-7PUPvidgYPK8vGyCdVODRbw8gFY8grQ&usqp=CAU",
      });
      console.log(response);
    },
    async updateUser() {
      const response = await axios.put(`https://reqres.in/api/users/1`, {
        email: "Dea.Didi@reqres.in",
        first_name: "Didi",
        last_name: "Dea",
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIh7-7PUPvidgYPK8vGyCdVODRbw8gFY8grQ&usqp=CAU",
      });
      console.log(response);
    },

    async deleteUser() {
      const popup = confirm("Are you sure you want to delete this user?");
      if (popup) {
        const response = await axios.delete(`https://reqres.in/api/users/1`);
        console.log(response);
      }
    },
  },
};
// import d$user from "@/store/user";
// import { mapActions, mapState } from "pinia";
// export default {
//   name: "authors-table",
//   data: () => ({
//     g$user: [],
//   }),
//   computed: {
//     ...mapState(d$user, ["g$user"]),
//   },
//   methods: {
//     ...mapActions(d$user, ["a$user"]),
//     async fetchuser() {
//       try {
//         await this.a$user.fetchUser();
//       } catch (e) {
//         console.log(e);
//       }
//     },
//   },
//   mounted() {
//     this.fetchuser();
//   },
// };
</script>
