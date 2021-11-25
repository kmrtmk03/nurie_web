<template lang="pug">
  .getData
    .head
      h1(v-show="isDev") Keyの入力

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
      testAxios() {
        this.$axios.$get(
          "https://firebasestorage.googleapis.com/v0/b/nurie-75640.appspot.com/o/images"
        )
        .then(res => {
          console.log(res)
        })
      },

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
          this.imgSrc = url

          this.$store.dispatch('setImgurl', url)
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
    opacity: 0.8;

    background-color: #fff;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    padding: 0 5vw;
  }

  h1 {
    text-align: center;
    padding: 20px 0;
    font-size: 5vw;
  }

  .input {
    width: 100%;
    margin: 50px auto 0;

    p {
      font-size: 4vw;
    }

    input {
      display: block;
      width: 100%;
      padding: 10px;
      font-size: 2rem;
      margin-top: 10px;
    }

    button {
      display: block;
      width: 100%;
      padding: 10px 0;
      $_bgColor: #ccc;
      display: block;
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
    width: 100%;
    margin: 60px auto 0;

    ul {
      li {
        font-size: 4vw;
        margin-top: 10px;
        &:first-child {
          margin-top: 0;
        }
      }
    }

    img {
      display: block;
      margin-top: 15px;
      width: 100%;
    }
  }
</style>
