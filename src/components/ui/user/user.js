require("./user.scss");

module.exports = Elf.Component("user", {

    constructor : function () {
       // this.headerStyle = {};
    },
    
    onInitial : function () {
        Elf.attachEvent(window, "scroll", this);
    },

    onDispose : function () {
        Elf.detachEvent(window, "scroll", this);
    },
    /**
     * @param {Elf.Event<HTMLElement>} event
     */
    handleEvent : function (event) {
        var _scrollHeifht = document.body.offsetHeight;
        /**
         * @type {HTMLElement}
         */
        var _barHright    = this.refs.nav;
        if (_scrollHeifht && _scrollHeifht > 200) {
            _barHright.style.cssText = "background: red; position: fixed; top : 0; left : 0"
            
        }
    },

    render : Elf.redactElement(require("./user.html"))
});