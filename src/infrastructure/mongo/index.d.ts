
import { Handler, AsyncResult } from '@vertx/core';

import { Vertx } from '@vertx/core';
import { ReadStream } from '@vertx/core';
import { MongoClientDeleteResult } from './options';
import { AggregateOptions } from './options';
import { IndexOptions } from './options';
import { BulkOperation } from './options';
import { BulkWriteOptions } from './options';
import { FindOptions } from './options';
import { MongoClientBulkWriteResult } from './options';
import { MongoClientUpdateResult } from './options';
import { UpdateOptions } from './options';
import { WriteOption } from './enums';

/**
 * A Vert.x service used to interact with MongoDB server instances.
 * <p>
 * Some of the operations might change <i>_id</i> field of passed  document.
 */
export abstract class MongoClient {
  /**
   * The name of the default pool
   */
  static readonly DEFAULT_POOL_NAME : string;

  /**
   * The name of the default database
   */
  static readonly DEFAULT_DB_NAME : string;

  /**
   */
  static createNonShared(vertx: Vertx, config: { [key: string]: any }) : MongoClient;

  /**
   * Create a Mongo client which maintains its own data source.
   */
  static create(vertx: Vertx, config: { [key: string]: any }) : MongoClient;

  /**
   * Create a Mongo client which shares its data source with any other Mongo clients created with the same
   * data source name
   */
  static createShared(vertx: Vertx, config: { [key: string]: any }, dataSourceName: string) : MongoClient;

  /**
   * Like {@link MongoClient#createShared} but with the default data source name
   */
  static createShared(vertx: Vertx, config: { [key: string]: any }) : MongoClient;

  /**
   * Save a document in the specified collection
   * <p>
   * This operation might change <i>_id</i> field of <i>document</i> parameter
   */
  save(collection: string, document: { [key: string]: any }, resultHandler: ((res: AsyncResult<string>) => void) | Handler<AsyncResult<string>>) : MongoClient;

  /**
   * Save a document in the specified collection with the specified write option
   * <p>
   * This operation might change <i>_id</i> field of <i>document</i> parameter
   */
  saveWithOptions(collection: string, document: { [key: string]: any }, writeOption: WriteOption | null | undefined, resultHandler: ((res: AsyncResult<string>) => void) | Handler<AsyncResult<string>>) : MongoClient;

  /**
   * Insert a document in the specified collection
   * <p>
   * This operation might change <i>_id</i> field of <i>document</i> parameter
   */
  insert(collection: string, document: { [key: string]: any }, resultHandler: ((res: AsyncResult<string>) => void) | Handler<AsyncResult<string>>) : MongoClient;

  /**
   * Insert a document in the specified collection with the specified write option
   * <p>
   * This operation might change <i>_id</i> field of <i>document</i> parameter
   */
  insertWithOptions(collection: string, document: { [key: string]: any }, writeOption: WriteOption | null | undefined, resultHandler: ((res: AsyncResult<string>) => void) | Handler<AsyncResult<string>>) : MongoClient;

  /**
   * Update matching documents in the specified collection
   */
  update(collection: string, query: { [key: string]: any }, update: { [key: string]: any }, resultHandler: ((res: AsyncResult<void>) => void) | Handler<AsyncResult<void>>) : MongoClient;

  /**
   * Update matching documents in the specified collection and return the handler with MongoClientUpdateResult result
   */
  updateCollection(collection: string, query: { [key: string]: any }, update: { [key: string]: any }, resultHandler: ((res: AsyncResult<MongoClientUpdateResult>) => void) | Handler<AsyncResult<MongoClientUpdateResult>>) : MongoClient;

  /**
   * Update matching documents in the specified collection, specifying options
   */
  updateWithOptions(collection: string, query: { [key: string]: any }, update: { [key: string]: any }, options: UpdateOptions, resultHandler: ((res: AsyncResult<void>) => void) | Handler<AsyncResult<void>>) : MongoClient;

  /**
   * Update matching documents in the specified collection, specifying options and return the handler with MongoClientUpdateResult result
   */
  updateCollectionWithOptions(collection: string, query: { [key: string]: any }, update: { [key: string]: any }, options: UpdateOptions, resultHandler: ((res: AsyncResult<MongoClientUpdateResult>) => void) | Handler<AsyncResult<MongoClientUpdateResult>>) : MongoClient;

