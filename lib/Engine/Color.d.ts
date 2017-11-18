
declare namespace gs {
   
    /**
     * A class to describe RGBA colors. It also offers some helper methods.
     * 
     * @export
     * @internal This class is part of the internal library
     * @class Color
     */
    export class Color {

        /**
         * The alpha value of the color.
         * 
         * @type {number}
         * @memberof Color
         */
        public alpha: number;
        
        /**
         * The blue value of the color.
         * 
         * @type {number}
         * @memberof Color
         */
        public blue: number;

        /**
         * The green value of the color.
         * 
         * @type {number}
         * @memberof Color
         */
        public green: number;

        /**
         * The red value of the color.
         * 
         * @type {number}
         * @memberof Color
         */
        public red: number;

        /**
         * Black Color.
         * 
         * @static
         * @type {Color}
         * @final
         * @memberof Color
         */
        public static readonly BLACK: Color;

        /**
         * Transparent color
         * 
         * @static
         * @type {Color}
         * @final
         * @memberof Color
         */
        public static readonly TRANSPARENT: Color;
        
        /**
         * White color.
         * 
         * @static
         * @type {Color}
         * @final
         * @memberof Color
         */
        public static readonly WHITE: Color;

        /**
         * Creates an instance of Color.
         * @param {number} red The red value of the color OR another color to create a copy from
         * @param {number} [green=null] The green value of the color 
         * @param {number} [blue=null] The blue value of the color 
         * @param {number} [alpha=null] The alpha value of the color. 
         * @memberof Color
         */
        constructor(red: number, green?: number, blue?: number, alpha?: number);

        public equals(color: Color): boolean;

        public static fromArray(a: number | number[]): Color;

        public static fromObject(o: RawObject.IRGBObject): Color;

        
    }
}