require("./user.scss");

module.exports = Elf.Component("user", {
    
    onInitial : function () {
        Elf.attachEvent(window, "scroll", this);
    },

    onDispose : function () {
        Elf.detachEvent(window, "scroll", this);
    },

    handleEvent : function (event) {
        // var _scrollHeifht = document.body.offsetHeight;
        // var _barHright    = this.refs.nav.height();
        // if (_scrollHeifht) {
            
        // }
        console.log("test");
    },

    render : Elf.redactElement(require("./user.html"))
});