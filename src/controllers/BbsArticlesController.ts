import core from "@nestia/core";
import { Controller } from "@nestjs/common";

import { TestBody } from "../api/structures/bbs/Test";

/**
 * This is a fake controller.
 *
 * Remove it or make it to be real one.
 */
@Controller("bbs")
export class BbsArticlesController {
    /**
     * Store a new article.
     *
     * Store a new article and returns its detailed record info.
     *
     * @param section Target section
     * @param input New article info
     * @returns Newly created article info
     */
    @core.TypedRoute.Post()
    public async store(@core.TypedBody() a: TestBody): Promise<TestBody> {
        return a;
    }
}
