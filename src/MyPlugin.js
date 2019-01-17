let myOptions;
function MyPlugin(options){
    myOptions = options;
    return MyPlugin;
}

MyPlugin.install = function(Vue){
    Vue.mixin({
        created(){

            myOptions.forEach(opt => {
                if (this.$options.name === opt) {
                    console.log('mixin');
                    this.$store.dispatch('addByAct');
                }
            })
        }
    })
}
export default MyPlugin;
