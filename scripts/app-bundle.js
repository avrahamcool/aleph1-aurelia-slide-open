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
            var _this = this;
            if (newValue && !this.element.scrollHeight) {
                this.queue.queueTask(function () { return _this.setOpened(newValue); });
                return;
            }
            this.element.style.maxHeight = newValue ? this.element.scrollHeight + "px" : "0px";
        };
        SlideOpenCustomAttribute.prototype.setTransition = function (newValue) {
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
            aurelia_pal_1.PLATFORM.moduleName("./attributes/slide-open")
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
define('text!app.css',[],function(){return "*,\r\n*::before,\r\n*::after {\r\n\tbox-sizing: inherit;\r\n}\r\n\r\nhtml {\r\n\tfont-family: \"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n\tbox-sizing: border-box;\r\n}\r\n\r\nhtml,\r\nbody,\r\ndiv,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n\r\np {\r\n\tmargin: 3px 0;\r\n}\r\n\r\nhtml,\r\nbody {\r\n\theight: 100%\r\n}\r\n\r\nheader {\r\n\tbackground-color: #f4f4f4;\r\n\tborder-bottom: 1px solid black;\r\n}\r\n\r\nimg {\r\n\tmax-height: 50px;\r\n\twidth: auto;\r\n}\r\n\r\n.card {\r\n\tbox-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\r\n\tdisplay: grid;\r\n\tgap: 1rem;\r\n\tgrid-template-columns: 1fr 2fr;\r\n\tmin-height: 250px;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n\t.card {\r\n\t\tgrid-template-columns: 1fr;\r\n\t}\r\n}\r\n\r\n.card> :first-child {\r\n\tbackground-color: rgba(0, 0, 255, 0.05);\r\n\tmin-width: 300px;\r\n}\r\n\r\n.slider {\r\n\tbackground-color: rgba(0, 255, 0, 0.05);\r\n}\r\n\r\n.accordion-title {\r\n\tbackground-color: lightblue;\r\n\tcursor: pointer;\r\n\tmargin: 0.5rem 0;\r\n}\r\n\r\n.accordion-body {\r\n\tbackground-color: aliceblue;\r\n}\r\n";});;
define('text!app.html',[],function(){return "<template><require from=./app.css></require><header class=\"a1-row a1-padding a1-spaced-items a1-justify-items a1-center-items-v\"><h1 class=\"a1-row a1-spaced-items a1-center-items-v\"><img src=./Aleph1.png alt=icon> aleph1-aurelia-slide-open Demo</h1><p>Made to test &nbsp;<a href=https://github.com/avrahamcool/aleph1-aurelia-slide-open>aleph1-aurelia-slide-open</a>&nbsp; by&nbsp;<a href=https://github.com/avrahamcool/ >Essoudry Avraham</a>.</p></header><div class=\"a1-long a1-column a1-elastic a1-padding a1-spaced-items\"><div class=\"card a1-padding\"><div class=\"a1-padding a1-column a1-spaced-items\"><div class=\"a1-row a1-spaced-items\"><h3 class=\"a1-long card-title\">Default usage</h3><button click.delegate=\"simple = !simple\">${simple ? 'close' : 'open'}</button></div><p>binding to a single boolean property. defaults to animate vertically in 0.25s</p><code>&lt;div slide-open.bind=\"someProperty\"&gt;...&lt;/div&gt;</code></div><div slide-open.bind=simple><div class=\"a1-padding slider\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dolore harum quidem nisi aliquid voluptas. Deleniti aliquid nemo nesciunt, ab sed aspernatur impedit, eveniet inventore ut explicabo architecto autem, possimus id veritatis eos! Illum iste laboriosam voluptates ipsum, pariatur cum eius accusantium ullam numquam illo animi ex, possimus tempore, fugit aut quis ad? Iure beatae eligendi minus aspernatur repellendus, iste et nulla alias praesentium magni laudantium id, itaque est perferendis perspiciatis debitis consequatur omnis nemo ab asperiores maiores ea maxime nostrum! Nihil deserunt magnam mollitia corporis ipsa ratione ducimus dolor sapiente possimus autem, beatae, reprehenderit iusto eos voluptate doloribus aliquam voluptatibus dolore error ipsum culpa facere eveniet. Aspernatur laudantium quasi quis similique repudiandae, architecto, asperiores dignissimos ab esse quisquam, quas quo illo et eos aperiam distinctio. Harum nam quibusdam aperiam impedit eaque nostrum consectetur ex repudiandae illum alias, pariatur, quas ratione delectus quis nesciunt molestiae. Beatae perspiciatis enim qui nemo laborum sequi, asperiores inventore earum? Fugiat quos, numquam ullam error placeat excepturi est! Soluta incidunt adipisci minus, itaque distinctio necessitatibus! Saepe corporis dicta quos, nobis eaque inventore officia consectetur magnam. Nulla perferendis fuga natus quasi praesentium deserunt iste adipisci pariatur amet? Nisi obcaecati rerum fugiat, eos eum aperiam animi voluptas!</div></div></div><div class=\"card a1-padding\"><let override.bind=true></let><div class=\"a1-padding a1-column a1-spaced-items\"><div class=\"a1-row a1-spaced-items\"><h3 class=\"a1-long card-title\">Override the defaults</h3><button click.delegate=\"override = !override\">${override ? 'close' : 'open'}</button></div><p>you can override the defaults, by passing additional data to the binding. in this demo we also start with a truthy value in the `opened` variable</p><code>&lt;div slide-open=\"opened.bind: someProperty; transition.bind: 'max-height 1s ease-in-out'\"&gt;...&lt;/div&gt;</code></div><div slide-open=\"opened.bind: override; transition.bind: 'max-height 1s ease-in-out'\"><div class=\"a1-padding slider\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dolore harum quidem nisi aliquid voluptas. Deleniti aliquid nemo nesciunt, ab sed aspernatur impedit, eveniet inventore ut explicabo architecto autem, possimus id veritatis eos! Illum iste laboriosam voluptates ipsum, pariatur cum eius accusantium ullam numquam illo animi ex, possimus tempore, fugit aut quis ad? Iure beatae eligendi minus aspernatur repellendus, iste et nulla alias praesentium magni laudantium id, itaque est perferendis perspiciatis debitis consequatur omnis nemo ab asperiores maiores ea maxime nostrum! Nihil deserunt magnam mollitia corporis ipsa ratione ducimus dolor sapiente possimus autem, beatae, reprehenderit iusto eos voluptate doloribus aliquam voluptatibus dolore error ipsum culpa facere eveniet. Aspernatur laudantium quasi quis similique repudiandae, architecto, asperiores dignissimos ab esse quisquam, quas quo illo et eos aperiam distinctio. Harum nam quibusdam aperiam impedit eaque nostrum consectetur ex repudiandae illum alias, pariatur, quas ratione delectus quis nesciunt molestiae. Beatae perspiciatis enim qui nemo laborum sequi, asperiores inventore earum? Fugiat quos, numquam ullam error placeat excepturi est! Soluta incidunt adipisci minus, itaque distinctio necessitatibus! Saepe corporis dicta quos, nobis eaque inventore officia consectetur magnam. Nulla perferendis fuga natus quasi praesentium deserunt iste adipisci pariatur amet? Nisi obcaecati rerum fugiat, eos eum aperiam animi voluptas!</div></div></div><div class=\"card a1-padding a1-elastic\"><let accordion.bind=3></let><div class=\"a1-padding a1-column a1-spaced-items\"><div class=\"a1-row a1-spaced-items\"><h3 class=\"a1-long card-title\">Accordion</h3><button click.delegate=\"accordion = 0\" disabled.bind=\"accordion === 0\">close</button></div><p>using `slide-open` on muliple elemts sharing the same variable can be very helpfull.</p><code>&lt;let accordion.bind=\"3\"&gt;&lt;/let&gt;<br>&lt;div slide-open.bind=\"accordion === 1\"&gt;...&lt;/div&gt;<br>&lt;div slide-open.bind=\"accordion === 2\"&gt;...&lt;/div&gt;<br>&lt;div slide-open.bind=\"accordion === 3\"&gt;...&lt;/div&gt;<br>&lt;div slide-open.bind=\"accordion === 4\"&gt;...&lt;/div&gt;</code></div><div class=\"a1-column a1-padding\"><h3 class=\"accordion-title a1-padding\" click.delegate=\"accordion = 1\">Accordion 1</h3><div slide-open.bind=\"accordion === 1\"><div class=\"accordion-body a1-padding\">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, porro quisquam maxime, inventore exercitationem id laboriosam natus obcaecati sequi excepturi eos explicabo voluptatibus voluptas perferendis unde. Temporibus aliquam officia dignissimos? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, porro quisquam maxime, inventore exercitationem id laboriosam natus obcaecati sequi excepturi eos explicabo voluptatibus voluptas perferendis unde. Temporibus aliquam officia dignissimos? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, porro quisquam maxime, inventore exercitationem id laboriosam natus obcaecati sequi excepturi eos explicabo voluptatibus voluptas perferendis unde. Temporibus aliquam officia dignissimos? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, porro quisquam maxime, inventore exercitationem id laboriosam natus obcaecati sequi excepturi eos explicabo voluptatibus voluptas perferendis unde. Temporibus aliquam officia dignissimos? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, porro quisquam maxime, inventore exercitationem id laboriosam natus obcaecati sequi excepturi eos explicabo voluptatibus voluptas perferendis unde. Temporibus aliquam officia dignissimos? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, porro quisquam maxime, inventore exercitationem id laboriosam natus obcaecati sequi excepturi eos explicabo voluptatibus voluptas perferendis unde. Temporibus aliquam officia dignissimos?</div></div><h3 class=\"accordion-title a1-padding\" click.delegate=\"accordion = 2\">Accordion 2</h3><div slide-open.bind=\"accordion === 2\"><div class=\"accordion-body a1-padding\">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, porro quisquam maxime, inventore exercitationem id laboriosam natus obcaecati sequi excepturi eos explicabo voluptatibus voluptas perferendis unde. Temporibus aliquam officia dignissimos? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, porro quisquam maxime, inventore exercitationem id laboriosam natus obcaecati sequi excepturi eos explicabo voluptatibus voluptas perferendis unde. Temporibus aliquam officia dignissimos?</div></div><h3 class=\"accordion-title a1-padding\" click.delegate=\"accordion = 3\">Accordion 3</h3><div slide-open.bind=\"accordion === 3\"><div class=\"accordion-body a1-padding\">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, porro quisquam maxime, inventore exercitationem id laboriosam natus obcaecati sequi excepturi eos explicabo voluptatibus voluptas perferendis unde. Temporibus aliquam officia dignissimos?</div></div><h3 class=\"accordion-title a1-padding\" click.delegate=\"accordion = 4\">Accordion 4</h3><div slide-open.bind=\"accordion === 4\"><div class=\"accordion-body a1-padding\">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, porro quisquam maxime, inventore exercitationem id laboriosam natus obcaecati sequi excepturi eos explicabo voluptatibus voluptas perferendis unde. Temporibus aliquam officia dignissimos? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, porro quisquam maxime, inventore exercitationem id laboriosam natus obcaecati sequi excepturi eos explicabo voluptatibus voluptas perferendis unde. Temporibus aliquam officia dignissimos? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, porro quisquam maxime, inventore exercitationem id laboriosam natus obcaecati sequi excepturi eos explicabo voluptatibus voluptas perferendis unde. Temporibus aliquam officia dignissimos?</div></div></div></div></div></template>";});;
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