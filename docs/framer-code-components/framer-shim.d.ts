declare module "framer" {
  type HiddenPredicate<Props> = (props: Props) => boolean;

  type BaseControl<Props> = {
    title?: string;
    description?: string;
    defaultValue?: unknown;
    hidden?: HiddenPredicate<Props>;
  };

  type StringControl<Props> = BaseControl<Props> & {
    type: "string";
    placeholder?: string;
    displayTextArea?: boolean;
  };

  type BooleanControl<Props> = BaseControl<Props> & {
    type: "boolean";
    enabledTitle?: string;
    disabledTitle?: string;
  };

  type ColorControl<Props> = BaseControl<Props> & {
    type: "color";
    optional?: boolean;
  };

  type NumberControl<Props> = BaseControl<Props> & {
    type: "number";
    min?: number;
    max?: number;
    step?: number;
    unit?: string;
  };

  type EnumControl<Props> = BaseControl<Props> & {
    type: "enum";
    options: string[];
    optionTitles?: string[];
  };

  type ObjectControl<Props> = BaseControl<Props> & {
    type: "object";
    controls: Record<string, Control<Props>>;
  };

  type ArrayControl<Props> = BaseControl<Props> & {
    type: "array";
    control: Control<Props>;
    maxCount?: number;
  };

  type Control<Props> =
    | StringControl<Props>
    | BooleanControl<Props>
    | ColorControl<Props>
    | NumberControl<Props>
    | EnumControl<Props>
    | ObjectControl<Props>
    | ArrayControl<Props>;

  export const ControlType: {
    String: "string";
    Boolean: "boolean";
    Color: "color";
    Number: "number";
    Enum: "enum";
    Object: "object";
    Array: "array";
  };

  export function addPropertyControls<Props>(
    component: import("react").ComponentType<Props>,
    controls: Record<string, Control<Props>>,
  ): void;
}
