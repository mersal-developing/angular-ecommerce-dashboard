import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CKEditorModule, ChangeEvent } from '@ckeditor/ckeditor5-angular';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-cdk-editor',
  standalone: true,
  imports: [CKEditorModule],
  templateUrl: './cdk-editor.component.html',
  styleUrl: './cdk-editor.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CdkEditorComponent {
  title = 'angular-template-ckeditor5-classic';
  public Editor = ClassicEditor;

  public onReady(editor: any) {
    console.log("CKEditor5 Angular Component is ready to use!", editor);
  }
  
  public onChange({ editor }: ChangeEvent) {
    const data = editor.getData();
    console.log(data);
  }
}
