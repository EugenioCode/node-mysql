import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import { IdCard } from "./entity/IdCard"
AppDataSource.initialize().then(async () => {

    // const user = new User()
    // user.firstName = "Timber"
    // user.lastName = "Saw"
    // user.age = 29

    // const idCard = new IdCard()
    // idCard.cardNum = '123'
    // idCard.user = user
    // await AppDataSource.manager.save(user)
    // await AppDataSource.manager.save(idCard)

    // 设置了 cascade = true之后
    // const user = new User()
    // user.firstName = "Timber"
    // user.lastName = "Saw"
    // user.age = 39
    // const idCard = new IdCard()
    // idCard.cardNum = '456'
    // idCard.user = user
    // await AppDataSource.manager.save(idCard)

    const isc = await AppDataSource.manager.find(IdCard, {
        relations: {
            user: true
        }
    })
    const user = await AppDataSource.manager.find(User, {
        relations: {
            idCard: true
        }
    })
    console.log(isc, user)

}).catch(error => console.log(error))
