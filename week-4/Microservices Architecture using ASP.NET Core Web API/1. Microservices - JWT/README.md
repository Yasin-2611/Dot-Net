# 1. Microservices - JWT — Authentication & Authorization

ASP.NET Core 8.0 Web API microservice implementing **JWT (JSON Web Token)**
authentication and authorization, based on the Cognizant **Digital Nurture — .NET FSE
Deepskilling** document *1. Microservices - JWT.pdf*.

## Questions covered

| # | Question | Where |
|---|----------|-------|
| 1 | Implement JWT Authentication in ASP.NET Core Web API | `AuthController`, `Program.cs`, `appsettings.json` |
| 2 | Secure an API Endpoint Using JWT | `SecureController` with `[Authorize]` |
| 3 | Add Role-Based Authorization | Role claim in token + `AdminController` with `[Authorize(Roles = "Admin")]` |
| 4 | Validate JWT Token Expiry and Handle Unauthorized Access | `JwtBearerEvents.OnAuthenticationFailed` in `Program.cs` |

## Project structure

```
1. Microservices - JWT/
├── MicroservicesJwt.csproj     # net8.0 + JwtBearer + Swashbuckle
├── Program.cs                  # JWT auth configuration + expiry events
├── appsettings.json            # Jwt:Key, Issuer, Audience, DurationInMinutes
├── Properties/launchSettings.json
├── Models/
│   ├── User.cs                 # In-memory user store entry
│   └── LoginModel.cs           # Login request body
└── Controllers/
    ├── AuthController.cs       # POST /api/auth/login
    ├── SecureController.cs     # GET /api/secure/data  [Authorize]
    └── AdminController.cs      # GET /api/admin/dashboard  [Authorize(Roles=Admin)]
```

## How to run

**Prerequisite:** [.NET 8 SDK](https://dotnet.microsoft.com/download).

```bash
cd "1. Microservices - JWT"
dotnet restore
dotnet run
```

Open **`https://localhost:7199/swagger`** (or the port shown in the console).

## Walkthrough

### Question 1 — JWT login

1. `POST /api/auth/login` with JSON body:
   ```json
   { "username": "admin", "password": "admin123" }
   ```
2. Copy the returned `token`.
3. JWT settings (`Key`, `Issuer`, `Audience`, `DurationInMinutes`) live in
   `appsettings.json` and are read by both token generation and validation.

**Test users:**

| Username | Password | Role |
|----------|----------|------|
| `admin` | `admin123` | Admin |
| `user` | `user123` | User |

### Question 2 — Secure endpoint

1. `GET /api/secure/data` **without** a token → `401 Unauthorized`.
2. Add header `Authorization: Bearer <token>` → `200 OK` with `"This is protected data."`.

### Question 3 — Role-based authorization

1. Log in as `admin` → `GET /api/admin/dashboard` → `200 OK`.
2. Log in as `user` → same endpoint → `403 Forbidden` (valid token, wrong role).

### Question 4 — Token expiry

When a token expires, the API adds a `Token-Expired: true` response header via
`JwtBearerEvents.OnAuthenticationFailed`. To observe expiry quickly, lower
`Jwt:DurationInMinutes` in `appsettings.json` (e.g. to `1`), wait, then retry a
protected endpoint.

## Key takeaways

- JWT bearer authentication separates **authentication** (who you are) from
  **authorization** (what you can do).
- Issuer, audience, and signing key must match between token generation and
  validation.
- `[Authorize]` protects endpoints; `[Authorize(Roles = "...")]` adds role checks.
- `JwtBearerEvents` lets you customize behaviour for expired or invalid tokens.
