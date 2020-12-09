/*
 * Copyright 2020 ES4X
 *
 * ES4X licenses this file to you under the Apache License, version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License.  You may obtain a copy of the License at:
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

/**
 * Options used to configure aggregate operations.
 */
export class AggregateOptions {

  constructor();

  constructor(obj: AggregateOptions);

  /**
   * Set the flag if writing to temporary files is enabled.
   */
  getAllowDiskUse(): boolean;

  /**
   * Set the flag if writing to temporary files is enabled.
   */
  setAllowDiskUse(allowDiskUse: boolean): AggregateOptions;

  /**
   * Set the batch size for methods loading found data in batches.
   */
  getBatchSize(): number;

  /**
   * Set the batch size for methods loading found data in batches.
   */
  setBatchSize(batchSize: number): AggregateOptions;

  /**
   * The maximum amount of time for the server to wait on new documents to satisfy a $changeStream aggregation.
   */
  getMaxAwaitTime(): number;

  /**
   * The maximum amount of time for the server to wait on new documents to satisfy a $changeStream aggregation.
   */
  setMaxAwaitTime(maxAwaitTime: number): AggregateOptions;

  /**
   * Set the time limit in milliseconds for processing operations on a cursor.
   */
  getMaxTime(): number;

  /**
   * Set the time limit in milliseconds for processing operations on a cursor.
   */
  setMaxTime(maxTime: number): AggregateOptions;

}

import { BulkOperationType } from './enums';

/**
 * Contains all data needed for one operation of a bulk write operation.
 */
export class BulkOperation {

  constructor(obj: BulkOperation);

  /**
   * Sets the document, used by insert, replace, and update operations
   */
  getDocument(): { [key: string]: any };

  /**
   * Sets the document, used by insert, replace, and update operations
   */
  setDocument(document: { [key: string]: any }): BulkOperation;

  /**
   * Sets the filter document, used by replace, update, and delete operations
   */
  getFilter(): { [key: string]: any };

  /**
   * Sets the filter document, used by replace, update, and delete operations
   */
  setFilter(filter: { [key: string]: any }): BulkOperation;

  /**
   * Sets the multi flag, used by update and delete operations
   */
  isMulti(): boolean;

  /**
   * Sets the multi flag, used by update and delete operations
   */
  setMulti(multi: boolean): BulkOperation;

  /**
   * Sets the operation type
   */
  getType(): BulkOperationType;

  /**
   * Sets the operation type
   */
  setType(type: BulkOperationType): BulkOperation;

  /**
   * Sets the upsert flag, used by update and replace operations
   */
  isUpsert(): boolean;

  /**
   * Sets the upsert flag, used by update and replace operations
   */
  setUpsert(upsert: boolean): BulkOperation;

}

import { WriteOption } from './enums';

/**
 * Options for configuring bulk write operations.
 */
export class BulkWriteOptions {

  constructor();

  constructor(obj: BulkWriteOptions);

  /**
   * Set the ordered option
   */
  isOrdered(): boolean;

  /**
   * Set the ordered option
   */
  setOrdered(ordered: boolean): BulkWriteOptions;

  /**
   * Set the write option
   */
  getWriteOption(): WriteOption;

  /**
   * Set the write option
   */
  setWriteOption(writeOption: WriteOption): BulkWriteOptions;

}

/**
 * Options used to configure find operations.
 */
export class FindOptions {

  constructor();

  constructor(obj: FindOptions);

  /**
   * Set the batch size for methods loading found data in batches.
   */
  getBatchSize(): number;

  /**
   * Set the batch size for methods loading found data in batches.
   */
  setBatchSize(batchSize: number): FindOptions;

  /**
   * Set the fields
   */
  getFields(): { [key: string]: any };

  /**
   * Set the fields
   */
  setFields(fields: { [key: string]: any }): FindOptions;

  /**
   * Set the limit
   */
  getLimit(): number;

  /**
   * Set the limit
   */
  setLimit(limit: number): FindOptions;

  /**
   * Set the skip
   */
  getSkip(): number;

  /**
   * Set the skip
   */
  setSkip(skip: number): FindOptions;

  /**
   * Set the sort document
   */
  getSort(): { [key: string]: any };

  /**
   * Set the sort document
   */
  setSort(sort: { [key: string]: any }): FindOptions;

}

/**
 * Options used to configure index.
 */
export class IndexOptions {

  constructor();

  constructor(obj: IndexOptions);

