import { inject, PLATFORM_ID } from '@angular/core';
import { ApolloClient, InMemoryCache, ApolloLink, HttpLink } from '@apollo/client/core';
import { isPlatformBrowser } from '@angular/common';
import { Observable } from 'rxjs';

export function apolloClientFactory() {
    const platformId = inject(PLATFORM_ID);
    const isBrowser = isPlatformBrowser(platformId);

    const mockLink = new ApolloLink((operation) => {
        const operationName = operation.operationName;

        const mockData: Record<string, any> = {
            GetUsers: {
                users: [
                    { id: '1', name: 'John Doe', email: 'john@example.com', role: 'Developer' },
                    { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'Designer' },
                    { id: '3', name: 'Bob Johnson', email: 'bob@example.com', role: 'Manager' }
                ]
            },
            GetPosts: {
                posts: [
                    { id: '1', title: 'First Post', content: 'This is the first post', authorId: '1' },
                    { id: '2', title: 'Second Post', content: 'This is the second post', authorId: '2' },
                    { id: '3', title: 'Third Post', content: 'This is the third post', authorId: '1' }
                ]
            },
            GetUser: {
                user: { id: '1', name: 'John Doe', email: 'john@example.com', role: 'Developer' }
            }
        };

        return new Observable(observer => {
            setTimeout(() => {
                const data = mockData[operationName!] || {};
                observer.next({ data }); // Only data
                observer.complete();
            }, 300);
        });
    });

    return new ApolloClient({
        link: mockLink,
        cache: new InMemoryCache(),
        ssrMode: !isBrowser,
        defaultOptions: {
            query: {
                fetchPolicy: 'network-only',
                errorPolicy: 'all'
            }
        }
    });
}

export function createApolloClient() {
    const platformId = inject(PLATFORM_ID);
    const isBrowser = isPlatformBrowser(platformId);
    // Real API link
    const httpLink = new HttpLink({
        uri: 'https://graphqlzero.almansi.me/api'  // Dummy API endpoint
    });

    return new ApolloClient({
        link: httpLink,
        cache: new InMemoryCache(),
        ssrMode: !isBrowser,
        defaultOptions: {
            query: { fetchPolicy: 'network-only', errorPolicy: 'all' }
        }
    });
}