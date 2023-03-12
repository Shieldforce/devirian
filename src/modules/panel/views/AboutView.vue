<template>
  <v-carousel height="85vh">
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
      <div v-show="item.src === '/img/paisagem3.jpg'">
        <v-row>
          <v-col
            cols="5"
            md="5"
            sm="5"
            xl="5"
            style="padding-top: 20%"
          >
            <RabbitAnimateComponent
              :changeSpeed="changeSpeed"
              :changePlay="changePlay"
              :changePause="changePause"
              :changeStop="changeStop"
              :changeHeight="changeHeight"
              :changeWidth="changeWidth"
            />
          </v-col>
          <v-col
            cols="7"
            md="7"
            sm="7"
            xl="7"
            style="padding: 5%; text-align: left"
          >
            <v-alert
              color="rgba(0, 0, 0, 0.3)"
              dark
              border="left"
              prominent
              height="70vh"
            >
              <div>
                <h1>Sr. Coelho</h1>
                <hr class="mb-5">
                <p>
                   - É uma especie de gurú de metas, com sua imensa
                  sabedoria, ajuda pessoas a realizarem a paz interior.
                </p>
                <p>
                  - Sr. Coelho nasceu no planeta Coelhândia, em uma cidadezinha chamada Coelhuzeudes.
                </p>
                <p>
                   - Ele é mestre em realizar metas e manter a sua paz interior.
                   Com tudo, precisa de uma pequena ajuda as vezes.
                </p>
                <p>
                   - Para manter o equilibrio de sua paz interior, procure seguir e realizar metas.
                   Isso é ensinamento para toda vida!
                </p>
              </div>
            </v-alert>
          </v-col>
        </v-row>
      </div>
      <div v-show="item.src === '/img/paisagem4.jpg'">
        <v-row>
          <v-col
            cols="5"
            md="5"
            sm="5"
            xl="5"
            style="padding-top: 20%"
          >
            <Programming2AnimateComponent
            :changeSpeed="changeSpeed"
            :changePlay="changePlay"
            :changePause="changePause"
            :changeStop="changeStop"
            :changeHeight="changeHeight"
            :changeWidth="changeWidth"
          />
          </v-col>
          <v-col
            cols="7"
            md="7"
            sm="7"
            xl="7"
            style="padding: 5%; text-align: left"
          >
            <v-alert
              color="rgba(0, 0, 0, 0.3)"
              dark
              border="left"
              prominent
              height="70vh"
            >
              <div>
                <h1>Alfredo (Tabalhando)</h1>
                <hr class="mb-5">
                <p>
                  - Trabalhador e dedicado, ele sempre consegue terminar seus jobs.
                  Com isso ganha experiência e habilidades impressionantes.
                </p>
                <p>
                  - Alfredo nasceu no Brasil/ES, em uma cidadezinha chamada Guarapari.
                </p>
              </div>
            </v-alert>
          </v-col>
        </v-row>
      </div>
      <div v-show="item.src === '/img/paisagem7.jpg'">
        <v-row>
          <v-col
            cols="5"
            md="5"
            sm="5"
            xl="5"
            style="padding-top: 20%"
          >
            <Vacation1AnimateComponent
            :changeSpeed="changeSpeed"
            :changePlay="changePlay"
            :changePause="changePause"
            :changeStop="changeStop"
            :changeHeight="changeHeight"
            :changeWidth="changeWidth"
          />
          </v-col>
          <v-col
            cols="7"
            md="7"
            sm="7"
            xl="7"
            style="padding: 5%; text-align: left"
          >
            <v-alert
              color="rgba(0, 0, 0, 0.3)"
              dark
              border="left"
              prominent
              height="70vh"
            >
              <div>
                <h1>Alfredo (De folga)</h1>
                <hr class="mb-5">
                <p>
                  O que Alfredo mais gosta é de folga, ele até divide sua grana dos jobs 
                  para poder ficar de boa em uma praia.
                </p>
              </div>
            </v-alert>
          </v-col>
        </v-row>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import RabbitAnimateComponent from "@/modules/global/components/RabbitAnimateComponent.vue";
import Programming2AnimateComponent from "@/modules/global/components/Programming2AnimateComponent.vue";
import Vacation1AnimateComponent from "@/modules/global/components/Vacation1AnimateComponent.vue";


export default {
  name: "AboutView",
  components: {
    RabbitAnimateComponent,
    Programming2AnimateComponent,
    Vacation1AnimateComponent,
  },
  data() {
    return {
      items: [
        {
          src: "/img/paisagem3.jpg",
        },
        {
          src: "/img/paisagem4.jpg",
        },
        {
          src: "/img/paisagem7.jpg",
        },
      ],
    };
  },
};
</script>
