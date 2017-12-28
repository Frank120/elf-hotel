var User = require("../components/ui/user/user");
var HeroImage = require("../components/hero-image/hero-image");

Elf.render(Elf.createElement(User), document.querySelector(".nav-module"), true);
Elf.render(Elf.createElement(HeroImage), document.querySelector(".hero-module"), true);