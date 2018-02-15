import {Ingredient} from "../shared/ingeredient.model";

export class Recipe{
  public name: string;
  public desc: string;
  public imagePath: string;
  public method: string;
  public ingredients: Ingredient[];

  constructor( name: string, desc:string, imagePath: string, method:string, ingredients: Ingredient[]) {
    this.name = name;
    this.desc = desc;
    this.imagePath= imagePath;
    this.method = method,
    this.ingredients = ingredients;
  }
}
