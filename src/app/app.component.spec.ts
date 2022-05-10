import { TestBed } from '@angular/core/testing';
import { TuringMachine } from './turing-machine';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TuringMachine
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(TuringMachine);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'turing'`, () => {
    const fixture = TestBed.createComponent(TuringMachine);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('turing');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(TuringMachine);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('turing app is running!');
  });
});
