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
								<a href="#">Main</a>
							</h1>
						</div>
						<div id="navigation">
						</div>
					</div>
				<div id="content">
					<p id="whereami">
					</p>
					<h1>
						update Emp info: {{$route.params.id}}
					</h1>
<!--					<form action="emplist.html" method="post"  >-->
						<table cellpadding="0" cellspacing="0" border="0"
							class="form_table">
							<tr>
								<td valign="middle" align="right">
									id:
								</td>
								<td valign="middle" align="left">
                                    {{$route.params.id}}
								</td>
							</tr>
							<tr>
								<td valign="middle" align="right">
									name:
								</td>
								<td valign="middle" align="left">
									<input type="text" class="inputgri" name="name" v-model="emp_name"/>
								</td>
							</tr>
							<tr>
								<td valign="middle" align="right">
									photo:
								</td>
								<td valign="middle" align="left">
									<input type="file" name="photo" ref="photo"/>
								</td>
							</tr>
							<tr>
								<td valign="middle" align="right">
									salary:
								</td>
								<td valign="middle" align="left">
									<input type="text" class="inputgri" name="salary" v-model="salary"/>
								</td>
							</tr>
							<tr>
								<td valign="middle" align="right">
									age:
								</td>
								<td valign="middle" align="left">
									<input type="text" class="inputgri" name="age" v-model="age"/>
								</td>
							</tr>
						</table>
						<p>
							<input type="submit" class="button" value="更新" @click="update()"/>
						</p>
<!--					</form>-->
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
        name: "Update",
        data(){
            return{
                emp_id:'',
                emp_name:'',
                salary:'',
                age:'',

            }

        },
        methods:{
            //获取id
            get_emp_id(){
                let emp_id = this.$route.params.id;
                this.$axios.get('http://127.0.0.1:8000/api/emp/'+`${emp_id}`).then(res=>{
                    console.log(res.data.results);
                    this.emp_name = res.data.results.emp_name;
                    this.salary = res.data.results.salary;
                    this.age = res.data.results.age;
                    console.log(this.emp)
            }).catch(error=>{
                    this.$message.error("出错了");

            })
            },
           update(){
                console.log(123456789);
                let emp_id = this.$route.params.id;
                console.log(1);
                // let photo = this.$refs.photo.files[0];
                let photo = this.$refs.photo.files[0];
                console.log(2);
                let formData = new FormData();
                console.log(3);
                formData.append("emp_name",this.emp_name);
                formData.append("img",photo);
                formData.append("salary",this.salary);
                formData.append("age",this.age);
                console.log(132456);
                this.$axios({
                    url : "http://127.0.0.1:8000/api/emp/"+`${emp_id}`,
                    method : "patch",
                    data : formData,
                    headers:{
                        'content-type': 'multipart/form-data'
                    }
                }).then(res=>{
                    this.$router.push("/index")
                }).catch(error=>{
                    this.$message.error("修改失败")
                })
            }
           },

        created() {
            this.get_emp_id();

        }
    }
</script>

<style scoped>

</style>
