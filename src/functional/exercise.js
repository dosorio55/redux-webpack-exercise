import { produce } from 'immer';

const input = { tag: 'JAVASCRIPT' };
const output = "(javascript)";

function textChange(text) {
    return `(${input.tag.toLocaleLowerCase()})`
}

console.log(textChange(input));

/**
 * Assuming that this object is immutable, write code to  -Add a new ingredient (“cream”) -Replace “egg” with “egg white” -Remove an ingredient (“egg”)
 * 
 * USING IMMER TO WORK WITH INMUTABLE OBJECTS
 */

const recipe = { name: "Spaghetti Bolognese", ingredients: ["egg", "salt"] };

function modifyRecipe() {
    const modIngredients = recipe.ingredients.filter(ingredient => ingredient !== 'egg')
   return produce(recipe, modRecipe => {
        modRecipe.ingredients = ['egg white' ,...modIngredients , 'cream']
    })
}

console.log(modifyRecipe());
console.log(recipe);