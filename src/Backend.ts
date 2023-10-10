import core from "@nestia/core";
import { NestFactory } from "@nestjs/core";
import {
    FastifyAdapter,
    NestFastifyApplication,
} from "@nestjs/platform-fastify";

import { Configuration } from "./Configuration";

export class Backend {
    private application_?: NestFastifyApplication;

    public async open(): Promise<void> {
        //----
        // OPEN THE BACKEND SERVER
        //----
        // MOUNT CONTROLLERS
        this.application_ = await NestFactory.create(
            await core.DynamicModule.mount(__dirname + "/controllers"),
            new FastifyAdapter(),
            { logger: false },
        );
        console.log("ready");
        // DO OPEN
        this.application_.enableCors();
        console.log("listen", Configuration.API_PORT());
        await this.application_.listen(Configuration.API_PORT());

        //----
        // POST-PROCESSES
        //----
        // INFORM TO THE PM2
        if (process.send) process.send("ready");

        // WHEN KILL COMMAND COMES
        process.on("SIGINT", async () => {
            await this.close();
            process.exit(0);
        });
    }

    public async close(): Promise<void> {
        if (this.application_ === undefined) return;

        // DO CLOSE
        await this.application_.close();
        delete this.application_;
    }
}
