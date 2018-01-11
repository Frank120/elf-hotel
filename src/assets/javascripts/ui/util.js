

module.exports = {

    // opt is array
    _createObj: function (opt) {
        let _Obj = {};
        _Obj[opt[0]] = opt[1];
        return _Obj;
    },

    _RegExp : function (opt) {
        var str = 'welcome to microsoft';
        str = str + 'we proud to annours that microsoft';
        str = str + 'one of the largest web developer sites in the world';
        console.log(str.replace(/microsoft/g, 'fuck noble '));
    }
};