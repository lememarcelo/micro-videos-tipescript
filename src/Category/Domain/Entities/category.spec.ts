import { omit } from "lodash";
import { validate as uuidValidate} from 'uuid'

import { Category } from "./category";
import UniqueEntityId from "../../../@seedwork/domain/value-objects/unique-entity-id.vo";

describe("Category unit tests", () => {
  test("Constructor of category", () => {
    let category: Category = new Category({ name: "Movie" });
    const props = omit(category.props, "created_at");

    expect(props).toStrictEqual({
      name: "Movie",
      description: null,
      is_active: true,
    });

    expect(category.props.created_at).toBeInstanceOf(Date);

    let newDate = new Date();
    category = new Category({
      name: "Movie2",
      description: "Some description",
      is_active: false,
      created_at: newDate,
    });

    expect(category.props).toStrictEqual({
      name: "Movie2",
      description: "Some description",
      is_active: false,
      created_at: newDate,
    });
  });

  test("ID Field", () => {
    let category: Category = new Category({ name: "Movie" });
    expect(category.id).not.toBeNull();
    expect(uuidValidate(category.id)).toBeTruthy;


    category = new Category({ name: "Movie"}, null);
    expect(category.id).not.toBeNull();
    expect(uuidValidate(category.id)).toBeTruthy;
  
    category = new Category({ name: "Movie"}, undefined);
    expect(category.id).not.toBeNull();
    expect(uuidValidate(category.id)).toBeTruthy;
  
    const id = new UniqueEntityId()
    category = new Category({ name: "Movie"}, id);
    expect(category.id).not.toBeNull();
    expect(category.id).toBe(id.value)

  });

});
