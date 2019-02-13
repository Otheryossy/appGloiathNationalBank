import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { ApiProvider } from './api-provider';

describe('ApiProvider Provider Unit Test', () => {
    let apiProvider: ApiProvider;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                ApiProvider,
                HttpClient
            ]
        }).compileComponents();
    });

    beforeEach(inject([
        ApiProvider,
    ], (_apiProvider: ApiProvider) => {
        apiProvider = _apiProvider;
    }));

    it('should create an instance', () => {
        expect(apiProvider).toBeTruthy();
    });

});
