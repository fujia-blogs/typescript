type ResolveType = (value: any) => any;
type RejectType = (value: any) => any;
type StatusType = 'pending' | 'fulfilled' | 'rejected';

type Executor = (resolve: ResolveType, reject: RejectType) => any;

export { ResolveType, RejectType, Executor, StatusType };
