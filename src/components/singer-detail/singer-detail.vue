<template>
    <transition name="slider">
        <!-- <div class="singer-detail"></div> -->
        <music-list :songs='songs' :title="title" :bg-image="bgImage"></music-list>
    </transition>
</template>
<script>
import { mapGetters } from "vuex";
import { getSingerDetail } from "api/singer";
import { ERR_OK } from "api/config";
import { createSong } from "common/js/song";
import MusicList from "components/music-list/music-list";
export default {
  data() {
    return {
      songs: []
    };
  },
  computed: {
    title() {
      return this.singer.name;
    },
    bgImage() {
      return this.singer.avatar;
    },
    ...mapGetters(["singer"])
  },
  components: { MusicList },
  created() {
    console.log(this.singer, 1111111111111111111);
    this._getDetail();
  },
  methods: {
    _getDetail() {
      if (!this.singer.id) {
        this.$router.push("/singer");
        return;
      } //如果在歌手详情页不小心刷新页面，拿不到singer所以返回歌手页面
      getSingerDetail(this.singer.id).then(res => {
        if (res.code === ERR_OK) {
          console.log(res.data.list);
          this.songs = this._normalizeSongs(res.data.list);
          console.log(this.songs);
        }
      });
    },
    _normalizeSongs(list) {
      let ret = [];
      list.forEach(item => {
        let { musicData } = item;
        if (musicData.songid && musicData.albumid) {
          ret.push(createSong(musicData));
          console.log(createSong(musicData) )
        }
      });
      return ret;
    }
  }
};
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable';

// .singer-detail {
// position: fixed;
// z-index: 100;
// top: 0;
// left: 0;
// right: 0;
// bottom: 0;
// background: $color-background;
// }
.slide-enter-active, .slide-leave-active {
    transition: all 0.3s;
}

.slide-enter, .slide-leave-to {
    transform: translate3d(100%, 0, 0);
}
</style>
