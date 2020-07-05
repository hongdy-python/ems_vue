<template>
    <div id="wrap">
			<div id="top_content">
				<div id="header">
					<div id="rightheader">
						<p>
							2009/11/20
							<br />
							<el-button type="success" @click="quit" > 安全退出</el-button>
						</p>
					</div>
					<div id="topheader">
						<h1 id="title">
							<a href="#">main</a>
						</h1>
					</div>
					<div id="navigation">
					</div>
				</div>
				<div id="content">
					<p id="whereami">
					</p>
					<h1>
						Welcome! {{user_msg}}
					</h1>
					<table class="table">
						<tr class="table_header">
							<td>
								ID
							</td>
							<td>
								Name
							</td>
							<td>
								Photo
							</td>
							<td>
								Salary
							</td>
							<td>
								Age
							</td>
							<td>
								Operation
							</td>
						</tr>
						<tr v-for="(emp,index) in emp_list" :key="emp.id" :class="index%2==0?'row1':'row2'">
							<td>
								{{emp.id}}
							</td>
							<td>
								{{emp.emp_name}}
							</td>
							<td>
								<img :src="emp.img" style="height: 60px;">
							</td>
							<td>
								{{emp.salary}}
							</td>
							<td>
								{{emp.age_name}}
							</td>
							<td>
								<a href="javascript:;" @click="delemp(emp.id)">删除员工</a>&nbsp;
<!--                                <a href="">修改员工</a>-->
                                <router-link :to="'/update/'+emp.id">修改员工</router-link>
							</td>
						</tr>

					</table>
					<p>
<!--						<input type="button" class="button" value="Add Employee"/>-->
                        <el-button type="success" > <router-link to="/addemp">添加员工</router-link></el-button>
					</p>
				</div>
			</div>
			<div id="footer">
				<div id="footer_bg">
				ABC@126.com
				</div>
			</div>
		</div>
</template>

<script>
    export default {
        name: "Index",
        data(){
            return{
                user_msg:'',
                emp_list:'',
            }
        },
        methods:{
            quit(){
                if(confirm('是否退出')){
                    sessionStorage.clear();
                    this.$router.push("/login")
                }
            },
            findAllemp(){
                this.$axios.get("http://127.0.0.1:8000/api/emp/").then(res=>{
                    this.emp_list = res.data.results;
                }).catch(error=>{
                    this.$message.error("查询出错了");
                })

            },
            delemp(id){
                if(confirm('是否删除')){
                    this.$axios({
                    url : "http://127.0.0.1:8000/api/emp/"+`${id}`,
                    method : "delete",
                }).then(res=>{
                    //刷新页面
                    location.reload();
                }).catch(error=>{
                    this.$message.error("删除失败！")
                })
                }

            }

        },
        created() {
            let username = sessionStorage.getItem("user");
            this.user_msg = username;
            if (username){


            }else{
                this.$message.error('您还没有登录，请登录');
                this.$router.push("/login")
            }
            //调用findall
            this.findAllemp();
        }
    }
</script>

<style scoped>

</style>
