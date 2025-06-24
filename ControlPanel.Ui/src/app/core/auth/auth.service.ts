import { HttpClient } from "@angular/common/http";
import { Injectable, inject, signal } from "@angular/core";
import { AuthState } from "../models/authState";
import { User } from "../models/user";
import { Observable, tap } from "rxjs";
import { jwtDecode, JwtPayload } from "jwt-decode";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private http = inject(HttpClient);

    private readonly AUTH_KEY = 'auth_data';
    
    state = signal<AuthState>({
        user: null,
        token: null,
        isAuthenticated: false
    });

    constructor() {
        this.initializeAuthState();
    }

    login(username: string, password: string): Observable<{ token: string }> {
        return this.http.post<{ token: string }>('http://localhost:5232/api/Auth/login', { username, password }).pipe(
            tap(response => this.setAuthStateFromToken(response.token, username))
        );
    }

    private setAuthStateFromToken(token: string, userName: string): void {
        try {
            
            const decoded = jwtDecode<JwtPayload>(token);
            
            // console.log(`aud: ${decoded.aud}`); // ControlPanel.Ui
            // console.log(`exp: ${decoded.exp}`); //1750764579
            // console.log(`iat: ${decoded.iat}`);
            // console.log(`iss: ${decoded.iss}`); //ControlPanel.Server
            // console.log(`jti: ${decoded.jti}`); //c6f644c7-07d8-424d-b3cc-7fc143818acf
            // console.log(`nbf: ${decoded.nbf}`);
            // console.log(`sub: ${decoded.sub}`);
            
            const user: User = {
                 name: userName,
                 exp: decoded.exp,
                 aud: decoded.aud,
                 iss: decoded.iss,
                 jti: decoded.jti
            };

            this.state.set({ user, token, isAuthenticated: true });
            localStorage.setItem(this.AUTH_KEY, JSON.stringify({ user, token }));
            
        } catch (e) {
            console.error('Invalid token', e);
            this.clearAuthState();
        }
    }

    register(userData: { 
        email: string; 
        password: string; 
        name: string }): Observable<{ token: string }> {

        throw new Error("Function not implemented.");

        // return this.http.post<{ token: string }>('/api/auth/register', userData).pipe(
        // tap(response => {
        //     const decoded: any = jwtDecode(response.token);
        //     const user: User = {
        //     id: decoded.sub,
        //     email: decoded.email,
        //     name: decoded.name,
        //     roles: decoded.roles || []
        //     };
        //     this.setAuthState(user, response.token);
        //     })
        // );
    }

    logout(): void {
        this.clearAuthState();
        //this.router.navigate(['/login']);
    }

    getToken(): string | null {
        return this.state().token;
    }

    isAuthenticated(): boolean {
        return this.state().isAuthenticated;
    }

    getUser(): User | null {
        return this.state().user;
    }

    private initializeAuthState(): void {
        const authData = localStorage.getItem(this.AUTH_KEY);
        if (authData) {
            const { user, token } = JSON.parse(authData);
            this.state.set({ user, token, isAuthenticated: true });
        }
    }

    private setAuthState(user: User, token: string): void {
        this.state.set({ user, token, isAuthenticated: true });
        localStorage.setItem(this.AUTH_KEY, JSON.stringify({ user, token }));
    }

    private clearAuthState(): void {
        this.state.set({ user: null, token: null, isAuthenticated: false });
        localStorage.removeItem(this.AUTH_KEY);
    }
}

// function jwtDecode(token: string): any {
//     throw new Error("Function not implemented.");
// }
