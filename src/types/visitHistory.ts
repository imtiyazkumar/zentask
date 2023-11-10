/**
 * Project Zentask-Web
 *
 * @author      Imtiyaz Ahmad
 * @copyright   https://github.com/imtiyazkumar
 *
 * @link https://github.com/imtiyazkumar/zentask-web
 *
 */

import { IAttachment } from "./attachment";

export interface IVisitHistory {
    "id": string,

    "name": string,
    "visit_at": string,
    "type": string,

    "summary": string,
    "recommendations": Array<IAttachment>,
    "notes": string,
    "follow_up": string,

    "attachments": string,

    "created_at": string,
    "updated_at": string,
}
