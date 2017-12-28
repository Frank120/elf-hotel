require("./user.scss");

module.exports = Elf.Component("user", {
    
    onInitial : function () {
        Elf.attachEvent(window, "onscroll ", this.__animate());
    },

    onDispose : function () {
        Elf.detachEvent(window, "onscroll", this.__animate());
    },

    __animate : function () {
        var _scrollHeifht = document.body.offsetHeight;
        var _barHright    = this.refs.nav.height();
        if (_scrollHeifht)
    },

    render : Elf.redactElement(require("./user.html"))
});