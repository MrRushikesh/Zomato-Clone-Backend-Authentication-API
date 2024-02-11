# Zomato Backend Authentication API

The Zomato Backend Authentication API is a secure and robust solution designed to facilitate authentication and authorization processes for Zomato's backend systems. As a key component of the Zomato ecosystem, this API ensures that only authorized users and services can access the various functionalities and data offered by the platform.

## Key Features -: 

1. Token-based Authentication: 
- The API utilizes token-based authentication mechanisms to grant access to authorized users. Upon successful authentication, users receive a unique token that must be included in subsequent requests to authenticate their identity.

2. Hashed Password Storage:
- User passwords are securely hashed and stored in the system. When a user logs in, the API hashes the provided password and compares it with the stored hash for authentication, ensuring that passwords are never stored in plaintext and enhancing overall security.

3. Secure Communication: 
- All communication between clients and the authentication API is encrypted using industry-standard protocols such as HTTPS, ensuring the confidentiality and integrity of data exchanged during the authentication process.

4. Scalability:
-  The API is designed to handle a high volume of authentication requests efficiently, making it suitable for use in large-scale applications with millions of users and numerous concurrent requests.


### Register -: 
- http://localhost:8500/api/auth/register

    {
        "username" : "user",
        "email" : "user@gmail.com",
        "phone" : 1234567890,
        "password" : "Pass@123"
    }

### Login -: 
- http://localhost:8500/api/auth/login

    {
        "email" : "user@gmail.com",
        "password" : "Pass@123"
    }


### Profile -: 
- http://localhost:8500/api/auth/profile

### Logout -: 
- http://localhost:8500/api/auth/logout

