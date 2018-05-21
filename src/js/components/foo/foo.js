import {Component} from "can/es";
import view from "./foo.stache";

export default Component.extend({
  tag: "x-foo",
  view: view,
  ViewModel: {
    message: {
      default: "hello"
    },
    connectedCallback(el) {
    }
  }
});
