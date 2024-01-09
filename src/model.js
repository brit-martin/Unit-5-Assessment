import { DataTypes, Model } from 'sequelize';
import util from 'util';
import connectToDB from './db.js';

const db = await connectToDB('postgresql:///animals');

export class Human extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }

  getFullName() {
    return (this.fname + " " + this.lname)
  }
}

Human.init(
  { 
    humanId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNUll: false,
    },
    fname: {
      type: DataTypes.STRING,
      allowNUll: false,
    },
    lname: {
      type: DataTypes.STRING,
      allowNUll: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNUll: false,
    },
  },
  {
    modelName: 'human',
    sequelize: db,
  }
 )

export class Animal extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

Animal.init(
  {
    animalId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNUll: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNUll: false,  
    },
    species: {
      type: DataTypes.STRING,
      allowNULL: false,
    },
    birthYear: {
      type: DataTypes.INTEGER,
    },
  },
  {
    modelName: 'animal',
    sequelize: db,
  })

Human.hasMany(Animal, {foreignKey: 'humanId'});
Animal.belongsTo(Human, {foreignKey: 'humanId'})

const h = await Human.findOne()
// console.log(h.getFullName())

export default db;
