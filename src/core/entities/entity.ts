import { UniqueEntityID } from "./unique-entity-id";

export abstract class Entity<Props> {
  private _id: UniqueEntityID;
  protected props: Props;

  get id() {
    return this._id;
  }

  protected constructor(props: Props, id?: UniqueEntityID) {
    this.props = props;
    this._id = id ?? new UniqueEntityID();
  }

  // Método que verifica se duas entidades representam a mesma coisa no domínio.
  public equals(entity: Entity<any>){

    // Aqui é comparação por referência, se são instâncias iguais.
    if(entity === this){
      return true
    }

    // Isso verifica se:
    // - São instâncias diferentes
    // - Mas possuem o mesmo ID
    if(entity.id === this._id) {
      return true
    }

    // Se:
    // Não é a mesma instância
    // Não tem o mesmo ID
    return false
  }
}
