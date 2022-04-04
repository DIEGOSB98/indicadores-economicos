import {ComponentFixture, TestBed} from '@angular/core/testing';
import {IndicadoresComponent} from './indicadores.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ToastService} from '../../services/toast.service';
import {NgbModal, NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import {ToastrModule} from 'ngx-toastr';
import {MiIndicadorService} from '../../services/mi-indicador.service';
import {Indicador} from '../../models/indicador';
import {of, throwError} from 'rxjs';

describe('IndicadoresComponent', () => {
  let indicadoresComponent: IndicadoresComponent;
  let fixture: ComponentFixture<IndicadoresComponent>;
  let miIndicadorService: MiIndicadorService;
  let toastService: ToastService;
  let modalService: NgbModal;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        IndicadoresComponent
      ],
      providers: [
        ToastService,
        MiIndicadorService
      ],
      imports: [
        HttpClientTestingModule,
        NgbModalModule,
        ToastrModule.forRoot()
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicadoresComponent);
    miIndicadorService = TestBed.inject(MiIndicadorService);
    toastService = TestBed.inject(ToastService);
    indicadoresComponent = fixture.componentInstance;
  });

  it('Tiene que verificar que el componente sea creado', () => {
    expect(indicadoresComponent).toBeTruthy();
  });

  it('Tiene que comprobar que en ngOnInit() cargue la función obtenerIndicadores()', () => {
    const obtenerIndicadores = spyOn(indicadoresComponent, 'obtenerIndicadoresDelServicio').and.callThrough();
    indicadoresComponent.ngOnInit();
    expect(obtenerIndicadores).toHaveBeenCalled();
  });

  it('Tiene que comprobar que obtenerIndicadores() llame a obtenerIndicadores() del servicio MiIndicadorService', () => {
    const spy = spyOn(miIndicadorService, 'obtenerIndicadores').and.callThrough();
    indicadoresComponent.obtenerIndicadoresDelServicio();
    expect(spy).toHaveBeenCalled();
  });

  it('Tiene que comprobar que estadoCargando cambie a true si llama a obtenerIndicadoresDelServicio()', () => {
    indicadoresComponent.obtenerIndicadoresDelServicio();
    expect(indicadoresComponent.estadoCargando).toBeTruthy();
  });

  it('Tiene que comprobar que estadoCargando cambie a false si se completa la subscripcion al observable obtenerIndicadores()', () => {
    spyOn(miIndicadorService, 'obtenerIndicadores').and.returnValue(of([new Indicador(), new Indicador()]));
    indicadoresComponent.obtenerIndicadoresDelServicio();
    expect(indicadoresComponent.estadoCargando).toBeFalsy();
  });

  it('Tiene que comprobar que estadoCargando sea false si ocurre un error en el observable obtenerIndicadores()', () => {
    spyOn(miIndicadorService, 'obtenerIndicadores').and.callFake(() => throwError({ok: false}));
    indicadoresComponent.obtenerIndicadoresDelServicio();
    expect(indicadoresComponent.estadoCargando).toBeFalsy();
  });

  it('Tiene que comprobar que cuando se complete el observable obtenerIndicadores(), llame a la función datosCargadosCorrectamente()', () => {
    const spy = spyOn(toastService, 'datosCargadosCorrectamente').and.callThrough();
    spyOn(miIndicadorService, 'obtenerIndicadores').and.returnValue(of([new Indicador(), new Indicador()]));
    indicadoresComponent.obtenerIndicadoresDelServicio();
    expect(spy).toHaveBeenCalled();
  });

  it('Tiene que comprobar que se llame a la función errorCargarDatos() si falla el observable obtenerIndicadores()', () => {
    const spy = spyOn(toastService, 'errorCargarDatos').and.callThrough();
    spyOn(miIndicadorService, 'obtenerIndicadores').and.callFake(() => throwError({ok: false}));
    indicadoresComponent.obtenerIndicadoresDelServicio();
    expect(spy).toHaveBeenCalled();
  });
});
