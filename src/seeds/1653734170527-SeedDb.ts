import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedDb1653734170527 implements MigrationInterface {
  name = 'SeedDb1653734170527';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO tags (name) VALUES ('dragons'), ('coffee'), ('react'), ('nestjs')`,
    );

    // password is 1234
    await queryRunner.query(
      `INSERT INTO users (username, email, password) VALUES ('newUser', 'newUser@gmail.com', '$2b$10$k/2T8EDkSE5NJW.uVpT1IuIUSYl6YfXc2rjn2ekNi0uNN150Fu7ji')`,
    );

    await queryRunner.query(
      `INSERT INTO articles (slug, title, description, body, "tagList", "authorId") VALUES ('first-article', 'First article', 'first article description', 'first article body', 'nestjs,react,coffee', 1)`,
    );

    await queryRunner.query(
      `INSERT INTO articles (slug, title, description, body, "tagList", "authorId") VALUES ('second-article', 'Second article', 'Second article description', 'Second article body', 'nestjs,react', 1)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "none"`);
  }
}
