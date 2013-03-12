﻿/****************************************************************************
  Generated by T4TS.tt - don't make any changes in this file
****************************************************************************/

// -- Begin global interfaces
/** Generated from T4TS.Build.Barfoo **/
interface Barfoo  {
    Number: number;
    Complex: T4TS.OverridenName;
    Name: string;
    DateTime: string;
}
// -- End global interfaces

module Fooz {
    /** Generated from T4TS.Build.Foobar **/
    export interface Foobar  {
        OverrideAll?: bool;
        Recursive: Fooz.Foobar;
        NestedObjectArr: Barfoo[];
        NestedObjectList: Barfoo[];
        TwoDimensions: string[][];
        ThreeDimensions: Barfoo[][][];
    }
}

module T4TS {
    /** Generated from T4TS.Build.Inherited **/
    export interface OverridenName  {
        OtherName?: string;
        Integers: number[];
        Doubles: number[];
        TwoDimList: number[][];
        [index: number]: Barfoo;
    }
    /** Generated from T4TS.Build.InheritanceTest1 **/
    export interface InheritanceTest1 extends /* global interface */Barfoo {
        SomeString: string;
        Recursive: Fooz.Foobar;
    }
    /** Generated from T4TS.Build.InheritanceTest2 **/
    export interface InheritanceTest2 extends T4TS.InheritanceTest1 {
        SomeString2: string;
        Recursive2: Fooz.Foobar;
    }
    /** Generated from T4TS.Build.InheritanceTest3 **/
    export interface InheritanceTest3 extends T4TS.OverridenName {
        SomeString3: string;
        Recursive3: Fooz.Foobar;
    }
    /** Generated from T4TS.Build.InheritanceTest4 **/
    export interface InheritanceTest4  {
        SomeString4: string;
        Recursive4: Fooz.Foobar;
    }
}