  /**
   * Replace matching documents in the specified collection
   * <p>
   * This operation might change <i>_id</i> field of <i>replace</i> parameter
   */
  replace(collection: string, query: { [key: string]: any }, replace: { [key: string]: any }, resultHandler: ((res: AsyncResult<void>) => void) | Handler<AsyncResult<void>>) : MongoClient;

  /**
   * Replace matching documents in the specified collection and return the handler with MongoClientUpdateResult result
   */
  replaceDocuments(collection: string, query: { [key: string]: any }, replace: { [key: string]: any }, resultHandler: ((res: AsyncResult<MongoClientUpdateResult>) => void) | Handler<AsyncResult<MongoClientUpdateResult>>) : MongoClient;

  /**
   * Replace matching documents in the specified collection, specifying options
   * <p>
   * This operation might change <i>_id</i> field of <i>replace</i> parameter
   */
  replaceWithOptions(collection: string, query: { [key: string]: any }, replace: { [key: string]: any }, options: UpdateOptions, resultHandler: ((res: AsyncResult<void>) => void) | Handler<AsyncResult<void>>) : MongoClient;

  /**
   * Replace matching documents in the specified collection, specifying options and return the handler with MongoClientUpdateResult result
   */
  replaceDocumentsWithOptions(collection: string, query: { [key: string]: any }, replace: { [key: string]: any }, options: UpdateOptions, resultHandler: ((res: AsyncResult<MongoClientUpdateResult>) => void) | Handler<AsyncResult<MongoClientUpdateResult>>) : MongoClient;

  /**
   * Execute a bulk operation. Can insert, update, replace, and/or delete multiple documents with one request.
   */
  bulkWrite(collection: string, operations: BulkOperation[], resultHandler: ((res: AsyncResult<MongoClientBulkWriteResult>) => void) | Handler<AsyncResult<MongoClientBulkWriteResult>>) : MongoClient;

  /**
   * Execute a bulk operation with the specified write options. Can insert, update, replace, and/or delete multiple
   * documents with one request.
   */
  bulkWriteWithOptions(collection: string, operations: BulkOperation[], bulkWriteOptions: BulkWriteOptions, resultHandler: ((res: AsyncResult<MongoClientBulkWriteResult>) => void) | Handler<AsyncResult<MongoClientBulkWriteResult>>) : MongoClient;

  /**
   * Find matching documents in the specified collection
   */
  find(collection: string, query: { [key: string]: any }, resultHandler: ((res: AsyncResult<{ [key: string]: any }[]>) => void) | Handler<AsyncResult<{ [key: string]: any }[]>>) : MongoClient;

  /**
   * Find matching documents in the specified collection.
   * This method use batchCursor for returning each found document.
   */
  findBatch(collection: string, query: { [key: string]: any }) : ReadStream<{ [key: string]: any }>;

  /**
   * Find matching documents in the specified collection, specifying options
   */
  findWithOptions(collection: string, query: { [key: string]: any }, options: FindOptions, resultHandler: ((res: AsyncResult<{ [key: string]: any }[]>) => void) | Handler<AsyncResult<{ [key: string]: any }[]>>) : MongoClient;

  /**
   * Find matching documents in the specified collection, specifying options.
   * This method use batchCursor for returning each found document.
   */
  findBatchWithOptions(collection: string, query: { [key: string]: any }, options: FindOptions) : ReadStream<{ [key: string]: any }>;

  /**
   * Find a single matching document in the specified collection
   * <p>
   * This operation might change <i>_id</i> field of <i>query</i> parameter
   */
  findOne(collection: string, query: { [key: string]: any }, fields: { [key: string]: any } | null | undefined, resultHandler: ((res: AsyncResult<{ [key: string]: any }>) => void) | Handler<AsyncResult<{ [key: string]: any }>>) : MongoClient;

  /**
   * Find a single matching document in the specified collection and update it.
   * <p>
   * This operation might change <i>_id</i> field of <i>query</i> parameter
   */
  findOneAndUpdate(collection: string, query: { [key: string]: any }, update: { [key: string]: any }, resultHandler: ((res: AsyncResult<{ [key: string]: any }>) => void) | Handler<AsyncResult<{ [key: string]: any }>>) : MongoClient;

