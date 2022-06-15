import { Injectable } from '@angular/core';
import { connect, ConnectedWalletAccount, Contract, keyStores, WalletConnection } from 'near-api-js'
import { formatNearAmount } from 'near-api-js/lib/utils/format';
import { BehaviorSubject, map, switchMap, tap } from 'rxjs';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class NearService {
  private _walletConnection = new BehaviorSubject<WalletConnection | null>(null);
  walletConnection = this._walletConnection.asObservable()
  private accountId: any
  private _account = new BehaviorSubject<ConnectedWalletAccount | null>(null)
  account = this._account.asObservable()
  contract!: any
  nearEnv = environment.nearConf

  constructor() { }


  async initContract() {
    const near = await connect({
      ...this.nearEnv, deps: { keyStore: new keyStores.BrowserLocalStorageKeyStore(localStorage) },
      headers: {}
    })
    this._walletConnection.next(new WalletConnection(near, ''))
    this.accountId = this._walletConnection.value?.getAccountId()
    this._account.next(this._walletConnection.value?.account() || null)
    this.contract = new Contract(this._account.value as ConnectedWalletAccount, this.nearEnv.contractName, {
      viewMethods: ["getProduct", "getProducts"],
      changeMethods: ["buyProduct", "setProduct",'editProduct','deleteProduct']
    })
  }

  accountBalance() {
    return this.walletConnection.pipe(
      switchMap(async wallet => wallet?.account().getAccountBalance()),
      map(balance => formatNearAmount(balance?.total || '', 2))
    )
  }

  getAccountId() {
    return this.walletConnection.pipe(map(wallet => wallet?.getAccountId()))
  }

  login() {
    this._walletConnection.value?.requestSignIn({ contractId: this.nearEnv.contractName })
  }

  logOut() {
    this._walletConnection.value?.signOut()
  }

  isSignedIn() {
    return this.walletConnection.pipe(map(wallet=>wallet?.isSignedIn() || false))
  }
}
