/* generated by Svelte v3.29.4 */
import {
	SvelteComponent,
	append,
	attr,
	children,
	claim_element,
	claim_space,
	claim_text,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal,
	space,
	text
} from '/spa/web_modules/svelte/internal/index.js';

function create_fragment(ctx) {
	let nav;
	let a0;
	let t0;
	let t1;
	let button;
	let i;
	let t2;
	let div;
	let ul;
	let li0;
	let a1;
	let t3;
	let t4;
	let li1;
	let a2;
	let t5;
	let t6;
	let a3;
	let t7;

	return {
		c() {
			nav = element("nav");
			a0 = element("a");
			t0 = text("JM Lauranson");
			t1 = space();
			button = element("button");
			i = element("i");
			t2 = space();
			div = element("div");
			ul = element("ul");
			li0 = element("li");
			a1 = element("a");
			t3 = text("Services");
			t4 = space();
			li1 = element("li");
			a2 = element("a");
			t5 = text("About");
			t6 = space();
			a3 = element("a");
			t7 = text("Email Me");
			this.h();
		},
		l(nodes) {
			nav = claim_element(nodes, "NAV", { class: true });
			var nav_nodes = children(nav);
			a0 = claim_element(nav_nodes, "A", { class: true, href: true });
			var a0_nodes = children(a0);
			t0 = claim_text(a0_nodes, "JM Lauranson");
			a0_nodes.forEach(detach);
			t1 = claim_space(nav_nodes);

			button = claim_element(nav_nodes, "BUTTON", {
				class: true,
				type: true,
				"data-toggle": true,
				"data-target": true
			});

			var button_nodes = children(button);
			i = claim_element(button_nodes, "I", { class: true });
			children(i).forEach(detach);
			button_nodes.forEach(detach);
			t2 = claim_space(nav_nodes);
			div = claim_element(nav_nodes, "DIV", { class: true, id: true });
			var div_nodes = children(div);
			ul = claim_element(div_nodes, "UL", { class: true });
			var ul_nodes = children(ul);
			li0 = claim_element(ul_nodes, "LI", { class: true });
			var li0_nodes = children(li0);
			a1 = claim_element(li0_nodes, "A", { class: true, href: true });
			var a1_nodes = children(a1);
			t3 = claim_text(a1_nodes, "Services");
			a1_nodes.forEach(detach);
			li0_nodes.forEach(detach);
			t4 = claim_space(ul_nodes);
			li1 = claim_element(ul_nodes, "LI", { class: true });
			var li1_nodes = children(li1);
			a2 = claim_element(li1_nodes, "A", { class: true, href: true });
			var a2_nodes = children(a2);
			t5 = claim_text(a2_nodes, "About");
			a2_nodes.forEach(detach);
			li1_nodes.forEach(detach);
			ul_nodes.forEach(detach);
			t6 = claim_space(div_nodes);
			a3 = claim_element(div_nodes, "A", { href: true, class: true });
			var a3_nodes = children(a3);
			t7 = claim_text(a3_nodes, "Email Me");
			a3_nodes.forEach(detach);
			div_nodes.forEach(detach);
			nav_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(a0, "class", "navbar-brand");
			attr(a0, "href", "/");
			attr(i, "class", "ti-menu h3");
			attr(button, "class", "navbar-toggler border-0");
			attr(button, "type", "button");
			attr(button, "data-toggle", "collapse");
			attr(button, "data-target", "#navigation");
			attr(a1, "class", "nav-link");
			attr(a1, "href", "#services");
			attr(li0, "class", "nav-item");
			attr(a2, "class", "nav-link");
			attr(a2, "href", "#about");
			attr(li1, "class", "nav-item");
			attr(ul, "class", "navbar-nav mx-auto");
			attr(a3, "href", "mailto:jm@lauranson.com");
			attr(a3, "class", "btn btn-sm btn-primary ml-3");
			attr(div, "class", "collapse navbar-collapse text-center");
			attr(div, "id", "navigation");
			attr(nav, "class", "navbar navbar-expand-lg navbar-light bg-transparent");
		},
		m(target, anchor) {
			insert(target, nav, anchor);
			append(nav, a0);
			append(a0, t0);
			append(nav, t1);
			append(nav, button);
			append(button, i);
			append(nav, t2);
			append(nav, div);
			append(div, ul);
			append(ul, li0);
			append(li0, a1);
			append(a1, t3);
			append(ul, t4);
			append(ul, li1);
			append(li1, a2);
			append(a2, t5);
			append(div, t6);
			append(div, a3);
			append(a3, t7);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(nav);
		}
	};
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, {});
	}
}

export default Component;