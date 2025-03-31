import { Router } from "express";
import * as PageController from "../controllers/pageController";
import * as SearchController from "../controllers/searchController";

const router = Router();
// Define routes for the application
// De acordo com a rota carrega um dado método do controller
// O método é responsável por renderizar a view correspondente
router.get("/", PageController.home); // Home page route
router.get("/dogs", PageController.dogs); //Page dogs
router.get("/cats", PageController.cats);
router.get("/fishes", PageController.fishes);

router.get("/search", SearchController.search); // Search page route
export default router;
