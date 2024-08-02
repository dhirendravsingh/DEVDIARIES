import conf from "../conf/config";
import { Client, Account, ID } from "appwrite";

export class AuthService{
client= new Client(); // we have to make it this way only like new client then we have to set end points
account; // this will also be made like newAccount but first we need to specify end points
constructor(){
    this.client 
    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
}

async createAccount({email, password, name}){
    try {
      const userAccount =  await this.account.create(ID.unique(),email,password,name);
      if(userAccount){
       // call another method
       return this.login({email,password});
      }
      else{
        return userAccount;
      }
    } catch (error) {
        throw error;
    }
}
async login({email, password}){
    try {
      return  await this.account.createEmailPasswordSession(email,password);
    } catch (error) {
        throw error;
    }
}

async getCurrentUser(){
    try {
       return await this.account.get();
    } catch (error) {
        throw error;
    }
    return null;
}

async logout(){
    try {
        await this.account.deleteSessions('current');
    } catch (error) {
        throw error;
    }
}
}

const authService = new AuthService();

export default authService