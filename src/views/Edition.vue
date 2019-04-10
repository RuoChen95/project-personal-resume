<template>
  <div>
    <section id="header">
      <div class="left">
        <p class="name" @click="changeEditCondition" >{{personInfo.name}}</p>
        <textarea v-model="personInfo.name" v-show="editCondition.personInfo" @blur="save" ref="editPersonInfo"></textarea>
      </div>
    </section>
    <section id="self-intro">
      <p class="title">个人简介</p>
      <p class="intro" v-html="ResumeItems[0].content" @click="editCondition.selfIntro = true"></p>
      <textarea v-model="ResumeItems[0].content" v-show="editCondition.selfIntro" @blur="save"></textarea>
    </section>
    <section id="work-intro">
      <div>
        <p class="title">工作经历</p>
        <div class="works">
          <!--<div class="logo"><img src="../assets/work_logo_1.png"></div>-->
          <div class="des">
            <div class="description" v-html="ResumeItems[1].content" @click="editCondition.workIntro = true"></div>
            <textarea v-model="ResumeItems[1].content" v-show="editCondition.workIntro" @blur="save"></textarea>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "edition",
    components: {
    },
    data() {
      return {
        ResumeItems: [
          {
            content: ''
          },
          {
            content: ''
          }
        ],
        personInfo: {},
        editCondition: {
          personInfo: false,
          selfIntro: false,
          workIntro: false,
        },

        personId: this.$route.query.user
      }
    },
    computed: {
    },
    mounted() {
      this.init()
    },
    methods: {
      init: async function() {
        let that = this;
        axios.get('http://0.0.0.0:5001/person/'+ this.personId +'/JSON')
          .then(function(response) {
            console.log(response.data.ResumeItems);
            that.ResumeItems = response.data.ResumeItems;
            that.personInfo = response.data.PersonInfo;
          })
      },
      changeEditCondition: function() {
        this.editCondition.personInfo = true;
        this.$refs.editPersonInfo.focus(); // 存在问题
      },
      save: function() {
        if (this.editCondition.personInfo == true) {
          this.editCondition.personInfo = false;
          axios.post('http://0.0.0.0:5001/person/saveName/'+ this.personId + '/' +this.personInfo.name)
            .then(function(response) {
              console.log(response.data);
            })
        }
        if (this.editCondition.selfIntro == true) {
          this.editCondition.selfIntro = false;
          axios.post('http://0.0.0.0:5001/person/saveIntro/'+ this.personId, {
            content: this.ResumeItems[0].content
          })
            .then(function(response) {
              console.log(response.data);
            })
        }
        if (this.editCondition.workIntro == true) {
          this.editCondition.workIntro = false;
          axios.post('http://0.0.0.0:5001/person/saveWorkExperience/'+ this.personId, {
            content: this.ResumeItems[1].content
          })
            .then(function(response) {
              console.log(response.data);
            })
        }
      }
    }
  };
</script>
<style lang="less">
  section {
    box-shadow:
        0 1px 1px rgba(0,0,0,0.15),
        -1px 0 0 rgba(0,0,0,0.03),
        1px 0 0 rgba(0,0,0,0.03),
        0 1px 0 rgba(0,0,0,0.12);
    border: 1px solid rgba(0,0,0,0.12);
    padding: 30px 35px;
    background: white;
    margin-bottom: 10px;

    text-align: left;
    p.title {
      margin-bottom: 30px;
      font-size: 16px;
      font-weight: normal;
      line-height: 18px;
      color: #434649;
    }
  }
  section#header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    p {
      margin: 0;
    }
    div.left {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      p.name {
        font-size: 26px;
        font-weight: bold;
        line-height: 30px;
        color: #000;
      }
      p.place {
        display: inline-block;
        margin-top: 5px;
        font-size: 13px;
        line-height: 17px;
        color: #66696a;
      }
    }
    div.right {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      p.education {
        margin-top: 10px;
        display: inline;
        font-size: 12px;
        line-height: 14px;
        color: #333;
        font-weight: normal;
      }
      p.connect {
        margin-top: 10px;
        display: inline;
        font-size: 12px;
        line-height: 14px;
        color: #66696a;
        font-weight: normal;
      }
    }
  }
  section#self-intro {
    display: flex;
    flex-direction: column;
    p.intro {
      font-size: 14px;
    }
  }
  section#work-intro {
    div.logo {
      padding: 4px;
      margin-right: 8px;
      img {
        max-width: 60px;
        max-height: 60px;
      }
    }
    div.works {
      display: flex;
      div.logo {}
      div.des {
        display: flex;
        flex-direction: column;
        font-size: 14px;
        span.title {
          font-size: 16px;
          font-weight: bold;
        }
        span.company{}
        span.time{}
        span.location {
          color: rgba(0,0,0,0.6);
        }
        div.description {
          display: inline-block;
          margin-top: 8px;
        }
      }
    }
  }
  section#education-intro {
    div.edu {
      display: flex;
      justify-content: space-between;
      p.place{
        font-size: 16px;
        font-weight: bold;
        line-height: 18px;
        color: #000;

        margin-bottom: 5px;
      }
      p.content{
        font-size: 14px;
        font-weight: normal;
        line-height: 16px;
        color: #434649;

        margin-bottom: 5px;
      }
      p.time{
        font-size: 12px;
        line-height: 14px;
        color: #66696a;
      }
      p.activity{
        font-size: 13px;
        line-height: 17px;
        color: #333;
        font-weight: normal;
        margin-top: 15px;
      }
      p.honor {
        font-size: 13px;
        line-height: 17px;
        color: #333;
        font-weight: normal;
      }
      img {
        max-width: 60px;
        max-height: 60px;
      }
    }
  }
  section#quantification-intro {
    padding: 0;
    font-size: 14px;
    p.title {
      padding: 30px 35px 0 35px;
      margin: 0;
    }
    p.name {
      font-size: 16px;
      font-weight: bold;
      line-height: 18px;
      color: #000;
      margin-bottom: 5px;
    }
    p.code {
      font-size: 14px;
      font-weight: normal;
      line-height: 16px;
      color: #434649;
      margin-bottom: 5px;
    }
    p.time{
      font-size: 12px;
      line-height: 14px;
      color: #66696a;
    }
    div.qua {
      display: flex;
      justify-content: space-between;
      padding: 30px 35px;

      border-bottom: 1px solid #ddd;
      img {
        max-width: 60px;
        max-height: 60px;
      }
    }
    div.project-list,
    div.link-list{
      margin-top: 15px;
      font-size: 13px;
    }
  }
</style>
