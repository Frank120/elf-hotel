require("./hero-image.scss");

module.exports = Elf.Component("hero-image", {
    render : Elf.redactElement(require("./hero-image.html"))
});