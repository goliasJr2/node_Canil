type MenuTypes = "" | "all" | "dog" | "cat" | "fish";
export const createMenuObject = (activeMenu: MenuTypes) => {
  let returnObject = {
    all: false,
    dog: false,
    cat: false,
    fish: false,
  };

    // Verifica se o menu ativo é igual a chave do objeto
    if(activeMenu !== "") {
        returnObject[activeMenu] = true; // Se for igual, ativa o menu correspondente
    }
    // Se o menu ativo for vazio, desativa todos os menus (Caso de pesquisa)

  return returnObject;
}