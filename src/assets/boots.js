"use strict";

Elf.Compiler.scss = function (value, modname) {
    return new Elf.Promise(function (resolve, reject) {
        Sass.compile(value, {
            style : Sass.style.expanded,
            indentedSyntax : false
        }, function (response) {
            if (response.status) {
                reject(response);
            } else {
                Elf.Compiler.css(response.text, modname).then(resolve);
            }
        });
    });
}

Elf.config({
    module : "commonjs"
});

Elf.require(document.currentScript.getAttribute("data-main"));