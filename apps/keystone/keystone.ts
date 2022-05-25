import { config } from "@keystone-6/core";
import { lists } from "./schema";
import { withAuth, session } from "./auth";
export default withAuth(
  config({
    db: {
      provider: "postgresql",
      url: "postgres://postgres:alexisadrien@dots-database-1.c8s1fkaqyt9l.eu-west-3.rds.amazonaws.com:5432/dots-schemas--staging",
    },
    ui: {
      isAccessAllowed: (context) => !!context.session?.data,
    },
    lists,
    session,
  })
);
