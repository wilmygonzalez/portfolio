import { ComponentFactoryResolver, ComponentRef, Injectable } from '@angular/core';

@Injectable()
export class ModalService {

  private componentRef: ComponentRef<any>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  open(childComponent: any, entry: any): ComponentRef<any> {
    entry.clear();
    const factory = this.componentFactoryResolver.resolveComponentFactory(childComponent);
    this.componentRef = entry.createComponent(factory);

    setTimeout(() => {
      var modalOverlay = document.getElementById('modalOverlay');
      modalOverlay.classList.value = 'open-modal';
    }, 100);

    return this.componentRef;
  }

  close() {
    if (this.componentRef) {
      var modalOverlay = document.getElementById('modalOverlay');

      if (modalOverlay) {
        modalOverlay.classList.value = 'close-modal';
      }

      setTimeout(() => {
        this.componentRef.destroy();
      }, 200);
    }
  }

}
