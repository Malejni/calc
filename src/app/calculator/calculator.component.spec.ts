import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CalculatorComponent } from './calculator.component';

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

  it('should enter number', () => {
    const btn = fixture.debugElement.queryAll(By.css('button'));
    const screen = fixture.debugElement.query(By.css('div'));
    btn[0].nativeElement.click();
    fixture.detectChanges();
    expect(screen.nativeElement.innerHTML).toContain(btn[0].nativeElement.innerHTML);
  });
  it('should calculate according to divide', () => {
    const btn = fixture.debugElement.queryAll(By.css('button'));
    const screen = fixture.debugElement.query(By.css('div'));
    btn[0].nativeElement.click();
    btn[3].nativeElement.click();
    btn[0].nativeElement.click();
    btn[14].nativeElement.click();
    fixture.detectChanges();
    expect(screen.nativeElement.innerHTML).toBe('1');
  });
  it('should calculate according to mutliply', () => {
    const btn = fixture.debugElement.queryAll(By.css('button'));
    const screen = fixture.debugElement.query(By.css('div'));
    btn[0].nativeElement.click();
    btn[7].nativeElement.click();
    btn[0].nativeElement.click();
    btn[14].nativeElement.click();
    fixture.detectChanges();
    expect(screen.nativeElement.innerHTML).toBe('49');
  });
  it('should calculate according to plus', () => {
    const btn = fixture.debugElement.queryAll(By.css('button'));
    const screen = fixture.debugElement.query(By.css('div'));
    btn[0].nativeElement.click();
    btn[15].nativeElement.click();
    btn[0].nativeElement.click();
    btn[14].nativeElement.click();
    fixture.detectChanges();
    expect(screen.nativeElement.innerHTML).toBe('14');
  });
  it('should calculate according to minus', () => {
    const btn = fixture.debugElement.queryAll(By.css('button'));
    const screen = fixture.debugElement.query(By.css('div'));
    btn[0].nativeElement.click();
    btn[11].nativeElement.click();
    btn[0].nativeElement.click();
    btn[14].nativeElement.click();
    fixture.detectChanges();
    expect(screen.nativeElement.innerHTML).toBe('0');
  });
  it('should calculate according to modulus', () => {
    const btn = fixture.debugElement.queryAll(By.css('button'));
    const screen = fixture.debugElement.query(By.css('div'));
    btn[0].nativeElement.click();
    btn[19].nativeElement.click();
    btn[0].nativeElement.click();
    btn[14].nativeElement.click();
    fixture.detectChanges();
    expect(screen.nativeElement.innerHTML).toBe('0');
  });
});
