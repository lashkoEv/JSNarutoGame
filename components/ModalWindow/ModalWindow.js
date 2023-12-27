// import { Comment, AdvancedComponent } from "../../core/Component";
// import "./ModalWindow.css";


// export class ModalWindow {
//   #window;

//   constructor(titleText, children) {
//     const title = new AdvancedComponent({
//       tagName: "h1",
//       className: "title", 
//       textContent: titleText
//     });

//     const modalContent = new Comment({
//       tagName: "div",
//       className: "modal",
//       children: [title, ...children]
//     });

//     this.#window = new Comment({
//       tagName: "div",
//       className: "modal",
//       children: [modalContent],
//     });
//   }

//   get window() {
//     return this.#window;
//   }
// }
