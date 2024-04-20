import { MessageService } from "./message.service";
import { HugModule } from "../../utils/module-container";

export const messageModule = HugModule({
  services: [MessageService],
});
