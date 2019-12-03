import { BaseFile } from './base-file';

export class FileModel extends BaseFile {
    id: number;
    status: number;
    statusIcon: string;
    defenderStatus: number;
    defenderIcon: string;
    timeUpload: string;
    clearMalwareIcon: string;
    shieldex: number;
    opswat: number;
    vorito: number;
    comment: string;
}
