import { In } from "typeorm"
import { AppDataSource } from "./data-source"
import { User } from "./entity/User"

AppDataSource.initialize().then(async () => {
    // 新增
    // const user = new User()
    // user.firstName = "Timber"
    // user.lastName = "Saw"
    // user.age = 29
    // await AppDataSource.manager.save(user)

    // 修改
    // const user = new User()
    // User.id = 1
    // user.firstName = "Timber"
    // user.lastName = "Saw"
    // user.age = 29
    // await AppDataSource.manager.save(user)

    // 批量新增
    // await AppDataSource.manager.save(User, [
    //     { firstName: 'ccc', lastName: 'ccc', age: 21},
    //     { firstName: 'ddd', lastName: 'ddd', age: 22},
    //     { firstName: 'eee', lastName: 'eee', age: 23}
    // ]);

    // 批量修改
    // await AppDataSource.manager.save(User, [
    //     { id: 2 ,firstName: 'ccc111', lastName: 'ccc', age: 21},
    //     { id: 3 ,firstName: 'ddd222', lastName: 'ddd', age: 22},
    //     { id: 4, firstName: 'eee333', lastName: 'eee', age: 23}
    // ]);
    // 删除-delete
    // await AppDataSource.manager.delete(User, 1)
    
    // 批量删除-delete
    // await AppDataSource.manager.delete(User, [2,3])

    // 删除-remove
    // const user = new User()
    // user.id = 4
    // await AppDataSource.manager.remove(User, user)

    // 查询
    // const users = await AppDataSource.manager.find(User)
    // const users = await AppDataSource.manager.findBy(User, {
    //     age:23
    // })
    // const [users, acount] = await AppDataSource.manager.findAndCount(User)
    const users = await AppDataSource.manager.find(User, {
        select: {
            firstName: true
        },
        where: {
            id: In([5,8])
        },
        
    })
    console.log(users)



    console.log("User has been saved to database.")

}).catch(error => console.error(error))
