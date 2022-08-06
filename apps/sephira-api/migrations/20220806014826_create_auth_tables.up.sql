BEGIN;
CREATE TABLE "user"(
  id VARCHAR(64) NOT NULL,
  crypt CHAR(60) NOT NULL,
  CONSTRAINT pk_user PRIMARY KEY (id)
);
CREATE TABLE "user_claims"(
  userid VARCHAR(64) NOT NULL,
  claim_name VARCHAR(32) NOT NULL,
  claim_value VARCHAR(32) NOT NULL,
  CONSTRAINT pk_user_claims PRIMARY KEY (userid, claim_name),
  CONSTRAINT fk_user_claims_user FOREIGN KEY (userid) REFERENCES "user"(id) ON UPDATE CASCADE ON DELETE CASCADE
);
COMMIT;