  /**
   * Find a single matching document in the specified collection and update it.
   * <p>
   * This operation might change <i>_id</i> field of <i>query</i> parameter
   */
  findOneAndUpdateWithOptions(collection: string, query: { [key: string]: any }, update: { [key: string]: any }, findOptions: FindOptions, updateOptions: UpdateOptions, resultHandler: ((res: AsyncResult<{ [key: string]: any }>) => void) | Handler<AsyncResult<{ [key: string]: any }>>) : MongoClient;

  /**
   * Find a single matching document in the specified collection and replace it.
   * <p>
   * This operation might change <i>_id</i> field of <i>query</i> parameter
   */
  findOneAndReplace(collection: string, query: { [key: string]: any }, replace: { [key: string]: any }, resultHandler: ((res: AsyncResult<{ [key: string]: any }>) => void) | Handler<AsyncResult<{ [key: string]: any }>>) : MongoClient;

  /**
   * Find a single matching document in the specified collection and replace it.
   * <p>
   * This operation might change <i>_id</i> field of <i>query</i> parameter
   */
  findOneAndReplaceWithOptions(collection: string, query: { [key: string]: any }, replace: { [key: string]: any }, findOptions: FindOptions, updateOptions: UpdateOptions, resultHandler: ((res: AsyncResult<{ [key: string]: any }>) => void) | Handler<AsyncResult<{ [key: string]: any }>>) : MongoClient;

  /**
   * Find a single matching document in the specified collection and delete it.
   * <p>
   * This operation might change <i>_id</i> field of <i>query</i> parameter
   */
  findOneAndDelete(collection: string, query: { [key: string]: any }, resultHandler: ((res: AsyncResult<{ [key: string]: any }>) => void) | Handler<AsyncResult<{ [key: string]: any }>>) : MongoClient;

  /**
   * Find a single matching document in the specified collection and delete it.
   * <p>
   * This operation might change <i>_id</i> field of <i>query</i> parameter
   */
  findOneAndDeleteWithOptions(collection: string, query: { [key: string]: any }, findOptions: FindOptions, resultHandler: ((res: AsyncResult<{ [key: string]: any }>) => void) | Handler<AsyncResult<{ [key: string]: any }>>) : MongoClient;

  /**
   * Count matching documents in a collection.
   */
  count(collection: string, query: { [key: string]: any }, resultHandler: ((res: AsyncResult<number>) => void) | Handler<AsyncResult<number>>) : MongoClient;

  /**
   * Remove matching documents from a collection
   */
  remove(collection: string, query: { [key: string]: any }, resultHandler: ((res: AsyncResult<void>) => void) | Handler<AsyncResult<void>>) : MongoClient;

  /**
   * Remove matching documents from a collection and return the handler with MongoClientDeleteResult result
   */
  removeDocuments(collection: string, query: { [key: string]: any }, resultHandler: ((res: AsyncResult<MongoClientDeleteResult>) => void) | Handler<AsyncResult<MongoClientDeleteResult>>) : MongoClient;

  /**
   * Remove matching documents from a collection with the specified write option
   */
  removeWithOptions(collection: string, query: { [key: string]: any }, writeOption: WriteOption, resultHandler: ((res: AsyncResult<void>) => void) | Handler<AsyncResult<void>>) : MongoClient;

  /**
   * Remove matching documents from a collection with the specified write option and return the handler with MongoClientDeleteResult result
   */
  removeDocumentsWithOptions(collection: string, query: { [key: string]: any }, writeOption: WriteOption | null | undefined, resultHandler: ((res: AsyncResult<MongoClientDeleteResult>) => void) | Handler<AsyncResult<MongoClientDeleteResult>>) : MongoClient;

  /**
   * Remove a single matching document from a collection
   */
  removeOne(collection: string, query: { [key: string]: any }, resultHandler: ((res: AsyncResult<void>) => void) | Handler<AsyncResult<void>>) : MongoClient;

  /**
   * Remove a single matching document from a collection and return the handler with MongoClientDeleteResult result
   */
  removeDocument(collection: string, query: { [key: string]: any }, resultHandler: ((res: AsyncResult<MongoClientDeleteResult>) => void) | Handler<AsyncResult<MongoClientDeleteResult>>) : MongoClient;

  /**
   * Remove a single matching document from a collection with the specified write option
   */
  removeOneWithOptions(collection: string, query: { [key: string]: any }, writeOption: WriteOption, resultHandler: ((res: AsyncResult<void>) => void) | Handler<AsyncResult<void>>) : MongoClient;

