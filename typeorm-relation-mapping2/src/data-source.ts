import "reflect-metadata"
import { DataSource } from "typeorm"
import { Department } from './entity/Department'
import { Employee } from "./entity/Employee"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "127.0.0.1",
    port: 3090,
    username: "root",
    password: "root",
    database: "typeorm_test",
    synchronize: true,
    logging: false,
    entities: [Department, Employee],
    migrations: [],
    subscribers: [],
    connectorPackage: 'mysql2',
    extra: {
        authPlugin: 'sha256_password'
    }
})
