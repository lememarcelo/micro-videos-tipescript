import { Category, CategoryProperties } from "./category";
import { omit } from "lodash";
import { validate, v4 as uuidv4 } from "uuid";
import UniqueEntityId from "../../../@seedwork/domain/unique-entity-id.vo";

describe("Category unit tests", () => {
  test("Constructor of category", () => {
    const date = new Date();
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
    expect(category.id).toBeInstanceOf(UniqueEntityId);


    category = new Category({ name: "Movie"}, null);
    expect(category.id).not.toBeNull();
    expect(category.id).toBeInstanceOf(UniqueEntityId);
  
    category = new Category({ name: "Movie"}, undefined);
    expect(category.id).not.toBeNull();
    expect(category.id).toBeInstanceOf(UniqueEntityId);
  
    const id = new UniqueEntityId()
    category = new Category({ name: "Movie"}, id);
    expect(category.id).not.toBeNull();
    expect(category.id).toBe(id)

  });
});
