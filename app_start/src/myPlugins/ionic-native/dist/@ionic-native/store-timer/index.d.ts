import { IonicNativePlugin } from '@ionic-native/core';

export interface WheelSelectorItem {
    description?: string;
}
export interface DefaultItem {
    index: number;
    value: string;
}
export interface WheelSelectorOptions {
    /**
     * The title of the selector's input box
     */
    title: string;
    /**
     * The items to display (array of items).
     */
    items: Array<Array<WheelSelectorItem>>;
    /**
     * Which items to display by default.
     */
    defaultItems?: Array<DefaultItem>;
    /**
     * The 'ok' button text
     * Default: Done
     */
    positiveButtonText?: string;
    /**
     * The 'cancel' button text
     * Default: Cancel
     */
    negativeButtonText?: string;
    /**
     * Android only - theme color, 'light' or 'dark'.
     * Default: light
     */
    theme?: 'light' | 'dark';
    /**
     * Whether to have the wheels 'wrap' (Android only)
     * Default: false
     */
    wrapWheelText?: boolean;
    /**
     * The json key to display, by default it is description, this allows for setting any
     * key/value to be displayed
     * Default: description
     */
    displayKey?: string;
}
export interface WheelSelectorData {
    data: any;
}

export declare class StoreTimer extends IonicNativePlugin {
  show(options: any): Promise<any>;
  hideSelector(): Promise<void>;
}
