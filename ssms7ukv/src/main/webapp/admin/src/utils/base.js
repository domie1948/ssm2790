const base = {
    get() {
        return {
            url : "http://localhost:8080/ssms7ukv/",
            name: "ssms7ukv",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssms7ukv/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "新锐台球厅管理系统"
        } 
    }
}
export default base
