import HttpClient from './httpClient';

export default class AccountService {
  static getAccountList() {
    return HttpClient.get('auth/accounts');
  }
}
