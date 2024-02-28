import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Aaa } from "./entity/Aaa"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "127.0.0.1",
    port: 3090,
    username: "root",
    password: "root",
    database: "practice",
    synchronize: true,
    logging: true,
    connectorPackage: 'mysql2',
    poolSize: 10,
    extra: {
        authPlugin: 'sha256_password'
    },
    entities: [User, Aaa],
    migrations: [],
    subscribers: [],
})
