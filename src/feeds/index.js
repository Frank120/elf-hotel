var User = require("../components/ui/user/user");
var HeroImage = require("../components/hero-image/hero-image");
var LoopImage = require("../components/loopImage/loop-image");

Elf.render(Elf.createElement(User), document.querySelector(".nav-module"), true);
Elf.render(Elf.createElement(HeroImage), document.querySelector(".hero-module"), true);
Elf.render(Elf.createElement(LoopImage), document.querySelector(".loop-image"), true);