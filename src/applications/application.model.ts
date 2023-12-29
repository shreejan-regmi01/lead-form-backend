import { Column, DataType, HasOne, Model, Table } from 'sequelize-typescript';
import { Vehicle } from 'src/vehicles/vehicle.model';
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

  @HasOne(() => Vehicle)
  vehicle: Vehicle;
}
