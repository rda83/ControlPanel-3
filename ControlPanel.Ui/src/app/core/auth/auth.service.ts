import { HttpClient } from "@angular/common/http";
import { Injectable, inject, signal } from "@angular/core";
import { AuthState } from "../models/authState";
import { User } from "../models/user";
import { Observable, tap } from "rxjs";

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

    login(email: string, password: string): Observable<{ token: string }> {
        return this.http.post<{ token: string }>('http://localhost:5232/api/Auth/login', { email, password }).pipe(
            tap(response => {
                const decoded: any = jwtDecode(response.token);
                const user: User = {
                id: decoded.sub,
                email: decoded.email,
                name: decoded.name,
                roles: decoded.roles || []
                };
                this.setAuthState(user, response.token);
            })
        );
    }

    register(userData: { 
        email: string; 
        password: string; 
        name: string }): Observable<{ token: string }> {

        return this.http.post<{ token: string }>('/api/auth/register', userData).pipe(
        tap(response => {
            const decoded: any = jwtDecode(response.token);
            const user: User = {
            id: decoded.sub,
            email: decoded.email,
            name: decoded.name,
            roles: decoded.roles || []
            };
            this.setAuthState(user, response.token);
            })
        );
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

function jwtDecode(token: string): any {
    throw new Error("Function not implemented.");
}
