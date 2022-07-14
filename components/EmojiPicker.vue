<!-- <template>
  <emoji-picker @emoji="insert" :search="search">
    <div
      slot="emoji-invoker"
      slot-scope="{ events: { click: clickEvent } }"
      @click.stop="clickEvent"
    >
    </div>
    <div slot="emoji-picker" slot-scope="{ emojis, insert, display }">
      <div>
        <div>
          <input type="text" v-model="search" />
        </div>
        <div>
          <div v-for="(emojiGroup, category) in emojis" :key="category">
            <h5>{{ category }}</h5>
            <div>
              <span
                v-for="(emoji, emojiName) in emojiGroup"
                :key="emojiName"
                @click="insert(emoji)"
                :title="emojiName"
                >{{ emoji }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </emoji-picker>
</template>

<script>
import { EmojiPicker } from "vue-emoji-picker";
export default {
  data() {
    return {
      input: "",
      search: "",
    };
  },
  methods: {
    insert(emoji) {
      this.input += emoji;
    },
  },
  components: {
    EmojiPicker,
  },
};
</script> -->
