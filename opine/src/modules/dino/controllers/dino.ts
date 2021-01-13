import { Request, Response, NextFunction } from '../../../../deps/index.ts';

import { NotFoundError } from '../../../shared/helpers/error.ts'

import { IDino } from '../dino.types.ts';

const dinos: IDino[] = [{
    id: 1,
    name: 'Dino Tersago',
    extinct: true,
}, {
    id: 2,
    name: 'Ronaldino',
    extinct: true,
}, {
    id: 3,
    name: 'Miley Saurus',
    extinct: true,
}];

export class DinoController {
	public getAll(req: Request, res: Response, next: NextFunction): Response | void {
        return res
            .setStatus(200)
            .json(dinos);
	}

	public getById(req: Request, res: Response, next: NextFunction): Response | void {
        const dino: IDino | undefined = dinos.find((d: IDino) => d.id === Number(req.params.id));

        if (!dino) {
            return next(new NotFoundError());
        }

        return res
            .setStatus(200)
            .json(dino);
    }
    
	public create(req: Request, res: Response, next: NextFunction): Response | void {
        const dino: IDino = {
            id: dinos.length + 1,
            name: req.body.name,
            extinct: true,
        };
        
        dinos.push(dino)

        return res
            .setStatus(201)
            .json(dino);
	}
}
