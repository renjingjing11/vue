<template>
    <div>
       <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="id"
      label="id">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名">
    </el-table-column>
    <el-table-column
      prop="className"
      label="班级">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
        <!-- <el-button type="text" size="small" @click="alert()">编辑</el-button> -->
        <el-button type="text" @click="clickFn(scope.row)">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
  <el-form label-position="center" label-width="80px" :model="form">
        <el-form-item label="姓名">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="班级名称">
            <el-input v-model="form.className"></el-input>
        </el-form-item>
        <el-button type="primary"  size="medium" @click="clickAmand({name:form.name,id:form.id,className:form.className})">修改用户</el-button>
</el-form>
</el-dialog>
    </div>
</template>
<script>
import {mapState,mapActions} from "vuex";
export default {
  data(){
        return {
            form:{
                name:"",
                className:"",
                id:""
            }, 
             dialogFormVisible:false
        }
      
    },
    computed:{
        ...mapState({
            tableData:state=>state.user.list
        })
    },
    methods:{
        ...mapActions({   
            getList:"getList",
            deleteList:"deleteList",
            amend:"amend"
        }),
        handleClick(data){
           let id=data.id;
           this.deleteList(id);
        },
        clickFn(data){
          this.dialogFormVisible=true;
          this.form.name=data.name;
          this.form.className=data.className;
          this.form.id=data.id
        },
        clickAmand(data){
         console.log(data)
         let id=data.id;
         this.amend(data);
         this.dialogFormVisible=false;
        }
    },  
    created(){
         this.getList();
    }
}
</script>
