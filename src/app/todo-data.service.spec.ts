import {TestBed, inject} from '@angular/core/testing';
import { ApiMockService } from './api-mock.service';
import { ApiService } from './api.service';
import {TodoDataService} from './todo-data.service';

describe('TodoDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TodoDataService,
        {
          provide: ApiService,
          useClass: ApiMockService
        }
      ]
    });
  });

  it('should ...', inject([TodoDataService], (service: TodoDataService) => {
    expect(service).toBeTruthy();
  }));
});
