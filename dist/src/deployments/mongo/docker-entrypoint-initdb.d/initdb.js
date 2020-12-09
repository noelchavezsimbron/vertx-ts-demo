"use strict";
const configuration = JSON.parse(cat('/etc/configs/config.json'));
const rootUser = configuration.admin.user;
const rootPass = configuration.admin.pwd;
print('user:', rootUser);
// auth against admin
const adminDb = db.getSiblingDB('admin');
adminDb.auth(rootUser, rootPass);
print('Successfully authenticated admin user');
// Create users
const dbName = configuration.databaseName;
const targetDb = db.getSiblingDB(dbName);
print('create users => start');
configuration.users.forEach(userCredential => {
    print("configuration", JSON.stringify(userCredential));
    const roles = userCredential.roles.map(role => {
        return { role: role, db: dbName };
    });
    targetDb.createUser({
        user: userCredential.user,
        pwd: userCredential.pwd,
        roles: roles
    });
});
print('create users => complete');
// Create Collection with Data
const collectionName = "currency_rates";
targetDb.createCollection(collectionName);
targetDb[collectionName].insertMany([
    {
        "date": "01/12/2020",
        "rate": "3.35"
    },
    {
        "date": "02/12/2020",
        "rate": "3.37"
    },
    {
        "date": "03/12/2020",
        "rate": "3.73"
    },
    {
        "date": "04/12/2020",
        "rate": "3.73"
    },
    {
        "date": "05/12/2020",
        "rate": "3.339"
    },
    {
        "date": "06/12/2020",
        "rate": "3.38"
    },
    {
        "date": "07/12/2020",
        "rate": "3.45"
    },
    {
        "date": "08/12/2020",
        "rate": "3.27"
    },
    {
        "date": "09/12/2020",
        "rate": "3.53"
    }
]);