  /**
   * Remove a single matching document from a collection with the specified write option and return the handler with MongoClientDeleteResult result
   */
  removeDocumentWithOptions(collection: string, query: { [key: string]: any }, writeOption: WriteOption | null | undefined, resultHandler: ((res: AsyncResult<MongoClientDeleteResult>) => void) | Handler<AsyncResult<MongoClientDeleteResult>>) : MongoClient;

  /**
   * Create a new collection
   */
  createCollection(collectionName: string, resultHandler: ((res: AsyncResult<void>) => void) | Handler<AsyncResult<void>>) : MongoClient;

  /**
   * Get a list of all collections in the database.
   */
  getCollections(resultHandler: ((res: AsyncResult<string[]>) => void) | Handler<AsyncResult<string[]>>) : MongoClient;

  /**
   * Drop a collection
   */
  dropCollection(collection: string, resultHandler: ((res: AsyncResult<void>) => void) | Handler<AsyncResult<void>>) : MongoClient;

  /**
   * Creates an index.
   */
  createIndex(collection: string, key: { [key: string]: any }, resultHandler: ((res: AsyncResult<void>) => void) | Handler<AsyncResult<void>>) : MongoClient;

  /**
   * Creates an index.
   */
  createIndexWithOptions(collection: string, key: { [key: string]: any }, options: IndexOptions, resultHandler: ((res: AsyncResult<void>) => void) | Handler<AsyncResult<void>>) : MongoClient;

  /**
   * Get all the indexes in this collection.
   */
  listIndexes(collection: string, resultHandler: ((res: AsyncResult<any[]>) => void) | Handler<AsyncResult<any[]>>) : MongoClient;

  /**
   * Drops the index given its name.
   */
  dropIndex(collection: string, indexName: string, resultHandler: ((res: AsyncResult<void>) => void) | Handler<AsyncResult<void>>) : MongoClient;

  /**
   * Run an arbitrary MongoDB command.
   */
  runCommand(commandName: string, command: { [key: string]: any }, resultHandler: ((res: AsyncResult<{ [key: string]: any }>) => void) | Handler<AsyncResult<{ [key: string]: any }>>) : MongoClient;

  /**
   * Gets the distinct values of the specified field name.
   * Return a JsonArray containing distinct values (eg: [ 1 , 89 ])
   */
  distinct(collection: string, fieldName: string, resultClassname: string, resultHandler: ((res: AsyncResult<any[]>) => void) | Handler<AsyncResult<any[]>>) : MongoClient;

  /**
   * Gets the distinct values of the specified field name filtered by specified query.
   * Return a JsonArray containing distinct values (eg: [ 1 , 89 ])
   */
  distinctWithQuery(collection: string, fieldName: string, resultClassname: string, query: { [key: string]: any }, resultHandler: ((res: AsyncResult<any[]>) => void) | Handler<AsyncResult<any[]>>) : MongoClient;

  /**
   * Gets the distinct values of the specified field name.
   * This method use batchCursor for returning each found value.
   * Each value is a json fragment with fieldName key (eg: {"num": 1}).
   */
  distinctBatch(collection: string, fieldName: string, resultClassname: string) : ReadStream<{ [key: string]: any }>;

  /**
   * Gets the distinct values of the specified field name filtered by specified query.
   * This method use batchCursor for returning each found value.
   * Each value is a json fragment with fieldName key (eg: {"num": 1}).
   */
  distinctBatchWithQuery(collection: string, fieldName: string, resultClassname: string, query: { [key: string]: any }) : ReadStream<{ [key: string]: any }>;

  /**
   * Gets the distinct values of the specified field name filtered by specified query.
   * This method use batchCursor for returning each found value.
   * Each value is a json fragment with fieldName key (eg: {"num": 1}).
   */
  distinctBatchWithQuery(collection: string, fieldName: string, resultClassname: string, query: { [key: string]: any }, batchSize: number) : ReadStream<{ [key: string]: any }>;

  /**
   * Run aggregate MongoDB command with default <a href="../../dataobjects.html#AggregateOptions">AggregateOptions</a>.
   */
  aggregate(collection: string, pipeline: any[]) : ReadStream<{ [key: string]: any }>;

  /**
   * Run aggregate MongoDB command.
   */
  aggregateWithOptions(collection: string, pipeline: any[], options: AggregateOptions) : ReadStream<{ [key: string]: any }>;

  /**
   * Close the client and release its resources
   */
  close() : void;
}
