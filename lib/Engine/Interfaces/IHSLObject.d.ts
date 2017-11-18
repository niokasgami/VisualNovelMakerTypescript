

declare namespace gs {

    /**
     * The gs namespace for raw Object interfaces built in the internal library.
     * Note: The RawObject namespace is a interface "only" namespace and shouldn't be used for 
     * implement real compilling code.
     * 
     * @exports
     * @namespace RawObject
     */
    export namespace RawObject {
        
        /**
         * The Interface for Raw HSL color object.
         * 
         * @export
         * @interface IHSLOjbect
         */
        export interface IHSLOjbect {
            h: number;
            s: number;
            l: number;
        }
    }
}