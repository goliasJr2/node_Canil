import { Request, Response } from "express";
import { createMenuObject } from "../helpers/createMenuObject";
import { Pet } from "../models/pet";

export const home = (req: Request, res: Response) => {
  let list = Pet.getAll();
  res.render("pages/page", {
    menu: createMenuObject("all"),
    banner: {
      title: "Todos os Animais",
      backGround: "allanimals.jpg",
    },
    // Faz o loop da lista de animais
    list,
  });
};
export const dogs = (req: Request, res: Response) => {
    let list = Pet.getByType('dog')
  res.render("pages/page", {
    menu: createMenuObject("dog"),
    banner: {
      title: "Cachorros",
      backGround: "banner_dog.jpg",
    },
    // Faz o loop da lista de cachorros
    list
  });
};
export const cats = (req: Request, res: Response) => {
    let list = Pet.getByType('cat')
  res.render("pages/page", {
    menu: createMenuObject("cat"),
    banner: {
      title: "Gatos",
      backGround: "banner_cat.jpg",
    },
    // Faz o loop da lista de gatos
    list
  });
};
export const fishes = (req: Request, res: Response) => {
    let list = Pet.getByType('fish')
  res.render("pages/page", {
    menu: createMenuObject("fish"),
    banner: {
      title: "Peixes",
      backGround: "banner_fish.jpg",
    },
    // Faz o loop da lista de peixes
    list
  });
};
