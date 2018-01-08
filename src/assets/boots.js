"use strict";

// Elf.Compiler.scss = function (value, modname) {
//     return new Elf.Promise(function (resolve, reject) {
//         Sass.compile(value, {
//             style : Sass.style.expanded,
//             indentedSyntax : false
//         }, function (response) {
//             if (response.status) {
//                 reject(response);
//             } else {
//                 Elf.Compiler.css(response.text, modname).then(resolve);
//             }
//         });
//     });
// }

Elf.config({
    mapping : {
        "sass" : "/src/assets/javascripts/libs/sass.sync.min.js"
    } 
});
Elf.require(document.currentScript.getAttribute("data-main"));