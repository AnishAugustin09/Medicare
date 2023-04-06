import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product';
import { BehaviorSubject, Observable } from 'rxjs';
import { Register } from '../model/register';
import { Login } from '../model/login';
import { User } from '../model/user';
import { Admin } from '../model/admin';

@Injectable({
  providedIn: 'root'
})
export class MedicareserviceService {

  public cartList: any=[];
  public productList = new BehaviorSubject<any>([])

  public profile: any=[]
  public profileView = new BehaviorSubject<any>([]);
  public search= new BehaviorSubject<string>("")

  public adminpro:any=[];
  public adminview= new BehaviorSubject<any>([]);

  baseURL: string ="http://localhost:8080"

  constructor(private http : HttpClient) { }

  //-------------------------- Product Methods-------------------------

  getAllProduct():Observable<Product[]>{
    return this.http.get<Product[]>(this.baseURL);
  }

  getProductById(id: number):Observable<Product>{
    return this.http.get<Product>(this.baseURL + "/product/" + id);
  }

  saveProduct(product: Product){
    return this.http.post(this.baseURL+"/addProduct",product);
  }

  deleteProduct(id: number):Observable<Product>{
    return this.http.delete<Product>(`${this.baseURL}/deleteProduct/${id}`)
  }

  updateProduct(product: Product, id: number):Observable<Product>{
    return this.http.put<Product>(this.baseURL+"/product/updateProduct/"+id,product)
  }

//------------------------------Authentication Methods----------------------------

  registerUser(register: Register){
    return this.http.post(this.baseURL+"/addUser",register)
  }

  loginUser(login :Login){
    return this.http.post(this.baseURL+"/userLogin",login)
  }

  adminLogin(login: Login){
    return this.http.post(this.baseURL+"/adminLogin",login)
  }

  //---------------------------------User Methods----------------------------------

  getAllUser():Observable<User[]>{
    return this.http.get<User[]>(this.baseURL+"/users")
  }

  getById(email : string):Observable<User>{
    return this.http.get<User>(this.baseURL+"/user/"+email)
  }

  saveUser(user: User){
    return this.http.post(this.baseURL+"/addUser",user)
  }

  deleteUser(email: string):Observable<User>{
    return this.http.delete<User>(this.baseURL+"/deleteUser/"+email)
  }

  updateUser(user: User, email:string){
    return this.http.put(this.baseURL+"/updateUser/"+email,user)
  }

  //--------------------------Cart Service---------------------------

  getProducts(){
    return this.productList.asObservable();
  }

  addtoCart(product: any){
    this.cartList.push(product);
    this.productList.next(this.cartList)
    this.getTotal();
    console.log(this.cartList)
  }

  getTotal():number{
    let total=0;
    this.cartList.map((a:any)=>{total+=Number(a.total)})
    return total
  }

  removeitem(product:Product){
    this.cartList.map((a:any,index:any)=>{
      if(product.id===a.id)
        this.cartList.splice(index,1)
    })
  }

  emptyCart(){
    this.cartList=[]
    this.productList.next(this.cartList)
  }

  //------------------------Profile Methods-----------------------


  getProfile(){
    return this.profileView.asObservable();
  }

  addProfile(user: any){
    this.profile.push(user)
    this.profileView.next(this.profile)
    console.log(this.profile)
  }

  emptyProfile(){
    this.profile=[]
    this.profileView.next(this.profile)
  }

  //--------------------------Admin Service---------------------

  getAdminById(email:string):Observable<Admin>{
    return this.http.get<Admin>(this.baseURL+"/admin/"+email)
  }

  updatePassword(admin:Admin, email:string){
    return this.http.put(this.baseURL+"/updateAdmin/"+email,admin)
  }

  addAdmin(admin:any){
    this.adminpro.push(admin)
    this.adminview.next(this.adminpro)
    console.log(this.adminview)
  }

  getAdminPro(){
    return this.adminview.asObservable();
  }

  removeAdmin(){
    this.adminpro=[]
    this.adminview.next(this.adminpro)
  }
}
