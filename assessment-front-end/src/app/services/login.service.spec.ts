import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginService);
    //define mockuser
    service.mockUser = {
      username: 'user',
      password: 'password',
      email: 'email@email.com',
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should not login in a unregistered user', (done: any) => {
    service.loginUser('name', 'password').subscribe((result) => {
      expect(result.status).toEqual(401);
      expect(result.message).toEqual('Error: Invalid credentials');
      done();
    });
  });

  it('should login in a registered user', (done: any) => {
    service.loginUser('user', 'password').subscribe((result) => {
      expect(result.status).toEqual(200);
      expect(result.message).toEqual(
        'Success: user, Welcome back to the Incident Tracker'
      );
      done();
    });
  });

  it('should login in a new user', (done: any) => {
    service
      .loginUser('user', 'password', 'email@email.com')
      .subscribe((result) => {
        expect(result.status).toEqual(200);
        expect(result.message).toEqual(
          'Success: user, Welcome to the Incident Tracker'
        );
        done();
      });
  });
});
