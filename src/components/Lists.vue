<template>
  <ul>
    <v-container>
      <v-row>
        <v-col
          :cols="colXs"
          :md="colMd"
          v-for="(item, key) in listToRender"
          :key="key"
          :class="styleListCol"
        >
          <div class="div-circle" :style="'background-color: #' + iconColor" v-if="useDivCircle"></div>
          <li :class="styleListItem">
            <v-row>
                <v-col :cols="useMoreDescriptions ? 5 : 12">
                    <img
                      class="footer-home-img"
                      :src="`https://img.icons8.com/${typeImages}/${iconSize}/${iconColor}/${item.icon}.png`"
                    />
                    <br />
                    <span class="teste" :class="useButton ? 'descIfHaveButton' : ''">{{ item.desc }}</span>
                </v-col>
                <v-col v-if="useMoreDescriptions">
                    <p v-for="(moreDesc, idx) in moreDescriptionsList[key]" :key="idx" class="mb-2">
                        {{ moreDesc.desc }}
                    </p>
                </v-col>
                <v-col v-if="useButton">
                  <a :href="item.redirectUrl">
                    <v-btn color="#67d4ff" class="perfil-btn" tile>{{ btnText }}</v-btn>
                  </a>
                </v-col>
            </v-row>
          </li>
        </v-col>
      </v-row>
    </v-container>
  </ul>
</template>

<script>
export default {
  props: {
    typeImages: {
      type: String,
      default: "",
    },
    iconColor: {
      type: String,
      default: "000000",
    },
    iconSize: {
      type: String,
      default: '48'
    },
    listToRender: {
      type: Array,
      default: () => ([]),
    },
    colXs: {
      type: Number,
      default: 12,
    },
    colMd: {
      type: Number,
      default: 12,
    },
    styleListItem: {
      type: String,
      default: "",
    },
    styleListCol: {
      type: String,
      default: "",
    },
    useDivCircle: {
        type: Boolean,
        default: false
    },
    useMoreDescriptions: {
        type: Boolean,
        default: false
    },
    useButton: {
      type: Boolean,
      default: false
    },
    moreDescriptionsList: {
      type: Array,
      default: () => ([]),
    },
    btnText: {
      type: String,
      default: ''
    }
  },
};
</script>

<style scoped>
.div-circle {
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 100px;
}

.descIfHaveButton {
  font-size: 24px;
  color: rgb(255, 255, 255);
  font-weight: 700;
}

.perfil-btn {
  transition: .35s;
}

.perfil-btn:hover {
  background-color: #ff7b23 !important;
  transition: .35s;
  color: white;
}
</style>