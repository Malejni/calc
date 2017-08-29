import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculatorComponent } from './calculator.component';
import { By } from '@angular/platform-browser';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should be created', () => {
    expect(component).toBeTruthy();
  });
  it('should add the clicked number to the display', () => {
    const el = fixture.debugElement.queryAll(By.css('button'));
    const screen = fixture.debugElement.queryAll(By.css('.result'));

    el[1].nativeElement.click();
    fixture.detectChanges();

    expect(screen[0].nativeElement.innerHTML).toContain(el[1].nativeElement.innerHTML);
  });
});
