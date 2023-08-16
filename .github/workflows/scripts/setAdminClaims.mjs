import { initializeApp, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

async function setAdminClaims(
  userEmail,
  serviceAccount,
  removeAdminClaim = false
) {
  try {
    const app = initializeApp({
      credential: cert(JSON.parse(serviceAccount)),
    });

    const userId = (await getAuth(app).getUserByEmail(userEmail)).uid;
    await getAuth(app).setCustomUserClaims(userId, { admin: removeAdminClaim ? null : true });
    console.log("Admin claim set successfully!");
  } catch (error) {
    console.error("Error setting admin claim:", error);
    process.exit(1);
  }
}

/**
 * argv[0] is `node`
 * argv[1] is the path to this script
 * argv[2] is the user email
 * argv[3] is the service account JSON
 * argv[4] is the flag to remove the admin claim
 */
let userEmail, serviceAccount, removeAdminClaim;
if (process.argv.length < 3) {
  throw new Error("Missing required arguments: userEmail, serviceAccount");
} else if (process.argv.length < 5) {
  [, , userEmail, serviceAccount] = process.argv;
  removeAdminClaim = "false";
} else if (process.argv.length < 5) {
  [, , userEmail, serviceAccount, removeAdminClaim] = process.argv;
}
removeAdminClaim = removeAdminClaim === "true";

setAdminClaims(userEmail, serviceAccount, removeAdminClaim);
