const install =function(Vue){
    const Bus = new Vue({
        methods:{
            emit (event,...args){
                this.$emit(event,...args);
            },
            on (event,callback){
                this.$on(event,callback);
            },
            off (event,callback){
                this.$emit(event,callback);
            }
        }
    })
    Vue.prototype.$bus = Bus;
};

export default install;