import { DataSource } from 'typeorm';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const dataSource = new DataSource({
  type: 'postgres',
  host: 'postgres',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'myhometech',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
  logging: true,
});

export const typeOrmConfig: TypeOrmModuleOptions = {
  ...dataSource.options,
  autoLoadEntities: true,
} as TypeOrmModuleOptions;

