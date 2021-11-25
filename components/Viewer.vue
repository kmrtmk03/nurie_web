<template lang="pug">
  .viewer
    canvas.canvas(ref="canvas")
</template>

<script>
  import * as THREE from "three"
  import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.cjs"

  export default {
    data() {
      return {
        frameCount: 0,
        windowSize: [
          { w: 0 },
          { h: 0 }
        ],
        renderer: null,
        scene: null,
        camera: null,
        mesh: null
      }
    },

    computed: {
      imgurl: function() {
        return this.$store.getters['imgurl']
      }
    },

    watch: {
      imgurl() {
        this.$nextTick(() => {
          this.createFish()
        })
      }
    },

    mounted() {
      //window
      this.windowSize.w = window.innerWidth
      this.windowSize.h = window.innerHeight

      //Renderer
      this.renderer = new THREE.WebGLRenderer({
        canvas: this.$refs.canvas,
        // alpha: true,
        antialias: true
      })
      this.renderer.setPixelRatio(window.devicePixelRatio)
      this.renderer.setSize(this.windowSize.w, this.windowSize.h)

      //Scene
      this.scene = new THREE.Scene()

      // Camera
      this.camera = new THREE.PerspectiveCamera(35, this.windowSize.w / this.windowSize.h, 1, 150)
      this.camera.position.set(0, 0, 10)

      // this.createFish()

    },

    methods: {
      createFish() {

        this.$axios.$get(
          '/api/' + 'v0/b/nurie-75640.appspot.com/o/images%2F211116101045.png?alt=media&amp;token=fc6fd830-942e-4d62-a28a-62271cf5c268'
        ).then(res => {
          console.log(res)

          const tex = new THREE.TextureLoader()
          tex.crossOrigin = '*'

          tex.load(res, texture => {
            console.log(tex)
          })
        })

        // this.$fire.storage.ref().child('images/' + '211116101045' + '.png').getDownloadURL().then((url) => {
        //   this.imgSrc = url
        // })


        //GLTF読み込み
        const gltfLoader = new GLTFLoader()
        gltfLoader.load("glb/fish.glb", (gltf) => {
          const model = gltf.scene

          model.traverse(object => {
            if(object.isMesh) {
              object.material = new THREE.MeshNormalMaterial()
            }
          })

          this.mesh = gltf.scene
          this.scene.add(this.mesh)

          this.tick()
        })
      },

      tick() {
        //tick
        requestAnimationFrame(this.tick)

        //fpsを落とす処理
        this.frameCount++
        // if(this.frameCount % 2 != 0) {
        //   return;
        // }

        //レンダリング
        this.renderer.render(this.scene, this.camera)

        //アニメーション
        if(this.mesh != null) {
          this.mesh.rotation.y += 0.005
        }
      }
    }

  }
</script>


<style lang="scss" scoped>

</style>

