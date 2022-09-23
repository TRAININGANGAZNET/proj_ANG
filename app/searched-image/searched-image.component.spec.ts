import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedImageComponent } from './searched-image.component';

describe('SearchedImageComponent', () => {
  let component: SearchedImageComponent;
  let fixture: ComponentFixture<SearchedImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchedImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchedImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
