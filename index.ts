import { findByProps } from "ittai/webpack"
import { ChannelObject } from "ittai";
import { botMessage, CommandTypes, registerCommand, unregisterCommand } from "ittai/commands";
import { Plugin } from "ittai/entities";
import GifEncoder from "./gifencoder";

function reportError(context: { channel: ChannelObject }, content: string) {
    botMessage.sendMessage(context.channel.id, {
        content
    })
}

const defaults = {
    resolution: 128,
    delay: 20
};
let frames: CanvasImageSource[]
let cmdId = -1
export default class PetPet extends Plugin {
    start() {
        console.log("hi")
        cmdId = registerCommand({
            inputType: 0,
            type: 1,
            name: "petpet",
            description: "Make a pet gif",
            options: [
                {
                    name: "user",
                    description: "the user to pet",
                    type: CommandTypes.ApplicationCommandOptionType.USER
                },
                {
                    name: "user-id",
                    description: "the id of the user to pet",
                    type: CommandTypes.ApplicationCommandOptionType.STRING
                },
                {
                    name: "image-url",
                    description: "the url of the image to create the gif for",
                    type: CommandTypes.ApplicationCommandOptionType.STRING
                },
                {
                    name: "emote",
                    description: "the emote to create the gif for",
                    type: CommandTypes.ApplicationCommandOptionType.STRING
                },
            ],
            execute: async (opts, context) => {
                if (opts.length !== 1)
                    return reportError(context, "Please specify exactly 1 option.")

                const { name, value } = opts[0];
                let url;
                switch (name) {
                    case "emote":
                        const match = /<?(a)?:?(\w{2,32}):(\d{17,19})>?/.exec(value);
                        if (!match)
                            return reportError(context, "That was not a valid emote!")
                        url = `https://cdn.discordapp.com/emojis/${match[3]}.${match[1] ? "gif" : "png"}`;
                        break
                    case "user":
                    case "user-id":
                        const user = await findByProps("getUser").getUser(value).catch(() => void 0);
                        if (!user)
                            return reportError(context, "Failed to fetch that user D:")
                        url = user.getAvatarURL()
                        if (!url)
                            return reportError(context, "That user has no avatar!")
                        break;
                    case "image-url":
                        url = value;
                        break;
                    default:
                        return reportError(context, "whaaa how??")
                }

                const av = await this.loadImage(url).catch(() => void 0);
                if (!av) return reportError(context, "Failed to fetch that image D:")

                try {
                    var buf = await this.petpet(av, {})
                } catch (err: any) {
                    const why = String(err.stack ?? err.message ?? err);
                    this.error("Failed to create petpet gif", why);
                    return reportError(context, why);
                }

                const file = new File([buf], "petpet.gif", { type: "image/gif" })
                findByProps("promptToUpload").promptToUpload([file], context.channel, 0);
            }
        })
    }

    stop() {
        unregisterCommand(cmdId)
    }

    loadImage(src: string) {
        return new Promise<CanvasImageSource>(async (resolve, reject) => {
            const img = new Image();
            img.onload = () => {
                resolve(img);
            };
            img.onerror = reject;
            img.crossOrigin = "Anonymous";
            img.src = src;
        });
    }

    // Based on https://github.com/aDu/pet-pet-gif, licensed under ISC
    async petpet(avatar: CanvasImageSource, customOptions: { resolution?: number; delay?: number; }) {
        if (!frames)
            frames = await Promise.all(
                Array(10)
                    .fill(null)
                    .map((_, i) => {
                        return this.loadImage(`https://raw.githubusercontent.com/Vendicated/PetPet/main/frames/pet${i}.gif`);
                    })
            );

        const FRAMES = frames.length;

        const options = { ...defaults, ...customOptions };

        const encoder = new GifEncoder(options.resolution, options.resolution);

        encoder.start();
        encoder.setRepeat(0);
        encoder.setDelay(options.delay);
        encoder.setTransparent();

        const canvas = document.createElement("canvas");
        canvas.width = canvas.height = options.resolution;
        const ctx = canvas.getContext("2d")!;

        for (let i = 0; i < FRAMES; i++) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const j = i < FRAMES / 2 ? i : FRAMES - i;

            const width = 0.8 + j * 0.02;
            const height = 0.8 - j * 0.05;
            const offsetX = (1 - width) * 0.5 + 0.1;
            const offsetY = 1 - height - 0.08;

            ctx.drawImage(avatar, options.resolution * offsetX, options.resolution * offsetY, options.resolution * width, options.resolution * height);
            ctx.drawImage(frames[i], 0, 0, options.resolution, options.resolution);

            encoder.addFrame(ctx);
        }

        encoder.finish();
        return encoder.out.getData();
    }
}