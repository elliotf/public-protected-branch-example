import {
  SbPage,
  Dim,
  SbSection,
  SbColumn,
  registerPage,
  SbTable,
  SbButton,
  SbEventFlow,
} from "@superblocksteam/library";
import { Page1, Page1Scope } from "./scope";
function Page() {
  const {} = Page1;
  return (
    <SbPage name="Page1" height={Dim.fill()} width={Dim.fill()}>
      <SbSection height={Dim.fill()}>
        <SbColumn width={Dim.fill()}>
          <SbButton
            label="Main branch"
            onClick={SbEventFlow.runJS(() => console.log("Button clicked"))}
            width={Dim.fit()}
            height={Dim.fit()}
          />
        </SbColumn>
      </SbSection>
    </SbPage>
  );
}
export default registerPage(Page, Page1Scope);
