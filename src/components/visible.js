
// Vuejs v-tooltip directive
export default {
    inserted: function (el, bindings) {

        let target = null;
        let cssClass = 'visible';
        let position = null;

        // we set the values based on the argument
        let args = bindings.value;
        if(typeof args === 'string') {
            target = args;
        }
        else if(args !== undefined) {
            if(args.target) target = args.target;
            if(args.t) target = args.t;
            if(args.css) cssClass = args.css;
            if(args.c) cssClass = args.c;
            if(args.position) position = args.position;
            if(args.p) position = args.p;
        }

        // overwriting from the modifiers
        let mod = bindings.modifiers;
        if(mod) {
            if(mod.above) position = "above";
            if(mod.below) position = "below";
            if(mod.inside) position = "inside";
            if(mod.visible) position = "visible";
            if(mod.partial) position = "partial";
        }

        // overwriting from the dynamic argument
        let dynArg = bindings.arg;
        if(dynArg) {
            if(dynArg.target) target = dynArg.target;
            if(dynArg.t) target = dynArg.t;
            if(dynArg.css) cssClass = dynArg.css;
            if(dynArg.c) cssClass = dynArg.c;
            if(dynArg.position) position = dynArg.position;
            if(dynArg.p) position = dynArg.p;
        }

        el.isInViewport = (elem) => {
            if(!elem) {
                console.log('v-visible:', target, '(not found)');
                return false;
            }
            let t = elem.getBoundingClientRect(); // target dimensions
            let wpHeight = (window.innerHeight || document.documentElement.clientHeight); // viewport height
            let wpWidth = (window.innerWidth || document.documentElement.clientWidth); // viewport width
            // triggered if on top or inside the viewport
            if(position === "above") {
                return (
                    t.left >= 0 &&
                    t.bottom <= 0 &&
                    t.right <= wpWidth
                );
            }
            // triggered if below or inside the viewport
            else if(position === "below") {
                return (
                    t.top >= 0 &&
                    t.left >= 0 &&
                    t.right <= wpWidth
                );
            }
            // triggered if completely visible in the viewport
            else if(position === "inside") {
                return (
                    t.top >= 0 &&
                    t.left >= 0 &&
                    t.bottom <= wpHeight &&
                    t.right <= wpWidth
                );
            }
            // triggered even if partially visible in the viewport
            else if(position === "visible") {
                return (
                    t.top < wpHeight &&
                    t.bottom >= 0
                );
            }
            // visible if more than half of the target element is visible in the viewport
            else {
                let halfHeight = t.height / 2;
                return (
                    // smaller than the viewport
                    (t.top < (wpHeight - halfHeight) &&
                        t.bottom > halfHeight) ||
                    // bigger than the viewport
                    (t.height > wpHeight &&
                        t.top < wpHeight / 2 &&
                        t.bottom > wpHeight / 2)
                );
            }
        };

        el.setVisibility = (el) => {
            let t = document.querySelector(target);
            let test = el.isInViewport(t);
            if(test) {
                el.classList.add(cssClass);
            }
            else {
                el.classList.remove(cssClass);
            }
        };

        el.hScroll = () => {
            el.setVisibility(el);
        };

        // events attachment function
        el.attachEventsHandlers = (el) => {
            window.addEventListener('scroll', el.hScroll);
        };

        // events detachment function
        el.detachEventsHandlers = (el) => {
            window.removeEventListener('scroll', el.hScroll);
        };

        // we wrap the elements together and into the target
        el.attachEventsHandlers(el);

        // first init
        el.setVisibility(el);
    },
    componentUpdated(el) {
        el.setVisibility(el);
        el.detachEventsHandlers(el);
        el.attachEventsHandlers(el);
    },
    unbind(el) {
        el.detachEventsHandlers(el);
    }
}