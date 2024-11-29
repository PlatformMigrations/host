
    export type RemoteKeys = 'federation_provider/button' | 'federation_provider/basic';
    type PackageType<T> = T extends 'federation_provider/basic' ? typeof import('federation_provider/basic') :T extends 'federation_provider/button' ? typeof import('federation_provider/button') :any;