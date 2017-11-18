
namespace Kasgami {

    export namespace Core {

        /**
         * Throw an alert to the user for tell them they are using a an illegal characters for input
         * 
         * @export
         * @param {string} content The word who contain a illegal character.
         * @param {string} character The illegal character the user implemented.
         * @todo Make it a return so I can implement it as a poppup in game?
         */
        export function ThrowIllegalCharacterError(content: string, character: string): void {
            alert(`Error ${content} contain the character "${character}" \n and is not allowed please remove it`);
        }
    }
}