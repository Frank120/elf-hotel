require("./user.scss");

module.exports = Elf.Component("user", {
    render : Elf.redactElement(require("./user.html"))
});