<template>
    <div>
        <div class="slider" ref="slider">
            <div class="slider-content" ref="sliderContent">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import { getRecommend } from 'api/recommend'
export default {
    data() {
        return {}
    },
    created() {
        this._getRecommend()
    },
    methods: {
        _getRecommend() {
            // getRecommend().then(res => {
            //     console.log(res)
            // })
        },
        setSliderWidth: function(isResize) {
            // 获取slider里的所有的子元素
            this.children = this.$refs.sliderContent.children
            // console.log(this.children)
            // 计算宽度  = 图片个数+每张图片的宽度
            let width = 0
            // 获取手机屏幕的宽度
            let sliderWidth = this.$refs.slider.clientWidth

            for (let i = 0; i < this.children.length; i++) {
                // 获取children里的每一项内容
                let child = this.children[i]

                child.style.width = sliderWidth + 'px'
                width += sliderWidth
            }
            if (this.loop) {
                width += 2 * sliderWidth
            }
            this.$refs.sliderContent.style.width = width + 'px'
        },
        initSlider: function() {
            this.slider = new BScroll(this.$refs.slider, {
                scrollX: true,
                scrollY: false,
                momentum: false,
                snap: {
                    loop: this.loop,
                    threshold: 0.3,
                    speed: 400
                },
                click: true
            })
        }
    }
}
</script>

<style scoped lasnt="stlus" rel="stylesheet/stylus">
</style>
