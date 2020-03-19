/*
* Generate component javascript with vuejs Copyright © beetlex.io 2019-2020 email:admin@beetlex.io 
*/
var _85968b977c204b91a63705a5189b926b='<div><auto-form ref="form" v-model="data" size="mini" :info="info"></auto-form><el-button @click="if($refs.form.success()){alert(JSON.stringify(data))}">确定</el-button>';
Vue.component('models-base',
    {
        data(){
            return {
                info: { items: [] },
                data: { },
            };
        },
        mounted(){
            var items = [];
            items.push({
                name: 'active', label: '活动名称', rules: [
                    { required: true, message: '请输入活动名称', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ]
            });
            items.push({
                name: 'region', label: '活动区域', type: 'select',
                data: [{ value: '广州' }, { value: '深圳' }, { value: '上海' }, { value: '北京' }],
                rules: [{ required: true, message: '请选择活动区域', trigger: 'change' }],
                eof: true
            });
            items.push({ name: 'starttime', label: '开启时间', type: 'date', rules: [{ type: 'date', required: true, message: '请选择日期', trigger: 'change' }] });
            items.push({ name: 'endtime', label: '-', type: 'date', eof: true, rules: [{ type: 'date', required: true, message: '请选择日期', trigger: 'change' }] });
            items.push({ name: 'instant', type: 'switch', label: '即时配送', eof: true });
            items.push({
                name: 'nature', type: 'checkbox', label: '活动性质',
                rules: [{ type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }],
                data: [{ value: '美食/餐厅线上活动' }, { value: '地推活动' }, { value: '线下主题活动' }, { value: '单纯品牌暴光' }], eof: true
            });
            items.push({
                name: 'resource', label: '特殊资源', type: 'radio', rules: [{ required: true, message: '请选择活动资源', trigger: 'change' }],
                data: [{ value: '线上品牌商赞助' }, { value: '线下场地免费' }], eof: true
            });
            items.push({ name: 'remark', label: '活动形式', type: 'remark', rules: [{ required: true, message: '请填写活动形式', trigger: 'blur' }] })
            this.info = { items: items}
        },
template:_85968b977c204b91a63705a5189b926b
});
