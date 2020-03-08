import { NgModule } from "@angular/core";

import { FeatherModule } from "angular-feather";
import { Mail, Lock, Image } from "angular-feather/icons";

// Select some icons (use an object, not an array)
const icons = {
  Mail,
  Lock,
  Image
};

@NgModule({
  imports: [FeatherModule.pick(icons)],
  exports: [FeatherModule]
})
export class IconsModule {}
