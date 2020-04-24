<template>
  <v-menu
    v-model="menu"
    :nudge-right="40"
    transition="scale-transition"
    offset-y
    dense
    min-width="290px"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        :value="date"
        :label="label"
        :filled="filled"
        hide-details
        readonly
        v-on="on"
      />
    </template>
    <v-date-picker
      v-model="date"
      color="primary"
      no-title
      dense
      :type="type"
      @input="$emit('input', $event)"
    />
  </v-menu>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "Date",
    },
    value: {
      type: [String, Number],
      default: "",
    },
    filled: {
      type: Boolean,
      default: true,
    },
    type: {
      type: String,
      default: "date",
    },
  },
  data() {
    return {
      menu: false,
      date: "",
    };
  },
};
</script>