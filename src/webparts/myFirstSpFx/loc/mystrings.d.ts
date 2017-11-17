declare interface IMyFirstSpFxWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'MyFirstSpFxWebPartStrings' {
  const strings: IMyFirstSpFxWebPartStrings;
  export = strings;
}
