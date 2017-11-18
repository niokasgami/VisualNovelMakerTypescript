
declare namespace gs {

    /**
     * The gs namespace for raw Object interfaces built in the internal library.
     * Note: The Object namespace is a interface "only" namespace and shouldn't be used for 
     * implement real compilling code.
     * @exports
     * @namespace Object
     */
    export namespace RawObject {

        /**
         * The interface for the Color class object.
         * 
         * @memberof Color
         * @export
         * @interface IRGBObject
         */
        export interface IRGBObject {
            red: number;
            green: number;
            blue: number;
            alpha: number;
        }
    }
}