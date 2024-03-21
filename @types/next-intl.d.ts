// eslint-disable-next-line @typescript-eslint/consistent-type-imports
type Messages = typeof import("../src/data/messages/en.ts").default;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
declare interface IntlMessages extends Messages {}
