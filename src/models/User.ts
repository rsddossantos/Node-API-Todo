import {Model, DataTypes } from 'sequelize';
import {sequelize} from '../instances/pg';

interface UserInstance extends Model {
    id: number,
    name: string,
    password: string,
    email: string
}

export const User = sequelize.define<UserInstance>("User", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'users',
    timestamps: false,
});