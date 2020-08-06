import { autoinject, bindable, BindingEngine, TaskQueue, Disposable } from "aurelia-framework";

@autoinject
export class SlideOpenCustomAttribute {
	@bindable({ primaryProperty: true, changeHandler: "setOpened" }) private opened: boolean = false;
	@bindable({ changeHandler: "setTransition" }) private transition: string = "max-height 0.25s linear";

	private element: HTMLElement;
	private resizeObserver: Disposable;

	constructor(element: Element, private bindingEngine: BindingEngine, private queue: TaskQueue) {
		this.element = <HTMLElement>element;
		this.element.style.overflow = "hidden";
	}

	attached() {
		this.setTransition("");
		this.setOpened(this.opened);

		this.queue.queueTask(() => {
			this.setTransition(this.transition);
			this.resizeObserver = this.bindingEngine.propertyObserver(this.element, "scrollHeight")
				.subscribe(() => this.setOpened(this.opened));
		});
	}

	detached() {
		this.resizeObserver && this.resizeObserver.dispose();
	}

	setOpened(newValue: boolean) {
		this.element.style.maxHeight = newValue ? `${this.element.scrollHeight}px` : "0px";
	}
	setTransition(newValue: string) {
		console.log("newValue", newValue);
		this.element.style.transition = newValue;
	}
}
