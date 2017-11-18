/**
 * Visual Novel Maker Typescript definitions files.
 * @author Nio Kasgami
 * @license Under Visual Novel Maker License
 */

declare namespace gs {

    /**
     * Enumaration containing default colors.
     * 
     * @module gs
     * @export
     * @class Colors
     * @memberof gs
     * @static
     * @final
     */
    export class Colors {

        /**
         * Transparent color.
         * 
         * @static
         * @type {Color}
         * @memberof Colors
         */
        public static TRANSPARENT: Color;

        /**
         * White color.
         * 
         * @static
         * @type {Color}
         * @memberof Colors
         */
        public static WHITE: Color;

        /**
         * Black color.
         * 
         * @static
         * @type {Color}
         * @memberof Colors
         */
        public static BLACK: Color;

        public static RAIN_PARTICLES: Color;

        public static STORM_PARTICLES: Color;

        public static SNOW_PARTICLES_FACE: Color;

        public static SNOW_PARTICLE_EDGE: Color;


        public static initialize(): void;


    }
}

// Todo : Finish documentations.