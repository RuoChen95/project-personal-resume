<template>
  <div>
    <section>
      <div class="header">
        <p class="name">解若琛</p>
        <p class="place">浙江 杭州 | 计算机软件</p>
        <p class="education">教育背景：华北电力大学</p>
      </div>
    </section>
    <section id="self-intro">
      <p class="title">个人简介</p>
      <p class="intro">
        在比特大陆工作两年后，目前我有更大的理想希望能学习更加广泛更加具有影响力。所以我现在正在coursera上学习算法，在udacity上学习全栈开发。除此之外，我也正在计划于2020年去香港/新加坡进一步拓展自己的学历。在未来，我希望能够建造出属于自己的网络应用，类似于notion以及transfix，使用最先进的技术，来让人们更为高效的工作。
      </p>
    </section>
    <section id="work-intro">
      <div>
        <p class="title">工作经历</p>
        <div class="works">
          <div class="logo"><img src="../assets/work_logo_1.png"></div>
          <div class="des">
            <span class="title">Web前端工程师</span>
            <span class="company">Bitmain</span>
            <span class="time">2017 年 4 月 – 2018 年 12 月 · 1 年 9 个月</span>
            <span class="location">中国 北京</span>
            <span class="description">
              工作内容主要是公司官网商城的单页面重构工作，具体包括了商品展示以及推广项目、下单流程项目、个人中心以及售后服务项目以及H5移动端项目。在项目的进行过程中，我学到了如何使用单页面框架Vue.js构建可拓展的网页应用，如何和后端、UI以及产品共同工作以及使用jira进行敏捷开发。
            </span>
          </div>
        </div>
      </div>
    </section>
    <section id="education-intro">
      <p class="title">教育背景</p>
      <div class="edu">
        <div>
          <p class="place">华北电力大学</p>
          <p class="content">工学学士，环境科学专业，top20%</p>
          <p class="time">2013年 - 2017年</p>
          <p class="activity">社团活动：干事，学生会，华北电力大学，2013-2014</p>
        </div>
        <div><img src="../assets/education_logo_1.jpeg"></div>
      </div>
    </section>
    <section id="quantification-intro">
      <p class="title">资格认证</p>
      <div class="qua">
        <div>
          <p class="name">Full Stack Web Developer Nanodegree</p>
          <p class="code">
            <span class="authority">Udacity, </span>
            <span class="code">证书编号: 4TT6CGMD</span>
          </p>
          <p class="time">2019 年</p>
          <div class="project-list">
            <p class="subTitle">作品文件</p>
            <p>logs analysis: 使用了内部数据库信息来发现读者喜欢什么种类的文章</p>
            <p>item catalog: 一个简单网页服务，具有对于饭店以及其菜单的增删改查功能，用到了flask以及sqlAlchemy</p>
            <p>linux server configuration: 基本的linux服务器配置，使用了Apache、wsgi以及Flask</p>
          </div>
        </div>
        <div><img src="../assets/quantification_logo_1.png"></div>
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
            <p class="subTitle">作品文件</p>
            <p>divide-conquer: 分治算法：数组的倒置量、Karatsuba乘法；随机算法：最小切割量</p>
            <p>graphs-data-structures: 图搜索、最短路径算法、堆以及哈希表</p>
            <p>greedy: 贪心算法、最小生成树算法以及动态规划</p>
          </div>
        </div>
        <div><img src="../assets/quantification_logo_2.jpeg"></div>
      </div>

      <div class="qua">
        <div>
          <p class="name">Front end Certification</p>
          <p>
            <span class="authority">Freecodecamp, </span>
            <span class="code">证书编号: https://freecodecamp.cn/ruochen95</span>
          </p>
          <p class="time">2016 年</p>
        </div>
        <div><img src="../assets/quantification_logo_3.png"></div>
      </div>

    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
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
}
div.header {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  p {
    margin: 0;
  }
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
  p.education {
    margin-top: 10px;
    display: inline;
    font-size: 12px;
    line-height: 14px;
    color: #333;
    font-weight: normal;
  }
}
section {
  p.title {
    margin-bottom: 30px;
    font-size: 16px;
    font-weight: normal;
    line-height: 18px;
    color: #434649;
  }
}

section#self-intro {
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
      span.description {
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
    img {
      max-width: 60px;
      max-height: 60px;
    }
  }
}
#quantification-intro {
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
  div.project-list {
    margin-top: 15px;
    font-size: 13px;
  }
}
</style>
