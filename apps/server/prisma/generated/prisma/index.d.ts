
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Workflow
 * 
 */
export type Workflow = $Result.DefaultSelection<Prisma.$WorkflowPayload>
/**
 * Model WorkflowNode
 * 
 */
export type WorkflowNode = $Result.DefaultSelection<Prisma.$WorkflowNodePayload>
/**
 * Model WorkflowEdge
 * 
 */
export type WorkflowEdge = $Result.DefaultSelection<Prisma.$WorkflowEdgePayload>
/**
 * Model WorkflowExecution
 * 
 */
export type WorkflowExecution = $Result.DefaultSelection<Prisma.$WorkflowExecutionPayload>
/**
 * Model WorkflowVersion
 * 
 */
export type WorkflowVersion = $Result.DefaultSelection<Prisma.$WorkflowVersionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const WorkflowNodeType: {
  Trigger: 'Trigger',
  Action: 'Action',
  Condition: 'Condition',
  Http: 'Http'
};

export type WorkflowNodeType = (typeof WorkflowNodeType)[keyof typeof WorkflowNodeType]


export const WorkflowEdgeLabel: {
  onSuccess: 'onSuccess',
  onFaliure: 'onFaliure'
};

export type WorkflowEdgeLabel = (typeof WorkflowEdgeLabel)[keyof typeof WorkflowEdgeLabel]


export const ExecutionStatus: {
  PENDING: 'PENDING',
  RUNNING: 'RUNNING',
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED'
};

export type ExecutionStatus = (typeof ExecutionStatus)[keyof typeof ExecutionStatus]

}

export type WorkflowNodeType = $Enums.WorkflowNodeType

export const WorkflowNodeType: typeof $Enums.WorkflowNodeType

export type WorkflowEdgeLabel = $Enums.WorkflowEdgeLabel

export const WorkflowEdgeLabel: typeof $Enums.WorkflowEdgeLabel

export type ExecutionStatus = $Enums.ExecutionStatus

