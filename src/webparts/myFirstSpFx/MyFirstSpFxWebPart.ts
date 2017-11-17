import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'MyFirstSpFxWebPartStrings';
import MyFirstSpFx from './components/MyFirstSpFx';
import { IMyFirstSpFxProps } from './components/IMyFirstSpFxProps';

export interface IMyFirstSpFxWebPartProps {
  description: string;
}

export default class MyFirstSpFxWebPart extends BaseClientSideWebPart<IMyFirstSpFxWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IMyFirstSpFxProps > = React.createElement(
      MyFirstSpFx,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
