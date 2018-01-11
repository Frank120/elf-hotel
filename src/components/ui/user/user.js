require("./user.scss");
let Util = require("../../../assets/javascripts/ui/util");

module.exports = Elf.Component("user", {

    constructor : function () {
       // this.headerStyle = {};
       this.opt = ["a", 1];
    },
    
    onInitial : function () {
        Elf.attachEvent(window, "scroll", this);
        Util._RegExp();
    },

    onDispose : function () {
        Elf.detachEvent(window, "scroll", this);
    },
    /**
     * @param {Elf.Event<HTMLElement>} event
     */
    handleEvent : function (event) {

        var _scrollHeight = this._getScrollTop();
        /**
         * @type {HTMLElement}
         */
        var _barHeight    = this.refs.nav;
        if (_scrollHeight && _scrollHeight > 500) {
            _barHeight.style.cssText = "background: lightgreen; position: fixed; top : 0; left : 0"
        }

        if (_scrollHeight && _scrollHeight < 200) {
            _barHeight.style.cssText="background: transparent; position: normal;"
        }
    },

    render : Elf.redactElement(require("./user.html")),

    _getScrollTop : function () {
        let _scrollTop = 0;
        if (document.documentElement && document.documentElement.scrollTop) {
            _scrollTop = document.documentElement.scrollTop;
        }
        else if ( doucment && doucment.body) {
            _scrollTop = document.body.scrollTop;
        }
        return _scrollTop;
    } 
});