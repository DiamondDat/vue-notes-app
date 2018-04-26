<template>
  <div id="note-editor">
    <textarea
      :value="activeNoteText"
      @input="editNote"
      class="form-control">
    </textarea>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    computed: {
      activeNoteText() {
        return this.$store.state.activeNote.text;
      }
    },
    methods: {
      ...mapActions(['editNote'])
    }
  }
</script>
