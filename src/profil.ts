
import * as fs from "fs";
import { readFileSync, writeFile } from "fs";


const data: Buffer = readFileSync("PlayerProfiles.json");
const profils: IJSONProfil = JSON.parse(data.toString());

interface IJSONProfil {
    [id: string]: IPlayerProfil;
}
interface IPlayerProfil {
    userName: string;
    password: string;
    rememberMe: boolean;
}

/**
 * Will create the profil from the user at the demand
 *
 * @param {IPlayerProfil} data 
 * @param {boolean} rememberMe 
 * @param {Function} callBack 
 */
function createProfil(data: IPlayerProfil, rememberMe: boolean, callBack: Function): void {
    if (/(^$)/g.test(data.userName)) {
        Kasgami.Core.ThrowIllegalCharacterError(data.userName, "$");
    }
    var file: string = JSON.stringify(profils);
    writeFile("PlaterProfiles.json", data, finished);

    function finished(err: Error): void {
        console.log("Finish to createFile");
    }

}

function deleteProfil(ProfilName: string) {
    // todo: will throw a "are you sure to delete this profil if you do so the profil and all profiles save will
    // be deleted."
    delete profils[ProfilName];
    var data = JSON.stringify(profils);

}