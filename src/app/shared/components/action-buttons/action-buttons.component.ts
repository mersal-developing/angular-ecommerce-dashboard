import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-action-buttons',
    imports: [CommonModule, MatIconModule, MatMenuModule, TranslateModule],
    templateUrl: './action-buttons.component.html',
    styleUrls: ['./action-buttons.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActionButtonsComponent {
  @Input() actions!: string[];
  @Output() handleAction = new EventEmitter<string>();

  iconMapping: { [key: string]: string } = {
    delete: 'delete',
    edit: 'edit',
    view: 'pageview',
  };

  classes: { [key: string]: string } = {
    edit: 'text-primary-400',
    delete: 'text-warning',
    view: 'text-secondary-400'
  }

  /*
    use the same classes but in case of material element we should use ! to apply important to style
  */
 
  matClasses: { [key: string]: string } = {
    edit: '!text-primary-400',
    delete: '!text-warning',
    view: '!text-secondary-400'
  }

  emitAction(actionName: string) {
    this.handleAction.emit(actionName)
  }

} 
