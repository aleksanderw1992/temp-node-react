import { extendTheme } from "@chakra-ui/react";
import { CardComponent } from "./additions/card/card";
import { buttonStyles } from "./components/button";
import { badgeStyles } from "./components/badge";
import { inputStyles } from "./components/input";
import { progressStyles } from "./components/progress";
import { sliderStyles } from "./components/slider";
import { textareaStyles } from "./components/textarea";
import { switchStyles } from "./components/switch";
import { linkStyles } from "./components/link";
import { breakpoints } from "./foundations/breakpoints";
import { globalStyles } from "./styles";

const theme = extendTheme({
  breakpoints,
  components: {
    Badge: badgeStyles,
    Button: buttonStyles,
    Link: linkStyles,
    Progress: progressStyles,
    Slider: sliderStyles,
    Input: inputStyles,
    Textarea: textareaStyles,
    Switch: switchStyles,
    Card: CardComponent
  },
  ...globalStyles
});

export default theme;
