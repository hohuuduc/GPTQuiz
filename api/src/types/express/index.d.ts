import { OAuth2 } from "oauth2orize";
import { ClientDoc } from "../../models/client.model";
import { UserDoc } from "../../models/user.model";

declare global {
    namespace Express {
        interface User extends UserDoc { }
        interface Request {
            oauth2?: OAuth2<ClientDoc, UserDoc>;
        }
    }
}