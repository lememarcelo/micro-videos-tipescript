import {v4 as uuidv4 } from 'uuid'
import UniqueEntityId from '../../../@seedwork/domain/unique-entity-id.vo'

export type CategoryProperties = {
  name: string;
  description?: string;
  is_active?: boolean;
  created_at?: Date;
};

export class Category {
  public readonly id: UniqueEntityId;

  constructor(public readonly props: CategoryProperties, id?: UniqueEntityId) {
    this.id = id || new UniqueEntityId()
    this.description = props.description;
    this.is_active = props.is_active;
    this.created_at = props.created_at;
  }

  get name() {
    return this.props.name;
  }

  get descriptiton() {
    return this.props.description;
  }

  private set description(value: string){
      this.props.description = value ?? null;
  }

  get is_active() {
    return this.props.is_active;
  }

  private set is_active(value: boolean) {
    this.props.is_active = value ?? true;
  }

  get created_at() {
    return this.props.created_at;
  }

  private set created_at(value : Date){
    this.props.created_at = value ?? new Date();
  }
}
