import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatHeaderComponent } from './header.component';
import { By } from '@angular/platform-browser';

describe('ChatHeaderComponent', () => {
  let component: ChatHeaderComponent;
  let fixture: ComponentFixture<ChatHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatHeaderComponent);
    component = fixture.componentInstance;
  
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should set background to headeroption',(done)=>{
    component.headerOptions={
      textColor:'blue',
      backgroundColor: 'black'
    }
    fixture.detectChanges();

    setTimeout(()=>{
      const colorEl: HTMLElement = fixture.debugElement.query(By.css('.chat-header-wrapper')).nativeElement;
      let compStyles = window.getComputedStyle(colorEl);
      expect(colorEl).toBeTruthy()
      expect(compStyles.backgroundColor).toBe('rgb(0, 0, 0)');
      done()
    },100)
    
  })

  it('should set background to deafult if header not provided',(done)=>{
    component.headerOptions=null
    fixture.detectChanges();

    setTimeout(()=>{
      const colorEl: HTMLElement = fixture.debugElement.query(By.css('.chat-header-wrapper')).nativeElement;
      let compStyles = window.getComputedStyle(colorEl);
      expect(colorEl).toBeTruthy()
      expect(compStyles.backgroundColor).toBe('rgb(33, 150, 243)');
      done()
    },100)
    
  })


  it('should set text color to headeroption',(done)=>{
    component.headerOptions={
      textColor:'blue',
      backgroundColor: 'black'
    }
    fixture.detectChanges();

    setTimeout(()=>{
      const colorEl: HTMLElement = fixture.debugElement.query(By.css('.chat-header-title')).nativeElement;
      let compStyles = window.getComputedStyle(colorEl);
      expect(colorEl).toBeTruthy()
      expect(compStyles.color).toBe('rgb(0, 0, 255)');
      done()
    },100)
    
  })

  it('should set text color to deafult if header not provided',(done)=>{
    component.headerOptions=null
    fixture.detectChanges();

    setTimeout(()=>{
      const colorEl: HTMLElement = fixture.debugElement.query(By.css('.chat-header-title')).nativeElement;
      let compStyles = window.getComputedStyle(colorEl);
      expect(colorEl).toBeTruthy()
      expect(compStyles.color).toBe('rgb(255, 255, 255)');
      done()
    },100)
    
  })

});



