<template>
    <div class="login-wrap">
        <div class="ms-login">
            <div class="ms-title">系统</div>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="ms-content">
                <el-form-item prop="username">
                    <el-input v-model="ruleForm.username" placeholder="username">
                        <template #prepend>
                            <el-button icon="el-icon-user"></el-button>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" placeholder="password" v-model="ruleForm.password"
                        @keyup.enter="submitForm('ruleForm')">
                        <template #prepend>
                            <el-button icon="el-icon-lock"></el-button>
                        </template>
                    </el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="success" @click="submitForm('ruleForm')">登录</el-button>
                </div>
                <el-button type="primary" @click="toRegister()" style="width: 130px">注册</el-button>
              <el-button type="danger" @click="adminSubmitForm('ruleForm')" style="width: 150px">管理员登录</el-button>
            </el-form>
        </div>
    </div>
</template>

<script>
import { ref, reactive } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";

export default {
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        username: 'zhangsan',
        password: '123456'
      },
      rules: {
        password: [
          {validator: validatePass, trigger: 'blur'}
        ],
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
          {min: 3, max: 12, message: '长度在 3 到 12 个字符', trigger: 'blur'}
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      const _this = this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 提交逻辑
          this.$http.post('/user/login', this.ruleForm).then((res) => {
            console.log(res)
            const token = res.headers['authorization']
            _this.$store.commit('SET_TOKEN', token)
            _this.$store.commit('SET_USERINFO', res.data.data)
            console.log( 'SET_USERINFO:')
            console.log( res.data.data)
            _this.$router.push("/")
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    adminSubmitForm(formName) {
      const _this = this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 提交逻辑
          this.$http.post('/admin/login', this.ruleForm).then((res) => {
            console.log(res)
            const token = res.headers['authorization']
            _this.$store.commit('SET_TOKEN', token)
            _this.$store.commit('SET_USERINFO', res.data.data)
            console.log( 'SET_USERINFO:')
            console.log( res.data.data)
            _this.$router.push("/admin")
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    toRegister(){
      this.$router.push('/register')
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
//     setup() {
//     const _this = this
//         const router = useRouter();
//         const param = reactive({
//             username: "zhangsan",
//             password: "123456",
//         });
//
//         const rules = {
//             username: [
//                 {
//                     required: true,
//                     message: "请输入用户名",
//                     trigger: "blur",
//                 },
//             ],
//             password: [
//                 { required: true, message: "请输入密码", trigger: "blur" },
//             ],
//         };
//         const login = ref(null);
//         const submitForm = () => {
//
//             login.value.validate((valid) => {
//
//                 if (valid) {
//                   console.log("success")
//                   this.$http.post('/user/login',param).then((res)=>{
//                     console.log("return success")
//                     const token = res.headers['authorization']
//                     _this.$store.commit('SET_TOKEN', token)
//                     _this.$store.commit('SET_USERINFO', res.data.data)
//                     _this.$router.push("/")
//                   })
//                   //   ElMessage.success("登录成功");
//                   //   localStorage.setItem("ms_username", param.username);
//                   //   router.push("/");
//                 } else {
//                     ElMessage.error("登录失败");
//                     return false;
//                 }
//             });
//         };
//
//         const store = useStore();
//         store.commit("clearTags");
//
//         return {
//             param,
//             rules,
//             login,
//             submitForm,
//         };
//     },
// };
</script>

<style scoped>
.login-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url(../assets/img/login-bg.jpeg);
    background-size: 100%;
}
.ms-title {
    width: 100%;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    color: #fff;
    border-bottom: 1px solid #ddd;
}
.ms-login {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 350px;
    margin: -190px 0 0 -175px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.3);
    overflow: hidden;
}
.ms-content {
    padding: 30px 30px;
}
.login-btn {
    text-align: center;
}
.login-btn button {
    width: 100%;
    height: 36px;
    margin-bottom: 10px;
}
.login-tips {
    font-size: 12px;
    line-height: 30px;
    color: #fff;
}
</style>