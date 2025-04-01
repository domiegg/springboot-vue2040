const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootrix1z/",
            name: "springbootrix1z",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootrix1z/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "健身俱乐部网站"
        } 
    }
}
export default base
