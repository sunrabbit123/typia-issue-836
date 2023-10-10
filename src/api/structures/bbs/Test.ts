import { tags } from "typia";

type H160 = tags.TagBase<{
    kind: "H160";
    target: "string";
    value: undefined;
    validate: `$input.match(/^0x[0-9A-Fa-f]{40}$/) !== null`;
}>;

export interface TestBody {
    telegramId: number & tags.Type<"int32">;
    mainAddress: string & H160;
}
