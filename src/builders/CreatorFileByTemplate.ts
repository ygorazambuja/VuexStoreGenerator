import { workspace, Uri } from "vscode";

export type Template = {
  name: string;
  filename: string;
  template: string;
};

export class CreatorFileByTemplate {
  _templates: Array<Template> = [];
  _path = '';

  constructor(templates: Array<Template>, path: string) {
    this._templates = templates;
    this._path = path;
  }

  public generateAllTemplateFiles() {
    this._templates.forEach(template => {
      this.writeFile(template);
    });
  }

  public generateTemplateFile(templateName: string) {
    const templateSelected = this.findTemplate(templateName);
    this.writeFile(templateSelected);
  }

  private findTemplate(templateName: string): Template {
    return this._templates.filter(template => template.name === templateName)?.[0] ?? null;
  }

  private writeFile(template: Template) {
    workspace.fs.writeFile(
      Uri.file(`${this._path}/${template.filename}`),
      Buffer.from(template.template)
    );
  }
}
