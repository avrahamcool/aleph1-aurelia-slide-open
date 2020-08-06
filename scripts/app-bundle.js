var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('__dot_dot__/src/attributes/slide-open',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SlideOpenCustomAttribute = void 0;
    var SlideOpenCustomAttribute = (function () {
        function SlideOpenCustomAttribute(element, bindingEngine, queue) {
            this.bindingEngine = bindingEngine;
            this.queue = queue;
            this.opened = false;
            this.transition = "max-height 0.25s linear";
            this.element = element;
            this.element.style.overflow = "hidden";
        }
        SlideOpenCustomAttribute.prototype.attached = function () {
            var _this = this;
            this.setTransition("");
            this.setOpened(this.opened);
            this.queue.queueTask(function () {
                _this.setTransition(_this.transition);
                _this.resizeObserver = _this.bindingEngine.propertyObserver(_this.element, "scrollHeight")
                    .subscribe(function () { return _this.setOpened(_this.opened); });
            });
        };
        SlideOpenCustomAttribute.prototype.detached = function () {
            this.resizeObserver && this.resizeObserver.dispose();
        };
        SlideOpenCustomAttribute.prototype.setOpened = function (newValue) {
            this.element.style.maxHeight = newValue ? this.element.scrollHeight + "px" : "0px";
        };
        SlideOpenCustomAttribute.prototype.setTransition = function (newValue) {
            console.log("newValue", newValue);
            this.element.style.transition = newValue;
        };
        __decorate([
            aurelia_framework_1.bindable({ primaryProperty: true, changeHandler: "setOpened" }),
            __metadata("design:type", Boolean)
        ], SlideOpenCustomAttribute.prototype, "opened", void 0);
        __decorate([
            aurelia_framework_1.bindable({ changeHandler: "setTransition" }),
            __metadata("design:type", String)
        ], SlideOpenCustomAttribute.prototype, "transition", void 0);
        SlideOpenCustomAttribute = __decorate([
            aurelia_framework_1.autoinject,
            __metadata("design:paramtypes", [Element, aurelia_framework_1.BindingEngine, aurelia_framework_1.TaskQueue])
        ], SlideOpenCustomAttribute);
        return SlideOpenCustomAttribute;
    }());
    exports.SlideOpenCustomAttribute = SlideOpenCustomAttribute;
});
;
define('__dot_dot__/src/index',["require", "exports", "aurelia-pal"], function (require, exports, aurelia_pal_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.configure = void 0;
    function configure(config) {
        config.globalResources([
            aurelia_pal_1.PLATFORM.moduleName("./attributes/slide-open"),
        ]);
    }
    exports.configure = configure;
});
;
define('app',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.App = void 0;
    var App = (function () {
        function App() {
        }
        return App;
    }());
    exports.App = App;
});
;
define('text!app.css',[],function(){return "* {\n\tmargin: 0;\n\tbox-sizing: border-box;\n}\n\nhtml,\nbody {\n\theight: 100%;\n}\n\nmain {\n\tbox-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n}\n\n.slider {\n\tbackground-color: lightpink;\n}\n\n.accordion-title {\n\tbackground-color: lightblue;\n\tcursor: pointer;\n\tmargin: 0.5rem 0;\n}\n\n.accordion-body {\n\tbackground-color: aliceblue;\n}\n";});;
define('text!app.html',[],function(){return "<template><require from=./app.css></require><div class=\"a1-column a1-spaced-items a1-padding\"><main class=\"a1-column a1-spaced-items a1-padding\"><code class=a1-self-center>&lt;div slide-open.bind=\"defaultSmall\"&gt;...&lt;/div&gt;</code><button click.delegate=\"defaultSmall = !defaultSmall\">open/close</button><div slide-open.bind=defaultSmall><div class=\"slider a1-padding\">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, ex id. Ducimus nesciunt quos nostrum, provident molestiae cumque vel incidunt dolor quaerat doloremque natus harum velit unde, nobis quasi. Nulla.</div></div></main><main class=\"a1-column a1-spaced-items a1-padding\"><let start-opened-large.bind=true></let><code class=a1-self-center>&lt;let start-opened-large.bind=\"true\"&gt;&lt;/let&gt;<br>&lt;div slide-open.bind=\"startOpenedLarge\"&gt;...&lt;/div&gt;</code><button click.delegate=\"startOpenedLarge = !startOpenedLarge\">open/close</button><div slide-open.bind=startOpenedLarge><div class=\"slider a1-padding\">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, ex id. Ducimus nesciunt quos nostrum, provident molestiae cumque vel incidunt dolor quaerat doloremque natus harum velit unde, nobis quasi. Nulla. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, ex id. Ducimus nesciunt quos nostrum, provident molestiae cumque vel incidunt dolor quaerat doloremque natus harum velit unde, nobis quasi. Nulla. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, ex id. Ducimus nesciunt quos nostrum, provident molestiae cumque vel incidunt dolor quaerat doloremque natus harum velit unde, nobis quasi. Nulla. Lorem ipsum dolor sit amet consectetur, adipisicing elit.</div></div></main><main class=\"a1-column a1-spaced-items a1-padding\"><let complex-settings.bind=true></let><code class=a1-self-center>&lt;let complex-settings.bind=\"true\"&gt;&lt;/let&gt;<br>&lt;div slide-open=\"opened.bind: complexSettings; transition.bind: 'max-height 2s ease-in-out'\"&gt;...&lt;/div&gt;</code><button click.delegate=\"complexSettings = !complexSettings\">open/close</button><div slide-open=\"opened.bind: complexSettings; transition.bind: 'max-height 2s ease-in-out'\"><div class=\"slider a1-padding\">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, ex id. Ducimus nesciunt quos nostrum, provident molestiae cumque vel incidunt dolor quaerat doloremque natus harum velit unde, nobis quasi. Nulla. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, ex id. Ducimus nesciunt quos nostrum, provident molestiae cumque vel incidunt dolor quaerat doloremque natus harum velit unde, nobis quasi. Nulla. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, ex id. Ducimus nesciunt quos nostrum, provident molestiae cumque vel incidunt dolor quaerat doloremque natus harum velit unde, nobis quasi. Nulla. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, ex id. Ducimus nesciunt quos nostrum, provident molestiae cumque vel incidunt dolor quaerat doloremque natus harum velit unde, nobis quasi. Nulla. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, ex id. Ducimus nesciunt quos nostrum, provident molestiae cumque vel incidunt dolor quaerat doloremque natus harum velit unde, nobis quasi. Nulla. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, ex id. Ducimus nesciunt quos nostrum, provident molestiae cumque vel incidunt dolor quaerat doloremque natus harum velit unde, nobis quasi. Nulla. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, ex id. Ducimus nesciunt quos nostrum, provident molestiae cumque vel incidunt dolor quaerat doloremque natus harum velit unde, nobis quasi. Nulla. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, ex id. Ducimus nesciunt quos nostrum, provident molestiae cumque vel incidunt dolor quaerat doloremque natus harum velit unde, nobis quasi. Nulla. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, ex id. Ducimus nesciunt quos nostrum, provident molestiae cumque vel incidunt dolor quaerat doloremque natus harum velit unde, nobis quasi. Nulla. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, ex id. Ducimus nesciunt quos nostrum, provident molestiae cumque vel incidunt dolor quaerat doloremque natus harum velit unde, nobis quasi. Nulla. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, ex id. Ducimus nesciunt quos nostrum, provident molestiae cumque vel incidunt dolor quaerat doloremque natus harum velit unde, nobis quasi. Nulla.</div></div></main></div><div class=\"a1-column a1-spaced-items a1-padding\"><let accordion.bind=3></let><code class=a1-self-center>&lt;let accordion.bind=\"3\"&gt;&lt;/let&gt;<br>&lt;div slide-open.bind=\"accordion === 1\"&gt;...&lt;/div&gt;<br>&lt;div slide-open.bind=\"accordion === 2\"&gt;...&lt;/div&gt;<br>&lt;div slide-open.bind=\"accordion === 3\"&gt;...&lt;/div&gt;<br>&lt;div slide-open.bind=\"accordion === 4\"&gt;...&lt;/div&gt;</code><main class=\"a1-column a1-padding\"><h3 class=\"accordion-title a1-padding\" click.delegate=\"accordion = 1\">Accordion 1</h3><div slide-open.bind=\"accordion === 1\"><div class=\"accordion-body a1-padding\">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, porro quisquam maxime, inventore exercitationem id laboriosam natus obcaecati sequi excepturi eos explicabo voluptatibus voluptas perferendis unde. Temporibus aliquam officia dignissimos? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, porro quisquam maxime, inventore exercitationem id laboriosam natus obcaecati sequi excepturi eos explicabo voluptatibus voluptas perferendis unde. Temporibus aliquam officia dignissimos? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, porro quisquam maxime, inventore exercitationem id laboriosam natus obcaecati sequi excepturi eos explicabo voluptatibus voluptas perferendis unde. Temporibus aliquam officia dignissimos? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, porro quisquam maxime, inventore exercitationem id laboriosam natus obcaecati sequi excepturi eos explicabo voluptatibus voluptas perferendis unde. Temporibus aliquam officia dignissimos? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, porro quisquam maxime, inventore exercitationem id laboriosam natus obcaecati sequi excepturi eos explicabo voluptatibus voluptas perferendis unde. Temporibus aliquam officia dignissimos? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, porro quisquam maxime, inventore exercitationem id laboriosam natus obcaecati sequi excepturi eos explicabo voluptatibus voluptas perferendis unde. Temporibus aliquam officia dignissimos?</div></div><h3 class=\"accordion-title a1-padding\" click.delegate=\"accordion = 2\">Accordion 2</h3><div slide-open.bind=\"accordion === 2\"><div class=\"accordion-body a1-padding\">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, porro quisquam maxime, inventore exercitationem id laboriosam natus obcaecati sequi excepturi eos explicabo voluptatibus voluptas perferendis unde. Temporibus aliquam officia dignissimos? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, porro quisquam maxime, inventore exercitationem id laboriosam natus obcaecati sequi excepturi eos explicabo voluptatibus voluptas perferendis unde. Temporibus aliquam officia dignissimos?</div></div><h3 class=\"accordion-title a1-padding\" click.delegate=\"accordion = 3\">Accordion 3</h3><div slide-open.bind=\"accordion === 3\"><div class=\"accordion-body a1-padding\">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, porro quisquam maxime, inventore exercitationem id laboriosam natus obcaecati sequi excepturi eos explicabo voluptatibus voluptas perferendis unde. Temporibus aliquam officia dignissimos?</div></div><h3 class=\"accordion-title a1-padding\" click.delegate=\"accordion = 4\">Accordion 4</h3><div slide-open.bind=\"accordion === 4\"><div class=\"accordion-body a1-padding\">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, porro quisquam maxime, inventore exercitationem id laboriosam natus obcaecati sequi excepturi eos explicabo voluptatibus voluptas perferendis unde. Temporibus aliquam officia dignissimos? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, porro quisquam maxime, inventore exercitationem id laboriosam natus obcaecati sequi excepturi eos explicabo voluptatibus voluptas perferendis unde. Temporibus aliquam officia dignissimos? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, porro quisquam maxime, inventore exercitationem id laboriosam natus obcaecati sequi excepturi eos explicabo voluptatibus voluptas perferendis unde. Temporibus aliquam officia dignissimos?</div></div></main></div></template>";});;
define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});
;
define('main',["require", "exports", "./environment", "aleph1-layout/dist/main.css"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.configure = void 0;
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature("resources");
        aurelia.use.developmentLogging(environment_1.default.debug ? "debug" : "warn");
        if (environment_1.default.testing) {
            aurelia.use.plugin("aurelia-testing");
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

define('aleph1-layout/dist/main.css',['__inject_css__','text!aleph1-layout/dist/main.css'],function(i,c){i(c,'_au_css:aleph1-layout/dist/main.css');});

//# sourceMappingURL=app-bundle.js.map