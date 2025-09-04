import { Request, Response } from "express";
import { ITagService } from "../services/interfaces/ITagService.js";
export declare class TagController {
    private tagService;
    constructor(tagService: ITagService);
    getAll(_req: Request, res: Response): Promise<void>;
    findById(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    create(req: Request, res: Response): Promise<void>;
    update(req: Request, res: Response): Promise<void>;
    delete(req: Request, res: Response): Promise<void>;
}
//# sourceMappingURL=TagControllers.d.ts.map