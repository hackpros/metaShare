/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { MetaShareTestModule } from '../../../test.module';
import { GoodsDeleteDialogComponent } from 'app/entities/goods/goods-delete-dialog.component';
import { GoodsService } from 'app/entities/goods/goods.service';

describe('Component Tests', () => {
  describe('Goods Management Delete Component', () => {
    let comp: GoodsDeleteDialogComponent;
    let fixture: ComponentFixture<GoodsDeleteDialogComponent>;
    let service: GoodsService;
    let mockEventManager: any;
    let mockActiveModal: any;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [MetaShareTestModule],
        declarations: [GoodsDeleteDialogComponent]
      })
        .overrideTemplate(GoodsDeleteDialogComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(GoodsDeleteDialogComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(GoodsService);
      mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
      mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
    });

    describe('confirmDelete', () => {
      it('Should call delete service on confirmDelete', inject(
        [],
        fakeAsync(() => {
          // GIVEN
          spyOn(service, 'delete').and.returnValue(of({}));

          // WHEN
          comp.confirmDelete(123);
          tick();

          // THEN
          expect(service.delete).toHaveBeenCalledWith(123);
          expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
          expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
        })
      ));
    });
  });
});