  /**
   * Create the index in the background
   */
  isBackground(): boolean;

  /**
   * Gets the number of precision of the stored geohash value of the location data in 2d indexes.
   */
  getBits(): number;

  /**
   * Gets the specified the number of units within which to group the location values for geoHaystack Indexes
   */
  getBucketSize(): number;

  /**
   * Gets the language for a text index.
   *
   * <p>The language that determines the list of stop words and the rules for the stemmer and tokenizer.</p>
   */
  getDefaultLanguage(): string;

  /**
   * Gets the name of the field that contains the language string.
   *
   * <p>For text indexes, the name of the field, in the collection's documents, that contains the override language for the document.</p>
   */
  getLanguageOverride(): string;

  /**
   * Gets the upper inclusive boundary for the longitude and latitude values for 2d indexes..
   */
  getMax(): number;

  /**
   * Gets the lower inclusive boundary for the longitude and latitude values for 2d indexes..
   */
  getMin(): number;

  /**
   * Gets the name of the index.
   */
  getName(): string;

  /**
   * Get the filter expression for the documents to be included in the index or null if not set
   */
  getPartialFilterExpression(): { [key: string]: any };

  /**
   * If true, the index only references documents with the specified field
   */
  isSparse(): boolean;

  /**
   * Gets the 2dsphere index version number.
   */
  getSphereVersion(): number;

  /**
   * Gets the storage engine options document for this index.
   */
  getStorageEngine(): { [key: string]: any };

  /**
   * The text index version number.
   */
  getTextVersion(): number;

  /**
   * Gets if the index should be unique.
   */
  isUnique(): boolean;

  /**
   * Gets the index version number.
   */
  getVersion(): number;

  /**
   * Gets the weighting object for use with a text index
   *
   * <p>A document that represents field and weight pairs. The weight is an integer ranging from 1 to 99,999 and denotes the significance
   * of the field relative to the other indexed fields in terms of the score.</p>
   */
  getWeights(): { [key: string]: any };

}

/**
 * Result propagated from mongodb driver bulk write result.
 */
export class MongoClientBulkWriteResult {

  constructor();

  constructor(obj: MongoClientBulkWriteResult);

  /**
   * Returns the number of deleted documents
   */
  getDeletedCount(): number;

  /**
   * Returns the number of inserted documents
   */
  getInsertedCount(): number;

  /**
   * Returns the number of matched documents
   */
  getMatchedCount(): number;

  /**
   * Returns the number of modified documents
   */
  getModifiedCount(): number;

  /**
   * An unmodifiable list of upsert data. Each entry has the index of the request that lead to the upsert, and the
   * generated ID of the upsert.
   */
  getUpserts(): { [key: string]: any };

}

/**
 * Result propagated from mongodb driver delete result.
 */
export class MongoClientDeleteResult {

  constructor();

  constructor(obj: MongoClientDeleteResult);

  /**
   * Get the number of removed documents
   */
  getRemovedCount(): number;

}

/**
 * Result propagated from mongodb driver update result.
 */
export class MongoClientUpdateResult {

  constructor();

  constructor(obj: MongoClientUpdateResult);

  /**
   * Get the number of documents that're matched
   */
  getDocMatched(): number;

  /**
   * Get the number of documents that're modified
   */
  getDocModified(): number;

  /**
   * Get the document id that's upserted
   */
  getDocUpsertedId(): { [key: string]: any };

}

/**
 * Options for configuring updates.
 */
export class UpdateOptions {

  constructor();

  constructor(obj: UpdateOptions);

  /**
   * Set whether multi is enabled
   */
  isMulti(): boolean;

  /**
   * Set whether multi is enabled
   */
  setMulti(multi: boolean): UpdateOptions;

  /**
   * Set whether new document property is enabled. Valid only on findOneAnd* methods.
   */
  isReturningNewDocument(): boolean;

  /**
   * Set whether new document property is enabled. Valid only on findOneAnd* methods.
   */
  setReturningNewDocument(returningNewDocument: boolean): UpdateOptions;

  /**
   * Set whether upsert is enabled
   */
  isUpsert(): boolean;

  /**
   * Set whether upsert is enabled
   */
  setUpsert(upsert: boolean): UpdateOptions;

  /**
   * Set the write option
   */
  getWriteOption(): WriteOption;

  /**
   * Set the write option
   */
  setWriteOption(writeOption: WriteOption): UpdateOptions;

}
