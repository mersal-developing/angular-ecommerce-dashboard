import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Action } from '../../models';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-action-buttons',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatMenuModule, TranslateModule],
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActionButtonsComponent {
  @Input() actions!: Action[];
  @Output() handleAction = new EventEmitter<string>();


  emitAction(actionName: string) {
    this.handleAction.emit(actionName)
  }

} 
