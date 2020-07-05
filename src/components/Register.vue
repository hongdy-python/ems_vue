<template>

    <div id="wrap">
			<div id="top_content">
					<div id="header">
						<div id="rightheader">
							<p>
								2009/11/20
								<br />
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
						注册
					</h1>
						<table cellpadding="0" cellspacing="0" border="0"
							class="form_table">
							<tr>
								<td valign="middle" align="right">
									用户名:
								</td>
								<td valign="middle" align="left">
									<input type="text" class="inputgri" name="username" v-model="username" />
								</td>
							</tr>
							<tr>
								<td valign="middle" align="right">
									真实姓名:
								</td>
								<td valign="middle" align="left">
									<input type="text" class="inputgri" name="name" v-model="real_name" />
								</td>
							</tr>
							<tr>
								<td valign="middle" align="right">
									密码:
								</td>
								<td valign="middle" align="left">
									<input type="password" class="inputgri" name="pwd" v-model="password" />
								</td>
							</tr>
                            <tr>
								<td valign="middle" align="right">
									确认密码:
								</td>
								<td valign="middle" align="left">
									<input type="password" class="inputgri" name="re_pwd" v-model="re_password" />
								</td>
							</tr>
							<tr>
								<td valign="middle" align="right">
									性别:
								</td>
								<td valign="middle" align="left">
									男
									<input type="radio" class="inputgri" name="sex" value="m" checked="checked" @click="gender=0"/>
									女
									<input type="radio" class="inputgri" name="sex" value="f" @click="gender=1"/>
								</td>
							</tr>

						</table>
						<p>
<!--							<input type="submit" class="button" value="提交注册" />-->
                            <el-button type="success" @click="user_register"> 提交注册</el-button>
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
        name: "Register",
        data(){
            return{
                username:'',
                real_name:'',
                password:'',
                re_password: '',
                gender:0,
            }
        },
        methods:{
            //向后端提交注册请求
            user_register(){
                this.$axios({
                    url:"http://127.0.0.1:8000/api/user/",
                    method:"post",
                    data:{
                        username:this.username,
                        real_name:this.real_name,
                        password:this.password,
                        gender:this.gender,
                        re_password:this.re_password
                    }
                }).then(res=>{
                    console.log(res.data['message']);
                    //如果创建成功，跳转到登录页面
                    if(res.data['message']){
                        this.$message("注册成功");
                        this.$router.push("/login");
                    }else{
                        this.$message.error("密码不一致")
                    }
                }).catch(error=>{
                    console.log(error)
                    this.$message.error("用户注册信息填写错误")
                })
            }
        }
    }
</script>

<style scoped>

</style>
