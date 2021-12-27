import { Request, Response } from 'express';
import { Todo } from '../models/Todo';
import { User } from '../models/User';
import { generateToken } from '../config/passport';

export const login = async (req: Request, res: Response) => {
    if(req.body.email && req.body.password) {
        let email: string = req.body.email;
        let password: string = req.body.password;

        let user = await User.findOne({
            where: { email, password }
        });

        if (user) {
            const token = generateToken({ id: user.id });
            res.json({ status: true, token });
            return;
        }
    }
    res.json({ status: false });
}

export const all = async (req: Request, res: Response) => {
    const list = await Todo.findAll();
    res.json({list});
}
export const add = async (req: Request, res: Response) => {
    if(req.body.title) {
        let newTodo = await Todo.create({
            title: req.body.title,
            done: req.body.done ? true : false
        });
        res.status(201).json({ item: newTodo });
    } else {
        res.json({error: 'Dados não enviados'});
    }
}
export const update = async (req: Request, res: Response) => {
    const id: string = req.params.id;

    let todo = await Todo.findByPk(id);
    if(todo) {
        if(req.body.title) {
            todo.title = req.body.title;
        }
        if(req.body.done) {
            switch(req.body.done.toLowerCase()) {
                case 'true':
                case '1':
                    todo.done = true;
                    break;
                case 'false':
                case '0':
                    todo.done = false;
                    break;
            }
        }
        await todo.save();
        res.json({ item: todo});
    } else {
        res.json({ error: 'Tarefa não encontrada' });
    }
}
export const remove = async (req: Request, res: Response) => {
    let id: string = req.params.id;

    let todo = await Todo.findByPk(id);
    if(todo) {
        await todo.destroy();
    }
    res.json({});
}












