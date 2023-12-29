import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Application } from 'src/applications/application.model';

@Table({ timestamps: true })
export class Vehicle extends Model {
  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @Column
  make: string;

  @Column
  model: string;

  @Column
  modelType: string;

  @Column
  year: number;

  @ForeignKey(() => Application)
  @Column({
    type: DataType.UUID,
  })
  applicationId: string;

  @BelongsTo(() => Application)
  application: Application;
}