export const ExecutionStatus: typeof $Enums.ExecutionStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workflow`: Exposes CRUD operations for the **Workflow** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workflows
    * const workflows = await prisma.workflow.findMany()
    * ```
    */
  get workflow(): Prisma.WorkflowDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workflowNode`: Exposes CRUD operations for the **WorkflowNode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkflowNodes
    * const workflowNodes = await prisma.workflowNode.findMany()
    * ```
    */
  get workflowNode(): Prisma.WorkflowNodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workflowEdge`: Exposes CRUD operations for the **WorkflowEdge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkflowEdges
    * const workflowEdges = await prisma.workflowEdge.findMany()
    * ```
    */
  get workflowEdge(): Prisma.WorkflowEdgeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workflowExecution`: Exposes CRUD operations for the **WorkflowExecution** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkflowExecutions
    * const workflowExecutions = await prisma.workflowExecution.findMany()
    * ```
    */
  get workflowExecution(): Prisma.WorkflowExecutionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workflowVersion`: Exposes CRUD operations for the **WorkflowVersion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkflowVersions
    * const workflowVersions = await prisma.workflowVersion.findMany()
    * ```
    */
  get workflowVersion(): Prisma.WorkflowVersionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.17.1
   * Query Engine version: 272a37d34178c2894197e17273bf937f25acdeac
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Workflow: 'Workflow',
    WorkflowNode: 'WorkflowNode',
    WorkflowEdge: 'WorkflowEdge',
    WorkflowExecution: 'WorkflowExecution',
    WorkflowVersion: 'WorkflowVersion'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "workflow" | "workflowNode" | "workflowEdge" | "workflowExecution" | "workflowVersion"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Workflow: {
        payload: Prisma.$WorkflowPayload<ExtArgs>
        fields: Prisma.WorkflowFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkflowFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkflowFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          findFirst: {
            args: Prisma.WorkflowFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkflowFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          findMany: {
            args: Prisma.WorkflowFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>[]
          }
          create: {
            args: Prisma.WorkflowCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          createMany: {
            args: Prisma.WorkflowCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkflowCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>[]
          }
          delete: {
            args: Prisma.WorkflowDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          update: {
            args: Prisma.WorkflowUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          deleteMany: {
            args: Prisma.WorkflowDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkflowUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkflowUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>[]
          }
          upsert: {
            args: Prisma.WorkflowUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          aggregate: {
            args: Prisma.WorkflowAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkflow>
          }
          groupBy: {
            args: Prisma.WorkflowGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkflowGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkflowCountArgs<ExtArgs>
            result: $Utils.Optional<WorkflowCountAggregateOutputType> | number
          }
        }
      }
      WorkflowNode: {
        payload: Prisma.$WorkflowNodePayload<ExtArgs>
        fields: Prisma.WorkflowNodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkflowNodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowNodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkflowNodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowNodePayload>
          }
          findFirst: {
            args: Prisma.WorkflowNodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowNodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkflowNodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowNodePayload>
          }
          findMany: {
            args: Prisma.WorkflowNodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowNodePayload>[]
          }
          create: {
            args: Prisma.WorkflowNodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowNodePayload>
          }
          createMany: {
            args: Prisma.WorkflowNodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkflowNodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowNodePayload>[]
          }
          delete: {
            args: Prisma.WorkflowNodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowNodePayload>
          }
          update: {
            args: Prisma.WorkflowNodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowNodePayload>
          }
          deleteMany: {
            args: Prisma.WorkflowNodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkflowNodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkflowNodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowNodePayload>[]
          }
          upsert: {
            args: Prisma.WorkflowNodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowNodePayload>
          }
          aggregate: {
            args: Prisma.WorkflowNodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkflowNode>
          }
          groupBy: {
            args: Prisma.WorkflowNodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkflowNodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkflowNodeCountArgs<ExtArgs>
            result: $Utils.Optional<WorkflowNodeCountAggregateOutputType> | number
          }
        }
      }
      WorkflowEdge: {
        payload: Prisma.$WorkflowEdgePayload<ExtArgs>
        fields: Prisma.WorkflowEdgeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkflowEdgeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowEdgePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkflowEdgeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowEdgePayload>
          }
          findFirst: {
            args: Prisma.WorkflowEdgeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowEdgePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkflowEdgeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowEdgePayload>
          }
          findMany: {
            args: Prisma.WorkflowEdgeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowEdgePayload>[]
          }
          create: {
            args: Prisma.WorkflowEdgeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowEdgePayload>
          }
          createMany: {
            args: Prisma.WorkflowEdgeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkflowEdgeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowEdgePayload>[]
          }
          delete: {
            args: Prisma.WorkflowEdgeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowEdgePayload>
          }
          update: {
            args: Prisma.WorkflowEdgeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowEdgePayload>
          }
          deleteMany: {
            args: Prisma.WorkflowEdgeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkflowEdgeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkflowEdgeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowEdgePayload>[]
          }
          upsert: {
            args: Prisma.WorkflowEdgeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowEdgePayload>
          }
          aggregate: {
            args: Prisma.WorkflowEdgeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkflowEdge>
          }
          groupBy: {
            args: Prisma.WorkflowEdgeGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkflowEdgeGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkflowEdgeCountArgs<ExtArgs>
            result: $Utils.Optional<WorkflowEdgeCountAggregateOutputType> | number
          }
        }
      }
      WorkflowExecution: {
        payload: Prisma.$WorkflowExecutionPayload<ExtArgs>
        fields: Prisma.WorkflowExecutionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkflowExecutionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowExecutionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkflowExecutionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowExecutionPayload>
          }
          findFirst: {
            args: Prisma.WorkflowExecutionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowExecutionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkflowExecutionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowExecutionPayload>
          }
          findMany: {
            args: Prisma.WorkflowExecutionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowExecutionPayload>[]
          }
          create: {
            args: Prisma.WorkflowExecutionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowExecutionPayload>
          }
          createMany: {
            args: Prisma.WorkflowExecutionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkflowExecutionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowExecutionPayload>[]
          }
          delete: {
            args: Prisma.WorkflowExecutionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowExecutionPayload>
          }
          update: {
            args: Prisma.WorkflowExecutionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowExecutionPayload>
          }
          deleteMany: {
            args: Prisma.WorkflowExecutionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkflowExecutionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkflowExecutionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowExecutionPayload>[]
          }
          upsert: {
            args: Prisma.WorkflowExecutionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowExecutionPayload>
          }
          aggregate: {
            args: Prisma.WorkflowExecutionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkflowExecution>
          }
          groupBy: {
            args: Prisma.WorkflowExecutionGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkflowExecutionGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkflowExecutionCountArgs<ExtArgs>
            result: $Utils.Optional<WorkflowExecutionCountAggregateOutputType> | number
          }
        }
      }
      WorkflowVersion: {
        payload: Prisma.$WorkflowVersionPayload<ExtArgs>
        fields: Prisma.WorkflowVersionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkflowVersionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowVersionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkflowVersionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowVersionPayload>
          }
          findFirst: {
            args: Prisma.WorkflowVersionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowVersionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkflowVersionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowVersionPayload>
          }
          findMany: {
            args: Prisma.WorkflowVersionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowVersionPayload>[]
          }
          create: {
            args: Prisma.WorkflowVersionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowVersionPayload>
          }
          createMany: {
            args: Prisma.WorkflowVersionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkflowVersionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowVersionPayload>[]
          }
          delete: {
            args: Prisma.WorkflowVersionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowVersionPayload>
          }
          update: {
            args: Prisma.WorkflowVersionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowVersionPayload>
          }
          deleteMany: {
            args: Prisma.WorkflowVersionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkflowVersionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkflowVersionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowVersionPayload>[]
          }
          upsert: {
            args: Prisma.WorkflowVersionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowVersionPayload>
          }
          aggregate: {
            args: Prisma.WorkflowVersionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkflowVersion>
          }
          groupBy: {
            args: Prisma.WorkflowVersionGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkflowVersionGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkflowVersionCountArgs<ExtArgs>
            result: $Utils.Optional<WorkflowVersionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    workflow?: WorkflowOmit
    workflowNode?: WorkflowNodeOmit
    workflowEdge?: WorkflowEdgeOmit
    workflowExecution?: WorkflowExecutionOmit
    workflowVersion?: WorkflowVersionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Workflow: number
    WorkflowExecution: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Workflow?: boolean | UserCountOutputTypeCountWorkflowArgs
    WorkflowExecution?: boolean | UserCountOutputTypeCountWorkflowExecutionArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWorkflowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkflowWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWorkflowExecutionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkflowExecutionWhereInput
  }


  /**
   * Count Type WorkflowCountOutputType
   */

  export type WorkflowCountOutputType = {
    WorkflowNode: number
    WorkflowEdge: number
    WorkflowExecution: number
    WorkflowVersion: number
  }

  export type WorkflowCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    WorkflowNode?: boolean | WorkflowCountOutputTypeCountWorkflowNodeArgs
    WorkflowEdge?: boolean | WorkflowCountOutputTypeCountWorkflowEdgeArgs
    WorkflowExecution?: boolean | WorkflowCountOutputTypeCountWorkflowExecutionArgs
    WorkflowVersion?: boolean | WorkflowCountOutputTypeCountWorkflowVersionArgs
  }

  // Custom InputTypes
  /**
   * WorkflowCountOutputType without action
   */
  export type WorkflowCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowCountOutputType
     */
    select?: WorkflowCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkflowCountOutputType without action
   */
  export type WorkflowCountOutputTypeCountWorkflowNodeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkflowNodeWhereInput
  }

  /**
   * WorkflowCountOutputType without action
   */
  export type WorkflowCountOutputTypeCountWorkflowEdgeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkflowEdgeWhereInput
  }

  /**
   * WorkflowCountOutputType without action
   */
  export type WorkflowCountOutputTypeCountWorkflowExecutionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkflowExecutionWhereInput
  }

  /**
   * WorkflowCountOutputType without action
   */
  export type WorkflowCountOutputTypeCountWorkflowVersionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkflowVersionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    walletAdress: string | null
    email: string | null
    name: string | null
    image: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    walletAdress: string | null
    email: string | null
    name: string | null
    image: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    walletAdress: number
    email: number
    name: number
    image: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    walletAdress?: true
    email?: true
    name?: true
    image?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    walletAdress?: true
    email?: true
    name?: true
    image?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    walletAdress?: true
    email?: true
    name?: true
    image?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    walletAdress: string
    email: string | null
    name: string | null
    image: string | null
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    walletAdress?: boolean
    email?: boolean
    name?: boolean
    image?: boolean
    createdAt?: boolean
    Workflow?: boolean | User$WorkflowArgs<ExtArgs>
    WorkflowExecution?: boolean | User$WorkflowExecutionArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    walletAdress?: boolean
    email?: boolean
    name?: boolean
    image?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    walletAdress?: boolean
    email?: boolean
    name?: boolean
    image?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    walletAdress?: boolean
    email?: boolean
    name?: boolean
    image?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "walletAdress" | "email" | "name" | "image" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Workflow?: boolean | User$WorkflowArgs<ExtArgs>
    WorkflowExecution?: boolean | User$WorkflowExecutionArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Workflow: Prisma.$WorkflowPayload<ExtArgs>[]
      WorkflowExecution: Prisma.$WorkflowExecutionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      walletAdress: string
      email: string | null
      name: string | null
      image: string | null
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Workflow<T extends User$WorkflowArgs<ExtArgs> = {}>(args?: Subset<T, User$WorkflowArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    WorkflowExecution<T extends User$WorkflowExecutionArgs<ExtArgs> = {}>(args?: Subset<T, User$WorkflowExecutionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowExecutionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly walletAdress: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.Workflow
   */
  export type User$WorkflowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    where?: WorkflowWhereInput
    orderBy?: WorkflowOrderByWithRelationInput | WorkflowOrderByWithRelationInput[]
    cursor?: WorkflowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkflowScalarFieldEnum | WorkflowScalarFieldEnum[]
  }

  /**
   * User.WorkflowExecution
   */
  export type User$WorkflowExecutionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowExecution
     */
    select?: WorkflowExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowExecution
     */
    omit?: WorkflowExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowExecutionInclude<ExtArgs> | null
    where?: WorkflowExecutionWhereInput
    orderBy?: WorkflowExecutionOrderByWithRelationInput | WorkflowExecutionOrderByWithRelationInput[]
    cursor?: WorkflowExecutionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkflowExecutionScalarFieldEnum | WorkflowExecutionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Workflow
   */

  export type AggregateWorkflow = {
    _count: WorkflowCountAggregateOutputType | null
    _min: WorkflowMinAggregateOutputType | null
    _max: WorkflowMaxAggregateOutputType | null
  }

  export type WorkflowMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    userId: string | null
    isPublic: boolean | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkflowMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    userId: string | null
    isPublic: boolean | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkflowCountAggregateOutputType = {
    id: number
    name: number
    description: number
    userId: number
    isPublic: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkflowMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    userId?: true
    isPublic?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkflowMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    userId?: true
    isPublic?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkflowCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    userId?: true
    isPublic?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkflowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workflow to aggregate.
     */
    where?: WorkflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workflows to fetch.
     */
    orderBy?: WorkflowOrderByWithRelationInput | WorkflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workflows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Workflows
    **/
    _count?: true | WorkflowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkflowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkflowMaxAggregateInputType
  }

  export type GetWorkflowAggregateType<T extends WorkflowAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkflow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkflow[P]>
      : GetScalarType<T[P], AggregateWorkflow[P]>
  }




  export type WorkflowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkflowWhereInput
    orderBy?: WorkflowOrderByWithAggregationInput | WorkflowOrderByWithAggregationInput[]
    by: WorkflowScalarFieldEnum[] | WorkflowScalarFieldEnum
    having?: WorkflowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkflowCountAggregateInputType | true
    _min?: WorkflowMinAggregateInputType
    _max?: WorkflowMaxAggregateInputType
  }

  export type WorkflowGroupByOutputType = {
    id: string
    name: string
    description: string
    userId: string
    isPublic: boolean
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: WorkflowCountAggregateOutputType | null
    _min: WorkflowMinAggregateOutputType | null
    _max: WorkflowMaxAggregateOutputType | null
  }

  type GetWorkflowGroupByPayload<T extends WorkflowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkflowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkflowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkflowGroupByOutputType[P]>
            : GetScalarType<T[P], WorkflowGroupByOutputType[P]>
        }
      >
    >


  export type WorkflowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    userId?: boolean
    isPublic?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    WorkflowNode?: boolean | Workflow$WorkflowNodeArgs<ExtArgs>
    WorkflowEdge?: boolean | Workflow$WorkflowEdgeArgs<ExtArgs>
    WorkflowExecution?: boolean | Workflow$WorkflowExecutionArgs<ExtArgs>
    WorkflowVersion?: boolean | Workflow$WorkflowVersionArgs<ExtArgs>
    _count?: boolean | WorkflowCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workflow"]>

  export type WorkflowSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    userId?: boolean
    isPublic?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workflow"]>

  export type WorkflowSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    userId?: boolean
    isPublic?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workflow"]>

  export type WorkflowSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    userId?: boolean
    isPublic?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WorkflowOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "userId" | "isPublic" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["workflow"]>
  export type WorkflowInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    WorkflowNode?: boolean | Workflow$WorkflowNodeArgs<ExtArgs>
    WorkflowEdge?: boolean | Workflow$WorkflowEdgeArgs<ExtArgs>
    WorkflowExecution?: boolean | Workflow$WorkflowExecutionArgs<ExtArgs>
    WorkflowVersion?: boolean | Workflow$WorkflowVersionArgs<ExtArgs>
    _count?: boolean | WorkflowCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkflowIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WorkflowIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WorkflowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Workflow"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      WorkflowNode: Prisma.$WorkflowNodePayload<ExtArgs>[]
      WorkflowEdge: Prisma.$WorkflowEdgePayload<ExtArgs>[]
      WorkflowExecution: Prisma.$WorkflowExecutionPayload<ExtArgs>[]
      WorkflowVersion: Prisma.$WorkflowVersionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      userId: string
      isPublic: boolean
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["workflow"]>
    composites: {}
  }

  type WorkflowGetPayload<S extends boolean | null | undefined | WorkflowDefaultArgs> = $Result.GetResult<Prisma.$WorkflowPayload, S>

  type WorkflowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkflowFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkflowCountAggregateInputType | true
    }

  export interface WorkflowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Workflow'], meta: { name: 'Workflow' } }
    /**
     * Find zero or one Workflow that matches the filter.
     * @param {WorkflowFindUniqueArgs} args - Arguments to find a Workflow
     * @example
     * // Get one Workflow
     * const workflow = await prisma.workflow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkflowFindUniqueArgs>(args: SelectSubset<T, WorkflowFindUniqueArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Workflow that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkflowFindUniqueOrThrowArgs} args - Arguments to find a Workflow
     * @example
     * // Get one Workflow
     * const workflow = await prisma.workflow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkflowFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkflowFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workflow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowFindFirstArgs} args - Arguments to find a Workflow
     * @example
     * // Get one Workflow
     * const workflow = await prisma.workflow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkflowFindFirstArgs>(args?: SelectSubset<T, WorkflowFindFirstArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workflow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowFindFirstOrThrowArgs} args - Arguments to find a Workflow
     * @example
     * // Get one Workflow
     * const workflow = await prisma.workflow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkflowFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkflowFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Workflows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workflows
     * const workflows = await prisma.workflow.findMany()
     * 
     * // Get first 10 Workflows
     * const workflows = await prisma.workflow.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workflowWithIdOnly = await prisma.workflow.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkflowFindManyArgs>(args?: SelectSubset<T, WorkflowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Workflow.
     * @param {WorkflowCreateArgs} args - Arguments to create a Workflow.
     * @example
     * // Create one Workflow
     * const Workflow = await prisma.workflow.create({
     *   data: {
     *     // ... data to create a Workflow
     *   }
     * })
     * 
     */
    create<T extends WorkflowCreateArgs>(args: SelectSubset<T, WorkflowCreateArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Workflows.
     * @param {WorkflowCreateManyArgs} args - Arguments to create many Workflows.
     * @example
     * // Create many Workflows
     * const workflow = await prisma.workflow.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkflowCreateManyArgs>(args?: SelectSubset<T, WorkflowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Workflows and returns the data saved in the database.
     * @param {WorkflowCreateManyAndReturnArgs} args - Arguments to create many Workflows.
     * @example
     * // Create many Workflows
     * const workflow = await prisma.workflow.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Workflows and only return the `id`
     * const workflowWithIdOnly = await prisma.workflow.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkflowCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkflowCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Workflow.
     * @param {WorkflowDeleteArgs} args - Arguments to delete one Workflow.
     * @example
     * // Delete one Workflow
     * const Workflow = await prisma.workflow.delete({
     *   where: {
     *     // ... filter to delete one Workflow
     *   }
     * })
     * 
     */
    delete<T extends WorkflowDeleteArgs>(args: SelectSubset<T, WorkflowDeleteArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Workflow.
     * @param {WorkflowUpdateArgs} args - Arguments to update one Workflow.
     * @example
     * // Update one Workflow
     * const workflow = await prisma.workflow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkflowUpdateArgs>(args: SelectSubset<T, WorkflowUpdateArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Workflows.
     * @param {WorkflowDeleteManyArgs} args - Arguments to filter Workflows to delete.
     * @example
     * // Delete a few Workflows
     * const { count } = await prisma.workflow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkflowDeleteManyArgs>(args?: SelectSubset<T, WorkflowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workflows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workflows
     * const workflow = await prisma.workflow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkflowUpdateManyArgs>(args: SelectSubset<T, WorkflowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workflows and returns the data updated in the database.
     * @param {WorkflowUpdateManyAndReturnArgs} args - Arguments to update many Workflows.
     * @example
     * // Update many Workflows
     * const workflow = await prisma.workflow.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Workflows and only return the `id`
     * const workflowWithIdOnly = await prisma.workflow.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkflowUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkflowUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Workflow.
     * @param {WorkflowUpsertArgs} args - Arguments to update or create a Workflow.
     * @example
     * // Update or create a Workflow
     * const workflow = await prisma.workflow.upsert({
     *   create: {
     *     // ... data to create a Workflow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workflow we want to update
     *   }
     * })
     */
    upsert<T extends WorkflowUpsertArgs>(args: SelectSubset<T, WorkflowUpsertArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Workflows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowCountArgs} args - Arguments to filter Workflows to count.
     * @example
     * // Count the number of Workflows
     * const count = await prisma.workflow.count({
     *   where: {
     *     // ... the filter for the Workflows we want to count
     *   }
     * })
    **/
    count<T extends WorkflowCountArgs>(
      args?: Subset<T, WorkflowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkflowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workflow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkflowAggregateArgs>(args: Subset<T, WorkflowAggregateArgs>): Prisma.PrismaPromise<GetWorkflowAggregateType<T>>

    /**
     * Group by Workflow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkflowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkflowGroupByArgs['orderBy'] }
        : { orderBy?: WorkflowGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkflowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkflowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Workflow model
   */
  readonly fields: WorkflowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Workflow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkflowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    WorkflowNode<T extends Workflow$WorkflowNodeArgs<ExtArgs> = {}>(args?: Subset<T, Workflow$WorkflowNodeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowNodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    WorkflowEdge<T extends Workflow$WorkflowEdgeArgs<ExtArgs> = {}>(args?: Subset<T, Workflow$WorkflowEdgeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowEdgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    WorkflowExecution<T extends Workflow$WorkflowExecutionArgs<ExtArgs> = {}>(args?: Subset<T, Workflow$WorkflowExecutionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowExecutionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    WorkflowVersion<T extends Workflow$WorkflowVersionArgs<ExtArgs> = {}>(args?: Subset<T, Workflow$WorkflowVersionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowVersionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Workflow model
   */
  interface WorkflowFieldRefs {
    readonly id: FieldRef<"Workflow", 'String'>
    readonly name: FieldRef<"Workflow", 'String'>
    readonly description: FieldRef<"Workflow", 'String'>
    readonly userId: FieldRef<"Workflow", 'String'>
    readonly isPublic: FieldRef<"Workflow", 'Boolean'>
    readonly isActive: FieldRef<"Workflow", 'Boolean'>
    readonly createdAt: FieldRef<"Workflow", 'DateTime'>
    readonly updatedAt: FieldRef<"Workflow", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Workflow findUnique
   */
  export type WorkflowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * Filter, which Workflow to fetch.
     */
    where: WorkflowWhereUniqueInput
  }

  /**
   * Workflow findUniqueOrThrow
   */
  export type WorkflowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * Filter, which Workflow to fetch.
     */
    where: WorkflowWhereUniqueInput
  }

  /**
   * Workflow findFirst
   */
  export type WorkflowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * Filter, which Workflow to fetch.
     */
    where?: WorkflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workflows to fetch.
     */
    orderBy?: WorkflowOrderByWithRelationInput | WorkflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workflows.
     */
    cursor?: WorkflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workflows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workflows.
     */
    distinct?: WorkflowScalarFieldEnum | WorkflowScalarFieldEnum[]
  }

  /**
   * Workflow findFirstOrThrow
   */
  export type WorkflowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * Filter, which Workflow to fetch.
     */
    where?: WorkflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workflows to fetch.
     */
    orderBy?: WorkflowOrderByWithRelationInput | WorkflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workflows.
     */
    cursor?: WorkflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workflows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workflows.
     */
    distinct?: WorkflowScalarFieldEnum | WorkflowScalarFieldEnum[]
  }

  /**
   * Workflow findMany
   */
  export type WorkflowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * Filter, which Workflows to fetch.
     */
    where?: WorkflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workflows to fetch.
     */
    orderBy?: WorkflowOrderByWithRelationInput | WorkflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Workflows.
     */
    cursor?: WorkflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workflows.
     */
    skip?: number
    distinct?: WorkflowScalarFieldEnum | WorkflowScalarFieldEnum[]
  }

  /**
   * Workflow create
   */
  export type WorkflowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * The data needed to create a Workflow.
     */
    data: XOR<WorkflowCreateInput, WorkflowUncheckedCreateInput>
  }

  /**
   * Workflow createMany
   */
  export type WorkflowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Workflows.
     */
    data: WorkflowCreateManyInput | WorkflowCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Workflow createManyAndReturn
   */
  export type WorkflowCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * The data used to create many Workflows.
     */
    data: WorkflowCreateManyInput | WorkflowCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Workflow update
   */
  export type WorkflowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * The data needed to update a Workflow.
     */
    data: XOR<WorkflowUpdateInput, WorkflowUncheckedUpdateInput>
    /**
     * Choose, which Workflow to update.
     */
    where: WorkflowWhereUniqueInput
  }

  /**
   * Workflow updateMany
   */
  export type WorkflowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Workflows.
     */
    data: XOR<WorkflowUpdateManyMutationInput, WorkflowUncheckedUpdateManyInput>
    /**
     * Filter which Workflows to update
     */
    where?: WorkflowWhereInput
    /**
     * Limit how many Workflows to update.
     */
    limit?: number
  }

  /**
   * Workflow updateManyAndReturn
   */
  export type WorkflowUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * The data used to update Workflows.
     */
    data: XOR<WorkflowUpdateManyMutationInput, WorkflowUncheckedUpdateManyInput>
    /**
     * Filter which Workflows to update
     */
    where?: WorkflowWhereInput
    /**
     * Limit how many Workflows to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Workflow upsert
   */
  export type WorkflowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * The filter to search for the Workflow to update in case it exists.
     */
    where: WorkflowWhereUniqueInput
    /**
     * In case the Workflow found by the `where` argument doesn't exist, create a new Workflow with this data.
     */
    create: XOR<WorkflowCreateInput, WorkflowUncheckedCreateInput>
    /**
     * In case the Workflow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkflowUpdateInput, WorkflowUncheckedUpdateInput>
  }

  /**
   * Workflow delete
   */
  export type WorkflowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * Filter which Workflow to delete.
     */
    where: WorkflowWhereUniqueInput
  }

  /**
   * Workflow deleteMany
   */
  export type WorkflowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workflows to delete
     */
    where?: WorkflowWhereInput
    /**
     * Limit how many Workflows to delete.
     */
    limit?: number
  }

  /**
   * Workflow.WorkflowNode
   */
  export type Workflow$WorkflowNodeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowNode
     */
    select?: WorkflowNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowNode
     */
    omit?: WorkflowNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowNodeInclude<ExtArgs> | null
    where?: WorkflowNodeWhereInput
    orderBy?: WorkflowNodeOrderByWithRelationInput | WorkflowNodeOrderByWithRelationInput[]
    cursor?: WorkflowNodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkflowNodeScalarFieldEnum | WorkflowNodeScalarFieldEnum[]
  }

  /**
   * Workflow.WorkflowEdge
   */
  export type Workflow$WorkflowEdgeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowEdge
     */
    select?: WorkflowEdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowEdge
     */
    omit?: WorkflowEdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowEdgeInclude<ExtArgs> | null
    where?: WorkflowEdgeWhereInput
    orderBy?: WorkflowEdgeOrderByWithRelationInput | WorkflowEdgeOrderByWithRelationInput[]
    cursor?: WorkflowEdgeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkflowEdgeScalarFieldEnum | WorkflowEdgeScalarFieldEnum[]
  }

  /**
   * Workflow.WorkflowExecution
   */
  export type Workflow$WorkflowExecutionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowExecution
     */
    select?: WorkflowExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowExecution
     */
    omit?: WorkflowExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowExecutionInclude<ExtArgs> | null
    where?: WorkflowExecutionWhereInput
    orderBy?: WorkflowExecutionOrderByWithRelationInput | WorkflowExecutionOrderByWithRelationInput[]
    cursor?: WorkflowExecutionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkflowExecutionScalarFieldEnum | WorkflowExecutionScalarFieldEnum[]
  }

  /**
   * Workflow.WorkflowVersion
   */
  export type Workflow$WorkflowVersionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowVersion
     */
    select?: WorkflowVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowVersion
     */
    omit?: WorkflowVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowVersionInclude<ExtArgs> | null
    where?: WorkflowVersionWhereInput
    orderBy?: WorkflowVersionOrderByWithRelationInput | WorkflowVersionOrderByWithRelationInput[]
    cursor?: WorkflowVersionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkflowVersionScalarFieldEnum | WorkflowVersionScalarFieldEnum[]
  }

  /**
   * Workflow without action
   */
  export type WorkflowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
  }


  /**
   * Model WorkflowNode
   */

  export type AggregateWorkflowNode = {
    _count: WorkflowNodeCountAggregateOutputType | null
    _avg: WorkflowNodeAvgAggregateOutputType | null
    _sum: WorkflowNodeSumAggregateOutputType | null
    _min: WorkflowNodeMinAggregateOutputType | null
    _max: WorkflowNodeMaxAggregateOutputType | null
  }

  export type WorkflowNodeAvgAggregateOutputType = {
    positionX: number | null
    positionY: number | null
    orderIndex: number | null
  }

  export type WorkflowNodeSumAggregateOutputType = {
    positionX: number | null
    positionY: number | null
    orderIndex: number | null
  }

  export type WorkflowNodeMinAggregateOutputType = {
    id: string | null
    workflowId: string | null
    type: $Enums.WorkflowNodeType | null
    name: string | null
    positionX: number | null
    positionY: number | null
    orderIndex: number | null
  }

  export type WorkflowNodeMaxAggregateOutputType = {
    id: string | null
    workflowId: string | null
    type: $Enums.WorkflowNodeType | null
    name: string | null
    positionX: number | null
    positionY: number | null
    orderIndex: number | null
  }

  export type WorkflowNodeCountAggregateOutputType = {
    id: number
    workflowId: number
    type: number
    name: number
    positionX: number
    positionY: number
    config: number
    orderIndex: number
    _all: number
  }


  export type WorkflowNodeAvgAggregateInputType = {
    positionX?: true
    positionY?: true
    orderIndex?: true
  }

  export type WorkflowNodeSumAggregateInputType = {
    positionX?: true
    positionY?: true
    orderIndex?: true
  }

  export type WorkflowNodeMinAggregateInputType = {
    id?: true
    workflowId?: true
    type?: true
    name?: true
    positionX?: true
    positionY?: true
    orderIndex?: true
  }

  export type WorkflowNodeMaxAggregateInputType = {
    id?: true
    workflowId?: true
    type?: true
    name?: true
    positionX?: true
    positionY?: true
    orderIndex?: true
  }

  export type WorkflowNodeCountAggregateInputType = {
    id?: true
    workflowId?: true
    type?: true
    name?: true
    positionX?: true
    positionY?: true
    config?: true
    orderIndex?: true
    _all?: true
  }

  export type WorkflowNodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkflowNode to aggregate.
     */
    where?: WorkflowNodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowNodes to fetch.
     */
    orderBy?: WorkflowNodeOrderByWithRelationInput | WorkflowNodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkflowNodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowNodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkflowNodes
    **/
    _count?: true | WorkflowNodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkflowNodeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkflowNodeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkflowNodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkflowNodeMaxAggregateInputType
  }

  export type GetWorkflowNodeAggregateType<T extends WorkflowNodeAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkflowNode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkflowNode[P]>
      : GetScalarType<T[P], AggregateWorkflowNode[P]>
  }




  export type WorkflowNodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkflowNodeWhereInput
    orderBy?: WorkflowNodeOrderByWithAggregationInput | WorkflowNodeOrderByWithAggregationInput[]
    by: WorkflowNodeScalarFieldEnum[] | WorkflowNodeScalarFieldEnum
    having?: WorkflowNodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkflowNodeCountAggregateInputType | true
    _avg?: WorkflowNodeAvgAggregateInputType
    _sum?: WorkflowNodeSumAggregateInputType
    _min?: WorkflowNodeMinAggregateInputType
    _max?: WorkflowNodeMaxAggregateInputType
  }

  export type WorkflowNodeGroupByOutputType = {
    id: string
    workflowId: string
    type: $Enums.WorkflowNodeType
    name: string
    positionX: number
    positionY: number
    config: JsonValue
    orderIndex: number
    _count: WorkflowNodeCountAggregateOutputType | null
    _avg: WorkflowNodeAvgAggregateOutputType | null
    _sum: WorkflowNodeSumAggregateOutputType | null
    _min: WorkflowNodeMinAggregateOutputType | null
    _max: WorkflowNodeMaxAggregateOutputType | null
  }

  type GetWorkflowNodeGroupByPayload<T extends WorkflowNodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkflowNodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkflowNodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkflowNodeGroupByOutputType[P]>
            : GetScalarType<T[P], WorkflowNodeGroupByOutputType[P]>
        }
      >
    >


  export type WorkflowNodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    type?: boolean
    name?: boolean
    positionX?: boolean
    positionY?: boolean
    config?: boolean
    orderIndex?: boolean
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workflowNode"]>

  export type WorkflowNodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    type?: boolean
    name?: boolean
    positionX?: boolean
    positionY?: boolean
    config?: boolean
    orderIndex?: boolean
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workflowNode"]>

  export type WorkflowNodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    type?: boolean
    name?: boolean
    positionX?: boolean
    positionY?: boolean
    config?: boolean
    orderIndex?: boolean
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workflowNode"]>

  export type WorkflowNodeSelectScalar = {
    id?: boolean
    workflowId?: boolean
    type?: boolean
    name?: boolean
    positionX?: boolean
    positionY?: boolean
    config?: boolean
    orderIndex?: boolean
  }

  export type WorkflowNodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workflowId" | "type" | "name" | "positionX" | "positionY" | "config" | "orderIndex", ExtArgs["result"]["workflowNode"]>
  export type WorkflowNodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }
  export type WorkflowNodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }
  export type WorkflowNodeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }

  export type $WorkflowNodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkflowNode"
    objects: {
      workflow: Prisma.$WorkflowPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workflowId: string
      type: $Enums.WorkflowNodeType
      name: string
      positionX: number
      positionY: number
      config: Prisma.JsonValue
      orderIndex: number
    }, ExtArgs["result"]["workflowNode"]>
    composites: {}
  }

  type WorkflowNodeGetPayload<S extends boolean | null | undefined | WorkflowNodeDefaultArgs> = $Result.GetResult<Prisma.$WorkflowNodePayload, S>

  type WorkflowNodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkflowNodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkflowNodeCountAggregateInputType | true
    }

  export interface WorkflowNodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkflowNode'], meta: { name: 'WorkflowNode' } }
    /**
     * Find zero or one WorkflowNode that matches the filter.
     * @param {WorkflowNodeFindUniqueArgs} args - Arguments to find a WorkflowNode
     * @example
     * // Get one WorkflowNode
     * const workflowNode = await prisma.workflowNode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkflowNodeFindUniqueArgs>(args: SelectSubset<T, WorkflowNodeFindUniqueArgs<ExtArgs>>): Prisma__WorkflowNodeClient<$Result.GetResult<Prisma.$WorkflowNodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkflowNode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkflowNodeFindUniqueOrThrowArgs} args - Arguments to find a WorkflowNode
     * @example
     * // Get one WorkflowNode
     * const workflowNode = await prisma.workflowNode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkflowNodeFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkflowNodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkflowNodeClient<$Result.GetResult<Prisma.$WorkflowNodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkflowNode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowNodeFindFirstArgs} args - Arguments to find a WorkflowNode
     * @example
     * // Get one WorkflowNode
     * const workflowNode = await prisma.workflowNode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkflowNodeFindFirstArgs>(args?: SelectSubset<T, WorkflowNodeFindFirstArgs<ExtArgs>>): Prisma__WorkflowNodeClient<$Result.GetResult<Prisma.$WorkflowNodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkflowNode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowNodeFindFirstOrThrowArgs} args - Arguments to find a WorkflowNode
     * @example
     * // Get one WorkflowNode
     * const workflowNode = await prisma.workflowNode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkflowNodeFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkflowNodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkflowNodeClient<$Result.GetResult<Prisma.$WorkflowNodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkflowNodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowNodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkflowNodes
     * const workflowNodes = await prisma.workflowNode.findMany()
     * 
     * // Get first 10 WorkflowNodes
     * const workflowNodes = await prisma.workflowNode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workflowNodeWithIdOnly = await prisma.workflowNode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkflowNodeFindManyArgs>(args?: SelectSubset<T, WorkflowNodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowNodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkflowNode.
     * @param {WorkflowNodeCreateArgs} args - Arguments to create a WorkflowNode.
     * @example
     * // Create one WorkflowNode
     * const WorkflowNode = await prisma.workflowNode.create({
     *   data: {
     *     // ... data to create a WorkflowNode
     *   }
     * })
     * 
     */
    create<T extends WorkflowNodeCreateArgs>(args: SelectSubset<T, WorkflowNodeCreateArgs<ExtArgs>>): Prisma__WorkflowNodeClient<$Result.GetResult<Prisma.$WorkflowNodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkflowNodes.
     * @param {WorkflowNodeCreateManyArgs} args - Arguments to create many WorkflowNodes.
     * @example
     * // Create many WorkflowNodes
     * const workflowNode = await prisma.workflowNode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkflowNodeCreateManyArgs>(args?: SelectSubset<T, WorkflowNodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkflowNodes and returns the data saved in the database.
     * @param {WorkflowNodeCreateManyAndReturnArgs} args - Arguments to create many WorkflowNodes.
     * @example
     * // Create many WorkflowNodes
     * const workflowNode = await prisma.workflowNode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkflowNodes and only return the `id`
     * const workflowNodeWithIdOnly = await prisma.workflowNode.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkflowNodeCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkflowNodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowNodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkflowNode.
     * @param {WorkflowNodeDeleteArgs} args - Arguments to delete one WorkflowNode.
     * @example
     * // Delete one WorkflowNode
     * const WorkflowNode = await prisma.workflowNode.delete({
     *   where: {
     *     // ... filter to delete one WorkflowNode
     *   }
     * })
     * 
     */
    delete<T extends WorkflowNodeDeleteArgs>(args: SelectSubset<T, WorkflowNodeDeleteArgs<ExtArgs>>): Prisma__WorkflowNodeClient<$Result.GetResult<Prisma.$WorkflowNodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkflowNode.
     * @param {WorkflowNodeUpdateArgs} args - Arguments to update one WorkflowNode.
     * @example
     * // Update one WorkflowNode
     * const workflowNode = await prisma.workflowNode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkflowNodeUpdateArgs>(args: SelectSubset<T, WorkflowNodeUpdateArgs<ExtArgs>>): Prisma__WorkflowNodeClient<$Result.GetResult<Prisma.$WorkflowNodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkflowNodes.
     * @param {WorkflowNodeDeleteManyArgs} args - Arguments to filter WorkflowNodes to delete.
     * @example
     * // Delete a few WorkflowNodes
     * const { count } = await prisma.workflowNode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkflowNodeDeleteManyArgs>(args?: SelectSubset<T, WorkflowNodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkflowNodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowNodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkflowNodes
     * const workflowNode = await prisma.workflowNode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkflowNodeUpdateManyArgs>(args: SelectSubset<T, WorkflowNodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkflowNodes and returns the data updated in the database.
     * @param {WorkflowNodeUpdateManyAndReturnArgs} args - Arguments to update many WorkflowNodes.
     * @example
     * // Update many WorkflowNodes
     * const workflowNode = await prisma.workflowNode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkflowNodes and only return the `id`
     * const workflowNodeWithIdOnly = await prisma.workflowNode.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkflowNodeUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkflowNodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowNodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkflowNode.
     * @param {WorkflowNodeUpsertArgs} args - Arguments to update or create a WorkflowNode.
     * @example
     * // Update or create a WorkflowNode
     * const workflowNode = await prisma.workflowNode.upsert({
     *   create: {
     *     // ... data to create a WorkflowNode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkflowNode we want to update
     *   }
     * })
     */
    upsert<T extends WorkflowNodeUpsertArgs>(args: SelectSubset<T, WorkflowNodeUpsertArgs<ExtArgs>>): Prisma__WorkflowNodeClient<$Result.GetResult<Prisma.$WorkflowNodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkflowNodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowNodeCountArgs} args - Arguments to filter WorkflowNodes to count.
     * @example
     * // Count the number of WorkflowNodes
     * const count = await prisma.workflowNode.count({
     *   where: {
     *     // ... the filter for the WorkflowNodes we want to count
     *   }
     * })
    **/
    count<T extends WorkflowNodeCountArgs>(
      args?: Subset<T, WorkflowNodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkflowNodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkflowNode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowNodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkflowNodeAggregateArgs>(args: Subset<T, WorkflowNodeAggregateArgs>): Prisma.PrismaPromise<GetWorkflowNodeAggregateType<T>>

    /**
     * Group by WorkflowNode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowNodeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkflowNodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkflowNodeGroupByArgs['orderBy'] }
        : { orderBy?: WorkflowNodeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkflowNodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkflowNodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkflowNode model
   */
  readonly fields: WorkflowNodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkflowNode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkflowNodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workflow<T extends WorkflowDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkflowDefaultArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkflowNode model
   */
  interface WorkflowNodeFieldRefs {
    readonly id: FieldRef<"WorkflowNode", 'String'>
    readonly workflowId: FieldRef<"WorkflowNode", 'String'>
    readonly type: FieldRef<"WorkflowNode", 'WorkflowNodeType'>
    readonly name: FieldRef<"WorkflowNode", 'String'>
    readonly positionX: FieldRef<"WorkflowNode", 'Float'>
    readonly positionY: FieldRef<"WorkflowNode", 'Float'>
    readonly config: FieldRef<"WorkflowNode", 'Json'>
    readonly orderIndex: FieldRef<"WorkflowNode", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * WorkflowNode findUnique
   */
  export type WorkflowNodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowNode
     */
    select?: WorkflowNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowNode
     */
    omit?: WorkflowNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowNodeInclude<ExtArgs> | null
    /**
     * Filter, which WorkflowNode to fetch.
     */
    where: WorkflowNodeWhereUniqueInput
  }

  /**
   * WorkflowNode findUniqueOrThrow
   */
  export type WorkflowNodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowNode
     */
    select?: WorkflowNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowNode
     */
    omit?: WorkflowNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowNodeInclude<ExtArgs> | null
    /**
     * Filter, which WorkflowNode to fetch.
     */
    where: WorkflowNodeWhereUniqueInput
  }

  /**
   * WorkflowNode findFirst
   */
  export type WorkflowNodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowNode
     */
    select?: WorkflowNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowNode
     */
    omit?: WorkflowNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowNodeInclude<ExtArgs> | null
    /**
     * Filter, which WorkflowNode to fetch.
     */
    where?: WorkflowNodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowNodes to fetch.
     */
    orderBy?: WorkflowNodeOrderByWithRelationInput | WorkflowNodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkflowNodes.
     */
    cursor?: WorkflowNodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowNodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkflowNodes.
     */
    distinct?: WorkflowNodeScalarFieldEnum | WorkflowNodeScalarFieldEnum[]
  }

  /**
   * WorkflowNode findFirstOrThrow
   */
  export type WorkflowNodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowNode
     */
    select?: WorkflowNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowNode
     */
    omit?: WorkflowNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowNodeInclude<ExtArgs> | null
    /**
     * Filter, which WorkflowNode to fetch.
     */
    where?: WorkflowNodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowNodes to fetch.
     */
    orderBy?: WorkflowNodeOrderByWithRelationInput | WorkflowNodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkflowNodes.
     */
    cursor?: WorkflowNodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowNodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkflowNodes.
     */
    distinct?: WorkflowNodeScalarFieldEnum | WorkflowNodeScalarFieldEnum[]
  }

  /**
   * WorkflowNode findMany
   */
  export type WorkflowNodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowNode
     */
    select?: WorkflowNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowNode
     */
    omit?: WorkflowNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowNodeInclude<ExtArgs> | null
    /**
     * Filter, which WorkflowNodes to fetch.
     */
    where?: WorkflowNodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowNodes to fetch.
     */
    orderBy?: WorkflowNodeOrderByWithRelationInput | WorkflowNodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkflowNodes.
     */
    cursor?: WorkflowNodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowNodes.
     */
    skip?: number
    distinct?: WorkflowNodeScalarFieldEnum | WorkflowNodeScalarFieldEnum[]
  }

  /**
   * WorkflowNode create
   */
  export type WorkflowNodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowNode
     */
    select?: WorkflowNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowNode
     */
    omit?: WorkflowNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowNodeInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkflowNode.
     */
    data: XOR<WorkflowNodeCreateInput, WorkflowNodeUncheckedCreateInput>
  }

  /**
   * WorkflowNode createMany
   */
  export type WorkflowNodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkflowNodes.
     */
    data: WorkflowNodeCreateManyInput | WorkflowNodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkflowNode createManyAndReturn
   */
  export type WorkflowNodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowNode
     */
    select?: WorkflowNodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowNode
     */
    omit?: WorkflowNodeOmit<ExtArgs> | null
    /**
     * The data used to create many WorkflowNodes.
     */
    data: WorkflowNodeCreateManyInput | WorkflowNodeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowNodeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkflowNode update
   */
  export type WorkflowNodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowNode
     */
    select?: WorkflowNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowNode
     */
    omit?: WorkflowNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowNodeInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkflowNode.
     */
    data: XOR<WorkflowNodeUpdateInput, WorkflowNodeUncheckedUpdateInput>
    /**
     * Choose, which WorkflowNode to update.
     */
    where: WorkflowNodeWhereUniqueInput
  }

  /**
   * WorkflowNode updateMany
   */
  export type WorkflowNodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkflowNodes.
     */
    data: XOR<WorkflowNodeUpdateManyMutationInput, WorkflowNodeUncheckedUpdateManyInput>
    /**
     * Filter which WorkflowNodes to update
     */
    where?: WorkflowNodeWhereInput
    /**
     * Limit how many WorkflowNodes to update.
     */
    limit?: number
  }

  /**
   * WorkflowNode updateManyAndReturn
   */
  export type WorkflowNodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowNode
     */
    select?: WorkflowNodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowNode
     */
    omit?: WorkflowNodeOmit<ExtArgs> | null
    /**
     * The data used to update WorkflowNodes.
     */
    data: XOR<WorkflowNodeUpdateManyMutationInput, WorkflowNodeUncheckedUpdateManyInput>
    /**
     * Filter which WorkflowNodes to update
     */
    where?: WorkflowNodeWhereInput
    /**
     * Limit how many WorkflowNodes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowNodeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkflowNode upsert
   */
  export type WorkflowNodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowNode
     */
    select?: WorkflowNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowNode
     */
    omit?: WorkflowNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowNodeInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkflowNode to update in case it exists.
     */
    where: WorkflowNodeWhereUniqueInput
    /**
     * In case the WorkflowNode found by the `where` argument doesn't exist, create a new WorkflowNode with this data.
     */
    create: XOR<WorkflowNodeCreateInput, WorkflowNodeUncheckedCreateInput>
    /**
     * In case the WorkflowNode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkflowNodeUpdateInput, WorkflowNodeUncheckedUpdateInput>
  }

  /**
   * WorkflowNode delete
   */
  export type WorkflowNodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowNode
     */
    select?: WorkflowNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowNode
     */
    omit?: WorkflowNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowNodeInclude<ExtArgs> | null
    /**
     * Filter which WorkflowNode to delete.
     */
    where: WorkflowNodeWhereUniqueInput
  }

  /**
   * WorkflowNode deleteMany
   */
  export type WorkflowNodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkflowNodes to delete
     */
    where?: WorkflowNodeWhereInput
    /**
     * Limit how many WorkflowNodes to delete.
     */
    limit?: number
  }

  /**
   * WorkflowNode without action
   */
  export type WorkflowNodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowNode
     */
    select?: WorkflowNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowNode
     */
    omit?: WorkflowNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowNodeInclude<ExtArgs> | null
  }


  /**
   * Model WorkflowEdge
   */

  export type AggregateWorkflowEdge = {
    _count: WorkflowEdgeCountAggregateOutputType | null
    _min: WorkflowEdgeMinAggregateOutputType | null
    _max: WorkflowEdgeMaxAggregateOutputType | null
  }

  export type WorkflowEdgeMinAggregateOutputType = {
    id: string | null
    workflowId: string | null
    sourceNodeId: string | null
    targetNodeId: string | null
    label: $Enums.WorkflowEdgeLabel | null
  }

  export type WorkflowEdgeMaxAggregateOutputType = {
    id: string | null
    workflowId: string | null
    sourceNodeId: string | null
    targetNodeId: string | null
    label: $Enums.WorkflowEdgeLabel | null
  }

  export type WorkflowEdgeCountAggregateOutputType = {
    id: number
    workflowId: number
    sourceNodeId: number
    targetNodeId: number
    label: number
    _all: number
  }


  export type WorkflowEdgeMinAggregateInputType = {
    id?: true
    workflowId?: true
    sourceNodeId?: true
    targetNodeId?: true
    label?: true
  }

  export type WorkflowEdgeMaxAggregateInputType = {
    id?: true
    workflowId?: true
    sourceNodeId?: true
    targetNodeId?: true
    label?: true
  }

  export type WorkflowEdgeCountAggregateInputType = {
    id?: true
    workflowId?: true
    sourceNodeId?: true
    targetNodeId?: true
    label?: true
    _all?: true
  }

  export type WorkflowEdgeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkflowEdge to aggregate.
     */
    where?: WorkflowEdgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowEdges to fetch.
     */
    orderBy?: WorkflowEdgeOrderByWithRelationInput | WorkflowEdgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkflowEdgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowEdges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowEdges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkflowEdges
    **/
    _count?: true | WorkflowEdgeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkflowEdgeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkflowEdgeMaxAggregateInputType
  }

  export type GetWorkflowEdgeAggregateType<T extends WorkflowEdgeAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkflowEdge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkflowEdge[P]>
      : GetScalarType<T[P], AggregateWorkflowEdge[P]>
  }




  export type WorkflowEdgeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkflowEdgeWhereInput
    orderBy?: WorkflowEdgeOrderByWithAggregationInput | WorkflowEdgeOrderByWithAggregationInput[]
    by: WorkflowEdgeScalarFieldEnum[] | WorkflowEdgeScalarFieldEnum
    having?: WorkflowEdgeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkflowEdgeCountAggregateInputType | true
    _min?: WorkflowEdgeMinAggregateInputType
    _max?: WorkflowEdgeMaxAggregateInputType
  }

  export type WorkflowEdgeGroupByOutputType = {
    id: string
    workflowId: string
    sourceNodeId: string
    targetNodeId: string
    label: $Enums.WorkflowEdgeLabel
    _count: WorkflowEdgeCountAggregateOutputType | null
    _min: WorkflowEdgeMinAggregateOutputType | null
    _max: WorkflowEdgeMaxAggregateOutputType | null
  }

  type GetWorkflowEdgeGroupByPayload<T extends WorkflowEdgeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkflowEdgeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkflowEdgeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkflowEdgeGroupByOutputType[P]>
            : GetScalarType<T[P], WorkflowEdgeGroupByOutputType[P]>
        }
      >
    >


  export type WorkflowEdgeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    sourceNodeId?: boolean
    targetNodeId?: boolean
    label?: boolean
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workflowEdge"]>

  export type WorkflowEdgeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    sourceNodeId?: boolean
    targetNodeId?: boolean
    label?: boolean
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workflowEdge"]>

  export type WorkflowEdgeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    sourceNodeId?: boolean
    targetNodeId?: boolean
    label?: boolean
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workflowEdge"]>

  export type WorkflowEdgeSelectScalar = {
    id?: boolean
    workflowId?: boolean
    sourceNodeId?: boolean
    targetNodeId?: boolean
    label?: boolean
  }

  export type WorkflowEdgeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workflowId" | "sourceNodeId" | "targetNodeId" | "label", ExtArgs["result"]["workflowEdge"]>
  export type WorkflowEdgeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }
  export type WorkflowEdgeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }
  export type WorkflowEdgeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }

  export type $WorkflowEdgePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkflowEdge"
    objects: {
      workflow: Prisma.$WorkflowPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workflowId: string
      sourceNodeId: string
      targetNodeId: string
      label: $Enums.WorkflowEdgeLabel
    }, ExtArgs["result"]["workflowEdge"]>
    composites: {}
  }

  type WorkflowEdgeGetPayload<S extends boolean | null | undefined | WorkflowEdgeDefaultArgs> = $Result.GetResult<Prisma.$WorkflowEdgePayload, S>

  type WorkflowEdgeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkflowEdgeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkflowEdgeCountAggregateInputType | true
    }

  export interface WorkflowEdgeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkflowEdge'], meta: { name: 'WorkflowEdge' } }
    /**
     * Find zero or one WorkflowEdge that matches the filter.
     * @param {WorkflowEdgeFindUniqueArgs} args - Arguments to find a WorkflowEdge
     * @example
     * // Get one WorkflowEdge
     * const workflowEdge = await prisma.workflowEdge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkflowEdgeFindUniqueArgs>(args: SelectSubset<T, WorkflowEdgeFindUniqueArgs<ExtArgs>>): Prisma__WorkflowEdgeClient<$Result.GetResult<Prisma.$WorkflowEdgePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkflowEdge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkflowEdgeFindUniqueOrThrowArgs} args - Arguments to find a WorkflowEdge
     * @example
     * // Get one WorkflowEdge
     * const workflowEdge = await prisma.workflowEdge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkflowEdgeFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkflowEdgeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkflowEdgeClient<$Result.GetResult<Prisma.$WorkflowEdgePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkflowEdge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowEdgeFindFirstArgs} args - Arguments to find a WorkflowEdge
     * @example
     * // Get one WorkflowEdge
     * const workflowEdge = await prisma.workflowEdge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkflowEdgeFindFirstArgs>(args?: SelectSubset<T, WorkflowEdgeFindFirstArgs<ExtArgs>>): Prisma__WorkflowEdgeClient<$Result.GetResult<Prisma.$WorkflowEdgePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkflowEdge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowEdgeFindFirstOrThrowArgs} args - Arguments to find a WorkflowEdge
     * @example
     * // Get one WorkflowEdge
     * const workflowEdge = await prisma.workflowEdge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkflowEdgeFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkflowEdgeFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkflowEdgeClient<$Result.GetResult<Prisma.$WorkflowEdgePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkflowEdges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowEdgeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkflowEdges
     * const workflowEdges = await prisma.workflowEdge.findMany()
     * 
     * // Get first 10 WorkflowEdges
     * const workflowEdges = await prisma.workflowEdge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workflowEdgeWithIdOnly = await prisma.workflowEdge.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkflowEdgeFindManyArgs>(args?: SelectSubset<T, WorkflowEdgeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowEdgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkflowEdge.
     * @param {WorkflowEdgeCreateArgs} args - Arguments to create a WorkflowEdge.
     * @example
     * // Create one WorkflowEdge
     * const WorkflowEdge = await prisma.workflowEdge.create({
     *   data: {
     *     // ... data to create a WorkflowEdge
     *   }
     * })
     * 
     */
    create<T extends WorkflowEdgeCreateArgs>(args: SelectSubset<T, WorkflowEdgeCreateArgs<ExtArgs>>): Prisma__WorkflowEdgeClient<$Result.GetResult<Prisma.$WorkflowEdgePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkflowEdges.
     * @param {WorkflowEdgeCreateManyArgs} args - Arguments to create many WorkflowEdges.
     * @example
     * // Create many WorkflowEdges
     * const workflowEdge = await prisma.workflowEdge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkflowEdgeCreateManyArgs>(args?: SelectSubset<T, WorkflowEdgeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkflowEdges and returns the data saved in the database.
     * @param {WorkflowEdgeCreateManyAndReturnArgs} args - Arguments to create many WorkflowEdges.
     * @example
     * // Create many WorkflowEdges
     * const workflowEdge = await prisma.workflowEdge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkflowEdges and only return the `id`
     * const workflowEdgeWithIdOnly = await prisma.workflowEdge.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkflowEdgeCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkflowEdgeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowEdgePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkflowEdge.
     * @param {WorkflowEdgeDeleteArgs} args - Arguments to delete one WorkflowEdge.
     * @example
     * // Delete one WorkflowEdge
     * const WorkflowEdge = await prisma.workflowEdge.delete({
     *   where: {
     *     // ... filter to delete one WorkflowEdge
     *   }
     * })
     * 
     */
    delete<T extends WorkflowEdgeDeleteArgs>(args: SelectSubset<T, WorkflowEdgeDeleteArgs<ExtArgs>>): Prisma__WorkflowEdgeClient<$Result.GetResult<Prisma.$WorkflowEdgePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkflowEdge.
     * @param {WorkflowEdgeUpdateArgs} args - Arguments to update one WorkflowEdge.
     * @example
     * // Update one WorkflowEdge
     * const workflowEdge = await prisma.workflowEdge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkflowEdgeUpdateArgs>(args: SelectSubset<T, WorkflowEdgeUpdateArgs<ExtArgs>>): Prisma__WorkflowEdgeClient<$Result.GetResult<Prisma.$WorkflowEdgePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkflowEdges.
     * @param {WorkflowEdgeDeleteManyArgs} args - Arguments to filter WorkflowEdges to delete.
     * @example
     * // Delete a few WorkflowEdges
     * const { count } = await prisma.workflowEdge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkflowEdgeDeleteManyArgs>(args?: SelectSubset<T, WorkflowEdgeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkflowEdges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowEdgeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkflowEdges
     * const workflowEdge = await prisma.workflowEdge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkflowEdgeUpdateManyArgs>(args: SelectSubset<T, WorkflowEdgeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkflowEdges and returns the data updated in the database.
     * @param {WorkflowEdgeUpdateManyAndReturnArgs} args - Arguments to update many WorkflowEdges.
     * @example
     * // Update many WorkflowEdges
     * const workflowEdge = await prisma.workflowEdge.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkflowEdges and only return the `id`
     * const workflowEdgeWithIdOnly = await prisma.workflowEdge.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkflowEdgeUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkflowEdgeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowEdgePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkflowEdge.
     * @param {WorkflowEdgeUpsertArgs} args - Arguments to update or create a WorkflowEdge.
     * @example
     * // Update or create a WorkflowEdge
     * const workflowEdge = await prisma.workflowEdge.upsert({
     *   create: {
     *     // ... data to create a WorkflowEdge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkflowEdge we want to update
     *   }
     * })
     */
    upsert<T extends WorkflowEdgeUpsertArgs>(args: SelectSubset<T, WorkflowEdgeUpsertArgs<ExtArgs>>): Prisma__WorkflowEdgeClient<$Result.GetResult<Prisma.$WorkflowEdgePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkflowEdges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowEdgeCountArgs} args - Arguments to filter WorkflowEdges to count.
     * @example
     * // Count the number of WorkflowEdges
     * const count = await prisma.workflowEdge.count({
     *   where: {
     *     // ... the filter for the WorkflowEdges we want to count
     *   }
     * })
    **/
    count<T extends WorkflowEdgeCountArgs>(
      args?: Subset<T, WorkflowEdgeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkflowEdgeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkflowEdge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowEdgeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkflowEdgeAggregateArgs>(args: Subset<T, WorkflowEdgeAggregateArgs>): Prisma.PrismaPromise<GetWorkflowEdgeAggregateType<T>>

    /**
     * Group by WorkflowEdge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowEdgeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkflowEdgeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkflowEdgeGroupByArgs['orderBy'] }
        : { orderBy?: WorkflowEdgeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkflowEdgeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkflowEdgeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkflowEdge model
   */
  readonly fields: WorkflowEdgeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkflowEdge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkflowEdgeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workflow<T extends WorkflowDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkflowDefaultArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkflowEdge model
   */
  interface WorkflowEdgeFieldRefs {
    readonly id: FieldRef<"WorkflowEdge", 'String'>
    readonly workflowId: FieldRef<"WorkflowEdge", 'String'>
    readonly sourceNodeId: FieldRef<"WorkflowEdge", 'String'>
    readonly targetNodeId: FieldRef<"WorkflowEdge", 'String'>
    readonly label: FieldRef<"WorkflowEdge", 'WorkflowEdgeLabel'>
  }
    

  // Custom InputTypes
  /**
   * WorkflowEdge findUnique
   */
  export type WorkflowEdgeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowEdge
     */
    select?: WorkflowEdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowEdge
     */
    omit?: WorkflowEdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowEdgeInclude<ExtArgs> | null
    /**
     * Filter, which WorkflowEdge to fetch.
     */
    where: WorkflowEdgeWhereUniqueInput
  }

  /**
   * WorkflowEdge findUniqueOrThrow
   */
  export type WorkflowEdgeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowEdge
     */
    select?: WorkflowEdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowEdge
     */
    omit?: WorkflowEdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowEdgeInclude<ExtArgs> | null
    /**
     * Filter, which WorkflowEdge to fetch.
     */
    where: WorkflowEdgeWhereUniqueInput
  }

  /**
   * WorkflowEdge findFirst
   */
  export type WorkflowEdgeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowEdge
     */
    select?: WorkflowEdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowEdge
     */
    omit?: WorkflowEdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowEdgeInclude<ExtArgs> | null
    /**
     * Filter, which WorkflowEdge to fetch.
     */
    where?: WorkflowEdgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowEdges to fetch.
     */
    orderBy?: WorkflowEdgeOrderByWithRelationInput | WorkflowEdgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkflowEdges.
     */
    cursor?: WorkflowEdgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowEdges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowEdges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkflowEdges.
     */
    distinct?: WorkflowEdgeScalarFieldEnum | WorkflowEdgeScalarFieldEnum[]
  }

  /**
   * WorkflowEdge findFirstOrThrow
   */
  export type WorkflowEdgeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowEdge
     */
    select?: WorkflowEdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowEdge
     */
    omit?: WorkflowEdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowEdgeInclude<ExtArgs> | null
    /**
     * Filter, which WorkflowEdge to fetch.
     */
    where?: WorkflowEdgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowEdges to fetch.
     */
    orderBy?: WorkflowEdgeOrderByWithRelationInput | WorkflowEdgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkflowEdges.
     */
    cursor?: WorkflowEdgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowEdges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowEdges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkflowEdges.
     */
    distinct?: WorkflowEdgeScalarFieldEnum | WorkflowEdgeScalarFieldEnum[]
  }

  /**
   * WorkflowEdge findMany
   */
  export type WorkflowEdgeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowEdge
     */
    select?: WorkflowEdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowEdge
     */
    omit?: WorkflowEdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowEdgeInclude<ExtArgs> | null
    /**
     * Filter, which WorkflowEdges to fetch.
     */
    where?: WorkflowEdgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowEdges to fetch.
     */
    orderBy?: WorkflowEdgeOrderByWithRelationInput | WorkflowEdgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkflowEdges.
     */
    cursor?: WorkflowEdgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowEdges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowEdges.
     */
    skip?: number
    distinct?: WorkflowEdgeScalarFieldEnum | WorkflowEdgeScalarFieldEnum[]
  }

  /**
   * WorkflowEdge create
   */
  export type WorkflowEdgeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowEdge
     */
    select?: WorkflowEdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowEdge
     */
    omit?: WorkflowEdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowEdgeInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkflowEdge.
     */
    data: XOR<WorkflowEdgeCreateInput, WorkflowEdgeUncheckedCreateInput>
  }

  /**
   * WorkflowEdge createMany
   */
  export type WorkflowEdgeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkflowEdges.
     */
    data: WorkflowEdgeCreateManyInput | WorkflowEdgeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkflowEdge createManyAndReturn
   */
  export type WorkflowEdgeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowEdge
     */
    select?: WorkflowEdgeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowEdge
     */
    omit?: WorkflowEdgeOmit<ExtArgs> | null
    /**
     * The data used to create many WorkflowEdges.
     */
    data: WorkflowEdgeCreateManyInput | WorkflowEdgeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowEdgeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkflowEdge update
   */
  export type WorkflowEdgeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowEdge
     */
    select?: WorkflowEdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowEdge
     */
    omit?: WorkflowEdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowEdgeInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkflowEdge.
     */
    data: XOR<WorkflowEdgeUpdateInput, WorkflowEdgeUncheckedUpdateInput>
    /**
     * Choose, which WorkflowEdge to update.
     */
    where: WorkflowEdgeWhereUniqueInput
  }

  /**
   * WorkflowEdge updateMany
   */
  export type WorkflowEdgeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkflowEdges.
     */
    data: XOR<WorkflowEdgeUpdateManyMutationInput, WorkflowEdgeUncheckedUpdateManyInput>
    /**
     * Filter which WorkflowEdges to update
     */
    where?: WorkflowEdgeWhereInput
    /**
     * Limit how many WorkflowEdges to update.
     */
    limit?: number
  }

  /**
   * WorkflowEdge updateManyAndReturn
   */
  export type WorkflowEdgeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowEdge
     */
    select?: WorkflowEdgeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowEdge
     */
    omit?: WorkflowEdgeOmit<ExtArgs> | null
    /**
     * The data used to update WorkflowEdges.
     */
    data: XOR<WorkflowEdgeUpdateManyMutationInput, WorkflowEdgeUncheckedUpdateManyInput>
    /**
     * Filter which WorkflowEdges to update
     */
    where?: WorkflowEdgeWhereInput
    /**
     * Limit how many WorkflowEdges to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowEdgeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkflowEdge upsert
   */
  export type WorkflowEdgeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowEdge
     */
    select?: WorkflowEdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowEdge
     */
    omit?: WorkflowEdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowEdgeInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkflowEdge to update in case it exists.
     */
    where: WorkflowEdgeWhereUniqueInput
    /**
     * In case the WorkflowEdge found by the `where` argument doesn't exist, create a new WorkflowEdge with this data.
     */
    create: XOR<WorkflowEdgeCreateInput, WorkflowEdgeUncheckedCreateInput>
    /**
     * In case the WorkflowEdge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkflowEdgeUpdateInput, WorkflowEdgeUncheckedUpdateInput>
  }

  /**
   * WorkflowEdge delete
   */
  export type WorkflowEdgeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowEdge
     */
    select?: WorkflowEdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowEdge
     */
    omit?: WorkflowEdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowEdgeInclude<ExtArgs> | null
    /**
     * Filter which WorkflowEdge to delete.
     */
    where: WorkflowEdgeWhereUniqueInput
  }

  /**
   * WorkflowEdge deleteMany
   */
  export type WorkflowEdgeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkflowEdges to delete
     */
    where?: WorkflowEdgeWhereInput
    /**
     * Limit how many WorkflowEdges to delete.
     */
    limit?: number
  }

  /**
   * WorkflowEdge without action
   */
  export type WorkflowEdgeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowEdge
     */
    select?: WorkflowEdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowEdge
     */
    omit?: WorkflowEdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowEdgeInclude<ExtArgs> | null
  }


  /**
   * Model WorkflowExecution
   */

  export type AggregateWorkflowExecution = {
    _count: WorkflowExecutionCountAggregateOutputType | null
    _min: WorkflowExecutionMinAggregateOutputType | null
    _max: WorkflowExecutionMaxAggregateOutputType | null
  }

  export type WorkflowExecutionMinAggregateOutputType = {
    id: string | null
    workflowId: string | null
    userId: string | null
    status: $Enums.ExecutionStatus | null
    startedAt: Date | null
    finishedAt: Date | null
  }

  export type WorkflowExecutionMaxAggregateOutputType = {
    id: string | null
    workflowId: string | null
    userId: string | null
    status: $Enums.ExecutionStatus | null
    startedAt: Date | null
    finishedAt: Date | null
  }

  export type WorkflowExecutionCountAggregateOutputType = {
    id: number
    workflowId: number
    userId: number
    status: number
    logs: number
    startedAt: number
    finishedAt: number
    _all: number
  }


  export type WorkflowExecutionMinAggregateInputType = {
    id?: true
    workflowId?: true
    userId?: true
    status?: true
    startedAt?: true
    finishedAt?: true
  }

  export type WorkflowExecutionMaxAggregateInputType = {
    id?: true
    workflowId?: true
    userId?: true
    status?: true
    startedAt?: true
    finishedAt?: true
  }

  export type WorkflowExecutionCountAggregateInputType = {
    id?: true
    workflowId?: true
    userId?: true
    status?: true
    logs?: true
    startedAt?: true
    finishedAt?: true
    _all?: true
  }

  export type WorkflowExecutionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkflowExecution to aggregate.
     */
    where?: WorkflowExecutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowExecutions to fetch.
     */
    orderBy?: WorkflowExecutionOrderByWithRelationInput | WorkflowExecutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkflowExecutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowExecutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowExecutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkflowExecutions
    **/
    _count?: true | WorkflowExecutionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkflowExecutionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkflowExecutionMaxAggregateInputType
  }

  export type GetWorkflowExecutionAggregateType<T extends WorkflowExecutionAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkflowExecution]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkflowExecution[P]>
      : GetScalarType<T[P], AggregateWorkflowExecution[P]>
  }




  export type WorkflowExecutionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkflowExecutionWhereInput
    orderBy?: WorkflowExecutionOrderByWithAggregationInput | WorkflowExecutionOrderByWithAggregationInput[]
    by: WorkflowExecutionScalarFieldEnum[] | WorkflowExecutionScalarFieldEnum
    having?: WorkflowExecutionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkflowExecutionCountAggregateInputType | true
    _min?: WorkflowExecutionMinAggregateInputType
    _max?: WorkflowExecutionMaxAggregateInputType
  }

  export type WorkflowExecutionGroupByOutputType = {
    id: string
    workflowId: string
    userId: string | null
    status: $Enums.ExecutionStatus
    logs: JsonValue
    startedAt: Date
    finishedAt: Date | null
    _count: WorkflowExecutionCountAggregateOutputType | null
    _min: WorkflowExecutionMinAggregateOutputType | null
    _max: WorkflowExecutionMaxAggregateOutputType | null
  }

  type GetWorkflowExecutionGroupByPayload<T extends WorkflowExecutionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkflowExecutionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkflowExecutionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkflowExecutionGroupByOutputType[P]>
            : GetScalarType<T[P], WorkflowExecutionGroupByOutputType[P]>
        }
      >
    >


  export type WorkflowExecutionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    userId?: boolean
    status?: boolean
    logs?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
    user?: boolean | WorkflowExecution$userArgs<ExtArgs>
  }, ExtArgs["result"]["workflowExecution"]>

  export type WorkflowExecutionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    userId?: boolean
    status?: boolean
    logs?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
    user?: boolean | WorkflowExecution$userArgs<ExtArgs>
  }, ExtArgs["result"]["workflowExecution"]>

  export type WorkflowExecutionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    userId?: boolean
    status?: boolean
    logs?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
    user?: boolean | WorkflowExecution$userArgs<ExtArgs>
  }, ExtArgs["result"]["workflowExecution"]>

  export type WorkflowExecutionSelectScalar = {
    id?: boolean
    workflowId?: boolean
    userId?: boolean
    status?: boolean
    logs?: boolean
    startedAt?: boolean
    finishedAt?: boolean
  }

  export type WorkflowExecutionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workflowId" | "userId" | "status" | "logs" | "startedAt" | "finishedAt", ExtArgs["result"]["workflowExecution"]>
  export type WorkflowExecutionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
    user?: boolean | WorkflowExecution$userArgs<ExtArgs>
  }
  export type WorkflowExecutionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
    user?: boolean | WorkflowExecution$userArgs<ExtArgs>
  }
  export type WorkflowExecutionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
    user?: boolean | WorkflowExecution$userArgs<ExtArgs>
  }

  export type $WorkflowExecutionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkflowExecution"
    objects: {
      workflow: Prisma.$WorkflowPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workflowId: string
      userId: string | null
      status: $Enums.ExecutionStatus
      logs: Prisma.JsonValue
      startedAt: Date
      finishedAt: Date | null
    }, ExtArgs["result"]["workflowExecution"]>
    composites: {}
  }

  type WorkflowExecutionGetPayload<S extends boolean | null | undefined | WorkflowExecutionDefaultArgs> = $Result.GetResult<Prisma.$WorkflowExecutionPayload, S>

  type WorkflowExecutionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkflowExecutionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkflowExecutionCountAggregateInputType | true
    }

  export interface WorkflowExecutionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkflowExecution'], meta: { name: 'WorkflowExecution' } }
    /**
     * Find zero or one WorkflowExecution that matches the filter.
     * @param {WorkflowExecutionFindUniqueArgs} args - Arguments to find a WorkflowExecution
     * @example
     * // Get one WorkflowExecution
     * const workflowExecution = await prisma.workflowExecution.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkflowExecutionFindUniqueArgs>(args: SelectSubset<T, WorkflowExecutionFindUniqueArgs<ExtArgs>>): Prisma__WorkflowExecutionClient<$Result.GetResult<Prisma.$WorkflowExecutionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkflowExecution that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkflowExecutionFindUniqueOrThrowArgs} args - Arguments to find a WorkflowExecution
     * @example
     * // Get one WorkflowExecution
     * const workflowExecution = await prisma.workflowExecution.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkflowExecutionFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkflowExecutionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkflowExecutionClient<$Result.GetResult<Prisma.$WorkflowExecutionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkflowExecution that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowExecutionFindFirstArgs} args - Arguments to find a WorkflowExecution
     * @example
     * // Get one WorkflowExecution
     * const workflowExecution = await prisma.workflowExecution.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkflowExecutionFindFirstArgs>(args?: SelectSubset<T, WorkflowExecutionFindFirstArgs<ExtArgs>>): Prisma__WorkflowExecutionClient<$Result.GetResult<Prisma.$WorkflowExecutionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkflowExecution that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowExecutionFindFirstOrThrowArgs} args - Arguments to find a WorkflowExecution
     * @example
     * // Get one WorkflowExecution
     * const workflowExecution = await prisma.workflowExecution.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkflowExecutionFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkflowExecutionFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkflowExecutionClient<$Result.GetResult<Prisma.$WorkflowExecutionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkflowExecutions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowExecutionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkflowExecutions
     * const workflowExecutions = await prisma.workflowExecution.findMany()
     * 
     * // Get first 10 WorkflowExecutions
     * const workflowExecutions = await prisma.workflowExecution.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workflowExecutionWithIdOnly = await prisma.workflowExecution.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkflowExecutionFindManyArgs>(args?: SelectSubset<T, WorkflowExecutionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowExecutionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkflowExecution.
     * @param {WorkflowExecutionCreateArgs} args - Arguments to create a WorkflowExecution.
     * @example
     * // Create one WorkflowExecution
     * const WorkflowExecution = await prisma.workflowExecution.create({
     *   data: {
     *     // ... data to create a WorkflowExecution
     *   }
     * })
     * 
     */
    create<T extends WorkflowExecutionCreateArgs>(args: SelectSubset<T, WorkflowExecutionCreateArgs<ExtArgs>>): Prisma__WorkflowExecutionClient<$Result.GetResult<Prisma.$WorkflowExecutionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkflowExecutions.
     * @param {WorkflowExecutionCreateManyArgs} args - Arguments to create many WorkflowExecutions.
     * @example
     * // Create many WorkflowExecutions
     * const workflowExecution = await prisma.workflowExecution.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkflowExecutionCreateManyArgs>(args?: SelectSubset<T, WorkflowExecutionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkflowExecutions and returns the data saved in the database.
     * @param {WorkflowExecutionCreateManyAndReturnArgs} args - Arguments to create many WorkflowExecutions.
     * @example
     * // Create many WorkflowExecutions
     * const workflowExecution = await prisma.workflowExecution.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkflowExecutions and only return the `id`
     * const workflowExecutionWithIdOnly = await prisma.workflowExecution.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkflowExecutionCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkflowExecutionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowExecutionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkflowExecution.
     * @param {WorkflowExecutionDeleteArgs} args - Arguments to delete one WorkflowExecution.
     * @example
     * // Delete one WorkflowExecution
     * const WorkflowExecution = await prisma.workflowExecution.delete({
     *   where: {
     *     // ... filter to delete one WorkflowExecution
     *   }
     * })
     * 
     */
    delete<T extends WorkflowExecutionDeleteArgs>(args: SelectSubset<T, WorkflowExecutionDeleteArgs<ExtArgs>>): Prisma__WorkflowExecutionClient<$Result.GetResult<Prisma.$WorkflowExecutionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkflowExecution.
     * @param {WorkflowExecutionUpdateArgs} args - Arguments to update one WorkflowExecution.
     * @example
     * // Update one WorkflowExecution
     * const workflowExecution = await prisma.workflowExecution.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkflowExecutionUpdateArgs>(args: SelectSubset<T, WorkflowExecutionUpdateArgs<ExtArgs>>): Prisma__WorkflowExecutionClient<$Result.GetResult<Prisma.$WorkflowExecutionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkflowExecutions.
     * @param {WorkflowExecutionDeleteManyArgs} args - Arguments to filter WorkflowExecutions to delete.
     * @example
     * // Delete a few WorkflowExecutions
     * const { count } = await prisma.workflowExecution.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkflowExecutionDeleteManyArgs>(args?: SelectSubset<T, WorkflowExecutionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkflowExecutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowExecutionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkflowExecutions
     * const workflowExecution = await prisma.workflowExecution.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkflowExecutionUpdateManyArgs>(args: SelectSubset<T, WorkflowExecutionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkflowExecutions and returns the data updated in the database.
     * @param {WorkflowExecutionUpdateManyAndReturnArgs} args - Arguments to update many WorkflowExecutions.
     * @example
     * // Update many WorkflowExecutions
     * const workflowExecution = await prisma.workflowExecution.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkflowExecutions and only return the `id`
     * const workflowExecutionWithIdOnly = await prisma.workflowExecution.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkflowExecutionUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkflowExecutionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowExecutionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkflowExecution.
     * @param {WorkflowExecutionUpsertArgs} args - Arguments to update or create a WorkflowExecution.
     * @example
     * // Update or create a WorkflowExecution
     * const workflowExecution = await prisma.workflowExecution.upsert({
     *   create: {
     *     // ... data to create a WorkflowExecution
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkflowExecution we want to update
     *   }
     * })
     */
    upsert<T extends WorkflowExecutionUpsertArgs>(args: SelectSubset<T, WorkflowExecutionUpsertArgs<ExtArgs>>): Prisma__WorkflowExecutionClient<$Result.GetResult<Prisma.$WorkflowExecutionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkflowExecutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowExecutionCountArgs} args - Arguments to filter WorkflowExecutions to count.
     * @example
     * // Count the number of WorkflowExecutions
     * const count = await prisma.workflowExecution.count({
     *   where: {
     *     // ... the filter for the WorkflowExecutions we want to count
     *   }
     * })
    **/
    count<T extends WorkflowExecutionCountArgs>(
      args?: Subset<T, WorkflowExecutionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkflowExecutionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkflowExecution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowExecutionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkflowExecutionAggregateArgs>(args: Subset<T, WorkflowExecutionAggregateArgs>): Prisma.PrismaPromise<GetWorkflowExecutionAggregateType<T>>

    /**
     * Group by WorkflowExecution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowExecutionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkflowExecutionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkflowExecutionGroupByArgs['orderBy'] }
        : { orderBy?: WorkflowExecutionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkflowExecutionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkflowExecutionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkflowExecution model
   */
  readonly fields: WorkflowExecutionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkflowExecution.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkflowExecutionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workflow<T extends WorkflowDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkflowDefaultArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends WorkflowExecution$userArgs<ExtArgs> = {}>(args?: Subset<T, WorkflowExecution$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkflowExecution model
   */
  interface WorkflowExecutionFieldRefs {
    readonly id: FieldRef<"WorkflowExecution", 'String'>
    readonly workflowId: FieldRef<"WorkflowExecution", 'String'>
    readonly userId: FieldRef<"WorkflowExecution", 'String'>
    readonly status: FieldRef<"WorkflowExecution", 'ExecutionStatus'>
    readonly logs: FieldRef<"WorkflowExecution", 'Json'>
    readonly startedAt: FieldRef<"WorkflowExecution", 'DateTime'>
    readonly finishedAt: FieldRef<"WorkflowExecution", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkflowExecution findUnique
   */
  export type WorkflowExecutionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowExecution
     */
    select?: WorkflowExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowExecution
     */
    omit?: WorkflowExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowExecutionInclude<ExtArgs> | null
    /**
     * Filter, which WorkflowExecution to fetch.
     */
    where: WorkflowExecutionWhereUniqueInput
  }

  /**
   * WorkflowExecution findUniqueOrThrow
   */
  export type WorkflowExecutionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowExecution
     */
    select?: WorkflowExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowExecution
     */
    omit?: WorkflowExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowExecutionInclude<ExtArgs> | null
    /**
     * Filter, which WorkflowExecution to fetch.
     */
    where: WorkflowExecutionWhereUniqueInput
  }

  /**
   * WorkflowExecution findFirst
   */
  export type WorkflowExecutionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowExecution
     */
    select?: WorkflowExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowExecution
     */
    omit?: WorkflowExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowExecutionInclude<ExtArgs> | null
    /**
     * Filter, which WorkflowExecution to fetch.
     */
    where?: WorkflowExecutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowExecutions to fetch.
     */
    orderBy?: WorkflowExecutionOrderByWithRelationInput | WorkflowExecutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkflowExecutions.
     */
    cursor?: WorkflowExecutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowExecutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowExecutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkflowExecutions.
     */
    distinct?: WorkflowExecutionScalarFieldEnum | WorkflowExecutionScalarFieldEnum[]
  }

  /**
   * WorkflowExecution findFirstOrThrow
   */
  export type WorkflowExecutionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowExecution
     */
    select?: WorkflowExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowExecution
     */
    omit?: WorkflowExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowExecutionInclude<ExtArgs> | null
    /**
     * Filter, which WorkflowExecution to fetch.
     */
    where?: WorkflowExecutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowExecutions to fetch.
     */
    orderBy?: WorkflowExecutionOrderByWithRelationInput | WorkflowExecutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkflowExecutions.
     */
    cursor?: WorkflowExecutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowExecutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowExecutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkflowExecutions.
     */
    distinct?: WorkflowExecutionScalarFieldEnum | WorkflowExecutionScalarFieldEnum[]
  }

  /**
   * WorkflowExecution findMany
   */
  export type WorkflowExecutionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowExecution
     */
    select?: WorkflowExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowExecution
     */
    omit?: WorkflowExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowExecutionInclude<ExtArgs> | null
    /**
     * Filter, which WorkflowExecutions to fetch.
     */
    where?: WorkflowExecutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowExecutions to fetch.
     */
    orderBy?: WorkflowExecutionOrderByWithRelationInput | WorkflowExecutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkflowExecutions.
     */
    cursor?: WorkflowExecutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowExecutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowExecutions.
     */
    skip?: number
    distinct?: WorkflowExecutionScalarFieldEnum | WorkflowExecutionScalarFieldEnum[]
  }

  /**
   * WorkflowExecution create
   */
  export type WorkflowExecutionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowExecution
     */
    select?: WorkflowExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowExecution
     */
    omit?: WorkflowExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowExecutionInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkflowExecution.
     */
    data: XOR<WorkflowExecutionCreateInput, WorkflowExecutionUncheckedCreateInput>
  }

  /**
   * WorkflowExecution createMany
   */
  export type WorkflowExecutionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkflowExecutions.
     */
    data: WorkflowExecutionCreateManyInput | WorkflowExecutionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkflowExecution createManyAndReturn
   */
  export type WorkflowExecutionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowExecution
     */
    select?: WorkflowExecutionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowExecution
     */
    omit?: WorkflowExecutionOmit<ExtArgs> | null
    /**
     * The data used to create many WorkflowExecutions.
     */
    data: WorkflowExecutionCreateManyInput | WorkflowExecutionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowExecutionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkflowExecution update
   */
  export type WorkflowExecutionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowExecution
     */
    select?: WorkflowExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowExecution
     */
    omit?: WorkflowExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowExecutionInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkflowExecution.
     */
    data: XOR<WorkflowExecutionUpdateInput, WorkflowExecutionUncheckedUpdateInput>
    /**
     * Choose, which WorkflowExecution to update.
     */
    where: WorkflowExecutionWhereUniqueInput
  }

  /**
   * WorkflowExecution updateMany
   */
  export type WorkflowExecutionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkflowExecutions.
     */
    data: XOR<WorkflowExecutionUpdateManyMutationInput, WorkflowExecutionUncheckedUpdateManyInput>
    /**
     * Filter which WorkflowExecutions to update
     */
    where?: WorkflowExecutionWhereInput
    /**
     * Limit how many WorkflowExecutions to update.
     */
    limit?: number
  }

  /**
   * WorkflowExecution updateManyAndReturn
   */
  export type WorkflowExecutionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowExecution
     */
    select?: WorkflowExecutionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowExecution
     */
    omit?: WorkflowExecutionOmit<ExtArgs> | null
    /**
     * The data used to update WorkflowExecutions.
     */
    data: XOR<WorkflowExecutionUpdateManyMutationInput, WorkflowExecutionUncheckedUpdateManyInput>
    /**
     * Filter which WorkflowExecutions to update
     */
    where?: WorkflowExecutionWhereInput
    /**
     * Limit how many WorkflowExecutions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowExecutionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkflowExecution upsert
   */
  export type WorkflowExecutionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowExecution
     */
    select?: WorkflowExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowExecution
     */
    omit?: WorkflowExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowExecutionInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkflowExecution to update in case it exists.
     */
    where: WorkflowExecutionWhereUniqueInput
    /**
     * In case the WorkflowExecution found by the `where` argument doesn't exist, create a new WorkflowExecution with this data.
     */
    create: XOR<WorkflowExecutionCreateInput, WorkflowExecutionUncheckedCreateInput>
    /**
     * In case the WorkflowExecution was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkflowExecutionUpdateInput, WorkflowExecutionUncheckedUpdateInput>
  }

  /**
   * WorkflowExecution delete
   */
  export type WorkflowExecutionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowExecution
     */
    select?: WorkflowExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowExecution
     */
    omit?: WorkflowExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowExecutionInclude<ExtArgs> | null
    /**
     * Filter which WorkflowExecution to delete.
     */
    where: WorkflowExecutionWhereUniqueInput
  }

  /**
   * WorkflowExecution deleteMany
   */
  export type WorkflowExecutionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkflowExecutions to delete
     */
    where?: WorkflowExecutionWhereInput
    /**
     * Limit how many WorkflowExecutions to delete.
     */
    limit?: number
  }

  /**
   * WorkflowExecution.user
   */
  export type WorkflowExecution$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * WorkflowExecution without action
   */
  export type WorkflowExecutionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowExecution
     */
    select?: WorkflowExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowExecution
     */
    omit?: WorkflowExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowExecutionInclude<ExtArgs> | null
  }


  /**
   * Model WorkflowVersion
   */

  export type AggregateWorkflowVersion = {
    _count: WorkflowVersionCountAggregateOutputType | null
    _avg: WorkflowVersionAvgAggregateOutputType | null
    _sum: WorkflowVersionSumAggregateOutputType | null
    _min: WorkflowVersionMinAggregateOutputType | null
    _max: WorkflowVersionMaxAggregateOutputType | null
  }

  export type WorkflowVersionAvgAggregateOutputType = {
    versionNumber: number | null
  }

  export type WorkflowVersionSumAggregateOutputType = {
    versionNumber: number | null
  }

  export type WorkflowVersionMinAggregateOutputType = {
    id: string | null
    workflowId: string | null
    versionNumber: number | null
    createdAt: Date | null
  }

  export type WorkflowVersionMaxAggregateOutputType = {
    id: string | null
    workflowId: string | null
    versionNumber: number | null
    createdAt: Date | null
  }

  export type WorkflowVersionCountAggregateOutputType = {
    id: number
    workflowId: number
    versionNumber: number
    snapshot: number
    createdAt: number
    _all: number
  }


  export type WorkflowVersionAvgAggregateInputType = {
    versionNumber?: true
  }

  export type WorkflowVersionSumAggregateInputType = {
    versionNumber?: true
  }

  export type WorkflowVersionMinAggregateInputType = {
    id?: true
    workflowId?: true
    versionNumber?: true
    createdAt?: true
  }

  export type WorkflowVersionMaxAggregateInputType = {
    id?: true
    workflowId?: true
    versionNumber?: true
    createdAt?: true
  }

  export type WorkflowVersionCountAggregateInputType = {
    id?: true
    workflowId?: true
    versionNumber?: true
    snapshot?: true
    createdAt?: true
    _all?: true
  }

  export type WorkflowVersionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkflowVersion to aggregate.
     */
    where?: WorkflowVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowVersions to fetch.
     */
    orderBy?: WorkflowVersionOrderByWithRelationInput | WorkflowVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkflowVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkflowVersions
    **/
    _count?: true | WorkflowVersionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkflowVersionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkflowVersionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkflowVersionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkflowVersionMaxAggregateInputType
  }

  export type GetWorkflowVersionAggregateType<T extends WorkflowVersionAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkflowVersion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkflowVersion[P]>
      : GetScalarType<T[P], AggregateWorkflowVersion[P]>
  }




  export type WorkflowVersionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkflowVersionWhereInput
    orderBy?: WorkflowVersionOrderByWithAggregationInput | WorkflowVersionOrderByWithAggregationInput[]
    by: WorkflowVersionScalarFieldEnum[] | WorkflowVersionScalarFieldEnum
    having?: WorkflowVersionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkflowVersionCountAggregateInputType | true
    _avg?: WorkflowVersionAvgAggregateInputType
    _sum?: WorkflowVersionSumAggregateInputType
    _min?: WorkflowVersionMinAggregateInputType
    _max?: WorkflowVersionMaxAggregateInputType
  }

  export type WorkflowVersionGroupByOutputType = {
    id: string
    workflowId: string
    versionNumber: number
    snapshot: JsonValue
    createdAt: Date
    _count: WorkflowVersionCountAggregateOutputType | null
    _avg: WorkflowVersionAvgAggregateOutputType | null
    _sum: WorkflowVersionSumAggregateOutputType | null
    _min: WorkflowVersionMinAggregateOutputType | null
    _max: WorkflowVersionMaxAggregateOutputType | null
  }

  type GetWorkflowVersionGroupByPayload<T extends WorkflowVersionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkflowVersionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkflowVersionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkflowVersionGroupByOutputType[P]>
            : GetScalarType<T[P], WorkflowVersionGroupByOutputType[P]>
        }
      >
    >


  export type WorkflowVersionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    versionNumber?: boolean
    snapshot?: boolean
    createdAt?: boolean
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workflowVersion"]>

  export type WorkflowVersionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    versionNumber?: boolean
    snapshot?: boolean
    createdAt?: boolean
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workflowVersion"]>

  export type WorkflowVersionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    versionNumber?: boolean
    snapshot?: boolean
    createdAt?: boolean
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workflowVersion"]>

  export type WorkflowVersionSelectScalar = {
    id?: boolean
    workflowId?: boolean
    versionNumber?: boolean
    snapshot?: boolean
    createdAt?: boolean
  }

  export type WorkflowVersionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workflowId" | "versionNumber" | "snapshot" | "createdAt", ExtArgs["result"]["workflowVersion"]>
  export type WorkflowVersionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }
  export type WorkflowVersionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }
  export type WorkflowVersionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }

  export type $WorkflowVersionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkflowVersion"
    objects: {
      workflow: Prisma.$WorkflowPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workflowId: string
      versionNumber: number
      snapshot: Prisma.JsonValue
      createdAt: Date
    }, ExtArgs["result"]["workflowVersion"]>
    composites: {}
  }

  type WorkflowVersionGetPayload<S extends boolean | null | undefined | WorkflowVersionDefaultArgs> = $Result.GetResult<Prisma.$WorkflowVersionPayload, S>

  type WorkflowVersionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkflowVersionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkflowVersionCountAggregateInputType | true
    }

  export interface WorkflowVersionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkflowVersion'], meta: { name: 'WorkflowVersion' } }
    /**
     * Find zero or one WorkflowVersion that matches the filter.
     * @param {WorkflowVersionFindUniqueArgs} args - Arguments to find a WorkflowVersion
     * @example
     * // Get one WorkflowVersion
     * const workflowVersion = await prisma.workflowVersion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkflowVersionFindUniqueArgs>(args: SelectSubset<T, WorkflowVersionFindUniqueArgs<ExtArgs>>): Prisma__WorkflowVersionClient<$Result.GetResult<Prisma.$WorkflowVersionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkflowVersion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkflowVersionFindUniqueOrThrowArgs} args - Arguments to find a WorkflowVersion
     * @example
     * // Get one WorkflowVersion
     * const workflowVersion = await prisma.workflowVersion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkflowVersionFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkflowVersionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkflowVersionClient<$Result.GetResult<Prisma.$WorkflowVersionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkflowVersion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowVersionFindFirstArgs} args - Arguments to find a WorkflowVersion
     * @example
     * // Get one WorkflowVersion
     * const workflowVersion = await prisma.workflowVersion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkflowVersionFindFirstArgs>(args?: SelectSubset<T, WorkflowVersionFindFirstArgs<ExtArgs>>): Prisma__WorkflowVersionClient<$Result.GetResult<Prisma.$WorkflowVersionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkflowVersion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowVersionFindFirstOrThrowArgs} args - Arguments to find a WorkflowVersion
     * @example
     * // Get one WorkflowVersion
     * const workflowVersion = await prisma.workflowVersion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkflowVersionFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkflowVersionFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkflowVersionClient<$Result.GetResult<Prisma.$WorkflowVersionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkflowVersions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowVersionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkflowVersions
     * const workflowVersions = await prisma.workflowVersion.findMany()
     * 
     * // Get first 10 WorkflowVersions
     * const workflowVersions = await prisma.workflowVersion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workflowVersionWithIdOnly = await prisma.workflowVersion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkflowVersionFindManyArgs>(args?: SelectSubset<T, WorkflowVersionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowVersionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkflowVersion.
     * @param {WorkflowVersionCreateArgs} args - Arguments to create a WorkflowVersion.
     * @example
     * // Create one WorkflowVersion
     * const WorkflowVersion = await prisma.workflowVersion.create({
     *   data: {
     *     // ... data to create a WorkflowVersion
     *   }
     * })
     * 
     */
    create<T extends WorkflowVersionCreateArgs>(args: SelectSubset<T, WorkflowVersionCreateArgs<ExtArgs>>): Prisma__WorkflowVersionClient<$Result.GetResult<Prisma.$WorkflowVersionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkflowVersions.
     * @param {WorkflowVersionCreateManyArgs} args - Arguments to create many WorkflowVersions.
     * @example
     * // Create many WorkflowVersions
     * const workflowVersion = await prisma.workflowVersion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkflowVersionCreateManyArgs>(args?: SelectSubset<T, WorkflowVersionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkflowVersions and returns the data saved in the database.
     * @param {WorkflowVersionCreateManyAndReturnArgs} args - Arguments to create many WorkflowVersions.
     * @example
     * // Create many WorkflowVersions
     * const workflowVersion = await prisma.workflowVersion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkflowVersions and only return the `id`
     * const workflowVersionWithIdOnly = await prisma.workflowVersion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkflowVersionCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkflowVersionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowVersionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkflowVersion.
     * @param {WorkflowVersionDeleteArgs} args - Arguments to delete one WorkflowVersion.
     * @example
     * // Delete one WorkflowVersion
     * const WorkflowVersion = await prisma.workflowVersion.delete({
     *   where: {
     *     // ... filter to delete one WorkflowVersion
     *   }
     * })
     * 
     */
    delete<T extends WorkflowVersionDeleteArgs>(args: SelectSubset<T, WorkflowVersionDeleteArgs<ExtArgs>>): Prisma__WorkflowVersionClient<$Result.GetResult<Prisma.$WorkflowVersionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkflowVersion.
     * @param {WorkflowVersionUpdateArgs} args - Arguments to update one WorkflowVersion.
     * @example
     * // Update one WorkflowVersion
     * const workflowVersion = await prisma.workflowVersion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkflowVersionUpdateArgs>(args: SelectSubset<T, WorkflowVersionUpdateArgs<ExtArgs>>): Prisma__WorkflowVersionClient<$Result.GetResult<Prisma.$WorkflowVersionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkflowVersions.
     * @param {WorkflowVersionDeleteManyArgs} args - Arguments to filter WorkflowVersions to delete.
     * @example
     * // Delete a few WorkflowVersions
     * const { count } = await prisma.workflowVersion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkflowVersionDeleteManyArgs>(args?: SelectSubset<T, WorkflowVersionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkflowVersions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowVersionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkflowVersions
     * const workflowVersion = await prisma.workflowVersion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkflowVersionUpdateManyArgs>(args: SelectSubset<T, WorkflowVersionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkflowVersions and returns the data updated in the database.
     * @param {WorkflowVersionUpdateManyAndReturnArgs} args - Arguments to update many WorkflowVersions.
     * @example
     * // Update many WorkflowVersions
     * const workflowVersion = await prisma.workflowVersion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkflowVersions and only return the `id`
     * const workflowVersionWithIdOnly = await prisma.workflowVersion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkflowVersionUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkflowVersionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowVersionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkflowVersion.
     * @param {WorkflowVersionUpsertArgs} args - Arguments to update or create a WorkflowVersion.
     * @example
     * // Update or create a WorkflowVersion
     * const workflowVersion = await prisma.workflowVersion.upsert({
     *   create: {
     *     // ... data to create a WorkflowVersion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkflowVersion we want to update
     *   }
     * })
     */
    upsert<T extends WorkflowVersionUpsertArgs>(args: SelectSubset<T, WorkflowVersionUpsertArgs<ExtArgs>>): Prisma__WorkflowVersionClient<$Result.GetResult<Prisma.$WorkflowVersionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkflowVersions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowVersionCountArgs} args - Arguments to filter WorkflowVersions to count.
     * @example
     * // Count the number of WorkflowVersions
     * const count = await prisma.workflowVersion.count({
     *   where: {
     *     // ... the filter for the WorkflowVersions we want to count
     *   }
     * })
    **/
    count<T extends WorkflowVersionCountArgs>(
      args?: Subset<T, WorkflowVersionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkflowVersionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkflowVersion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowVersionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkflowVersionAggregateArgs>(args: Subset<T, WorkflowVersionAggregateArgs>): Prisma.PrismaPromise<GetWorkflowVersionAggregateType<T>>

    /**
     * Group by WorkflowVersion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowVersionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkflowVersionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkflowVersionGroupByArgs['orderBy'] }
        : { orderBy?: WorkflowVersionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkflowVersionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkflowVersionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkflowVersion model
   */
  readonly fields: WorkflowVersionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkflowVersion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkflowVersionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workflow<T extends WorkflowDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkflowDefaultArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkflowVersion model
   */
  interface WorkflowVersionFieldRefs {
    readonly id: FieldRef<"WorkflowVersion", 'String'>
    readonly workflowId: FieldRef<"WorkflowVersion", 'String'>
    readonly versionNumber: FieldRef<"WorkflowVersion", 'Int'>
    readonly snapshot: FieldRef<"WorkflowVersion", 'Json'>
    readonly createdAt: FieldRef<"WorkflowVersion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkflowVersion findUnique
   */
  export type WorkflowVersionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowVersion
     */
    select?: WorkflowVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowVersion
     */
    omit?: WorkflowVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowVersionInclude<ExtArgs> | null
    /**
     * Filter, which WorkflowVersion to fetch.
     */
    where: WorkflowVersionWhereUniqueInput
  }

  /**
   * WorkflowVersion findUniqueOrThrow
   */
  export type WorkflowVersionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowVersion
     */
    select?: WorkflowVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowVersion
     */
    omit?: WorkflowVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowVersionInclude<ExtArgs> | null
    /**
     * Filter, which WorkflowVersion to fetch.
     */
    where: WorkflowVersionWhereUniqueInput
  }

  /**
   * WorkflowVersion findFirst
   */
  export type WorkflowVersionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowVersion
     */
    select?: WorkflowVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowVersion
     */
    omit?: WorkflowVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowVersionInclude<ExtArgs> | null
    /**
     * Filter, which WorkflowVersion to fetch.
     */
    where?: WorkflowVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowVersions to fetch.
     */
    orderBy?: WorkflowVersionOrderByWithRelationInput | WorkflowVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkflowVersions.
     */
    cursor?: WorkflowVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkflowVersions.
     */
    distinct?: WorkflowVersionScalarFieldEnum | WorkflowVersionScalarFieldEnum[]
  }

  /**
   * WorkflowVersion findFirstOrThrow
   */
  export type WorkflowVersionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowVersion
     */
    select?: WorkflowVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowVersion
     */
    omit?: WorkflowVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowVersionInclude<ExtArgs> | null
    /**
     * Filter, which WorkflowVersion to fetch.
     */
    where?: WorkflowVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowVersions to fetch.
     */
    orderBy?: WorkflowVersionOrderByWithRelationInput | WorkflowVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkflowVersions.
     */
    cursor?: WorkflowVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkflowVersions.
     */
    distinct?: WorkflowVersionScalarFieldEnum | WorkflowVersionScalarFieldEnum[]
  }

  /**
   * WorkflowVersion findMany
   */
  export type WorkflowVersionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowVersion
     */
    select?: WorkflowVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowVersion
     */
    omit?: WorkflowVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowVersionInclude<ExtArgs> | null
    /**
     * Filter, which WorkflowVersions to fetch.
     */
    where?: WorkflowVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowVersions to fetch.
     */
    orderBy?: WorkflowVersionOrderByWithRelationInput | WorkflowVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkflowVersions.
     */
    cursor?: WorkflowVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowVersions.
     */
    skip?: number
    distinct?: WorkflowVersionScalarFieldEnum | WorkflowVersionScalarFieldEnum[]
  }

  /**
   * WorkflowVersion create
   */
  export type WorkflowVersionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowVersion
     */
    select?: WorkflowVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowVersion
     */
    omit?: WorkflowVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowVersionInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkflowVersion.
     */
    data: XOR<WorkflowVersionCreateInput, WorkflowVersionUncheckedCreateInput>
  }

  /**
   * WorkflowVersion createMany
   */
  export type WorkflowVersionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkflowVersions.
     */
    data: WorkflowVersionCreateManyInput | WorkflowVersionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkflowVersion createManyAndReturn
   */
  export type WorkflowVersionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowVersion
     */
    select?: WorkflowVersionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowVersion
     */
    omit?: WorkflowVersionOmit<ExtArgs> | null
    /**
     * The data used to create many WorkflowVersions.
     */
    data: WorkflowVersionCreateManyInput | WorkflowVersionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowVersionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkflowVersion update
   */
  export type WorkflowVersionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowVersion
     */
    select?: WorkflowVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowVersion
     */
    omit?: WorkflowVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowVersionInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkflowVersion.
     */
    data: XOR<WorkflowVersionUpdateInput, WorkflowVersionUncheckedUpdateInput>
    /**
     * Choose, which WorkflowVersion to update.
     */
    where: WorkflowVersionWhereUniqueInput
  }

  /**
   * WorkflowVersion updateMany
   */
  export type WorkflowVersionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkflowVersions.
     */
    data: XOR<WorkflowVersionUpdateManyMutationInput, WorkflowVersionUncheckedUpdateManyInput>
    /**
     * Filter which WorkflowVersions to update
     */
    where?: WorkflowVersionWhereInput
    /**
     * Limit how many WorkflowVersions to update.
     */
    limit?: number
  }

  /**
   * WorkflowVersion updateManyAndReturn
   */
  export type WorkflowVersionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowVersion
     */
    select?: WorkflowVersionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowVersion
     */
    omit?: WorkflowVersionOmit<ExtArgs> | null
    /**
     * The data used to update WorkflowVersions.
     */
    data: XOR<WorkflowVersionUpdateManyMutationInput, WorkflowVersionUncheckedUpdateManyInput>
    /**
     * Filter which WorkflowVersions to update
     */
    where?: WorkflowVersionWhereInput
    /**
     * Limit how many WorkflowVersions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowVersionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkflowVersion upsert
   */
  export type WorkflowVersionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowVersion
     */
    select?: WorkflowVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowVersion
     */
    omit?: WorkflowVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowVersionInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkflowVersion to update in case it exists.
     */
    where: WorkflowVersionWhereUniqueInput
    /**
     * In case the WorkflowVersion found by the `where` argument doesn't exist, create a new WorkflowVersion with this data.
     */
    create: XOR<WorkflowVersionCreateInput, WorkflowVersionUncheckedCreateInput>
    /**
     * In case the WorkflowVersion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkflowVersionUpdateInput, WorkflowVersionUncheckedUpdateInput>
  }

  /**
   * WorkflowVersion delete
   */
  export type WorkflowVersionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowVersion
     */
    select?: WorkflowVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowVersion
     */
    omit?: WorkflowVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowVersionInclude<ExtArgs> | null
    /**
     * Filter which WorkflowVersion to delete.
     */
    where: WorkflowVersionWhereUniqueInput
  }

  /**
   * WorkflowVersion deleteMany
   */
  export type WorkflowVersionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkflowVersions to delete
     */
    where?: WorkflowVersionWhereInput
    /**
     * Limit how many WorkflowVersions to delete.
     */
    limit?: number
  }

  /**
   * WorkflowVersion without action
   */
  export type WorkflowVersionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowVersion
     */
    select?: WorkflowVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowVersion
     */
    omit?: WorkflowVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowVersionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    walletAdress: 'walletAdress',
    email: 'email',
    name: 'name',
    image: 'image',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const WorkflowScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    userId: 'userId',
    isPublic: 'isPublic',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkflowScalarFieldEnum = (typeof WorkflowScalarFieldEnum)[keyof typeof WorkflowScalarFieldEnum]


  export const WorkflowNodeScalarFieldEnum: {
    id: 'id',
    workflowId: 'workflowId',
    type: 'type',
    name: 'name',
    positionX: 'positionX',
    positionY: 'positionY',
    config: 'config',
    orderIndex: 'orderIndex'
  };

  export type WorkflowNodeScalarFieldEnum = (typeof WorkflowNodeScalarFieldEnum)[keyof typeof WorkflowNodeScalarFieldEnum]


  export const WorkflowEdgeScalarFieldEnum: {
    id: 'id',
    workflowId: 'workflowId',
    sourceNodeId: 'sourceNodeId',
    targetNodeId: 'targetNodeId',
    label: 'label'
  };

  export type WorkflowEdgeScalarFieldEnum = (typeof WorkflowEdgeScalarFieldEnum)[keyof typeof WorkflowEdgeScalarFieldEnum]


  export const WorkflowExecutionScalarFieldEnum: {
    id: 'id',
    workflowId: 'workflowId',
    userId: 'userId',
    status: 'status',
    logs: 'logs',
    startedAt: 'startedAt',
    finishedAt: 'finishedAt'
  };

  export type WorkflowExecutionScalarFieldEnum = (typeof WorkflowExecutionScalarFieldEnum)[keyof typeof WorkflowExecutionScalarFieldEnum]


  export const WorkflowVersionScalarFieldEnum: {
    id: 'id',
    workflowId: 'workflowId',
    versionNumber: 'versionNumber',
    snapshot: 'snapshot',
    createdAt: 'createdAt'
  };

  export type WorkflowVersionScalarFieldEnum = (typeof WorkflowVersionScalarFieldEnum)[keyof typeof WorkflowVersionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'WorkflowNodeType'
   */
  export type EnumWorkflowNodeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WorkflowNodeType'>
    


  /**
   * Reference to a field of type 'WorkflowNodeType[]'
   */
  export type ListEnumWorkflowNodeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WorkflowNodeType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'WorkflowEdgeLabel'
   */
  export type EnumWorkflowEdgeLabelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WorkflowEdgeLabel'>
    


  /**
   * Reference to a field of type 'WorkflowEdgeLabel[]'
   */
  export type ListEnumWorkflowEdgeLabelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WorkflowEdgeLabel[]'>
    


  /**
   * Reference to a field of type 'ExecutionStatus'
   */
  export type EnumExecutionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExecutionStatus'>
    


  /**
   * Reference to a field of type 'ExecutionStatus[]'
   */
  export type ListEnumExecutionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExecutionStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    walletAdress?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    name?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    Workflow?: WorkflowListRelationFilter
    WorkflowExecution?: WorkflowExecutionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    walletAdress?: SortOrder
    email?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    Workflow?: WorkflowOrderByRelationAggregateInput
    WorkflowExecution?: WorkflowExecutionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    walletAdress?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    email?: StringNullableFilter<"User"> | string | null
    name?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    Workflow?: WorkflowListRelationFilter
    WorkflowExecution?: WorkflowExecutionListRelationFilter
  }, "id" | "walletAdress">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    walletAdress?: SortOrder
    email?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    walletAdress?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type WorkflowWhereInput = {
    AND?: WorkflowWhereInput | WorkflowWhereInput[]
    OR?: WorkflowWhereInput[]
    NOT?: WorkflowWhereInput | WorkflowWhereInput[]
    id?: StringFilter<"Workflow"> | string
    name?: StringFilter<"Workflow"> | string
    description?: StringFilter<"Workflow"> | string
    userId?: StringFilter<"Workflow"> | string
    isPublic?: BoolFilter<"Workflow"> | boolean
    isActive?: BoolFilter<"Workflow"> | boolean
    createdAt?: DateTimeFilter<"Workflow"> | Date | string
    updatedAt?: DateTimeFilter<"Workflow"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    WorkflowNode?: WorkflowNodeListRelationFilter
    WorkflowEdge?: WorkflowEdgeListRelationFilter
    WorkflowExecution?: WorkflowExecutionListRelationFilter
    WorkflowVersion?: WorkflowVersionListRelationFilter
  }

  export type WorkflowOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    isPublic?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    WorkflowNode?: WorkflowNodeOrderByRelationAggregateInput
    WorkflowEdge?: WorkflowEdgeOrderByRelationAggregateInput
    WorkflowExecution?: WorkflowExecutionOrderByRelationAggregateInput
    WorkflowVersion?: WorkflowVersionOrderByRelationAggregateInput
  }

  export type WorkflowWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkflowWhereInput | WorkflowWhereInput[]
    OR?: WorkflowWhereInput[]
    NOT?: WorkflowWhereInput | WorkflowWhereInput[]
    name?: StringFilter<"Workflow"> | string
    description?: StringFilter<"Workflow"> | string
    userId?: StringFilter<"Workflow"> | string
    isPublic?: BoolFilter<"Workflow"> | boolean
    isActive?: BoolFilter<"Workflow"> | boolean
    createdAt?: DateTimeFilter<"Workflow"> | Date | string
    updatedAt?: DateTimeFilter<"Workflow"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    WorkflowNode?: WorkflowNodeListRelationFilter
    WorkflowEdge?: WorkflowEdgeListRelationFilter
    WorkflowExecution?: WorkflowExecutionListRelationFilter
    WorkflowVersion?: WorkflowVersionListRelationFilter
  }, "id">

  export type WorkflowOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    isPublic?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorkflowCountOrderByAggregateInput
    _max?: WorkflowMaxOrderByAggregateInput
    _min?: WorkflowMinOrderByAggregateInput
  }

  export type WorkflowScalarWhereWithAggregatesInput = {
    AND?: WorkflowScalarWhereWithAggregatesInput | WorkflowScalarWhereWithAggregatesInput[]
    OR?: WorkflowScalarWhereWithAggregatesInput[]
    NOT?: WorkflowScalarWhereWithAggregatesInput | WorkflowScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Workflow"> | string
    name?: StringWithAggregatesFilter<"Workflow"> | string
    description?: StringWithAggregatesFilter<"Workflow"> | string
    userId?: StringWithAggregatesFilter<"Workflow"> | string
    isPublic?: BoolWithAggregatesFilter<"Workflow"> | boolean
    isActive?: BoolWithAggregatesFilter<"Workflow"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Workflow"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Workflow"> | Date | string
  }

  export type WorkflowNodeWhereInput = {
    AND?: WorkflowNodeWhereInput | WorkflowNodeWhereInput[]
    OR?: WorkflowNodeWhereInput[]
    NOT?: WorkflowNodeWhereInput | WorkflowNodeWhereInput[]
    id?: StringFilter<"WorkflowNode"> | string
    workflowId?: StringFilter<"WorkflowNode"> | string
    type?: EnumWorkflowNodeTypeFilter<"WorkflowNode"> | $Enums.WorkflowNodeType
    name?: StringFilter<"WorkflowNode"> | string
    positionX?: FloatFilter<"WorkflowNode"> | number
    positionY?: FloatFilter<"WorkflowNode"> | number
    config?: JsonFilter<"WorkflowNode">
    orderIndex?: IntFilter<"WorkflowNode"> | number
    workflow?: XOR<WorkflowScalarRelationFilter, WorkflowWhereInput>
  }

  export type WorkflowNodeOrderByWithRelationInput = {
    id?: SortOrder
    workflowId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    positionX?: SortOrder
    positionY?: SortOrder
    config?: SortOrder
    orderIndex?: SortOrder
    workflow?: WorkflowOrderByWithRelationInput
  }

  export type WorkflowNodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkflowNodeWhereInput | WorkflowNodeWhereInput[]
    OR?: WorkflowNodeWhereInput[]
    NOT?: WorkflowNodeWhereInput | WorkflowNodeWhereInput[]
    workflowId?: StringFilter<"WorkflowNode"> | string
    type?: EnumWorkflowNodeTypeFilter<"WorkflowNode"> | $Enums.WorkflowNodeType
    name?: StringFilter<"WorkflowNode"> | string
    positionX?: FloatFilter<"WorkflowNode"> | number
    positionY?: FloatFilter<"WorkflowNode"> | number
    config?: JsonFilter<"WorkflowNode">
    orderIndex?: IntFilter<"WorkflowNode"> | number
    workflow?: XOR<WorkflowScalarRelationFilter, WorkflowWhereInput>
  }, "id">

  export type WorkflowNodeOrderByWithAggregationInput = {
    id?: SortOrder
    workflowId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    positionX?: SortOrder
    positionY?: SortOrder
    config?: SortOrder
    orderIndex?: SortOrder
    _count?: WorkflowNodeCountOrderByAggregateInput
    _avg?: WorkflowNodeAvgOrderByAggregateInput
    _max?: WorkflowNodeMaxOrderByAggregateInput
    _min?: WorkflowNodeMinOrderByAggregateInput
    _sum?: WorkflowNodeSumOrderByAggregateInput
  }

  export type WorkflowNodeScalarWhereWithAggregatesInput = {
    AND?: WorkflowNodeScalarWhereWithAggregatesInput | WorkflowNodeScalarWhereWithAggregatesInput[]
    OR?: WorkflowNodeScalarWhereWithAggregatesInput[]
    NOT?: WorkflowNodeScalarWhereWithAggregatesInput | WorkflowNodeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkflowNode"> | string
    workflowId?: StringWithAggregatesFilter<"WorkflowNode"> | string
    type?: EnumWorkflowNodeTypeWithAggregatesFilter<"WorkflowNode"> | $Enums.WorkflowNodeType
    name?: StringWithAggregatesFilter<"WorkflowNode"> | string
    positionX?: FloatWithAggregatesFilter<"WorkflowNode"> | number
    positionY?: FloatWithAggregatesFilter<"WorkflowNode"> | number
    config?: JsonWithAggregatesFilter<"WorkflowNode">
    orderIndex?: IntWithAggregatesFilter<"WorkflowNode"> | number
  }

  export type WorkflowEdgeWhereInput = {
    AND?: WorkflowEdgeWhereInput | WorkflowEdgeWhereInput[]
    OR?: WorkflowEdgeWhereInput[]
    NOT?: WorkflowEdgeWhereInput | WorkflowEdgeWhereInput[]
    id?: StringFilter<"WorkflowEdge"> | string
    workflowId?: StringFilter<"WorkflowEdge"> | string
    sourceNodeId?: StringFilter<"WorkflowEdge"> | string
    targetNodeId?: StringFilter<"WorkflowEdge"> | string
    label?: EnumWorkflowEdgeLabelFilter<"WorkflowEdge"> | $Enums.WorkflowEdgeLabel
    workflow?: XOR<WorkflowScalarRelationFilter, WorkflowWhereInput>
  }

  export type WorkflowEdgeOrderByWithRelationInput = {
    id?: SortOrder
    workflowId?: SortOrder
    sourceNodeId?: SortOrder
    targetNodeId?: SortOrder
    label?: SortOrder
    workflow?: WorkflowOrderByWithRelationInput
  }

  export type WorkflowEdgeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkflowEdgeWhereInput | WorkflowEdgeWhereInput[]
    OR?: WorkflowEdgeWhereInput[]
    NOT?: WorkflowEdgeWhereInput | WorkflowEdgeWhereInput[]
    workflowId?: StringFilter<"WorkflowEdge"> | string
    sourceNodeId?: StringFilter<"WorkflowEdge"> | string
    targetNodeId?: StringFilter<"WorkflowEdge"> | string
    label?: EnumWorkflowEdgeLabelFilter<"WorkflowEdge"> | $Enums.WorkflowEdgeLabel
    workflow?: XOR<WorkflowScalarRelationFilter, WorkflowWhereInput>
  }, "id">

  export type WorkflowEdgeOrderByWithAggregationInput = {
    id?: SortOrder
    workflowId?: SortOrder
    sourceNodeId?: SortOrder
    targetNodeId?: SortOrder
    label?: SortOrder
    _count?: WorkflowEdgeCountOrderByAggregateInput
    _max?: WorkflowEdgeMaxOrderByAggregateInput
    _min?: WorkflowEdgeMinOrderByAggregateInput
  }

  export type WorkflowEdgeScalarWhereWithAggregatesInput = {
    AND?: WorkflowEdgeScalarWhereWithAggregatesInput | WorkflowEdgeScalarWhereWithAggregatesInput[]
    OR?: WorkflowEdgeScalarWhereWithAggregatesInput[]
    NOT?: WorkflowEdgeScalarWhereWithAggregatesInput | WorkflowEdgeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkflowEdge"> | string
    workflowId?: StringWithAggregatesFilter<"WorkflowEdge"> | string
    sourceNodeId?: StringWithAggregatesFilter<"WorkflowEdge"> | string
    targetNodeId?: StringWithAggregatesFilter<"WorkflowEdge"> | string
    label?: EnumWorkflowEdgeLabelWithAggregatesFilter<"WorkflowEdge"> | $Enums.WorkflowEdgeLabel
  }

  export type WorkflowExecutionWhereInput = {
    AND?: WorkflowExecutionWhereInput | WorkflowExecutionWhereInput[]
    OR?: WorkflowExecutionWhereInput[]
    NOT?: WorkflowExecutionWhereInput | WorkflowExecutionWhereInput[]
    id?: StringFilter<"WorkflowExecution"> | string
    workflowId?: StringFilter<"WorkflowExecution"> | string
    userId?: StringNullableFilter<"WorkflowExecution"> | string | null
    status?: EnumExecutionStatusFilter<"WorkflowExecution"> | $Enums.ExecutionStatus
    logs?: JsonFilter<"WorkflowExecution">
    startedAt?: DateTimeFilter<"WorkflowExecution"> | Date | string
    finishedAt?: DateTimeNullableFilter<"WorkflowExecution"> | Date | string | null
    workflow?: XOR<WorkflowScalarRelationFilter, WorkflowWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type WorkflowExecutionOrderByWithRelationInput = {
    id?: SortOrder
    workflowId?: SortOrder
    userId?: SortOrderInput | SortOrder
    status?: SortOrder
    logs?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrderInput | SortOrder
    workflow?: WorkflowOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type WorkflowExecutionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkflowExecutionWhereInput | WorkflowExecutionWhereInput[]
    OR?: WorkflowExecutionWhereInput[]
    NOT?: WorkflowExecutionWhereInput | WorkflowExecutionWhereInput[]
    workflowId?: StringFilter<"WorkflowExecution"> | string
    userId?: StringNullableFilter<"WorkflowExecution"> | string | null
    status?: EnumExecutionStatusFilter<"WorkflowExecution"> | $Enums.ExecutionStatus
    logs?: JsonFilter<"WorkflowExecution">
    startedAt?: DateTimeFilter<"WorkflowExecution"> | Date | string
    finishedAt?: DateTimeNullableFilter<"WorkflowExecution"> | Date | string | null
    workflow?: XOR<WorkflowScalarRelationFilter, WorkflowWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type WorkflowExecutionOrderByWithAggregationInput = {
    id?: SortOrder
    workflowId?: SortOrder
    userId?: SortOrderInput | SortOrder
    status?: SortOrder
    logs?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrderInput | SortOrder
    _count?: WorkflowExecutionCountOrderByAggregateInput
    _max?: WorkflowExecutionMaxOrderByAggregateInput
    _min?: WorkflowExecutionMinOrderByAggregateInput
  }

  export type WorkflowExecutionScalarWhereWithAggregatesInput = {
    AND?: WorkflowExecutionScalarWhereWithAggregatesInput | WorkflowExecutionScalarWhereWithAggregatesInput[]
    OR?: WorkflowExecutionScalarWhereWithAggregatesInput[]
    NOT?: WorkflowExecutionScalarWhereWithAggregatesInput | WorkflowExecutionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkflowExecution"> | string
    workflowId?: StringWithAggregatesFilter<"WorkflowExecution"> | string
    userId?: StringNullableWithAggregatesFilter<"WorkflowExecution"> | string | null
    status?: EnumExecutionStatusWithAggregatesFilter<"WorkflowExecution"> | $Enums.ExecutionStatus
    logs?: JsonWithAggregatesFilter<"WorkflowExecution">
    startedAt?: DateTimeWithAggregatesFilter<"WorkflowExecution"> | Date | string
    finishedAt?: DateTimeNullableWithAggregatesFilter<"WorkflowExecution"> | Date | string | null
  }

  export type WorkflowVersionWhereInput = {
    AND?: WorkflowVersionWhereInput | WorkflowVersionWhereInput[]
    OR?: WorkflowVersionWhereInput[]
    NOT?: WorkflowVersionWhereInput | WorkflowVersionWhereInput[]
    id?: StringFilter<"WorkflowVersion"> | string
    workflowId?: StringFilter<"WorkflowVersion"> | string
    versionNumber?: IntFilter<"WorkflowVersion"> | number
    snapshot?: JsonFilter<"WorkflowVersion">
    createdAt?: DateTimeFilter<"WorkflowVersion"> | Date | string
    workflow?: XOR<WorkflowScalarRelationFilter, WorkflowWhereInput>
  }

  export type WorkflowVersionOrderByWithRelationInput = {
    id?: SortOrder
    workflowId?: SortOrder
    versionNumber?: SortOrder
    snapshot?: SortOrder
    createdAt?: SortOrder
    workflow?: WorkflowOrderByWithRelationInput
  }

  export type WorkflowVersionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkflowVersionWhereInput | WorkflowVersionWhereInput[]
    OR?: WorkflowVersionWhereInput[]
    NOT?: WorkflowVersionWhereInput | WorkflowVersionWhereInput[]
    workflowId?: StringFilter<"WorkflowVersion"> | string
    versionNumber?: IntFilter<"WorkflowVersion"> | number
    snapshot?: JsonFilter<"WorkflowVersion">
    createdAt?: DateTimeFilter<"WorkflowVersion"> | Date | string
    workflow?: XOR<WorkflowScalarRelationFilter, WorkflowWhereInput>
  }, "id">

  export type WorkflowVersionOrderByWithAggregationInput = {
    id?: SortOrder
    workflowId?: SortOrder
    versionNumber?: SortOrder
    snapshot?: SortOrder
    createdAt?: SortOrder
    _count?: WorkflowVersionCountOrderByAggregateInput
    _avg?: WorkflowVersionAvgOrderByAggregateInput
    _max?: WorkflowVersionMaxOrderByAggregateInput
    _min?: WorkflowVersionMinOrderByAggregateInput
    _sum?: WorkflowVersionSumOrderByAggregateInput
  }

  export type WorkflowVersionScalarWhereWithAggregatesInput = {
    AND?: WorkflowVersionScalarWhereWithAggregatesInput | WorkflowVersionScalarWhereWithAggregatesInput[]
    OR?: WorkflowVersionScalarWhereWithAggregatesInput[]
    NOT?: WorkflowVersionScalarWhereWithAggregatesInput | WorkflowVersionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkflowVersion"> | string
    workflowId?: StringWithAggregatesFilter<"WorkflowVersion"> | string
    versionNumber?: IntWithAggregatesFilter<"WorkflowVersion"> | number
    snapshot?: JsonWithAggregatesFilter<"WorkflowVersion">
    createdAt?: DateTimeWithAggregatesFilter<"WorkflowVersion"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    walletAdress: string
    email?: string | null
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    Workflow?: WorkflowCreateNestedManyWithoutUserInput
    WorkflowExecution?: WorkflowExecutionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    walletAdress: string
    email?: string | null
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    Workflow?: WorkflowUncheckedCreateNestedManyWithoutUserInput
    WorkflowExecution?: WorkflowExecutionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAdress?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Workflow?: WorkflowUpdateManyWithoutUserNestedInput
    WorkflowExecution?: WorkflowExecutionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAdress?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Workflow?: WorkflowUncheckedUpdateManyWithoutUserNestedInput
    WorkflowExecution?: WorkflowExecutionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    walletAdress: string
    email?: string | null
    name?: string | null
    image?: string | null
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAdress?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAdress?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowCreateInput = {
    id?: string
    name: string
    description: string
    isPublic?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWorkflowInput
    WorkflowNode?: WorkflowNodeCreateNestedManyWithoutWorkflowInput
    WorkflowEdge?: WorkflowEdgeCreateNestedManyWithoutWorkflowInput
    WorkflowExecution?: WorkflowExecutionCreateNestedManyWithoutWorkflowInput
    WorkflowVersion?: WorkflowVersionCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    userId: string
    isPublic?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    WorkflowNode?: WorkflowNodeUncheckedCreateNestedManyWithoutWorkflowInput
    WorkflowEdge?: WorkflowEdgeUncheckedCreateNestedManyWithoutWorkflowInput
    WorkflowExecution?: WorkflowExecutionUncheckedCreateNestedManyWithoutWorkflowInput
    WorkflowVersion?: WorkflowVersionUncheckedCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWorkflowNestedInput
    WorkflowNode?: WorkflowNodeUpdateManyWithoutWorkflowNestedInput
    WorkflowEdge?: WorkflowEdgeUpdateManyWithoutWorkflowNestedInput
    WorkflowExecution?: WorkflowExecutionUpdateManyWithoutWorkflowNestedInput
    WorkflowVersion?: WorkflowVersionUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    WorkflowNode?: WorkflowNodeUncheckedUpdateManyWithoutWorkflowNestedInput
    WorkflowEdge?: WorkflowEdgeUncheckedUpdateManyWithoutWorkflowNestedInput
    WorkflowExecution?: WorkflowExecutionUncheckedUpdateManyWithoutWorkflowNestedInput
    WorkflowVersion?: WorkflowVersionUncheckedUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowCreateManyInput = {
    id?: string
    name: string
    description: string
    userId: string
    isPublic?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkflowUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowNodeCreateInput = {
    id?: string
    type: $Enums.WorkflowNodeType
    name: string
    positionX: number
    positionY: number
    config: JsonNullValueInput | InputJsonValue
    orderIndex?: number
    workflow: WorkflowCreateNestedOneWithoutWorkflowNodeInput
  }

  export type WorkflowNodeUncheckedCreateInput = {
    id?: string
    workflowId: string
    type: $Enums.WorkflowNodeType
    name: string
    positionX: number
    positionY: number
    config: JsonNullValueInput | InputJsonValue
    orderIndex?: number
  }

  export type WorkflowNodeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumWorkflowNodeTypeFieldUpdateOperationsInput | $Enums.WorkflowNodeType
    name?: StringFieldUpdateOperationsInput | string
    positionX?: FloatFieldUpdateOperationsInput | number
    positionY?: FloatFieldUpdateOperationsInput | number
    config?: JsonNullValueInput | InputJsonValue
    orderIndex?: IntFieldUpdateOperationsInput | number
    workflow?: WorkflowUpdateOneRequiredWithoutWorkflowNodeNestedInput
  }

  export type WorkflowNodeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    type?: EnumWorkflowNodeTypeFieldUpdateOperationsInput | $Enums.WorkflowNodeType
    name?: StringFieldUpdateOperationsInput | string
    positionX?: FloatFieldUpdateOperationsInput | number
    positionY?: FloatFieldUpdateOperationsInput | number
    config?: JsonNullValueInput | InputJsonValue
    orderIndex?: IntFieldUpdateOperationsInput | number
  }

  export type WorkflowNodeCreateManyInput = {
    id?: string
    workflowId: string
    type: $Enums.WorkflowNodeType
    name: string
    positionX: number
    positionY: number
    config: JsonNullValueInput | InputJsonValue
    orderIndex?: number
  }

  export type WorkflowNodeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumWorkflowNodeTypeFieldUpdateOperationsInput | $Enums.WorkflowNodeType
    name?: StringFieldUpdateOperationsInput | string
    positionX?: FloatFieldUpdateOperationsInput | number
    positionY?: FloatFieldUpdateOperationsInput | number
    config?: JsonNullValueInput | InputJsonValue
    orderIndex?: IntFieldUpdateOperationsInput | number
  }

  export type WorkflowNodeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    type?: EnumWorkflowNodeTypeFieldUpdateOperationsInput | $Enums.WorkflowNodeType
    name?: StringFieldUpdateOperationsInput | string
    positionX?: FloatFieldUpdateOperationsInput | number
    positionY?: FloatFieldUpdateOperationsInput | number
    config?: JsonNullValueInput | InputJsonValue
    orderIndex?: IntFieldUpdateOperationsInput | number
  }

  export type WorkflowEdgeCreateInput = {
    id?: string
    sourceNodeId: string
    targetNodeId: string
    label: $Enums.WorkflowEdgeLabel
    workflow: WorkflowCreateNestedOneWithoutWorkflowEdgeInput
  }

  export type WorkflowEdgeUncheckedCreateInput = {
    id?: string
    workflowId: string
    sourceNodeId: string
    targetNodeId: string
    label: $Enums.WorkflowEdgeLabel
  }

  export type WorkflowEdgeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceNodeId?: StringFieldUpdateOperationsInput | string
    targetNodeId?: StringFieldUpdateOperationsInput | string
    label?: EnumWorkflowEdgeLabelFieldUpdateOperationsInput | $Enums.WorkflowEdgeLabel
    workflow?: WorkflowUpdateOneRequiredWithoutWorkflowEdgeNestedInput
  }

  export type WorkflowEdgeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    sourceNodeId?: StringFieldUpdateOperationsInput | string
    targetNodeId?: StringFieldUpdateOperationsInput | string
    label?: EnumWorkflowEdgeLabelFieldUpdateOperationsInput | $Enums.WorkflowEdgeLabel
  }

  export type WorkflowEdgeCreateManyInput = {
    id?: string
    workflowId: string
    sourceNodeId: string
    targetNodeId: string
    label: $Enums.WorkflowEdgeLabel
  }

  export type WorkflowEdgeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceNodeId?: StringFieldUpdateOperationsInput | string
    targetNodeId?: StringFieldUpdateOperationsInput | string
    label?: EnumWorkflowEdgeLabelFieldUpdateOperationsInput | $Enums.WorkflowEdgeLabel
  }

  export type WorkflowEdgeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    sourceNodeId?: StringFieldUpdateOperationsInput | string
    targetNodeId?: StringFieldUpdateOperationsInput | string
    label?: EnumWorkflowEdgeLabelFieldUpdateOperationsInput | $Enums.WorkflowEdgeLabel
  }

  export type WorkflowExecutionCreateInput = {
    id?: string
    status?: $Enums.ExecutionStatus
    logs: JsonNullValueInput | InputJsonValue
    startedAt?: Date | string
    finishedAt?: Date | string | null
    workflow: WorkflowCreateNestedOneWithoutWorkflowExecutionInput
    user?: UserCreateNestedOneWithoutWorkflowExecutionInput
  }

  export type WorkflowExecutionUncheckedCreateInput = {
    id?: string
    workflowId: string
    userId?: string | null
    status?: $Enums.ExecutionStatus
    logs: JsonNullValueInput | InputJsonValue
    startedAt?: Date | string
    finishedAt?: Date | string | null
  }

  export type WorkflowExecutionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumExecutionStatusFieldUpdateOperationsInput | $Enums.ExecutionStatus
    logs?: JsonNullValueInput | InputJsonValue
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workflow?: WorkflowUpdateOneRequiredWithoutWorkflowExecutionNestedInput
    user?: UserUpdateOneWithoutWorkflowExecutionNestedInput
  }

  export type WorkflowExecutionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumExecutionStatusFieldUpdateOperationsInput | $Enums.ExecutionStatus
    logs?: JsonNullValueInput | InputJsonValue
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WorkflowExecutionCreateManyInput = {
    id?: string
    workflowId: string
    userId?: string | null
    status?: $Enums.ExecutionStatus
    logs: JsonNullValueInput | InputJsonValue
    startedAt?: Date | string
    finishedAt?: Date | string | null
  }

  export type WorkflowExecutionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumExecutionStatusFieldUpdateOperationsInput | $Enums.ExecutionStatus
    logs?: JsonNullValueInput | InputJsonValue
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WorkflowExecutionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumExecutionStatusFieldUpdateOperationsInput | $Enums.ExecutionStatus
    logs?: JsonNullValueInput | InputJsonValue
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WorkflowVersionCreateInput = {
    id?: string
    versionNumber: number
    snapshot: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    workflow: WorkflowCreateNestedOneWithoutWorkflowVersionInput
  }

  export type WorkflowVersionUncheckedCreateInput = {
    id?: string
    workflowId: string
    versionNumber: number
    snapshot: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type WorkflowVersionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    versionNumber?: IntFieldUpdateOperationsInput | number
    snapshot?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workflow?: WorkflowUpdateOneRequiredWithoutWorkflowVersionNestedInput
  }

  export type WorkflowVersionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    versionNumber?: IntFieldUpdateOperationsInput | number
    snapshot?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowVersionCreateManyInput = {
    id?: string
    workflowId: string
    versionNumber: number
    snapshot: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type WorkflowVersionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    versionNumber?: IntFieldUpdateOperationsInput | number
    snapshot?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowVersionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    versionNumber?: IntFieldUpdateOperationsInput | number
    snapshot?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type WorkflowListRelationFilter = {
    every?: WorkflowWhereInput
    some?: WorkflowWhereInput
    none?: WorkflowWhereInput
  }

  export type WorkflowExecutionListRelationFilter = {
    every?: WorkflowExecutionWhereInput
    some?: WorkflowExecutionWhereInput
    none?: WorkflowExecutionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type WorkflowOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkflowExecutionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    walletAdress?: SortOrder
    email?: SortOrder
    name?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    walletAdress?: SortOrder
    email?: SortOrder
    name?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    walletAdress?: SortOrder
    email?: SortOrder
    name?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type WorkflowNodeListRelationFilter = {
    every?: WorkflowNodeWhereInput
    some?: WorkflowNodeWhereInput
    none?: WorkflowNodeWhereInput
  }

  export type WorkflowEdgeListRelationFilter = {
    every?: WorkflowEdgeWhereInput
    some?: WorkflowEdgeWhereInput
    none?: WorkflowEdgeWhereInput
  }

  export type WorkflowVersionListRelationFilter = {
    every?: WorkflowVersionWhereInput
    some?: WorkflowVersionWhereInput
    none?: WorkflowVersionWhereInput
  }

  export type WorkflowNodeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkflowEdgeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkflowVersionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkflowCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    isPublic?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkflowMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    isPublic?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkflowMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    isPublic?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumWorkflowNodeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkflowNodeType | EnumWorkflowNodeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.WorkflowNodeType[] | ListEnumWorkflowNodeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkflowNodeType[] | ListEnumWorkflowNodeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkflowNodeTypeFilter<$PrismaModel> | $Enums.WorkflowNodeType
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type WorkflowScalarRelationFilter = {
    is?: WorkflowWhereInput
    isNot?: WorkflowWhereInput
  }

  export type WorkflowNodeCountOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    positionX?: SortOrder
    positionY?: SortOrder
    config?: SortOrder
    orderIndex?: SortOrder
  }

  export type WorkflowNodeAvgOrderByAggregateInput = {
    positionX?: SortOrder
    positionY?: SortOrder
    orderIndex?: SortOrder
  }

  export type WorkflowNodeMaxOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    positionX?: SortOrder
    positionY?: SortOrder
    orderIndex?: SortOrder
  }

  export type WorkflowNodeMinOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    positionX?: SortOrder
    positionY?: SortOrder
    orderIndex?: SortOrder
  }

  export type WorkflowNodeSumOrderByAggregateInput = {
    positionX?: SortOrder
    positionY?: SortOrder
    orderIndex?: SortOrder
  }

  export type EnumWorkflowNodeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkflowNodeType | EnumWorkflowNodeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.WorkflowNodeType[] | ListEnumWorkflowNodeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkflowNodeType[] | ListEnumWorkflowNodeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkflowNodeTypeWithAggregatesFilter<$PrismaModel> | $Enums.WorkflowNodeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWorkflowNodeTypeFilter<$PrismaModel>
    _max?: NestedEnumWorkflowNodeTypeFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumWorkflowEdgeLabelFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkflowEdgeLabel | EnumWorkflowEdgeLabelFieldRefInput<$PrismaModel>
    in?: $Enums.WorkflowEdgeLabel[] | ListEnumWorkflowEdgeLabelFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkflowEdgeLabel[] | ListEnumWorkflowEdgeLabelFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkflowEdgeLabelFilter<$PrismaModel> | $Enums.WorkflowEdgeLabel
  }

  export type WorkflowEdgeCountOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    sourceNodeId?: SortOrder
    targetNodeId?: SortOrder
    label?: SortOrder
  }

  export type WorkflowEdgeMaxOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    sourceNodeId?: SortOrder
    targetNodeId?: SortOrder
    label?: SortOrder
  }

  export type WorkflowEdgeMinOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    sourceNodeId?: SortOrder
    targetNodeId?: SortOrder
    label?: SortOrder
  }

  export type EnumWorkflowEdgeLabelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkflowEdgeLabel | EnumWorkflowEdgeLabelFieldRefInput<$PrismaModel>
    in?: $Enums.WorkflowEdgeLabel[] | ListEnumWorkflowEdgeLabelFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkflowEdgeLabel[] | ListEnumWorkflowEdgeLabelFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkflowEdgeLabelWithAggregatesFilter<$PrismaModel> | $Enums.WorkflowEdgeLabel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWorkflowEdgeLabelFilter<$PrismaModel>
    _max?: NestedEnumWorkflowEdgeLabelFilter<$PrismaModel>
  }

  export type EnumExecutionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ExecutionStatus | EnumExecutionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ExecutionStatus[] | ListEnumExecutionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExecutionStatus[] | ListEnumExecutionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumExecutionStatusFilter<$PrismaModel> | $Enums.ExecutionStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type WorkflowExecutionCountOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    logs?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
  }

  export type WorkflowExecutionMaxOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
  }

  export type WorkflowExecutionMinOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
  }

  export type EnumExecutionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExecutionStatus | EnumExecutionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ExecutionStatus[] | ListEnumExecutionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExecutionStatus[] | ListEnumExecutionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumExecutionStatusWithAggregatesFilter<$PrismaModel> | $Enums.ExecutionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExecutionStatusFilter<$PrismaModel>
    _max?: NestedEnumExecutionStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type WorkflowVersionCountOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    versionNumber?: SortOrder
    snapshot?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkflowVersionAvgOrderByAggregateInput = {
    versionNumber?: SortOrder
  }

  export type WorkflowVersionMaxOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    versionNumber?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkflowVersionMinOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    versionNumber?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkflowVersionSumOrderByAggregateInput = {
    versionNumber?: SortOrder
  }

  export type WorkflowCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkflowCreateWithoutUserInput, WorkflowUncheckedCreateWithoutUserInput> | WorkflowCreateWithoutUserInput[] | WorkflowUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkflowCreateOrConnectWithoutUserInput | WorkflowCreateOrConnectWithoutUserInput[]
    createMany?: WorkflowCreateManyUserInputEnvelope
    connect?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
  }

  export type WorkflowExecutionCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkflowExecutionCreateWithoutUserInput, WorkflowExecutionUncheckedCreateWithoutUserInput> | WorkflowExecutionCreateWithoutUserInput[] | WorkflowExecutionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkflowExecutionCreateOrConnectWithoutUserInput | WorkflowExecutionCreateOrConnectWithoutUserInput[]
    createMany?: WorkflowExecutionCreateManyUserInputEnvelope
    connect?: WorkflowExecutionWhereUniqueInput | WorkflowExecutionWhereUniqueInput[]
  }

  export type WorkflowUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkflowCreateWithoutUserInput, WorkflowUncheckedCreateWithoutUserInput> | WorkflowCreateWithoutUserInput[] | WorkflowUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkflowCreateOrConnectWithoutUserInput | WorkflowCreateOrConnectWithoutUserInput[]
    createMany?: WorkflowCreateManyUserInputEnvelope
    connect?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
  }

  export type WorkflowExecutionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkflowExecutionCreateWithoutUserInput, WorkflowExecutionUncheckedCreateWithoutUserInput> | WorkflowExecutionCreateWithoutUserInput[] | WorkflowExecutionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkflowExecutionCreateOrConnectWithoutUserInput | WorkflowExecutionCreateOrConnectWithoutUserInput[]
    createMany?: WorkflowExecutionCreateManyUserInputEnvelope
    connect?: WorkflowExecutionWhereUniqueInput | WorkflowExecutionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type WorkflowUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkflowCreateWithoutUserInput, WorkflowUncheckedCreateWithoutUserInput> | WorkflowCreateWithoutUserInput[] | WorkflowUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkflowCreateOrConnectWithoutUserInput | WorkflowCreateOrConnectWithoutUserInput[]
    upsert?: WorkflowUpsertWithWhereUniqueWithoutUserInput | WorkflowUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkflowCreateManyUserInputEnvelope
    set?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    disconnect?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    delete?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    connect?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    update?: WorkflowUpdateWithWhereUniqueWithoutUserInput | WorkflowUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkflowUpdateManyWithWhereWithoutUserInput | WorkflowUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkflowScalarWhereInput | WorkflowScalarWhereInput[]
  }

  export type WorkflowExecutionUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkflowExecutionCreateWithoutUserInput, WorkflowExecutionUncheckedCreateWithoutUserInput> | WorkflowExecutionCreateWithoutUserInput[] | WorkflowExecutionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkflowExecutionCreateOrConnectWithoutUserInput | WorkflowExecutionCreateOrConnectWithoutUserInput[]
    upsert?: WorkflowExecutionUpsertWithWhereUniqueWithoutUserInput | WorkflowExecutionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkflowExecutionCreateManyUserInputEnvelope
    set?: WorkflowExecutionWhereUniqueInput | WorkflowExecutionWhereUniqueInput[]
    disconnect?: WorkflowExecutionWhereUniqueInput | WorkflowExecutionWhereUniqueInput[]
    delete?: WorkflowExecutionWhereUniqueInput | WorkflowExecutionWhereUniqueInput[]
    connect?: WorkflowExecutionWhereUniqueInput | WorkflowExecutionWhereUniqueInput[]
    update?: WorkflowExecutionUpdateWithWhereUniqueWithoutUserInput | WorkflowExecutionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkflowExecutionUpdateManyWithWhereWithoutUserInput | WorkflowExecutionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkflowExecutionScalarWhereInput | WorkflowExecutionScalarWhereInput[]
  }

  export type WorkflowUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkflowCreateWithoutUserInput, WorkflowUncheckedCreateWithoutUserInput> | WorkflowCreateWithoutUserInput[] | WorkflowUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkflowCreateOrConnectWithoutUserInput | WorkflowCreateOrConnectWithoutUserInput[]
    upsert?: WorkflowUpsertWithWhereUniqueWithoutUserInput | WorkflowUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkflowCreateManyUserInputEnvelope
    set?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    disconnect?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    delete?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    connect?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    update?: WorkflowUpdateWithWhereUniqueWithoutUserInput | WorkflowUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkflowUpdateManyWithWhereWithoutUserInput | WorkflowUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkflowScalarWhereInput | WorkflowScalarWhereInput[]
  }

  export type WorkflowExecutionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkflowExecutionCreateWithoutUserInput, WorkflowExecutionUncheckedCreateWithoutUserInput> | WorkflowExecutionCreateWithoutUserInput[] | WorkflowExecutionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkflowExecutionCreateOrConnectWithoutUserInput | WorkflowExecutionCreateOrConnectWithoutUserInput[]
    upsert?: WorkflowExecutionUpsertWithWhereUniqueWithoutUserInput | WorkflowExecutionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkflowExecutionCreateManyUserInputEnvelope
    set?: WorkflowExecutionWhereUniqueInput | WorkflowExecutionWhereUniqueInput[]
    disconnect?: WorkflowExecutionWhereUniqueInput | WorkflowExecutionWhereUniqueInput[]
    delete?: WorkflowExecutionWhereUniqueInput | WorkflowExecutionWhereUniqueInput[]
    connect?: WorkflowExecutionWhereUniqueInput | WorkflowExecutionWhereUniqueInput[]
    update?: WorkflowExecutionUpdateWithWhereUniqueWithoutUserInput | WorkflowExecutionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkflowExecutionUpdateManyWithWhereWithoutUserInput | WorkflowExecutionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkflowExecutionScalarWhereInput | WorkflowExecutionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutWorkflowInput = {
    create?: XOR<UserCreateWithoutWorkflowInput, UserUncheckedCreateWithoutWorkflowInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkflowInput
    connect?: UserWhereUniqueInput
  }

  export type WorkflowNodeCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<WorkflowNodeCreateWithoutWorkflowInput, WorkflowNodeUncheckedCreateWithoutWorkflowInput> | WorkflowNodeCreateWithoutWorkflowInput[] | WorkflowNodeUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: WorkflowNodeCreateOrConnectWithoutWorkflowInput | WorkflowNodeCreateOrConnectWithoutWorkflowInput[]
    createMany?: WorkflowNodeCreateManyWorkflowInputEnvelope
    connect?: WorkflowNodeWhereUniqueInput | WorkflowNodeWhereUniqueInput[]
  }

  export type WorkflowEdgeCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<WorkflowEdgeCreateWithoutWorkflowInput, WorkflowEdgeUncheckedCreateWithoutWorkflowInput> | WorkflowEdgeCreateWithoutWorkflowInput[] | WorkflowEdgeUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: WorkflowEdgeCreateOrConnectWithoutWorkflowInput | WorkflowEdgeCreateOrConnectWithoutWorkflowInput[]
    createMany?: WorkflowEdgeCreateManyWorkflowInputEnvelope
    connect?: WorkflowEdgeWhereUniqueInput | WorkflowEdgeWhereUniqueInput[]
  }

  export type WorkflowExecutionCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<WorkflowExecutionCreateWithoutWorkflowInput, WorkflowExecutionUncheckedCreateWithoutWorkflowInput> | WorkflowExecutionCreateWithoutWorkflowInput[] | WorkflowExecutionUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: WorkflowExecutionCreateOrConnectWithoutWorkflowInput | WorkflowExecutionCreateOrConnectWithoutWorkflowInput[]
    createMany?: WorkflowExecutionCreateManyWorkflowInputEnvelope
    connect?: WorkflowExecutionWhereUniqueInput | WorkflowExecutionWhereUniqueInput[]
  }

  export type WorkflowVersionCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<WorkflowVersionCreateWithoutWorkflowInput, WorkflowVersionUncheckedCreateWithoutWorkflowInput> | WorkflowVersionCreateWithoutWorkflowInput[] | WorkflowVersionUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: WorkflowVersionCreateOrConnectWithoutWorkflowInput | WorkflowVersionCreateOrConnectWithoutWorkflowInput[]
    createMany?: WorkflowVersionCreateManyWorkflowInputEnvelope
    connect?: WorkflowVersionWhereUniqueInput | WorkflowVersionWhereUniqueInput[]
  }

  export type WorkflowNodeUncheckedCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<WorkflowNodeCreateWithoutWorkflowInput, WorkflowNodeUncheckedCreateWithoutWorkflowInput> | WorkflowNodeCreateWithoutWorkflowInput[] | WorkflowNodeUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: WorkflowNodeCreateOrConnectWithoutWorkflowInput | WorkflowNodeCreateOrConnectWithoutWorkflowInput[]
    createMany?: WorkflowNodeCreateManyWorkflowInputEnvelope
    connect?: WorkflowNodeWhereUniqueInput | WorkflowNodeWhereUniqueInput[]
  }

  export type WorkflowEdgeUncheckedCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<WorkflowEdgeCreateWithoutWorkflowInput, WorkflowEdgeUncheckedCreateWithoutWorkflowInput> | WorkflowEdgeCreateWithoutWorkflowInput[] | WorkflowEdgeUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: WorkflowEdgeCreateOrConnectWithoutWorkflowInput | WorkflowEdgeCreateOrConnectWithoutWorkflowInput[]
    createMany?: WorkflowEdgeCreateManyWorkflowInputEnvelope
    connect?: WorkflowEdgeWhereUniqueInput | WorkflowEdgeWhereUniqueInput[]
  }

  export type WorkflowExecutionUncheckedCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<WorkflowExecutionCreateWithoutWorkflowInput, WorkflowExecutionUncheckedCreateWithoutWorkflowInput> | WorkflowExecutionCreateWithoutWorkflowInput[] | WorkflowExecutionUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: WorkflowExecutionCreateOrConnectWithoutWorkflowInput | WorkflowExecutionCreateOrConnectWithoutWorkflowInput[]
    createMany?: WorkflowExecutionCreateManyWorkflowInputEnvelope
    connect?: WorkflowExecutionWhereUniqueInput | WorkflowExecutionWhereUniqueInput[]
  }

  export type WorkflowVersionUncheckedCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<WorkflowVersionCreateWithoutWorkflowInput, WorkflowVersionUncheckedCreateWithoutWorkflowInput> | WorkflowVersionCreateWithoutWorkflowInput[] | WorkflowVersionUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: WorkflowVersionCreateOrConnectWithoutWorkflowInput | WorkflowVersionCreateOrConnectWithoutWorkflowInput[]
    createMany?: WorkflowVersionCreateManyWorkflowInputEnvelope
    connect?: WorkflowVersionWhereUniqueInput | WorkflowVersionWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutWorkflowNestedInput = {
    create?: XOR<UserCreateWithoutWorkflowInput, UserUncheckedCreateWithoutWorkflowInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkflowInput
    upsert?: UserUpsertWithoutWorkflowInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWorkflowInput, UserUpdateWithoutWorkflowInput>, UserUncheckedUpdateWithoutWorkflowInput>
  }

  export type WorkflowNodeUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<WorkflowNodeCreateWithoutWorkflowInput, WorkflowNodeUncheckedCreateWithoutWorkflowInput> | WorkflowNodeCreateWithoutWorkflowInput[] | WorkflowNodeUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: WorkflowNodeCreateOrConnectWithoutWorkflowInput | WorkflowNodeCreateOrConnectWithoutWorkflowInput[]
    upsert?: WorkflowNodeUpsertWithWhereUniqueWithoutWorkflowInput | WorkflowNodeUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: WorkflowNodeCreateManyWorkflowInputEnvelope
    set?: WorkflowNodeWhereUniqueInput | WorkflowNodeWhereUniqueInput[]
    disconnect?: WorkflowNodeWhereUniqueInput | WorkflowNodeWhereUniqueInput[]
    delete?: WorkflowNodeWhereUniqueInput | WorkflowNodeWhereUniqueInput[]
    connect?: WorkflowNodeWhereUniqueInput | WorkflowNodeWhereUniqueInput[]
    update?: WorkflowNodeUpdateWithWhereUniqueWithoutWorkflowInput | WorkflowNodeUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: WorkflowNodeUpdateManyWithWhereWithoutWorkflowInput | WorkflowNodeUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: WorkflowNodeScalarWhereInput | WorkflowNodeScalarWhereInput[]
  }

  export type WorkflowEdgeUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<WorkflowEdgeCreateWithoutWorkflowInput, WorkflowEdgeUncheckedCreateWithoutWorkflowInput> | WorkflowEdgeCreateWithoutWorkflowInput[] | WorkflowEdgeUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: WorkflowEdgeCreateOrConnectWithoutWorkflowInput | WorkflowEdgeCreateOrConnectWithoutWorkflowInput[]
    upsert?: WorkflowEdgeUpsertWithWhereUniqueWithoutWorkflowInput | WorkflowEdgeUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: WorkflowEdgeCreateManyWorkflowInputEnvelope
    set?: WorkflowEdgeWhereUniqueInput | WorkflowEdgeWhereUniqueInput[]
    disconnect?: WorkflowEdgeWhereUniqueInput | WorkflowEdgeWhereUniqueInput[]
    delete?: WorkflowEdgeWhereUniqueInput | WorkflowEdgeWhereUniqueInput[]
    connect?: WorkflowEdgeWhereUniqueInput | WorkflowEdgeWhereUniqueInput[]
    update?: WorkflowEdgeUpdateWithWhereUniqueWithoutWorkflowInput | WorkflowEdgeUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: WorkflowEdgeUpdateManyWithWhereWithoutWorkflowInput | WorkflowEdgeUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: WorkflowEdgeScalarWhereInput | WorkflowEdgeScalarWhereInput[]
  }

  export type WorkflowExecutionUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<WorkflowExecutionCreateWithoutWorkflowInput, WorkflowExecutionUncheckedCreateWithoutWorkflowInput> | WorkflowExecutionCreateWithoutWorkflowInput[] | WorkflowExecutionUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: WorkflowExecutionCreateOrConnectWithoutWorkflowInput | WorkflowExecutionCreateOrConnectWithoutWorkflowInput[]
    upsert?: WorkflowExecutionUpsertWithWhereUniqueWithoutWorkflowInput | WorkflowExecutionUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: WorkflowExecutionCreateManyWorkflowInputEnvelope
    set?: WorkflowExecutionWhereUniqueInput | WorkflowExecutionWhereUniqueInput[]
    disconnect?: WorkflowExecutionWhereUniqueInput | WorkflowExecutionWhereUniqueInput[]
    delete?: WorkflowExecutionWhereUniqueInput | WorkflowExecutionWhereUniqueInput[]
    connect?: WorkflowExecutionWhereUniqueInput | WorkflowExecutionWhereUniqueInput[]
    update?: WorkflowExecutionUpdateWithWhereUniqueWithoutWorkflowInput | WorkflowExecutionUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: WorkflowExecutionUpdateManyWithWhereWithoutWorkflowInput | WorkflowExecutionUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: WorkflowExecutionScalarWhereInput | WorkflowExecutionScalarWhereInput[]
  }

  export type WorkflowVersionUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<WorkflowVersionCreateWithoutWorkflowInput, WorkflowVersionUncheckedCreateWithoutWorkflowInput> | WorkflowVersionCreateWithoutWorkflowInput[] | WorkflowVersionUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: WorkflowVersionCreateOrConnectWithoutWorkflowInput | WorkflowVersionCreateOrConnectWithoutWorkflowInput[]
    upsert?: WorkflowVersionUpsertWithWhereUniqueWithoutWorkflowInput | WorkflowVersionUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: WorkflowVersionCreateManyWorkflowInputEnvelope
    set?: WorkflowVersionWhereUniqueInput | WorkflowVersionWhereUniqueInput[]
    disconnect?: WorkflowVersionWhereUniqueInput | WorkflowVersionWhereUniqueInput[]
    delete?: WorkflowVersionWhereUniqueInput | WorkflowVersionWhereUniqueInput[]
    connect?: WorkflowVersionWhereUniqueInput | WorkflowVersionWhereUniqueInput[]
    update?: WorkflowVersionUpdateWithWhereUniqueWithoutWorkflowInput | WorkflowVersionUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: WorkflowVersionUpdateManyWithWhereWithoutWorkflowInput | WorkflowVersionUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: WorkflowVersionScalarWhereInput | WorkflowVersionScalarWhereInput[]
  }

  export type WorkflowNodeUncheckedUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<WorkflowNodeCreateWithoutWorkflowInput, WorkflowNodeUncheckedCreateWithoutWorkflowInput> | WorkflowNodeCreateWithoutWorkflowInput[] | WorkflowNodeUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: WorkflowNodeCreateOrConnectWithoutWorkflowInput | WorkflowNodeCreateOrConnectWithoutWorkflowInput[]
    upsert?: WorkflowNodeUpsertWithWhereUniqueWithoutWorkflowInput | WorkflowNodeUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: WorkflowNodeCreateManyWorkflowInputEnvelope
    set?: WorkflowNodeWhereUniqueInput | WorkflowNodeWhereUniqueInput[]
    disconnect?: WorkflowNodeWhereUniqueInput | WorkflowNodeWhereUniqueInput[]
    delete?: WorkflowNodeWhereUniqueInput | WorkflowNodeWhereUniqueInput[]
    connect?: WorkflowNodeWhereUniqueInput | WorkflowNodeWhereUniqueInput[]
    update?: WorkflowNodeUpdateWithWhereUniqueWithoutWorkflowInput | WorkflowNodeUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: WorkflowNodeUpdateManyWithWhereWithoutWorkflowInput | WorkflowNodeUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: WorkflowNodeScalarWhereInput | WorkflowNodeScalarWhereInput[]
  }

  export type WorkflowEdgeUncheckedUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<WorkflowEdgeCreateWithoutWorkflowInput, WorkflowEdgeUncheckedCreateWithoutWorkflowInput> | WorkflowEdgeCreateWithoutWorkflowInput[] | WorkflowEdgeUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: WorkflowEdgeCreateOrConnectWithoutWorkflowInput | WorkflowEdgeCreateOrConnectWithoutWorkflowInput[]
    upsert?: WorkflowEdgeUpsertWithWhereUniqueWithoutWorkflowInput | WorkflowEdgeUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: WorkflowEdgeCreateManyWorkflowInputEnvelope
    set?: WorkflowEdgeWhereUniqueInput | WorkflowEdgeWhereUniqueInput[]
    disconnect?: WorkflowEdgeWhereUniqueInput | WorkflowEdgeWhereUniqueInput[]
    delete?: WorkflowEdgeWhereUniqueInput | WorkflowEdgeWhereUniqueInput[]
    connect?: WorkflowEdgeWhereUniqueInput | WorkflowEdgeWhereUniqueInput[]
    update?: WorkflowEdgeUpdateWithWhereUniqueWithoutWorkflowInput | WorkflowEdgeUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: WorkflowEdgeUpdateManyWithWhereWithoutWorkflowInput | WorkflowEdgeUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: WorkflowEdgeScalarWhereInput | WorkflowEdgeScalarWhereInput[]
  }

  export type WorkflowExecutionUncheckedUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<WorkflowExecutionCreateWithoutWorkflowInput, WorkflowExecutionUncheckedCreateWithoutWorkflowInput> | WorkflowExecutionCreateWithoutWorkflowInput[] | WorkflowExecutionUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: WorkflowExecutionCreateOrConnectWithoutWorkflowInput | WorkflowExecutionCreateOrConnectWithoutWorkflowInput[]
    upsert?: WorkflowExecutionUpsertWithWhereUniqueWithoutWorkflowInput | WorkflowExecutionUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: WorkflowExecutionCreateManyWorkflowInputEnvelope
    set?: WorkflowExecutionWhereUniqueInput | WorkflowExecutionWhereUniqueInput[]
    disconnect?: WorkflowExecutionWhereUniqueInput | WorkflowExecutionWhereUniqueInput[]
    delete?: WorkflowExecutionWhereUniqueInput | WorkflowExecutionWhereUniqueInput[]
    connect?: WorkflowExecutionWhereUniqueInput | WorkflowExecutionWhereUniqueInput[]
    update?: WorkflowExecutionUpdateWithWhereUniqueWithoutWorkflowInput | WorkflowExecutionUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: WorkflowExecutionUpdateManyWithWhereWithoutWorkflowInput | WorkflowExecutionUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: WorkflowExecutionScalarWhereInput | WorkflowExecutionScalarWhereInput[]
  }

  export type WorkflowVersionUncheckedUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<WorkflowVersionCreateWithoutWorkflowInput, WorkflowVersionUncheckedCreateWithoutWorkflowInput> | WorkflowVersionCreateWithoutWorkflowInput[] | WorkflowVersionUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: WorkflowVersionCreateOrConnectWithoutWorkflowInput | WorkflowVersionCreateOrConnectWithoutWorkflowInput[]
    upsert?: WorkflowVersionUpsertWithWhereUniqueWithoutWorkflowInput | WorkflowVersionUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: WorkflowVersionCreateManyWorkflowInputEnvelope
    set?: WorkflowVersionWhereUniqueInput | WorkflowVersionWhereUniqueInput[]
    disconnect?: WorkflowVersionWhereUniqueInput | WorkflowVersionWhereUniqueInput[]
    delete?: WorkflowVersionWhereUniqueInput | WorkflowVersionWhereUniqueInput[]
    connect?: WorkflowVersionWhereUniqueInput | WorkflowVersionWhereUniqueInput[]
    update?: WorkflowVersionUpdateWithWhereUniqueWithoutWorkflowInput | WorkflowVersionUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: WorkflowVersionUpdateManyWithWhereWithoutWorkflowInput | WorkflowVersionUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: WorkflowVersionScalarWhereInput | WorkflowVersionScalarWhereInput[]
  }

  export type WorkflowCreateNestedOneWithoutWorkflowNodeInput = {
    create?: XOR<WorkflowCreateWithoutWorkflowNodeInput, WorkflowUncheckedCreateWithoutWorkflowNodeInput>
    connectOrCreate?: WorkflowCreateOrConnectWithoutWorkflowNodeInput
    connect?: WorkflowWhereUniqueInput
  }

  export type EnumWorkflowNodeTypeFieldUpdateOperationsInput = {
    set?: $Enums.WorkflowNodeType
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type WorkflowUpdateOneRequiredWithoutWorkflowNodeNestedInput = {
    create?: XOR<WorkflowCreateWithoutWorkflowNodeInput, WorkflowUncheckedCreateWithoutWorkflowNodeInput>
    connectOrCreate?: WorkflowCreateOrConnectWithoutWorkflowNodeInput
    upsert?: WorkflowUpsertWithoutWorkflowNodeInput
    connect?: WorkflowWhereUniqueInput
    update?: XOR<XOR<WorkflowUpdateToOneWithWhereWithoutWorkflowNodeInput, WorkflowUpdateWithoutWorkflowNodeInput>, WorkflowUncheckedUpdateWithoutWorkflowNodeInput>
  }

  export type WorkflowCreateNestedOneWithoutWorkflowEdgeInput = {
    create?: XOR<WorkflowCreateWithoutWorkflowEdgeInput, WorkflowUncheckedCreateWithoutWorkflowEdgeInput>
    connectOrCreate?: WorkflowCreateOrConnectWithoutWorkflowEdgeInput
    connect?: WorkflowWhereUniqueInput
  }

  export type EnumWorkflowEdgeLabelFieldUpdateOperationsInput = {
    set?: $Enums.WorkflowEdgeLabel
  }

  export type WorkflowUpdateOneRequiredWithoutWorkflowEdgeNestedInput = {
    create?: XOR<WorkflowCreateWithoutWorkflowEdgeInput, WorkflowUncheckedCreateWithoutWorkflowEdgeInput>
    connectOrCreate?: WorkflowCreateOrConnectWithoutWorkflowEdgeInput
    upsert?: WorkflowUpsertWithoutWorkflowEdgeInput
    connect?: WorkflowWhereUniqueInput
    update?: XOR<XOR<WorkflowUpdateToOneWithWhereWithoutWorkflowEdgeInput, WorkflowUpdateWithoutWorkflowEdgeInput>, WorkflowUncheckedUpdateWithoutWorkflowEdgeInput>
  }

  export type WorkflowCreateNestedOneWithoutWorkflowExecutionInput = {
    create?: XOR<WorkflowCreateWithoutWorkflowExecutionInput, WorkflowUncheckedCreateWithoutWorkflowExecutionInput>
    connectOrCreate?: WorkflowCreateOrConnectWithoutWorkflowExecutionInput
    connect?: WorkflowWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutWorkflowExecutionInput = {
    create?: XOR<UserCreateWithoutWorkflowExecutionInput, UserUncheckedCreateWithoutWorkflowExecutionInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkflowExecutionInput
    connect?: UserWhereUniqueInput
  }

  export type EnumExecutionStatusFieldUpdateOperationsInput = {
    set?: $Enums.ExecutionStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type WorkflowUpdateOneRequiredWithoutWorkflowExecutionNestedInput = {
    create?: XOR<WorkflowCreateWithoutWorkflowExecutionInput, WorkflowUncheckedCreateWithoutWorkflowExecutionInput>
    connectOrCreate?: WorkflowCreateOrConnectWithoutWorkflowExecutionInput
    upsert?: WorkflowUpsertWithoutWorkflowExecutionInput
    connect?: WorkflowWhereUniqueInput
    update?: XOR<XOR<WorkflowUpdateToOneWithWhereWithoutWorkflowExecutionInput, WorkflowUpdateWithoutWorkflowExecutionInput>, WorkflowUncheckedUpdateWithoutWorkflowExecutionInput>
  }

  export type UserUpdateOneWithoutWorkflowExecutionNestedInput = {
    create?: XOR<UserCreateWithoutWorkflowExecutionInput, UserUncheckedCreateWithoutWorkflowExecutionInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkflowExecutionInput
    upsert?: UserUpsertWithoutWorkflowExecutionInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWorkflowExecutionInput, UserUpdateWithoutWorkflowExecutionInput>, UserUncheckedUpdateWithoutWorkflowExecutionInput>
  }

  export type WorkflowCreateNestedOneWithoutWorkflowVersionInput = {
    create?: XOR<WorkflowCreateWithoutWorkflowVersionInput, WorkflowUncheckedCreateWithoutWorkflowVersionInput>
    connectOrCreate?: WorkflowCreateOrConnectWithoutWorkflowVersionInput
    connect?: WorkflowWhereUniqueInput
  }

  export type WorkflowUpdateOneRequiredWithoutWorkflowVersionNestedInput = {
    create?: XOR<WorkflowCreateWithoutWorkflowVersionInput, WorkflowUncheckedCreateWithoutWorkflowVersionInput>
    connectOrCreate?: WorkflowCreateOrConnectWithoutWorkflowVersionInput
    upsert?: WorkflowUpsertWithoutWorkflowVersionInput
    connect?: WorkflowWhereUniqueInput
    update?: XOR<XOR<WorkflowUpdateToOneWithWhereWithoutWorkflowVersionInput, WorkflowUpdateWithoutWorkflowVersionInput>, WorkflowUncheckedUpdateWithoutWorkflowVersionInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumWorkflowNodeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkflowNodeType | EnumWorkflowNodeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.WorkflowNodeType[] | ListEnumWorkflowNodeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkflowNodeType[] | ListEnumWorkflowNodeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkflowNodeTypeFilter<$PrismaModel> | $Enums.WorkflowNodeType
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumWorkflowNodeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkflowNodeType | EnumWorkflowNodeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.WorkflowNodeType[] | ListEnumWorkflowNodeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkflowNodeType[] | ListEnumWorkflowNodeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkflowNodeTypeWithAggregatesFilter<$PrismaModel> | $Enums.WorkflowNodeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWorkflowNodeTypeFilter<$PrismaModel>
    _max?: NestedEnumWorkflowNodeTypeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedEnumWorkflowEdgeLabelFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkflowEdgeLabel | EnumWorkflowEdgeLabelFieldRefInput<$PrismaModel>
    in?: $Enums.WorkflowEdgeLabel[] | ListEnumWorkflowEdgeLabelFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkflowEdgeLabel[] | ListEnumWorkflowEdgeLabelFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkflowEdgeLabelFilter<$PrismaModel> | $Enums.WorkflowEdgeLabel
  }

  export type NestedEnumWorkflowEdgeLabelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkflowEdgeLabel | EnumWorkflowEdgeLabelFieldRefInput<$PrismaModel>
    in?: $Enums.WorkflowEdgeLabel[] | ListEnumWorkflowEdgeLabelFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkflowEdgeLabel[] | ListEnumWorkflowEdgeLabelFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkflowEdgeLabelWithAggregatesFilter<$PrismaModel> | $Enums.WorkflowEdgeLabel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWorkflowEdgeLabelFilter<$PrismaModel>
    _max?: NestedEnumWorkflowEdgeLabelFilter<$PrismaModel>
  }

  export type NestedEnumExecutionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ExecutionStatus | EnumExecutionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ExecutionStatus[] | ListEnumExecutionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExecutionStatus[] | ListEnumExecutionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumExecutionStatusFilter<$PrismaModel> | $Enums.ExecutionStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumExecutionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExecutionStatus | EnumExecutionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ExecutionStatus[] | ListEnumExecutionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExecutionStatus[] | ListEnumExecutionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumExecutionStatusWithAggregatesFilter<$PrismaModel> | $Enums.ExecutionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExecutionStatusFilter<$PrismaModel>
    _max?: NestedEnumExecutionStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type WorkflowCreateWithoutUserInput = {
    id?: string
    name: string
    description: string
    isPublic?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    WorkflowNode?: WorkflowNodeCreateNestedManyWithoutWorkflowInput
    WorkflowEdge?: WorkflowEdgeCreateNestedManyWithoutWorkflowInput
    WorkflowExecution?: WorkflowExecutionCreateNestedManyWithoutWorkflowInput
    WorkflowVersion?: WorkflowVersionCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    description: string
    isPublic?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    WorkflowNode?: WorkflowNodeUncheckedCreateNestedManyWithoutWorkflowInput
    WorkflowEdge?: WorkflowEdgeUncheckedCreateNestedManyWithoutWorkflowInput
    WorkflowExecution?: WorkflowExecutionUncheckedCreateNestedManyWithoutWorkflowInput
    WorkflowVersion?: WorkflowVersionUncheckedCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowCreateOrConnectWithoutUserInput = {
    where: WorkflowWhereUniqueInput
    create: XOR<WorkflowCreateWithoutUserInput, WorkflowUncheckedCreateWithoutUserInput>
  }

  export type WorkflowCreateManyUserInputEnvelope = {
    data: WorkflowCreateManyUserInput | WorkflowCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WorkflowExecutionCreateWithoutUserInput = {
    id?: string
    status?: $Enums.ExecutionStatus
    logs: JsonNullValueInput | InputJsonValue
    startedAt?: Date | string
    finishedAt?: Date | string | null
    workflow: WorkflowCreateNestedOneWithoutWorkflowExecutionInput
  }

  export type WorkflowExecutionUncheckedCreateWithoutUserInput = {
    id?: string
    workflowId: string
    status?: $Enums.ExecutionStatus
    logs: JsonNullValueInput | InputJsonValue
    startedAt?: Date | string
    finishedAt?: Date | string | null
  }

  export type WorkflowExecutionCreateOrConnectWithoutUserInput = {
    where: WorkflowExecutionWhereUniqueInput
    create: XOR<WorkflowExecutionCreateWithoutUserInput, WorkflowExecutionUncheckedCreateWithoutUserInput>
  }

  export type WorkflowExecutionCreateManyUserInputEnvelope = {
    data: WorkflowExecutionCreateManyUserInput | WorkflowExecutionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WorkflowUpsertWithWhereUniqueWithoutUserInput = {
    where: WorkflowWhereUniqueInput
    update: XOR<WorkflowUpdateWithoutUserInput, WorkflowUncheckedUpdateWithoutUserInput>
    create: XOR<WorkflowCreateWithoutUserInput, WorkflowUncheckedCreateWithoutUserInput>
  }

  export type WorkflowUpdateWithWhereUniqueWithoutUserInput = {
    where: WorkflowWhereUniqueInput
    data: XOR<WorkflowUpdateWithoutUserInput, WorkflowUncheckedUpdateWithoutUserInput>
  }

  export type WorkflowUpdateManyWithWhereWithoutUserInput = {
    where: WorkflowScalarWhereInput
    data: XOR<WorkflowUpdateManyMutationInput, WorkflowUncheckedUpdateManyWithoutUserInput>
  }

  export type WorkflowScalarWhereInput = {
    AND?: WorkflowScalarWhereInput | WorkflowScalarWhereInput[]
    OR?: WorkflowScalarWhereInput[]
    NOT?: WorkflowScalarWhereInput | WorkflowScalarWhereInput[]
    id?: StringFilter<"Workflow"> | string
    name?: StringFilter<"Workflow"> | string
    description?: StringFilter<"Workflow"> | string
    userId?: StringFilter<"Workflow"> | string
    isPublic?: BoolFilter<"Workflow"> | boolean
    isActive?: BoolFilter<"Workflow"> | boolean
    createdAt?: DateTimeFilter<"Workflow"> | Date | string
    updatedAt?: DateTimeFilter<"Workflow"> | Date | string
  }

  export type WorkflowExecutionUpsertWithWhereUniqueWithoutUserInput = {
    where: WorkflowExecutionWhereUniqueInput
    update: XOR<WorkflowExecutionUpdateWithoutUserInput, WorkflowExecutionUncheckedUpdateWithoutUserInput>
    create: XOR<WorkflowExecutionCreateWithoutUserInput, WorkflowExecutionUncheckedCreateWithoutUserInput>
  }

  export type WorkflowExecutionUpdateWithWhereUniqueWithoutUserInput = {
    where: WorkflowExecutionWhereUniqueInput
    data: XOR<WorkflowExecutionUpdateWithoutUserInput, WorkflowExecutionUncheckedUpdateWithoutUserInput>
  }

  export type WorkflowExecutionUpdateManyWithWhereWithoutUserInput = {
    where: WorkflowExecutionScalarWhereInput
    data: XOR<WorkflowExecutionUpdateManyMutationInput, WorkflowExecutionUncheckedUpdateManyWithoutUserInput>
  }

  export type WorkflowExecutionScalarWhereInput = {
    AND?: WorkflowExecutionScalarWhereInput | WorkflowExecutionScalarWhereInput[]
    OR?: WorkflowExecutionScalarWhereInput[]
    NOT?: WorkflowExecutionScalarWhereInput | WorkflowExecutionScalarWhereInput[]
    id?: StringFilter<"WorkflowExecution"> | string
    workflowId?: StringFilter<"WorkflowExecution"> | string
    userId?: StringNullableFilter<"WorkflowExecution"> | string | null
    status?: EnumExecutionStatusFilter<"WorkflowExecution"> | $Enums.ExecutionStatus
    logs?: JsonFilter<"WorkflowExecution">
    startedAt?: DateTimeFilter<"WorkflowExecution"> | Date | string
    finishedAt?: DateTimeNullableFilter<"WorkflowExecution"> | Date | string | null
  }

  export type UserCreateWithoutWorkflowInput = {
    id?: string
    walletAdress: string
    email?: string | null
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    WorkflowExecution?: WorkflowExecutionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWorkflowInput = {
    id?: string
    walletAdress: string
    email?: string | null
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    WorkflowExecution?: WorkflowExecutionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWorkflowInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWorkflowInput, UserUncheckedCreateWithoutWorkflowInput>
  }

  export type WorkflowNodeCreateWithoutWorkflowInput = {
    id?: string
    type: $Enums.WorkflowNodeType
    name: string
    positionX: number
    positionY: number
    config: JsonNullValueInput | InputJsonValue
    orderIndex?: number
  }

  export type WorkflowNodeUncheckedCreateWithoutWorkflowInput = {
    id?: string
    type: $Enums.WorkflowNodeType
    name: string
    positionX: number
    positionY: number
    config: JsonNullValueInput | InputJsonValue
    orderIndex?: number
  }

  export type WorkflowNodeCreateOrConnectWithoutWorkflowInput = {
    where: WorkflowNodeWhereUniqueInput
    create: XOR<WorkflowNodeCreateWithoutWorkflowInput, WorkflowNodeUncheckedCreateWithoutWorkflowInput>
  }

  export type WorkflowNodeCreateManyWorkflowInputEnvelope = {
    data: WorkflowNodeCreateManyWorkflowInput | WorkflowNodeCreateManyWorkflowInput[]
    skipDuplicates?: boolean
  }

  export type WorkflowEdgeCreateWithoutWorkflowInput = {
    id?: string
    sourceNodeId: string
    targetNodeId: string
    label: $Enums.WorkflowEdgeLabel
  }

  export type WorkflowEdgeUncheckedCreateWithoutWorkflowInput = {
    id?: string
    sourceNodeId: string
    targetNodeId: string
    label: $Enums.WorkflowEdgeLabel
  }

  export type WorkflowEdgeCreateOrConnectWithoutWorkflowInput = {
    where: WorkflowEdgeWhereUniqueInput
    create: XOR<WorkflowEdgeCreateWithoutWorkflowInput, WorkflowEdgeUncheckedCreateWithoutWorkflowInput>
  }

  export type WorkflowEdgeCreateManyWorkflowInputEnvelope = {
    data: WorkflowEdgeCreateManyWorkflowInput | WorkflowEdgeCreateManyWorkflowInput[]
    skipDuplicates?: boolean
  }

  export type WorkflowExecutionCreateWithoutWorkflowInput = {
    id?: string
    status?: $Enums.ExecutionStatus
    logs: JsonNullValueInput | InputJsonValue
    startedAt?: Date | string
    finishedAt?: Date | string | null
    user?: UserCreateNestedOneWithoutWorkflowExecutionInput
  }

  export type WorkflowExecutionUncheckedCreateWithoutWorkflowInput = {
    id?: string
    userId?: string | null
    status?: $Enums.ExecutionStatus
    logs: JsonNullValueInput | InputJsonValue
    startedAt?: Date | string
    finishedAt?: Date | string | null
  }

  export type WorkflowExecutionCreateOrConnectWithoutWorkflowInput = {
    where: WorkflowExecutionWhereUniqueInput
    create: XOR<WorkflowExecutionCreateWithoutWorkflowInput, WorkflowExecutionUncheckedCreateWithoutWorkflowInput>
  }

  export type WorkflowExecutionCreateManyWorkflowInputEnvelope = {
    data: WorkflowExecutionCreateManyWorkflowInput | WorkflowExecutionCreateManyWorkflowInput[]
    skipDuplicates?: boolean
  }

  export type WorkflowVersionCreateWithoutWorkflowInput = {
    id?: string
    versionNumber: number
    snapshot: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type WorkflowVersionUncheckedCreateWithoutWorkflowInput = {
    id?: string
    versionNumber: number
    snapshot: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type WorkflowVersionCreateOrConnectWithoutWorkflowInput = {
    where: WorkflowVersionWhereUniqueInput
    create: XOR<WorkflowVersionCreateWithoutWorkflowInput, WorkflowVersionUncheckedCreateWithoutWorkflowInput>
  }

  export type WorkflowVersionCreateManyWorkflowInputEnvelope = {
    data: WorkflowVersionCreateManyWorkflowInput | WorkflowVersionCreateManyWorkflowInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutWorkflowInput = {
    update: XOR<UserUpdateWithoutWorkflowInput, UserUncheckedUpdateWithoutWorkflowInput>
    create: XOR<UserCreateWithoutWorkflowInput, UserUncheckedCreateWithoutWorkflowInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWorkflowInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWorkflowInput, UserUncheckedUpdateWithoutWorkflowInput>
  }

  export type UserUpdateWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAdress?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    WorkflowExecution?: WorkflowExecutionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAdress?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    WorkflowExecution?: WorkflowExecutionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WorkflowNodeUpsertWithWhereUniqueWithoutWorkflowInput = {
    where: WorkflowNodeWhereUniqueInput
    update: XOR<WorkflowNodeUpdateWithoutWorkflowInput, WorkflowNodeUncheckedUpdateWithoutWorkflowInput>
    create: XOR<WorkflowNodeCreateWithoutWorkflowInput, WorkflowNodeUncheckedCreateWithoutWorkflowInput>
  }

  export type WorkflowNodeUpdateWithWhereUniqueWithoutWorkflowInput = {
    where: WorkflowNodeWhereUniqueInput
    data: XOR<WorkflowNodeUpdateWithoutWorkflowInput, WorkflowNodeUncheckedUpdateWithoutWorkflowInput>
  }

  export type WorkflowNodeUpdateManyWithWhereWithoutWorkflowInput = {
    where: WorkflowNodeScalarWhereInput
    data: XOR<WorkflowNodeUpdateManyMutationInput, WorkflowNodeUncheckedUpdateManyWithoutWorkflowInput>
  }

  export type WorkflowNodeScalarWhereInput = {
    AND?: WorkflowNodeScalarWhereInput | WorkflowNodeScalarWhereInput[]
    OR?: WorkflowNodeScalarWhereInput[]
    NOT?: WorkflowNodeScalarWhereInput | WorkflowNodeScalarWhereInput[]
    id?: StringFilter<"WorkflowNode"> | string
    workflowId?: StringFilter<"WorkflowNode"> | string
    type?: EnumWorkflowNodeTypeFilter<"WorkflowNode"> | $Enums.WorkflowNodeType
    name?: StringFilter<"WorkflowNode"> | string
    positionX?: FloatFilter<"WorkflowNode"> | number
    positionY?: FloatFilter<"WorkflowNode"> | number
    config?: JsonFilter<"WorkflowNode">
    orderIndex?: IntFilter<"WorkflowNode"> | number
  }

  export type WorkflowEdgeUpsertWithWhereUniqueWithoutWorkflowInput = {
    where: WorkflowEdgeWhereUniqueInput
    update: XOR<WorkflowEdgeUpdateWithoutWorkflowInput, WorkflowEdgeUncheckedUpdateWithoutWorkflowInput>
    create: XOR<WorkflowEdgeCreateWithoutWorkflowInput, WorkflowEdgeUncheckedCreateWithoutWorkflowInput>
  }

  export type WorkflowEdgeUpdateWithWhereUniqueWithoutWorkflowInput = {
    where: WorkflowEdgeWhereUniqueInput
    data: XOR<WorkflowEdgeUpdateWithoutWorkflowInput, WorkflowEdgeUncheckedUpdateWithoutWorkflowInput>
  }

  export type WorkflowEdgeUpdateManyWithWhereWithoutWorkflowInput = {
    where: WorkflowEdgeScalarWhereInput
    data: XOR<WorkflowEdgeUpdateManyMutationInput, WorkflowEdgeUncheckedUpdateManyWithoutWorkflowInput>
  }

  export type WorkflowEdgeScalarWhereInput = {
    AND?: WorkflowEdgeScalarWhereInput | WorkflowEdgeScalarWhereInput[]
    OR?: WorkflowEdgeScalarWhereInput[]
    NOT?: WorkflowEdgeScalarWhereInput | WorkflowEdgeScalarWhereInput[]
    id?: StringFilter<"WorkflowEdge"> | string
    workflowId?: StringFilter<"WorkflowEdge"> | string
    sourceNodeId?: StringFilter<"WorkflowEdge"> | string
    targetNodeId?: StringFilter<"WorkflowEdge"> | string
    label?: EnumWorkflowEdgeLabelFilter<"WorkflowEdge"> | $Enums.WorkflowEdgeLabel
  }

  export type WorkflowExecutionUpsertWithWhereUniqueWithoutWorkflowInput = {
    where: WorkflowExecutionWhereUniqueInput
    update: XOR<WorkflowExecutionUpdateWithoutWorkflowInput, WorkflowExecutionUncheckedUpdateWithoutWorkflowInput>
    create: XOR<WorkflowExecutionCreateWithoutWorkflowInput, WorkflowExecutionUncheckedCreateWithoutWorkflowInput>
  }

  export type WorkflowExecutionUpdateWithWhereUniqueWithoutWorkflowInput = {
    where: WorkflowExecutionWhereUniqueInput
    data: XOR<WorkflowExecutionUpdateWithoutWorkflowInput, WorkflowExecutionUncheckedUpdateWithoutWorkflowInput>
  }

  export type WorkflowExecutionUpdateManyWithWhereWithoutWorkflowInput = {
    where: WorkflowExecutionScalarWhereInput
    data: XOR<WorkflowExecutionUpdateManyMutationInput, WorkflowExecutionUncheckedUpdateManyWithoutWorkflowInput>
  }

  export type WorkflowVersionUpsertWithWhereUniqueWithoutWorkflowInput = {
    where: WorkflowVersionWhereUniqueInput
    update: XOR<WorkflowVersionUpdateWithoutWorkflowInput, WorkflowVersionUncheckedUpdateWithoutWorkflowInput>
    create: XOR<WorkflowVersionCreateWithoutWorkflowInput, WorkflowVersionUncheckedCreateWithoutWorkflowInput>
  }

  export type WorkflowVersionUpdateWithWhereUniqueWithoutWorkflowInput = {
    where: WorkflowVersionWhereUniqueInput
    data: XOR<WorkflowVersionUpdateWithoutWorkflowInput, WorkflowVersionUncheckedUpdateWithoutWorkflowInput>
  }

  export type WorkflowVersionUpdateManyWithWhereWithoutWorkflowInput = {
    where: WorkflowVersionScalarWhereInput
    data: XOR<WorkflowVersionUpdateManyMutationInput, WorkflowVersionUncheckedUpdateManyWithoutWorkflowInput>
  }

  export type WorkflowVersionScalarWhereInput = {
    AND?: WorkflowVersionScalarWhereInput | WorkflowVersionScalarWhereInput[]
    OR?: WorkflowVersionScalarWhereInput[]
    NOT?: WorkflowVersionScalarWhereInput | WorkflowVersionScalarWhereInput[]
    id?: StringFilter<"WorkflowVersion"> | string
    workflowId?: StringFilter<"WorkflowVersion"> | string
    versionNumber?: IntFilter<"WorkflowVersion"> | number
    snapshot?: JsonFilter<"WorkflowVersion">
    createdAt?: DateTimeFilter<"WorkflowVersion"> | Date | string
  }

  export type WorkflowCreateWithoutWorkflowNodeInput = {
    id?: string
    name: string
    description: string
    isPublic?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWorkflowInput
    WorkflowEdge?: WorkflowEdgeCreateNestedManyWithoutWorkflowInput
    WorkflowExecution?: WorkflowExecutionCreateNestedManyWithoutWorkflowInput
    WorkflowVersion?: WorkflowVersionCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowUncheckedCreateWithoutWorkflowNodeInput = {
    id?: string
    name: string
    description: string
    userId: string
    isPublic?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    WorkflowEdge?: WorkflowEdgeUncheckedCreateNestedManyWithoutWorkflowInput
    WorkflowExecution?: WorkflowExecutionUncheckedCreateNestedManyWithoutWorkflowInput
    WorkflowVersion?: WorkflowVersionUncheckedCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowCreateOrConnectWithoutWorkflowNodeInput = {
    where: WorkflowWhereUniqueInput
    create: XOR<WorkflowCreateWithoutWorkflowNodeInput, WorkflowUncheckedCreateWithoutWorkflowNodeInput>
  }

  export type WorkflowUpsertWithoutWorkflowNodeInput = {
    update: XOR<WorkflowUpdateWithoutWorkflowNodeInput, WorkflowUncheckedUpdateWithoutWorkflowNodeInput>
    create: XOR<WorkflowCreateWithoutWorkflowNodeInput, WorkflowUncheckedCreateWithoutWorkflowNodeInput>
    where?: WorkflowWhereInput
  }

  export type WorkflowUpdateToOneWithWhereWithoutWorkflowNodeInput = {
    where?: WorkflowWhereInput
    data: XOR<WorkflowUpdateWithoutWorkflowNodeInput, WorkflowUncheckedUpdateWithoutWorkflowNodeInput>
  }

  export type WorkflowUpdateWithoutWorkflowNodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWorkflowNestedInput
    WorkflowEdge?: WorkflowEdgeUpdateManyWithoutWorkflowNestedInput
    WorkflowExecution?: WorkflowExecutionUpdateManyWithoutWorkflowNestedInput
    WorkflowVersion?: WorkflowVersionUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowUncheckedUpdateWithoutWorkflowNodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    WorkflowEdge?: WorkflowEdgeUncheckedUpdateManyWithoutWorkflowNestedInput
    WorkflowExecution?: WorkflowExecutionUncheckedUpdateManyWithoutWorkflowNestedInput
    WorkflowVersion?: WorkflowVersionUncheckedUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowCreateWithoutWorkflowEdgeInput = {
    id?: string
    name: string
    description: string
    isPublic?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWorkflowInput
    WorkflowNode?: WorkflowNodeCreateNestedManyWithoutWorkflowInput
    WorkflowExecution?: WorkflowExecutionCreateNestedManyWithoutWorkflowInput
    WorkflowVersion?: WorkflowVersionCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowUncheckedCreateWithoutWorkflowEdgeInput = {
    id?: string
    name: string
    description: string
    userId: string
    isPublic?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    WorkflowNode?: WorkflowNodeUncheckedCreateNestedManyWithoutWorkflowInput
    WorkflowExecution?: WorkflowExecutionUncheckedCreateNestedManyWithoutWorkflowInput
    WorkflowVersion?: WorkflowVersionUncheckedCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowCreateOrConnectWithoutWorkflowEdgeInput = {
    where: WorkflowWhereUniqueInput
    create: XOR<WorkflowCreateWithoutWorkflowEdgeInput, WorkflowUncheckedCreateWithoutWorkflowEdgeInput>
  }

  export type WorkflowUpsertWithoutWorkflowEdgeInput = {
    update: XOR<WorkflowUpdateWithoutWorkflowEdgeInput, WorkflowUncheckedUpdateWithoutWorkflowEdgeInput>
    create: XOR<WorkflowCreateWithoutWorkflowEdgeInput, WorkflowUncheckedCreateWithoutWorkflowEdgeInput>
    where?: WorkflowWhereInput
  }

  export type WorkflowUpdateToOneWithWhereWithoutWorkflowEdgeInput = {
    where?: WorkflowWhereInput
    data: XOR<WorkflowUpdateWithoutWorkflowEdgeInput, WorkflowUncheckedUpdateWithoutWorkflowEdgeInput>
  }

  export type WorkflowUpdateWithoutWorkflowEdgeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWorkflowNestedInput
    WorkflowNode?: WorkflowNodeUpdateManyWithoutWorkflowNestedInput
    WorkflowExecution?: WorkflowExecutionUpdateManyWithoutWorkflowNestedInput
    WorkflowVersion?: WorkflowVersionUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowUncheckedUpdateWithoutWorkflowEdgeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    WorkflowNode?: WorkflowNodeUncheckedUpdateManyWithoutWorkflowNestedInput
    WorkflowExecution?: WorkflowExecutionUncheckedUpdateManyWithoutWorkflowNestedInput
    WorkflowVersion?: WorkflowVersionUncheckedUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowCreateWithoutWorkflowExecutionInput = {
    id?: string
    name: string
    description: string
    isPublic?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWorkflowInput
    WorkflowNode?: WorkflowNodeCreateNestedManyWithoutWorkflowInput
    WorkflowEdge?: WorkflowEdgeCreateNestedManyWithoutWorkflowInput
    WorkflowVersion?: WorkflowVersionCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowUncheckedCreateWithoutWorkflowExecutionInput = {
    id?: string
    name: string
    description: string
    userId: string
    isPublic?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    WorkflowNode?: WorkflowNodeUncheckedCreateNestedManyWithoutWorkflowInput
    WorkflowEdge?: WorkflowEdgeUncheckedCreateNestedManyWithoutWorkflowInput
    WorkflowVersion?: WorkflowVersionUncheckedCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowCreateOrConnectWithoutWorkflowExecutionInput = {
    where: WorkflowWhereUniqueInput
    create: XOR<WorkflowCreateWithoutWorkflowExecutionInput, WorkflowUncheckedCreateWithoutWorkflowExecutionInput>
  }

  export type UserCreateWithoutWorkflowExecutionInput = {
    id?: string
    walletAdress: string
    email?: string | null
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    Workflow?: WorkflowCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWorkflowExecutionInput = {
    id?: string
    walletAdress: string
    email?: string | null
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    Workflow?: WorkflowUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWorkflowExecutionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWorkflowExecutionInput, UserUncheckedCreateWithoutWorkflowExecutionInput>
  }

  export type WorkflowUpsertWithoutWorkflowExecutionInput = {
    update: XOR<WorkflowUpdateWithoutWorkflowExecutionInput, WorkflowUncheckedUpdateWithoutWorkflowExecutionInput>
    create: XOR<WorkflowCreateWithoutWorkflowExecutionInput, WorkflowUncheckedCreateWithoutWorkflowExecutionInput>
    where?: WorkflowWhereInput
  }

  export type WorkflowUpdateToOneWithWhereWithoutWorkflowExecutionInput = {
    where?: WorkflowWhereInput
    data: XOR<WorkflowUpdateWithoutWorkflowExecutionInput, WorkflowUncheckedUpdateWithoutWorkflowExecutionInput>
  }

  export type WorkflowUpdateWithoutWorkflowExecutionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWorkflowNestedInput
    WorkflowNode?: WorkflowNodeUpdateManyWithoutWorkflowNestedInput
    WorkflowEdge?: WorkflowEdgeUpdateManyWithoutWorkflowNestedInput
    WorkflowVersion?: WorkflowVersionUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowUncheckedUpdateWithoutWorkflowExecutionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    WorkflowNode?: WorkflowNodeUncheckedUpdateManyWithoutWorkflowNestedInput
    WorkflowEdge?: WorkflowEdgeUncheckedUpdateManyWithoutWorkflowNestedInput
    WorkflowVersion?: WorkflowVersionUncheckedUpdateManyWithoutWorkflowNestedInput
  }

  export type UserUpsertWithoutWorkflowExecutionInput = {
    update: XOR<UserUpdateWithoutWorkflowExecutionInput, UserUncheckedUpdateWithoutWorkflowExecutionInput>
    create: XOR<UserCreateWithoutWorkflowExecutionInput, UserUncheckedCreateWithoutWorkflowExecutionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWorkflowExecutionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWorkflowExecutionInput, UserUncheckedUpdateWithoutWorkflowExecutionInput>
  }

  export type UserUpdateWithoutWorkflowExecutionInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAdress?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Workflow?: WorkflowUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWorkflowExecutionInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAdress?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Workflow?: WorkflowUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WorkflowCreateWithoutWorkflowVersionInput = {
    id?: string
    name: string
    description: string
    isPublic?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWorkflowInput
    WorkflowNode?: WorkflowNodeCreateNestedManyWithoutWorkflowInput
    WorkflowEdge?: WorkflowEdgeCreateNestedManyWithoutWorkflowInput
    WorkflowExecution?: WorkflowExecutionCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowUncheckedCreateWithoutWorkflowVersionInput = {
    id?: string
    name: string
    description: string
    userId: string
    isPublic?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    WorkflowNode?: WorkflowNodeUncheckedCreateNestedManyWithoutWorkflowInput
    WorkflowEdge?: WorkflowEdgeUncheckedCreateNestedManyWithoutWorkflowInput
    WorkflowExecution?: WorkflowExecutionUncheckedCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowCreateOrConnectWithoutWorkflowVersionInput = {
    where: WorkflowWhereUniqueInput
    create: XOR<WorkflowCreateWithoutWorkflowVersionInput, WorkflowUncheckedCreateWithoutWorkflowVersionInput>
  }

  export type WorkflowUpsertWithoutWorkflowVersionInput = {
    update: XOR<WorkflowUpdateWithoutWorkflowVersionInput, WorkflowUncheckedUpdateWithoutWorkflowVersionInput>
    create: XOR<WorkflowCreateWithoutWorkflowVersionInput, WorkflowUncheckedCreateWithoutWorkflowVersionInput>
    where?: WorkflowWhereInput
  }

  export type WorkflowUpdateToOneWithWhereWithoutWorkflowVersionInput = {
    where?: WorkflowWhereInput
    data: XOR<WorkflowUpdateWithoutWorkflowVersionInput, WorkflowUncheckedUpdateWithoutWorkflowVersionInput>
  }

  export type WorkflowUpdateWithoutWorkflowVersionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWorkflowNestedInput
    WorkflowNode?: WorkflowNodeUpdateManyWithoutWorkflowNestedInput
    WorkflowEdge?: WorkflowEdgeUpdateManyWithoutWorkflowNestedInput
    WorkflowExecution?: WorkflowExecutionUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowUncheckedUpdateWithoutWorkflowVersionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    WorkflowNode?: WorkflowNodeUncheckedUpdateManyWithoutWorkflowNestedInput
    WorkflowEdge?: WorkflowEdgeUncheckedUpdateManyWithoutWorkflowNestedInput
    WorkflowExecution?: WorkflowExecutionUncheckedUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowCreateManyUserInput = {
    id?: string
    name: string
    description: string
    isPublic?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkflowExecutionCreateManyUserInput = {
    id?: string
    workflowId: string
    status?: $Enums.ExecutionStatus
    logs: JsonNullValueInput | InputJsonValue
    startedAt?: Date | string
    finishedAt?: Date | string | null
  }

  export type WorkflowUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    WorkflowNode?: WorkflowNodeUpdateManyWithoutWorkflowNestedInput
    WorkflowEdge?: WorkflowEdgeUpdateManyWithoutWorkflowNestedInput
    WorkflowExecution?: WorkflowExecutionUpdateManyWithoutWorkflowNestedInput
    WorkflowVersion?: WorkflowVersionUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    WorkflowNode?: WorkflowNodeUncheckedUpdateManyWithoutWorkflowNestedInput
    WorkflowEdge?: WorkflowEdgeUncheckedUpdateManyWithoutWorkflowNestedInput
    WorkflowExecution?: WorkflowExecutionUncheckedUpdateManyWithoutWorkflowNestedInput
    WorkflowVersion?: WorkflowVersionUncheckedUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowExecutionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumExecutionStatusFieldUpdateOperationsInput | $Enums.ExecutionStatus
    logs?: JsonNullValueInput | InputJsonValue
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workflow?: WorkflowUpdateOneRequiredWithoutWorkflowExecutionNestedInput
  }

  export type WorkflowExecutionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    status?: EnumExecutionStatusFieldUpdateOperationsInput | $Enums.ExecutionStatus
    logs?: JsonNullValueInput | InputJsonValue
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WorkflowExecutionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    status?: EnumExecutionStatusFieldUpdateOperationsInput | $Enums.ExecutionStatus
    logs?: JsonNullValueInput | InputJsonValue
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WorkflowNodeCreateManyWorkflowInput = {
    id?: string
    type: $Enums.WorkflowNodeType
    name: string
    positionX: number
    positionY: number
    config: JsonNullValueInput | InputJsonValue
    orderIndex?: number
  }

  export type WorkflowEdgeCreateManyWorkflowInput = {
    id?: string
    sourceNodeId: string
    targetNodeId: string
    label: $Enums.WorkflowEdgeLabel
  }

  export type WorkflowExecutionCreateManyWorkflowInput = {
    id?: string
    userId?: string | null
    status?: $Enums.ExecutionStatus
    logs: JsonNullValueInput | InputJsonValue
    startedAt?: Date | string
    finishedAt?: Date | string | null
  }

  export type WorkflowVersionCreateManyWorkflowInput = {
    id?: string
    versionNumber: number
    snapshot: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type WorkflowNodeUpdateWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumWorkflowNodeTypeFieldUpdateOperationsInput | $Enums.WorkflowNodeType
    name?: StringFieldUpdateOperationsInput | string
    positionX?: FloatFieldUpdateOperationsInput | number
    positionY?: FloatFieldUpdateOperationsInput | number
    config?: JsonNullValueInput | InputJsonValue
    orderIndex?: IntFieldUpdateOperationsInput | number
  }

  export type WorkflowNodeUncheckedUpdateWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumWorkflowNodeTypeFieldUpdateOperationsInput | $Enums.WorkflowNodeType
    name?: StringFieldUpdateOperationsInput | string
    positionX?: FloatFieldUpdateOperationsInput | number
    positionY?: FloatFieldUpdateOperationsInput | number
    config?: JsonNullValueInput | InputJsonValue
    orderIndex?: IntFieldUpdateOperationsInput | number
  }

  export type WorkflowNodeUncheckedUpdateManyWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumWorkflowNodeTypeFieldUpdateOperationsInput | $Enums.WorkflowNodeType
    name?: StringFieldUpdateOperationsInput | string
    positionX?: FloatFieldUpdateOperationsInput | number
    positionY?: FloatFieldUpdateOperationsInput | number
    config?: JsonNullValueInput | InputJsonValue
    orderIndex?: IntFieldUpdateOperationsInput | number
  }

  export type WorkflowEdgeUpdateWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceNodeId?: StringFieldUpdateOperationsInput | string
    targetNodeId?: StringFieldUpdateOperationsInput | string
    label?: EnumWorkflowEdgeLabelFieldUpdateOperationsInput | $Enums.WorkflowEdgeLabel
  }

  export type WorkflowEdgeUncheckedUpdateWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceNodeId?: StringFieldUpdateOperationsInput | string
    targetNodeId?: StringFieldUpdateOperationsInput | string
    label?: EnumWorkflowEdgeLabelFieldUpdateOperationsInput | $Enums.WorkflowEdgeLabel
  }

  export type WorkflowEdgeUncheckedUpdateManyWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceNodeId?: StringFieldUpdateOperationsInput | string
    targetNodeId?: StringFieldUpdateOperationsInput | string
    label?: EnumWorkflowEdgeLabelFieldUpdateOperationsInput | $Enums.WorkflowEdgeLabel
  }

  export type WorkflowExecutionUpdateWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumExecutionStatusFieldUpdateOperationsInput | $Enums.ExecutionStatus
    logs?: JsonNullValueInput | InputJsonValue
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneWithoutWorkflowExecutionNestedInput
  }

  export type WorkflowExecutionUncheckedUpdateWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumExecutionStatusFieldUpdateOperationsInput | $Enums.ExecutionStatus
    logs?: JsonNullValueInput | InputJsonValue
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WorkflowExecutionUncheckedUpdateManyWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumExecutionStatusFieldUpdateOperationsInput | $Enums.ExecutionStatus
    logs?: JsonNullValueInput | InputJsonValue
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WorkflowVersionUpdateWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    versionNumber?: IntFieldUpdateOperationsInput | number
    snapshot?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowVersionUncheckedUpdateWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    versionNumber?: IntFieldUpdateOperationsInput | number
    snapshot?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowVersionUncheckedUpdateManyWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    versionNumber?: IntFieldUpdateOperationsInput | number
    snapshot?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}