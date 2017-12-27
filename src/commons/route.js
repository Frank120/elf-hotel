var Mapping = [];
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
    },

    handlEvent : function (event) {
        event.stopPropagation();
        event.preventDefault();
        forth(this.propos.href);
    }
});

module.exports.RouterView = Elf.Component("router-view", {
    render : function () {
        return typeof ViewPort === "function" ? Elf.createElement(ViewPort) : null;
    }
});

module.exports.state = state;
module.exports.forth = forth;
module.exports.start = start;

function glob(expr) {
    return new RegExp("^" + expr.replace(".","\\.").replace("**", ".") + "$", "i");
}

function forth(path) {
    if (location.pathname !== path) {
        if (window.history &&
            window.history.pushState) {
            window.history.pushState(null, null, path);
            done(path);
        }
    } else {
        location.href = path;
    }
}

function done (path) {
    for (var i = 0; i < Mapping.length; i++) {
        var ns = Mapping[i];
        if (ns.path.test(path)) {
            return Elf.require(ns.temp).then(function (response) {
                ViewPort = response;
            });
        }
    }
    return Elf.promise.reject("No match router" + path + ".");
}

function start() {
    return Elf.attachEvent(window, 'popstate', function () {
        done(location.pathname)
    }),
    done(location.pathname);
}