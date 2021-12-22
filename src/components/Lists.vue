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
                      :src="`https://img.icons8.com/${typeImages}/48/${iconColor}/${item.icon}.png`"
                    />
                    <br />
                    <span>{{ item.desc }}</span>
                </v-col>
                <v-col v-if="useMoreDescriptions">
                    <p v-for="(moreDesc, idx) in moreDescriptionsList[key]" :key="idx" class="mb-2">
                        {{ moreDesc.desc }}
                    </p>
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
    moreDescriptionsList: {
      type: Array,
      default: () => ([]),
    },
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
</style>