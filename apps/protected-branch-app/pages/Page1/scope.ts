import { createSbScope } from "@superblocksteam/library";

export const Page1Scope = createSbScope<{}>(({ entities }) => ({}), {
  name: "Page1",
});

export const Page1 = Page1Scope.entities;
