import { Form, Menu, Description } from "../apps";
import { render } from "../core/render";
import { Game } from "../schemas";

export const getForm = (isRegistration) => {
  const form = new Form({
    isRegistration: isRegistration,
  });
  render(app, form);
};

export const getMenu = () => {
  const menu = new Menu({});
  render(app, menu);
};

export const getDescription = () => {
  const description = new Description({});
  render(app, description);
};

export const renderScene = (scene) => {
  render(app, scene.scene);
};

export const getGame = () => {
  const game = new Game();
};
