var mapping = [];
var ViewPort = void 0;

module.exports.RouterLink = Elf.Component("router-link", {
    render : function () {
        return Elf.createElement("a", Elf.assign({ ref : "link" }, this.props), this.propos.children);
    },

    onInitial : function () {
        Elf.attachEvent(this.refs.link, "click", this);
    },

    onDispose  : function () {
        Elf.detachEvent(this.refs.link, "click", this);
    }
});

