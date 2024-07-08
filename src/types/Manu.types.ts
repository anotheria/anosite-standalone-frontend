export interface Element {
  name: string;
  type: string;
  readonly: boolean;
  autocompleteOff: boolean;
}

export interface Section {
  name: string;
  module: string;
  document: string;
  elements: Element[];
}

export interface View {
  name: string;
  sections: Section[];
}

export interface Data {
  views: View[];
}