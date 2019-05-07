<template>
  <div>

    <section id="header">
      <div class="left">
        <basic-input
            :placeholderKey="personInfo.name"
            v-model="personInfo.name"
            :type="'h1'"
            @inputBlur="save">
        </basic-input>
      </div>
    </section>

    <section id="self-intro">
      <p class="title">个人简介</p>
      <p class="intro" v-html="ResumeItems[0].content" @click="editCondition.selfIntro = true" v-show="!editCondition.selfIntro"></p>
      <textarea v-model="ResumeItems[0].content" v-show="editCondition.selfIntro" @blur="save"></textarea>
      <basic-input
          :placeholderKey="ResumeItems[0].content"
          :valueKey="ResumeItems[0].content"
          :type="'textarea'"
          @inputBlur="save">
      </basic-input>
    </section>
    <section id="work-intro">
      <div>
        <p class="title">工作经历</p>
        <div class="works">
          <!--<div class="logo"><img src="../assets/work_logo_1.png"></div>-->
          <div class="des">
            <div class="description" v-html="ResumeItems[1].content" @click="editCondition.workIntro = true" v-show="!editCondition.workIntro"></div>
            <textarea v-model="ResumeItems[1].content" v-show="editCondition.workIntro" @blur="save"></textarea>
          </div>
        </div>

      </div>
    </section>
    <section id="education-intro">
      <p class="title">教育背景</p>
      <div class="edu">
        <div>
          <p class="place">XX大学</p>
          <p class="content">XX专业</p>
          <p class="time">2013年 - 2017年</p>
          <p class="activity">社团活动：XX</p>
          <p class="honor">荣誉：XX</p>
        </div>
        <div><img src="../assets/img/education_logo_1.jpeg"></div>
      </div>
    </section>
    <section id="quantification-intro">
      <p class="title">个人成就</p>
      <div class="qua">
        <div>
          <p class="name">Full Stack Web Developer Nanodegree</p>
          <p class="code">
            <span class="authority">Udacity, </span>
            <span class="code">证书编号: 4TT6CGMD</span>
          </p>
          <p class="time">2019 年</p>
          <div class="project-list">
            <p class="subTitle">作品文件：</p>
            <p>Logs analysis: 使用了内部数据库信息来发现读者喜欢什么种类的文章</p>
            <p>Item catalog: 具有对于饭店列表、菜单列表的增删改查功能和连接了外部登录API，用到了Flask以及SqlAlchemy</p>
            <p>Linux server configuration: 在Amazon Lightsail VPS上实现Linux服务器应用配置以及端口安全配置，使用了Apache、wsgi以及Flask</p>
          </div>
          <div class="link-list">
            <p class="subTitle">相关链接：</p>
            <p>https://confirm.udacity.com/4TT6CGMD</p>
          </div>
        </div>
        <div><img src="../assets/img/quantification_logo_1.png"></div>
      </div>

      <div class="qua">
        <div>
          <p class="name">Algorithms</p>
          <p>
            <span class="authority">Coursera, </span>
            <span class="code">证书编号: K2EVGB8ZH6BG, Q8KEBDEUEV4K</span>
          </p>
          <p class="time">2019 年</p>
          <div class="project-list">
            <p class="subTitle">学习内容：</p>
            <p>分治算法：归并排序、快速排序、数组的倒置量、Karatsuba乘法；随机算法：图的最小切割量</p>
            <p>图搜索、最短路径算法、堆以及哈希表</p>
            <p>贪心算法、最小生成树算法以及动态规划</p>
          </div>
          <div class="link-list">
            <p class="subTitle">相关链接：</p>
            <p>https://www.coursera.org/account/accomplishments/verify/K2EVGB8ZH6BG</p>
            <p>https://www.coursera.org/account/accomplishments/verify/Q8KEBDEUEV4K</p>
          </div>
        </div>
        <div><img src="../assets/img/quantification_logo_2.jpeg"></div>
      </div>

      <div class="qua">
        <div>
          <p class="name">Front End Web Developer Nanodegree</p>
          <p>
            <span class="authority">Udacity</span>
          </p>
          <p class="time">2016 年</p>
          <div class="project-list">
            <p class="subTitle">作品文件：</p>
            <p>Resume: 使用了面相对象编程思想，将数据进行封装后进行页面的显示。</p>
            <p>Arcade Game: 实现了比较复杂的网页交互游戏，借助面相对象思想，通过继承和委托来构建合理的程序。</p>
            <p>Website Optimization: 优化网页性能，使其达到目标的 PageSpeed 分数，并以 60 帧/秒的速度运行。</p>
          </div>
        </div>
        <div><img src="../assets/img/quantification_logo_1.png"></div>
      </div>

      <div class="qua">
        <div>
          <p class="name">Front end Certification</p>
          <p>
            <span class="authority">Freecodecamp, </span>
            <span class="code">证书连接: https://www.freecodecamp.cn/ruochen95</span>
          </p>
          <p class="time">2016 年</p>
          <div class="project-list">
            <p class="subTitle">作品文件</p>
            <p>Build a Wikipedia Viewer: 接收用户数据，后请求维基百科官方RESTful API并动态展示到页面上</p>
            <p>Build a Pomodoro Clock: 番茄工作时钟的页面显示，使用了setInterval函数，具有提醒和统计的功能</p>
            <p>Build a Simon Game: 借助用户监听模拟了Simon Game：色块随机亮起，并能记录以及响应用户点击，如果用户点击正确，会延长随机序列，如果用户点击错误，会有提示。</p>
          </div>
        </div>
        <div><img src="../assets/img/quantification_logo_3.png"></div>
      </div>

    </section>
  </div>
</template>

<script>
  import axios from 'axios'
  import BasicInput from '../components/basicInput'

  export default {
    name: "edition",
    components: {
      BasicInput
    },
    data: function() {
      return {
        ResumeItems: [
          {
            content: ''
          },
          {
            content: ''
          }
        ],
        personInfo: {
          name: this.$store.state.personName
        },
        editCondition: {
          personInfo: false,
          selfIntro: false,
          workIntro: false,
        },

        personId: this.$route.query.user || 1
      }
    },
    computed: {
    },
    mounted() {
      this.init()
    },
    methods: {
      init: function() {
        let that = this;
        if (this.personId != 'new') {
          axios.get('http://0.0.0.0:5000/person/'+ this.personId +'/JSON')
            .then(function(response) {
              console.log(response.data.ResumeItems);
              that.ResumeItems = response.data.ResumeItems;
              that.personInfo = response.data.PersonInfo;
            })
        }
      },
      changeEditCondition: function() {
        this.editCondition.personInfo = true;
        this.$refs.editPersonInfo.focus(); // 存在问题
      },
      save: function() {
        this.editCondition.personInfo = false;
        axios.post('http://0.0.0.0:5000/person/saveName/'+ this.personId + '/' +this.personInfo.name)
          .then(function(response) {
            console.log(response.data);
          })
        if (this.editCondition.selfIntro == true) {
          this.editCondition.selfIntro = false;
          axios.post('http://0.0.0.0:5000/person/saveIntro/'+ this.personId, {
            content: this.ResumeItems[0].content
          })
            .then(function(response) {
              console.log(response.data);
            })
        }
        if (this.editCondition.workIntro == true) {
          this.editCondition.workIntro = false;
          axios.post('http://0.0.0.0:5000/person/saveWorkExperience/'+ this.personId, {
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
