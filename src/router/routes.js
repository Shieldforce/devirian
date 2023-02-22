import { routes as auth } from "@/modules/auth";
import { routes as external } from "@/modules/external";
import { routes as panel } from "@/modules/panel";

export default [...auth, ...external, ...panel];
