import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @Input() user: IUser | undefined;
  @Output() close = new EventEmitter<boolean>();

  closeModal() {
    this.close.emit(false);
  }

}
