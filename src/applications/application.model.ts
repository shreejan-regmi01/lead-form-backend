import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ timestamps: true })
export class Application extends Model {
  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @Column
  purchasePrice: number;

  @Column
  deposit: number;

  @Column
  term: string;

  @Column
  balloon: number;

  @Column
  hasCarInMind: boolean;

  @Column
  carCondition: string;

  @Column
  urgency: string;

  @Column
  usage: string;

  //   vehicle: string;
}
