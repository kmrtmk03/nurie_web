<template lang="pug">
  .getData
    .head
      h1(v-show="isDev") Firebase接続の確認

    .input
      p IDを入力してください
      input(v-model="myKey")
      button(@click="onGetInfo") 確認する

    .data(v-show="isDev")
      ul
        li Username - {{info.username}}
        li Message - {{info.message}}

      .img
        img(:src="imgSrc")
</template>


<script>
  export default {
    data() {
      return {
        isDev: true,
        myKey: '211116101045',
        info: {
          username: '',
          message: ''
        },
        imgSrc: ''
      }
    },

    mounted() {
      console.log(this.$fire.database)
    },

    methods: {
      onGetInfo() {
        this.$fire.database.ref('users/' + this.myKey).once("value").then(snapshot => {

          if(snapshot.exists()) {
            console.log(snapshot.val())

            this.actionData(snapshot.val())
            this.onGetImg()
          }
          else {
            console.log("Error!!")
          }
        }).catch(error => {
          console.log(error)
        })
      },

      onGetImg() {
        this.$fire.storage.ref().child('images/' + this.myKey + '.png').getDownloadURL().then((url) => {
          // this.imgSrc = url

          this.$store.dispatch('setImgurl', url)

          console.log(this.$store.getters['imgurl'])
        })
      },

      actionData(_data) {
        this.info.username = _data['username']
        this.info.message = _data['message']
      }
    }
  }
</script>

<style lang="scss" scoped>

  .getData {
    opacity: 0.1;

    background-color: rgba(0, 0, 0, 1);
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
  }

  h1 {
    text-align: center;
    padding: 30px 0;
  }

  .input {
    width: 640px;
    margin: 80px auto 0;

    p {
      font-size: 1.8rem;
    }

    input {
      display: block;
      width: 100%;
      padding: 10px;
      font-size: 2rem;
      margin-top: 10px;
    }

    button {
      $_bgColor: #ccc;
      display: block;
      padding: 15px 140px;
      margin: 30px auto 0;
      background-color: $_bgColor;
      border: 1px solid $_bgColor;
      font-size: 1.8rem;

      &:hover {
        cursor: pointer;
        border: 1px solid #333;
      }
    }
  }

  .data {
    width: 600px;
    margin: 60px auto 0;

    ul {
      li {
        font-size: 2rem;
        margin-top: 10px;
        &:first-child {
          margin-top: 0;
        }
      }
    }

    img {
      display: block;
      margin-top: 10px;
      width: 300px;
    }
  }
</style>
