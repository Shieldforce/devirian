<template>
  <div>
    <MainDashboardImg
      :changeSrc="mainDashImg.src"
      :changeHeight="mainDashImg.height"
      :changeText="mainDashImg.text"
    >
      <v-row
        style="
          background-color: rgba(0, 0, 0, 0.5);
          margin: 0;
          margin-top: 10px;
          border-radius: 5px;
        "
      >
        <v-col>
          <v-timeline
            dark
            class="overflow-y-auto"
            style="padding: 10px; height: 620px; max-height: 620px"
          >
            <v-timeline-item
              v-for="message in messages"
              :key="message.id"
              large
              :left="message.left"
              :right="message.right"
            >
              <template v-slot:icon>
                <v-avatar>
                  <img
                    :src="
                      message.user.picture
                        ? message.user.picture
                        : 'https://i.pravatar.cc/64'
                    "
                  />
                </v-avatar>
              </template>
              <template v-slot:opposite>
                <span style="color: white">{{ message.user.name }}</span>
              </template>
              <v-card
                class="elevation-2"
                style="background-color: rgba(255, 255, 255, 0.3)"
              >
                <v-card-title style="font-size: 12pt">
                  {{ message.titulo }}
                </v-card-title>
                <v-card-text>{{ message.mensagem }}</v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-col>
      </v-row>
      <v-row
        style="
          background-color: rgba(0, 0, 0, 0.5);
          margin: 0;
          margin-top: 10px;
          border-radius: 5px;
          padding: 0 20px 0 20px;
        "
      >
        <v-text-field
          color="white"
          label="Mensagem*"
          v-model="mensagem"
          required
          @keypress.enter="createChat()"
          dark
        ></v-text-field>
      </v-row>
    </MainDashboardImg>
  </div>
</template>

<script>
import MainDashboardImg from "@/modules/global/components/MainDashboardImg.vue";
//import ApiTasks from "@/modules/auth/http/apiTasks/index.js";
import { mapActions } from "vuex";
import moment from "moment";

export default {
  name: "TasksView",
  components: {
    MainDashboardImg,
  },
  data() {
    return {
      mainDashImg: {
        src: "/img/paisagem7.jpg",
        height: "85vh",
        text: "A comunicação é uma ferramenta muito importante!",
      },
      wsOpen: false,
      otheMessage: "",
      mensagem: "",
      messages: [],
      authUser: {},
      ws: {
        connnection: null,
        message: "",
      },
    };
  },
  created() {
    this.ws.connnection = new WebSocket("ws://127.0.0.1:9999");
    this.ws.connnection.onopen = (event) => {
      if (event) {
        this.wsOpen = true;
      }
    };
    this.ws.connnection.onmessage = (message) => {
      this.ActionGetChat();
      console.log(message);
      console.clear();
    };
  },
  mounted() {
    this.authUser = this.$store.state.auth.user;
    this.ActionGetChat();
  },
  destroyed() {
    window.location.reload(false);
  },
  methods: {
    ...mapActions("global", [
      "ActionGetChat",
      "ActionCreateChat",
      "ActionUpdateChat",
      "ActionDeleteChat",
      "ActionShowChat",
    ]),
    createChat() {
      let date = moment().format("DD/MM/YYYY HH:mm:ss");
      var titulo = `${date}: `;
      var mensagem = this.mensagem;
      this.ActionCreateChat({
        titulo,
        mensagem,
      });

      var object = JSON.stringify({
        titulo: titulo,
        mensagem: mensagem,
        user: this.authUser,
        user_id: this.authUser.user_id,
        left: false,
        right: true,
      });
      this.ws.connnection.send(object);

      this.mensagem = "";
      this.ActionGetChat();
    },
  },
  watch: {
    "$store.state.global.chat": {
      immediate: true,
      handler() {
        var chat = this.$store.state.global.chat;
        var user = this.authUser;
        var newChat = [].map.call(chat, function (obj) {
          var left = false;
          var right = true;
          if (user.id === obj.user_id) {
            left = true;
            right = false;
          }
          return {
            titulo: obj.titulo,
            mensagem: obj.mensagem,
            user: obj.user,
            user_id: obj.user_id,
            left: left,
            right: right,
          };
        });
        this.messages = newChat;
      },
    },
    otheMessage() {
      // toda vez que chega mensagem do WS
    },
  },
};
</script>
