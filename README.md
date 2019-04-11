# project-personal-resume
It's a vue app coded by Ruochen Xie, which has the function of dynamic creating personal resume.

This is a personal project.

*STATUS: Unfinished*

## 为什么要做这个项目？
 - social: 帮助程序员填写简历，目前linkin、超级CV等产品都没有符合自己的需求
 - personal: 个人练习全栈知识

## Example of output
If running locally, it's a website which has a url: http://192.168.0.101:8081/.

Edition function: http://192.168.0.101:8081/edition?user=1

Resume List: http://192.168.0.101:8081/view

## Design of the code
 1. The basic HTML in src/views/Home.vue and the browser loaded [PDF file](./Personal%20Resume.pdf) (finished)
 2. Dynamic edit the content(finished)
 3. Service connection and DB Storage(finished)
 4. Investigate OAuth and build third-party sign-in(pending)
 5. Prepare for Deployment

## Improvements
 1. Format the PDF from server side
 2. Progress bar
 3. Tree format

## How to run it

### Setup Project:
  ```
    npm run dev
  ```
  
### Launching the project locally:
  ```
    $ npm run serve
  ```
  
### Launching the server side

 - Direction: https://github.com/RuoChen95/project-personal-resume-server

## Application Code Style

## Source
  - Vue-router History mode - 防止url最后面出现哈希：https://router.vuejs.org/zh/guide/essentials/history-mode.html
  - Axios: https://github.com/axios/axios
  - Vuex-persist: https://www.npmjs.com/package/vuex-persist
  - Others:
    - Deal Error Log: Cannot set property 'xx' of undefined: https://stackoverflow.com/questions/43613115/vue-cannot-set-property-of-undefined-in-promise