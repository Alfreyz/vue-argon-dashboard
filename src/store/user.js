// import { defineStore } from "pinia";
// import * as s$user from "../services/suser";

// const d$user = defineStore({
//   id: "user",
//   state: () => ({
//     user: [],
//   }),

//   actions: {
//     async a$user() {
//       try {
//         const { data } = await s$user.getuser();
//         console.log("data", data);
//         this.user = data;
//       } catch (error) {
//         throw error;
//       }
//     },
//   },
//   getters: {
//     g$user: ({ state }) => {
//       return state.user;
//     },
//   },
// });

// export default d$user;
