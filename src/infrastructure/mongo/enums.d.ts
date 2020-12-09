
export enum BulkOperationType {
  UPDATE,
  REPLACE,
  INSERT,
  DELETE
}

export enum WriteOption{

  ACKNOWLEDGED,

  UNACKNOWLEDGED,

  FSYNCED,

  JOURNALED,

  REPLICA_ACKNOWLEDGED,
   
  MAJORITY
}
