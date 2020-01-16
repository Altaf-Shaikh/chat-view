import { TestBed, inject } from '@angular/core/testing';

import { ChatViewService } from './chat-view.service';

describe('ChatViewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatViewService]
    });
  });

  it('should be created', inject([ChatViewService], (service: ChatViewService) => {
    expect(service).toBeTruthy();
  }));
});
