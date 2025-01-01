```mermaid
graph TD
    subgraph Monorepo
        subgraph apps
            A[web-next]
            B[mobile-expo]
            C[api]
        end
        
        subgraph libs
            D[shared-ui]
            E[shared-types]
            F[shared-utils]
            G[shared-api]
            H[shared-constants]
        end
        
        A --> D
        A --> E
        A --> F
        A --> G
        A --> H
        
        B --> D
        B --> E
        B --> F
        B --> G
        B --> H
        
        C --> E
        C --> G
        C --> H
    end
```
