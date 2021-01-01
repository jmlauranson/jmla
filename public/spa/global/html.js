/* generated by Svelte v3.29.4 */
import {
	SvelteComponent,
	append,
	assign,
	attr,
	check_outros,
	children,
	claim_component,
	claim_element,
	claim_space,
	create_component,
	destroy_component,
	detach,
	element,
	get_spread_object,
	get_spread_update,
	group_outros,
	init,
	insert,
	mount_component,
	safe_not_equal,
	space,
	transition_in,
	transition_out
} from '/spa/web_modules/svelte/internal/index.js';

import Head from '/spa/global/./head.js';
import Nav from '/spa/global/./nav.js';
import Footer from '/spa/global/./footer.js';

function create_fragment(ctx) {
	let html;
	let head;
	let t0;
	let body;
	let header;
	let div;
	let nav;
	let t1;
	let switch_instance;
	let t2;
	let footer;
	let current;

	head = new Head({
			props: { title: /*content*/ ctx[1].filename }
		});

	nav = new Nav({});
	const switch_instance_spread_levels = [/*content*/ ctx[1].fields, { allContent: /*allContent*/ ctx[2] }];
	var switch_value = /*route*/ ctx[0];

	function switch_props(ctx) {
		let switch_instance_props = {};

		for (let i = 0; i < switch_instance_spread_levels.length; i += 1) {
			switch_instance_props = assign(switch_instance_props, switch_instance_spread_levels[i]);
		}

		return { props: switch_instance_props };
	}

	if (switch_value) {
		switch_instance = new switch_value(switch_props(ctx));
	}

	footer = new Footer({});

	return {
		c() {
			html = element("html");
			create_component(head.$$.fragment);
			t0 = space();
			body = element("body");
			header = element("header");
			div = element("div");
			create_component(nav.$$.fragment);
			t1 = space();
			if (switch_instance) create_component(switch_instance.$$.fragment);
			t2 = space();
			create_component(footer.$$.fragment);
			this.h();
		},
		l(nodes) {
			html = claim_element(nodes, "HTML", { lang: true });
			var html_nodes = children(html);
			claim_component(head.$$.fragment, html_nodes);
			t0 = claim_space(html_nodes);
			body = claim_element(html_nodes, "BODY", {});
			var body_nodes = children(body);
			header = claim_element(body_nodes, "HEADER", { class: true });
			var header_nodes = children(header);
			div = claim_element(header_nodes, "DIV", { class: true });
			var div_nodes = children(div);
			claim_component(nav.$$.fragment, div_nodes);
			div_nodes.forEach(detach);
			t1 = claim_space(header_nodes);
			if (switch_instance) claim_component(switch_instance.$$.fragment, header_nodes);
			t2 = claim_space(header_nodes);
			claim_component(footer.$$.fragment, header_nodes);
			header_nodes.forEach(detach);
			body_nodes.forEach(detach);
			html_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(div, "class", "container");
			attr(header, "class", "navigation");
			attr(html, "lang", "en");
		},
		m(target, anchor) {
			insert(target, html, anchor);
			mount_component(head, html, null);
			append(html, t0);
			append(html, body);
			append(body, header);
			append(header, div);
			mount_component(nav, div, null);
			append(header, t1);

			if (switch_instance) {
				mount_component(switch_instance, header, null);
			}

			append(header, t2);
			mount_component(footer, header, null);
			current = true;
		},
		p(ctx, [dirty]) {
			const head_changes = {};
			if (dirty & /*content*/ 2) head_changes.title = /*content*/ ctx[1].filename;
			head.$set(head_changes);

			const switch_instance_changes = (dirty & /*content, allContent*/ 6)
			? get_spread_update(switch_instance_spread_levels, [
					dirty & /*content*/ 2 && get_spread_object(/*content*/ ctx[1].fields),
					dirty & /*allContent*/ 4 && { allContent: /*allContent*/ ctx[2] }
				])
			: {};

			if (switch_value !== (switch_value = /*route*/ ctx[0])) {
				if (switch_instance) {
					group_outros();
					const old_component = switch_instance;

					transition_out(old_component.$$.fragment, 1, 0, () => {
						destroy_component(old_component, 1);
					});

					check_outros();
				}

				if (switch_value) {
					switch_instance = new switch_value(switch_props(ctx));
					create_component(switch_instance.$$.fragment);
					transition_in(switch_instance.$$.fragment, 1);
					mount_component(switch_instance, header, t2);
				} else {
					switch_instance = null;
				}
			} else if (switch_value) {
				switch_instance.$set(switch_instance_changes);
			}
		},
		i(local) {
			if (current) return;
			transition_in(head.$$.fragment, local);
			transition_in(nav.$$.fragment, local);
			if (switch_instance) transition_in(switch_instance.$$.fragment, local);
			transition_in(footer.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(head.$$.fragment, local);
			transition_out(nav.$$.fragment, local);
			if (switch_instance) transition_out(switch_instance.$$.fragment, local);
			transition_out(footer.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(html);
			destroy_component(head);
			destroy_component(nav);
			if (switch_instance) destroy_component(switch_instance);
			destroy_component(footer);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { route } = $$props, { content } = $$props, { allContent } = $$props;

	$$self.$$set = $$props => {
		if ("route" in $$props) $$invalidate(0, route = $$props.route);
		if ("content" in $$props) $$invalidate(1, content = $$props.content);
		if ("allContent" in $$props) $$invalidate(2, allContent = $$props.allContent);
	};

	return [route, content, allContent];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { route: 0, content: 1, allContent: 2 });
	}
}

export default Component;