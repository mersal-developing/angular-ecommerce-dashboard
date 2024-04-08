import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkEditorComponent } from './cdk-editor.component';

describe('CdkEditorComponent', () => {
  let component: CdkEditorComponent;
  let fixture: ComponentFixture<CdkEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CdkEditorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CdkEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
